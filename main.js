const state = {
  bundle: null,
  summaryRows: new Map(),
  records: [],
  selectedCode: null,
  sourceNames: [],
};

const gradeOrder = ["A+", "A", "A-", "B", "C", "D"];
const gradeLabels = {
  "A+": "核心机会池",
  A: "重点机会",
  "A-": "高确定性但需看拥挤",
  B: "修复观察",
  C: "谨慎复核",
  D: "高风险排除",
};

const $ = (id) => document.getElementById(id);

document.addEventListener("DOMContentLoaded", () => {
  $("researchInput").addEventListener("change", (event) => handleFiles(event.target.files));
  $("searchInput").addEventListener("input", renderTable);
  $("gradeFilter").addEventListener("change", renderTable);
  $("printReportBtn").addEventListener("click", () => window.print());
  $("downloadViewBtn").addEventListener("click", downloadCurrentView);
  seedEmpty();
});

async function handleFiles(files) {
  if (!files || files.length === 0) return;
  const names = [];
  for (const file of files) {
    const text = await file.text();
    names.push(file.name);
    if (file.name.toLowerCase().endsWith(".json")) {
      ingestJson(text);
    } else if (file.name.toLowerCase().endsWith(".csv")) {
      ingestCsv(text);
    }
  }
  state.sourceNames = names;
  rebuildRecords();
  $("uploadStatus").textContent = `已载入：${names.join(" / ")}`;
  renderAll();
}

function ingestJson(text) {
  const data = JSON.parse(text);
  if (Array.isArray(data.stocks)) {
    state.bundle = data;
    return;
  }
  if (Array.isArray(data.records)) {
    state.bundle = { schema_version: data.schema_version || "unknown", stocks: data.records };
  }
}

function ingestCsv(text) {
  const rows = parseCsv(text);
  rows.forEach((row) => {
    const code = normalizeCode(row["股票代码"] || row["代码"] || row.code || row.stock_code);
    if (code) state.summaryRows.set(code, row);
  });
}

function rebuildRecords() {
  if (state.bundle) {
    state.records = (state.bundle.stocks || []).map((item) => normalizeBundleRecord(item));
  } else {
    state.records = Array.from(state.summaryRows.values()).map((item) => normalizeSummaryRecord(item));
  }
  state.records.sort((a, b) => b.finalScore - a.finalScore || b.trackA - a.trackA);
  state.selectedCode = state.records[0]?.code || null;
}

function normalizeBundleRecord(item) {
  const stock = item.stock || item;
  const trackA = item.track_a || item.trackA || {};
  const trackB = item.track_b || item.trackB || {};
  const final = item.final_research_classification || item.final || {};
  const history = item.historical_replay || item.history || {};
  const soft = item.soft_factors || {};
  const summary = state.summaryRows.get(normalizeCode(stock.code || item.code)) || {};
  const manual = normalizeManual(final, summary);
  const grade = cleanGrade(final.class || final.grade || summary["综合等级"] || summary["等级"]);

  return {
    raw: item,
    code: normalizeCode(stock.code || item.code || summary["股票代码"]),
    name: stock.name || item.name || summary["股票简称"] || summary["简称"] || "--",
    industry: stock.industry || item.industry || summary["所属行业"] || "--",
    grade,
    label: final.research_label || gradeLabels[grade] || summary["研究标签"] || "研究样本",
    finalScore: numberFrom(final.score ?? final.final_score ?? summary["综合分"] ?? summary["最终分数"], 0),
    trackA: numberFrom(trackA.score ?? trackA.track_a_score ?? summary["TrackA分"], 0),
    trackB: numberFrom(trackB.score ?? trackB.track_b_score ?? summary["TrackB分"], 0),
    trackAStatus: trackA.current_eligibility || trackA.current_status || summary["当前撤销资格"] || "待证据确认",
    futureRepair: trackA.future_repair_signal || trackA.future_repair || summary["未来修复线索"] || "待判断",
    trackBWindow: trackB.window_type || trackB.window_strength || summary["窗口类型"] || summary["后续窗口"] || "待行情验证",
    pricedIn: trackB.priced_in_level || trackB.market_reflection || summary["市场反映度"] || "待行情接入",
    crowding: trackB.crowding_level || summary["拥挤度"] || "待成交/换手率",
    eventCatalyst: trackB.event_catalyst || summary["事件催化"] || "待公告确认",
    liquidity: trackB.liquidity_risk || summary["流动性"] || "待验证",
    benchmark: trackB.benchmark_sources || {},
    benchmarkConfidence: trackB.benchmark_confidence || summary["基准置信度"] || "待验证",
    capReasons: asArray(final.cap_reasons || summary["封顶原因"]),
    reviewItems: manual,
    report: item.report_summary || final.summary || summary["核心结论"] || "",
    history,
    soft,
  };
}

function normalizeSummaryRecord(row) {
  const grade = cleanGrade(row["综合等级"] || row["等级"]);
  return {
    raw: row,
    code: normalizeCode(row["股票代码"] || row["代码"]),
    name: row["股票简称"] || row["简称"] || "--",
    industry: row["所属行业"] || "--",
    grade,
    label: row["研究标签"] || gradeLabels[grade] || "研究样本",
    finalScore: numberFrom(row["综合分"] || row["最终分数"], 0),
    trackA: numberFrom(row["TrackA分"], 0),
    trackB: numberFrom(row["TrackB分"], 0),
    trackAStatus: row["当前撤销资格"] || "待证据确认",
    futureRepair: row["未来修复线索"] || "待判断",
    trackBWindow: row["窗口类型"] || row["后续窗口"] || "待行情验证",
    pricedIn: row["市场反映度"] || "待行情接入",
    crowding: row["拥挤度"] || "待成交/换手率",
    eventCatalyst: row["事件催化"] || "待公告确认",
    liquidity: row["流动性"] || "待验证",
    benchmark: {},
    benchmarkConfidence: row["基准置信度"] || "待验证",
    capReasons: asArray(row["封顶原因"]),
    reviewItems: normalizeManual({}, row),
    report: row["核心结论"] || "",
    history: {
      matched_success_cases: asArray(row["相似成功样本"]),
      matched_failure_cases: asArray(row["相似失败样本"]),
      status: row["历史匹配状态"] || "待匹配",
    },
    soft: {},
  };
}

function normalizeManual(final, row) {
  if (Array.isArray(final.manual_review_resolution)) return final.manual_review_resolution;
  if (Array.isArray(final.manual_review_items)) {
    return final.manual_review_items.map((item) => ({
      item,
      current_impact: "影响当前置信度和等级上限",
      pass_effect: asArray(final.upgrade_conditions).join("；") || "复核通过后可提高置信度或上调等级",
      fail_effect: asArray(final.downgrade_conditions).join("；") || "复核不通过时下调或剔除",
    }));
  }
  const question = row["调研/复核问题"] || row["人工复核事项"];
  if (!question) return [];
  return [{
    item: question,
    current_impact: "当前仍需人工确认",
    pass_effect: row["复核通过影响"] || "可提高 Track A / Track B 置信度",
    fail_effect: row["复核不通过影响"] || "可能降级或进入风险池",
  }];
}

function renderAll() {
  renderGradeOptions();
  renderHealth();
  renderMetrics();
  renderGradeChart();
  renderScatter();
  renderTable();
  renderDetail();
  renderReport();
}

function renderGradeOptions() {
  const select = $("gradeFilter");
  const current = select.value;
  select.innerHTML = '<option value="all">全部等级</option>';
  gradeOrder.forEach((grade) => {
    const count = state.records.filter((item) => item.grade === grade).length;
    if (count > 0) {
      const option = document.createElement("option");
      option.value = grade;
      option.textContent = `${grade} · ${count}`;
      select.appendChild(option);
    }
  });
  select.value = current || "all";
}

function renderHealth() {
  const bundle = state.bundle || {};
  const historyName = bundle.history_library_name || bundle.history_library_status || "待接入";
  const source = state.sourceNames.length ? state.sourceNames.join(" / ") : "暂无文件";
  const benchmarkOk = state.records.filter((item) => hasBenchmark(item)).length;
  $("dataHealth").innerHTML = [
    healthItem("输入文件", source),
    healthItem("研究包版本", bundle.schema_version || "CSV / 待识别"),
    healthItem("历史库", historyName),
    healthItem("基准行情", `${benchmarkOk}/${state.records.length || 0} 有可用基准`),
  ].join("");
}

function renderMetrics() {
  const total = state.records.length;
  const avgScore = total ? mean(state.records.map((item) => item.finalScore)).toFixed(1) : "--";
  const reviewCount = state.records.filter((item) => item.reviewItems.length > 0 || item.capReasons.length > 0).length;
  const topCount = state.records.filter((item) => ["A+", "A", "A-"].includes(item.grade)).length;
  const cCount = state.records.filter((item) => item.grade === "C" || item.grade === "D").length;
  const metrics = [
    ["Stage C 样本", total, "来自最终研究包"],
    ["A档候选", topCount, "A+ / A / A-"],
    ["谨慎复核", cCount, "C / D 或封顶样本"],
    ["平均综合分", avgScore, "用于同等级排序"],
    ["需要复核", reviewCount, "展示通过/不通过影响"],
  ];
  $("metricGrid").innerHTML = metrics.map(([label, value, note]) => `
    <article class="metric-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <p>${note}</p>
    </article>
  `).join("");
}

function renderGradeChart() {
  $("gradeTotal").textContent = `${state.records.length} 只`;
  const maxCount = Math.max(1, ...gradeOrder.map((grade) => state.records.filter((item) => item.grade === grade).length));
  $("gradeChart").innerHTML = gradeOrder.map((grade) => {
    const count = state.records.filter((item) => item.grade === grade).length;
    const width = Math.max(4, Math.round((count / maxCount) * 100));
    return `
      <div class="grade-row">
        <span class="grade-badge ${gradeClass(grade)}">${grade}</span>
        <div class="bar-track"><div class="bar-fill ${gradeClass(grade)}" style="width:${count ? width : 0}%"></div></div>
        <strong>${count}</strong>
      </div>
    `;
  }).join("");
}

function renderScatter() {
  if (!state.records.length) {
    $("scatterPlot").innerHTML = '<div class="empty-state">上传研究包后显示双轨分布。</div>';
    return;
  }
  const points = state.records.map((item) => {
    const x = clamp(item.trackA, 0, 100);
    const y = clamp(item.trackB, 0, 100);
    return `
      <button class="scatter-point ${gradeClass(item.grade)}" style="left:${x}%; bottom:${y}%"
        title="${item.code} ${item.name} · TrackA ${item.trackA} / TrackB ${item.trackB}"
        data-code="${item.code}"></button>
    `;
  }).join("");
  $("scatterPlot").innerHTML = `
    <div class="axis-label x">Track A 规则修复</div>
    <div class="axis-label y">Track B 市场窗口</div>
    <div class="quadrant q1">高修复 / 高窗口</div>
    <div class="quadrant q2">高窗口待规则</div>
    <div class="quadrant q3">低信号</div>
    <div class="quadrant q4">高修复但拥挤</div>
    ${points}
  `;
  $("scatterPlot").querySelectorAll(".scatter-point").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedCode = button.dataset.code;
      renderTable();
      renderDetail();
    });
  });
}

function renderTable() {
  const search = $("searchInput").value.trim().toLowerCase();
  const grade = $("gradeFilter").value;
  const rows = state.records.filter((item) => {
    const matchSearch = !search || `${item.code}${item.name}`.toLowerCase().includes(search);
    const matchGrade = grade === "all" || item.grade === grade;
    return matchSearch && matchGrade;
  });
  $("stockRows").innerHTML = rows.map((item) => `
    <tr class="${item.code === state.selectedCode ? "selected" : ""}" data-code="${item.code}">
      <td><strong>${item.code}</strong></td>
      <td>${item.name}<small>${item.industry}</small></td>
      <td><span class="grade-badge ${gradeClass(item.grade)}">${item.grade}</span></td>
      <td><strong>${formatScore(item.finalScore)}</strong></td>
      <td>${miniBar(item.trackA)}</td>
      <td>${miniBar(item.trackB)}</td>
      <td>${item.trackBWindow}</td>
      <td>${reviewPill(item)}</td>
    </tr>
  `).join("") || '<tr><td colspan="8"><div class="empty-state">没有匹配样本。</div></td></tr>';
  $("stockRows").querySelectorAll("tr[data-code]").forEach((row) => {
    row.addEventListener("click", () => {
      state.selectedCode = row.dataset.code;
      renderTable();
      renderDetail();
    });
  });
}

function renderDetail() {
  const item = state.records.find((record) => record.code === state.selectedCode);
  if (!item) {
    $("detailPanel").innerHTML = `
      <div class="empty-detail">
        <h2>等待研究包</h2>
        <p>上传 C 阶段 JSON 后，这里会显示单股研究卡。</p>
      </div>
    `;
    return;
  }
  $("detailPanel").innerHTML = `
    <div class="detail-header">
      <div>
        <p class="section-kicker">单股研究卡</p>
        <h2>${item.code} ${item.name}</h2>
        <p>${item.industry} · ${item.label}</p>
      </div>
      <div class="score-tile ${gradeClass(item.grade)}">
        <span>${item.grade}</span>
        <strong>${formatScore(item.finalScore)}</strong>
      </div>
    </div>

    <div class="score-grid">
      ${scoreCard("Track A 摘帽规则与修复", item.trackA, item.trackAStatus, item.futureRepair)}
      ${scoreCard("Track B 市场窗口与定价", item.trackB, item.trackBWindow, `反映度：${item.pricedIn}`)}
    </div>

    <div class="signal-grid">
      ${infoCard("市场是否提前反映", item.pricedIn)}
      ${infoCard("拥挤度", item.crowding)}
      ${infoCard("事件催化", item.eventCatalyst)}
      ${infoCard("流动性", item.liquidity)}
      ${infoCard("基准置信度", item.benchmarkConfidence)}
      ${infoCard("历史参照", historyStatus(item))}
    </div>

    <section class="subsection">
      <h3>封顶与人工复核</h3>
      <div class="review-list">${renderManualReview(item)}</div>
    </section>

    <section class="subsection split">
      <div>
        <h3>相似案例</h3>
        ${renderHistory(item)}
      </div>
      <div>
        <h3>软信息因子</h3>
        ${renderSoftFactors(item)}
      </div>
    </section>

    <section class="subsection">
      <h3>报告摘要</h3>
      <p class="report-copy">${item.report || "当前研究包未提供摘要，需在 C 阶段补充 report_summary。"}</p>
    </section>
  `;
}

function renderReport() {
  if (!state.records.length) {
    $("reportSummary").innerHTML = '<p>等待上传 C 阶段研究包。</p>';
    return;
  }
  const top = state.records.slice(0, 5);
  const cap = state.records.filter((item) => item.capReasons.length > 0).length;
  $("reportSummary").innerHTML = `
    <div class="summary-grid">
      <div>
        <h3>当前页面读取到 ${state.records.length} 只 Stage C 样本</h3>
        <p>页面按最终综合分排序；等级用于研究分层，分数用于同等级内部比较。</p>
      </div>
      <div>
        <h3>${cap} 只存在封顶或置信度缺口</h3>
        <p>主要来自历史库、ST板块基准、行业基准、公告证据或人工复核项不足。</p>
      </div>
    </div>
    <div class="top-list">
      ${top.map((item) => `
        <button type="button" data-code="${item.code}">
          <span class="grade-badge ${gradeClass(item.grade)}">${item.grade}</span>
          <strong>${item.code} ${item.name}</strong>
          <small>${formatScore(item.finalScore)} 分 · ${item.trackBWindow}</small>
        </button>
      `).join("")}
    </div>
  `;
  $("reportSummary").querySelectorAll("button[data-code]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedCode = button.dataset.code;
      renderTable();
      renderDetail();
      document.querySelector(".detail-panel").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function scoreCard(title, score, main, sub) {
  return `
    <div class="score-card">
      <div class="score-card-head">
        <h3>${title}</h3>
        <strong>${formatScore(score)}/100</strong>
      </div>
      <div class="progress"><span style="width:${clamp(score, 0, 100)}%"></span></div>
      <p>${main}</p>
      <small>${sub}</small>
    </div>
  `;
}

function infoCard(label, value) {
  return `
    <div class="info-card">
      <span>${label}</span>
      <strong>${value || "待验证"}</strong>
    </div>
  `;
}

function renderManualReview(item) {
  const cap = item.capReasons.map((reason) => `
    <div class="review-card cap">
      <strong>封顶原因</strong>
      <p>${reason}</p>
    </div>
  `).join("");
  const review = item.reviewItems.map((entry) => `
    <div class="review-card">
      <strong>${entry.item || "人工复核项"}</strong>
      <p>当前影响：${entry.current_impact || "影响置信度"}</p>
      <p class="pass">通过：${entry.pass_effect || "可能上调或提高置信度"}</p>
      <p class="fail">不通过：${entry.fail_effect || "可能降级或剔除"}</p>
    </div>
  `).join("");
  return cap + review || '<div class="empty-state">暂无显式复核项。</div>';
}

function renderHistory(item) {
  const success = asArray(item.history?.matched_success_cases || item.history?.success_cases);
  const failure = asArray(item.history?.matched_failure_cases || item.history?.failure_cases);
  if (!success.length && !failure.length) {
    return `<div class="empty-state">${item.history?.status || "历史库待接入或未匹配到相似案例。"}</div>`;
  }
  return `
    <div class="case-columns">
      <div><span>成功参照</span>${caseList(success)}</div>
      <div><span>失败参照</span>${caseList(failure)}</div>
    </div>
  `;
}

function renderSoftFactors(item) {
  const entries = Object.entries(item.soft || {});
  if (!entries.length) return '<div class="empty-state">软信息因子待导师经验和公告证据补充。</div>';
  return entries.slice(0, 6).map(([key, value]) => `
    <div class="soft-factor">
      <span>${labelize(key)}</span>
      <strong>${value.score ?? value.level ?? "待评估"}</strong>
      <p>${value.reasoning || value.note || ""}</p>
    </div>
  `).join("");
}

function downloadCurrentView() {
  if (!state.records.length) return;
  const headers = ["股票代码", "股票简称", "综合等级", "综合分", "TrackA分", "TrackB分", "窗口类型", "市场反映度", "拥挤度", "封顶原因", "复核项"];
  const rows = state.records.map((item) => [
    item.code,
    item.name,
    item.grade,
    formatScore(item.finalScore),
    formatScore(item.trackA),
    formatScore(item.trackB),
    item.trackBWindow,
    item.pricedIn,
    item.crowding,
    item.capReasons.join("；"),
    item.reviewItems.map((entry) => entry.item).join("；"),
  ]);
  const csv = [headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\n");
  const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "摘帽咯_网页当前视图.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function seedEmpty() {
  renderAll();
}

function parseCsv(text) {
  const rows = [];
  let cell = "";
  let row = [];
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (char === '"' && quoted && next === '"') {
      cell += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(cell);
      if (row.some((value) => value.trim() !== "")) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }
  row.push(cell);
  if (row.some((value) => value.trim() !== "")) rows.push(row);
  const headers = rows.shift() || [];
  return rows.map((values) => Object.fromEntries(headers.map((header, index) => [header.trim(), (values[index] || "").trim()])));
}

function miniBar(score) {
  return `<div class="mini-bar"><span style="width:${clamp(score, 0, 100)}%"></span><b>${formatScore(score)}</b></div>`;
}

function reviewPill(item) {
  if (item.capReasons.length) return '<span class="status-pill warn">封顶</span>';
  if (item.reviewItems.length) return '<span class="status-pill neutral">需复核</span>';
  return '<span class="status-pill ok">已说明</span>';
}

function healthItem(label, value) {
  return `<div class="health-item"><span>${label}</span><strong>${value}</strong></div>`;
}

function caseList(items) {
  return `<ul>${items.map((item) => `<li>${String(item)}</li>`).join("")}</ul>`;
}

function hasBenchmark(item) {
  const values = Object.values(item.benchmark || {});
  return values.some((value) => value && !String(value).includes("缺") && !String(value).includes("待"));
}

function historyStatus(item) {
  const success = asArray(item.history?.matched_success_cases || item.history?.success_cases).length;
  const failure = asArray(item.history?.matched_failure_cases || item.history?.failure_cases).length;
  if (success || failure) return `${success} 成功 / ${failure} 失败`;
  return item.history?.status || "待匹配";
}

function cleanGrade(value) {
  const raw = String(value || "C").trim().toUpperCase();
  if (raw === "APLUS" || raw === "A＋") return "A+";
  if (gradeOrder.includes(raw)) return raw;
  return "C";
}

function gradeClass(grade) {
  return `grade-${cleanGrade(grade).replace("+", "plus").replace("-", "minus").toLowerCase()}`;
}

function normalizeCode(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  const digits = text.match(/\d{6}/)?.[0];
  if (!digits) return text;
  if (text.includes(".")) return text.toUpperCase();
  if (digits.startsWith("6") || digits.startsWith("9")) return `${digits}.SH`;
  return `${digits}.SZ`;
}

function asArray(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value.filter(Boolean);
  return String(value).split(/[；;、|]/).map((item) => item.trim()).filter(Boolean);
}

function numberFrom(value, fallback) {
  const number = Number(String(value ?? "").replace(/分|%|,/g, ""));
  return Number.isFinite(number) ? number : fallback;
}

function formatScore(score) {
  const number = numberFrom(score, 0);
  return Number.isInteger(number) ? String(number) : number.toFixed(1);
}

function mean(values) {
  return values.reduce((sum, value) => sum + numberFrom(value, 0), 0) / Math.max(1, values.length);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, numberFrom(value, min)));
}

function csvCell(value) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

function labelize(key) {
  return String(key).replaceAll("_", " ").replace(/\b\w/g, (char) => char.toUpperCase());
}
