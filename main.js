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
  const marketWindows = trackB.market_windows || item.market_windows || [];
  const researchReport = item.research_report || buildResearchReportFallback(item, summary);

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
    report: item.report_summary || final.summary || summary["核心结论"] || researchReport?.executive_summary?.one_line || "",
    researchReport,
    marketWindows,
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
    researchReport: buildSummaryReportFallback(row),
    marketWindows: [],
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

function buildResearchReportFallback(item, summary = {}) {
  const stock = item.stock || item || {};
  const trackA = item.track_a || {};
  const trackB = item.track_b || {};
  const final = item.final_research_classification || {};
  const report = item.report_summary || {};
  const windows = trackB.market_windows || [];
  const firstWindow = windows[0] || {};
  const metrics = firstWindow.metrics || {};
  const manual = normalizeManual(final, summary);
  const grade = cleanGrade(final.class || final.grade || summary["综合等级"]);
  const score = numberFrom(final.score ?? final.final_score ?? summary["综合分"], 0);
  return {
    executive_summary: {
      one_line: report.one_line_conclusion || final.reasoning || summary["核心结论一句话"] || `${stock.name || summary["股票简称"] || "该样本"}当前为${grade}档，综合分${formatScore(score)}。`,
      research_view: final.research_label || summary["研究标签"] || gradeLabels[grade] || "研究样本",
      confidence: trackB.benchmark_confidence || summary["置信度"] || "limited",
      score_explanation: `综合分 = Track A ${formatScore(trackA.score)} × 65% + Track B ${formatScore(trackB.score)} × 35%，再受证据完整度、基准行情和人工复核项约束。`,
    },
    why_st: {
      reason_type: summary["ST原因类型"] || report.why_st || "待公告证据补齐",
      original_warning_date: summary["首次实施日期"] || "",
      reason_facts: asArray(summary["ST原因事实"] || report.why_st || trackA.main_blockers).slice(0, 5),
      source_notice: {
        title: summary["原因来源公告标题"] || "",
        date: summary["原因来源公告日期"] || "",
        url: summary["原因来源链接"] || "",
      },
      rule_reason_ids: asArray(summary["规则原因ID"] || summary["rule_reason_id"]),
    },
    rule_checklist: buildRuleChecklistFallback(trackA, report, summary),
    announcement_facts: buildAnnouncementFactsFallback(trackB, report, summary),
    financial_repair: {
      snapshot_date: stock.snapshot_date || summary["数据快照日期"] || "",
      metrics: buildFinancialMetricsFallback(summary, trackA),
      quality_flags: asArray(summary["财务质量提示"] || summary["质量标记"]),
    },
    market_window_explanation: buildMarketExplanationFallback(firstWindow, metrics, trackB, summary),
    historical_case_comparison: {
      status: item.historical_replay?.status || summary["历史回放状态"] || "待接入历史库",
      success_cases: item.historical_replay?.matched_success_cases || asArray(summary["相似成功样本"]),
      failure_cases: item.historical_replay?.matched_failure_cases || asArray(summary["相似失败样本"]),
      what_it_means: item.historical_replay?.matching_summary || summary["历史类比结论"] || "历史相似案例库未完整接入时，不输出强类比结论。",
    },
    manual_review_matrix: manual.map((entry) => ({
      item: entry.item || "人工复核项",
      current_impact: entry.current_impact || "影响当前分数置信度",
      pass_condition: entry.pass_condition || "补齐公告、财务或行情证据后能够验证当前假设",
      pass_effect: entry.pass_effect || "可能提高置信度或小幅上调等级",
      fail_condition: entry.fail_condition || "证据显示关键条件不满足或市场已充分交易",
      fail_effect: entry.fail_effect || "可能降级或进入风险池",
      score_delta_if_pass: entry.score_delta_if_pass || "+3~+8",
      score_delta_if_fail: entry.score_delta_if_fail || "-5~-12",
      grade_effect_if_pass: entry.grade_effect_if_pass || "视缺口重要性上调或维持",
      grade_effect_if_fail: entry.grade_effect_if_fail || "降级或维持封顶",
      owner: entry.who_should_review || entry.owner || "人工判断",
    })),
    final_view: {
      grade,
      score,
      confidence: trackB.benchmark_confidence || "limited",
      main_reasons: asArray(final.reasoning || report.evidence_summary || summary["报告摘要"]).slice(0, 4),
      cap_reasons: asArray(final.cap_reasons || summary["封顶原因"]),
      next_tracking: asArray(final.follow_up_items || report.next_actions || summary["下一关键公告"]),
    },
  };
}

function buildSummaryReportFallback(row) {
  return {
    executive_summary: {
      one_line: row["核心结论一句话"] || row["报告摘要"] || row["核心结论"] || "CSV 摘要未提供单股结论。",
      research_view: row["研究标签"] || "",
      confidence: row["置信度"] || row["基准置信度"] || "limited",
      score_explanation: `CSV 摘要分数：Track A ${row["TrackA分"] || "--"}，Track B ${row["TrackB分"] || "--"}，综合 ${row["综合研究分"] || row["综合分"] || "--"}。`,
    },
    why_st: {
      reason_type: row["ST原因类型"] || "",
      original_warning_date: row["首次实施日期"] || "",
      reason_facts: asArray(row["ST原因事实"] || row["ST原因"] || row["*ST原因"]),
      source_notice: { title: row["原因来源公告标题"] || "", date: row["原因来源公告日期"] || "", url: row["原因来源链接"] || "" },
      rule_reason_ids: asArray(row["规则原因ID"]),
    },
    rule_checklist: [{
      item: "规则缺口",
      status: row["当前撤销资格"] || "pending",
      current_value: row["当前规则状态"] || "",
      threshold: "",
      evidence: row["摘帽条件核验摘要"] || row["规则缺口"] || "",
      impact: row["主要硬伤"] || "",
    }],
    announcement_facts: [{
      date: "",
      title: row["事件催化"] || row["关键公告事实"] || "待公告事实链",
      type: "公告摘要",
      reason_id: "",
      impact: "待复核",
      key_facts: asArray(row["关键公告事实"] || row["事件催化"]),
      evidence_url: "",
      evidence_strength: row["证据完整度"] || "待复核",
    }],
    financial_repair: { snapshot_date: row["数据快照日期"] || "", metrics: buildFinancialMetricsFallback(row, {}), quality_flags: [] },
    market_window_explanation: {
      event_date: "",
      event_type: row["事件类型"] || "",
      headline: row["事件催化"] || "",
      label_summary: row["市场窗口数据摘要"] || "",
      metrics: [],
      conclusion: row["市场窗口数据摘要"] || `${row["市场反映度"] || "待数据"}；${row["后续窗口"] || "待判断"}`,
      missing_items: row["市场窗口数据摘要"] ? [] : ["CSV 未提供事件窗口明细指标"],
    },
    historical_case_comparison: {
      status: row["历史回放状态"] || "待接入历史库",
      success_cases: asArray(row["相似成功样本"]),
      failure_cases: asArray(row["相似失败样本"]),
      what_it_means: row["历史类比结论"] || "",
    },
    manual_review_matrix: normalizeManual({}, row),
    final_view: {
      grade: cleanGrade(row["综合等级"]),
      score: numberFrom(row["综合研究分"] || row["综合分"], 0),
      confidence: row["置信度"] || "limited",
      main_reasons: asArray(row["报告摘要"] || row["核心结论一句话"]),
      cap_reasons: asArray(row["封顶原因"]),
      next_tracking: asArray(row["下一关键公告"]),
    },
  };
}

function buildRuleChecklistFallback(trackA, report, summary) {
  const blockers = asArray(trackA.main_blockers || summary["主要硬伤"]);
  const nodes = asArray(trackA.probability_lift_nodes || summary["概率抬升节点"]);
  const rows = [];
  rows.push({
    item: "当前撤销资格",
    status: trackA.current_eligibility || summary["当前撤销资格"] || "pending",
    current_value: trackA.current_eligibility || summary["当前规则状态"] || "待证据确认",
    threshold: "满足交易所撤销风险警示条件",
    evidence: report.rule_gap || summary["摘帽条件核验摘要"] || summary["规则缺口"] || "待公告与规则映射补齐",
    impact: blockers.length ? blockers.join("；") : "暂无明确硬伤，仍需公告确认",
  });
  nodes.slice(0, 3).forEach((node) => rows.push({
    item: "概率抬升节点",
    status: "improving",
    current_value: node,
    threshold: "出现可验证公告或财务数据",
    evidence: node,
    impact: "可能提高未来修复线索强度",
  }));
  return rows;
}

function buildAnnouncementFactsFallback(trackB, report, summary) {
  const title = trackB.event_catalyst || summary["事件催化"] || "待公告事实链";
  const facts = asArray(summary["关键公告事实"] || report.evidence_summary || trackB.event_catalyst);
  return [{
    date: summary["公告日期"] || "",
    title,
    type: summary["公告类型"] || "关键公告",
    reason_id: summary["reason_id"] || "",
    impact: facts.length ? "推进" : "待复核",
    key_facts: facts.length ? facts : ["旧版研究包只提供公告标题，需 C v0.5 补充公告事实。"],
    evidence_url: summary["公告链接"] || "",
    evidence_strength: summary["证据完整度"] || "待复核",
  }];
}

function buildFinancialMetricsFallback(source, trackA) {
  const map = [
    ["扣除后营业收入", "扣除后营业收入", ">= 规则门槛"],
    ["营业收入", "营业收入", "辅助判断"],
    ["净利润", "净利润", "> 0 或改善"],
    ["扣非净利润", "扣非净利润", "> 0 或改善"],
    ["净资产", "净资产", "> 0"],
    ["审计意见", "审计意见", "标准无保留/风险事项消除"],
    ["内控意见", "内控意见", "重大缺陷消除"],
  ];
  const rows = map
    .map(([label, key, threshold]) => {
      const value = source[key] || source[label] || "";
      if (!value) return null;
      return { name: label, value, threshold, status: "pending", source: "上传/阶段输出", note: "" };
    })
    .filter(Boolean);
  if (!rows.length && trackA?.main_blockers?.length) {
    rows.push({ name: "主要硬伤", value: asArray(trackA.main_blockers).join("；"), threshold: "需消除", status: "pending", source: "Track A", note: "" });
  }
  return rows;
}

function buildMarketExplanationFallback(window, metrics, trackB, summary) {
  const metricRows = marketMetricRows(metrics);
  const label = window.priced_in_before_announcement || trackB.market_reflection || summary["市场反映度"] || "待数据";
  const crowding = window.crowding_level || trackB.crowding || summary["拥挤度"] || "待数据";
  const conclusion = window.core_reason || summary["市场窗口数据摘要"] || [
    `公告前反映：${label}`,
    `拥挤度：${crowding}`,
    `后续窗口：${window.post_event_window || trackB.window_type || summary["后续窗口"] || "待判断"}`,
  ].join("；");
  return {
    event_date: window.event_date || summary["T日"] || "",
    event_type: window.event_type || summary["事件类型"] || "",
    headline: trackB.event_catalyst || summary["事件催化"] || "",
    label_summary: `${label} / ${crowding}`,
    metrics: metricRows,
    conclusion,
    missing_items: metricRows.length ? [] : ["缺 T-20/T-60/T-120、成交额放大、涨停次数等事件窗口明细"],
  };
}

function marketMetricRows(metrics = {}) {
  const configs = [
    ["T-20涨幅", "ret_t_minus_20_pct", "短期是否抢跑"],
    ["T-60涨幅", "ret_t_minus_60_pct", "中期是否已定价"],
    ["T-120涨幅", "ret_t_minus_120_pct", "长期预期是否提前释放"],
    ["T+5涨幅", "ret_t_plus_5_pct", "公告后短期反应"],
    ["T+20涨幅", "ret_t_plus_20_pct", "公告后一个月窗口"],
    ["T+60涨幅", "ret_t_plus_60_pct", "中期窗口"],
    ["成交额放大", "amount_expansion_20_vs_120", "T前20日均成交额 / T前120日均成交额"],
    ["换手放大", "turnover_expansion_20_vs_120", "T前20日均换手 / T前120日均换手"],
    ["T前20涨停次数", "limit_up_count_20", "短线情绪强度"],
    ["最大回撤", "max_drawdown_120_pct", "窗口风险代价"],
  ];
  return configs
    .map(([label, key, interpretation]) => {
      const value = metrics[key];
      if (value === undefined || value === null || value === "") return null;
      return { label, value: formatMetricValue(key, value), interpretation };
    })
    .filter(Boolean);
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
          <div class="quadrant q2">高窗口 / 待规则</div>
          <div class="quadrant q3">低信号</div>
          <div class="quadrant q4">高修复 / 拥挤</div>
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

    ${renderEvidenceImpact(item)}

    ${renderResearchReport(item)}
  `;
}

function renderEvidenceImpact(item) {
  const report = item.researchReport || {};
  const gaps = collectEvidenceGaps(item, report);
  if (!gaps.length) {
    return `
      <section class="evidence-impact ok">
        <strong>证据状态：核心字段已接入</strong>
        <p>当前报告已包含规则、公告、财务或行情中的主要解释字段。后续仍以公告和行情复核为准。</p>
      </section>
    `;
  }
  return `
    <section class="evidence-impact">
      <div>
        <strong>证据缺口：${gaps.length} 项会影响结论</strong>
        <p>这不是简单“待复核”，而是说明缺口会压低哪个判断，以及补齐后可能怎么变化。</p>
      </div>
      <div class="gap-list">
        ${gaps.slice(0, 5).map((gap) => `
          <span>${gap.name}<small>${gap.impact}</small></span>
        `).join("")}
      </div>
    </section>
  `;
}

function collectEvidenceGaps(item, report = {}) {
  const gaps = [];
  const whyFacts = asArray(report.why_st?.reason_facts);
  const noticeFacts = report.announcement_facts || [];
  const market = report.market_window_explanation || {};
  const marketMetrics = market.metrics || [];
  const history = report.historical_case_comparison || {};
  const benchmark = item.benchmark || {};

  if (!whyFacts.length) gaps.push({ name: "ST原因事实缺失", impact: "影响 Track A 规则路径和摘帽条件判断" });
  if (!noticeFacts.length || noticeFacts.every((fact) => !asArray(fact.key_facts).length)) {
    gaps.push({ name: "公告事实链不足", impact: "影响事件催化和修复进度判断" });
  }
  if (!marketMetrics.length) gaps.push({ name: "事件窗口行情缺失", impact: "影响是否太晚、是否拥挤、公告前是否已反映" });
  if (isBenchmarkMissing(benchmark.st_board)) gaps.push({ name: "ST板块基准缺失", impact: "不能严谨判断个股是否跑赢 ST 板块，A+ 应封顶" });
  if (isBenchmarkMissing(benchmark.market)) gaps.push({ name: "市场基准缺失", impact: "不能严谨区分个股收益和大盘环境贡献" });
  if (!asArray(history.success_cases).length && !asArray(history.failure_cases).length) {
    gaps.push({ name: "历史相似案例缺失", impact: "不能输出成功/失败路径类比，只能给规则和行情结论" });
  }
  item.capReasons.forEach((reason) => gaps.push({ name: "封顶原因", impact: reason }));
  return gaps;
}

function renderResearchReport(item) {
  const report = item.researchReport || buildResearchReportFallback(item.raw || {});
  const executive = report.executive_summary || {};
  return `
    <section class="research-block executive-block">
      <div>
        <p class="section-kicker">一页结论</p>
        <h3>${executive.research_view || item.label}</h3>
        <p>${executive.one_line || item.report || "当前研究包未提供一页结论。"}</p>
      </div>
      <div class="confidence-card">
        <span>置信度</span>
        <strong>${executive.confidence || item.benchmarkConfidence || "limited"}</strong>
      </div>
    </section>

    <section class="research-block">
      <p class="section-kicker">分数怎么来的</p>
      <p class="report-copy">${executive.score_explanation || "等待 C 阶段补充分数解释。"}</p>
    </section>

    <section class="research-grid two">
      ${renderWhySt(report)}
      ${renderRuleChecklist(report)}
    </section>

    <section class="research-grid two">
      ${renderAnnouncementFacts(report)}
      ${renderFinancialRepair(report)}
    </section>

    <section class="research-block">
      <div class="block-head">
        <div>
          <p class="section-kicker">市场窗口数据</p>
          <h3>${report.market_window_explanation?.label_summary || `${item.pricedIn} / ${item.crowding}`}</h3>
        </div>
        <span class="soft-pill">${report.market_window_explanation?.event_date || "T日待确认"}</span>
      </div>
      ${renderMarketExplanation(report)}
    </section>

    <section class="research-grid two">
      ${renderHistoricalComparison(report, item)}
      <div class="research-block compact">
        <p class="section-kicker">软信息因子</p>
        <h3>只展示有证据的软信号</h3>
        ${renderSoftFactors(item)}
      </div>
    </section>

    <section class="research-block">
      <p class="section-kicker">人工复核分叉</p>
      <h3>不是只写“待复核”，而是写清复核后怎么升降级</h3>
      <div class="review-list">${renderManualReviewMatrix(report, item)}</div>
    </section>

    <section class="research-block">
      <p class="section-kicker">后续跟踪</p>
      ${renderFinalView(report, item)}
    </section>
  `;
}

function renderWhySt(report) {
  const why = report.why_st || {};
  const facts = asArray(why.reason_facts);
  const source = why.source_notice || {};
  return `
    <div class="research-block compact">
      <p class="section-kicker">为什么被 ST</p>
      <h3>${why.reason_type || "风险原因待补齐"}</h3>
      ${facts.length ? `<ul class="fact-list">${facts.map((fact) => `<li>${fact}</li>`).join("")}</ul>` : '<div class="empty-state small">缺原始戴帽原因事实。</div>'}
      ${source.title ? `<p class="source-line">来源：${source.date || ""} ${source.url ? `<a href="${source.url}" target="_blank" rel="noreferrer">${source.title}</a>` : source.title}</p>` : '<p class="source-line">来源公告待补。</p>'}
    </div>
  `;
}

function renderRuleChecklist(report) {
  const checklist = report.rule_checklist || [];
  return `
    <div class="research-block compact">
      <p class="section-kicker">摘帽条件核验</p>
      <h3>当前满足了什么，还差什么</h3>
      ${checklist.length ? checklist.map((row) => `
        <div class="check-row">
          <span class="check-dot ${statusClass(row.status)}"></span>
          <div>
            <strong>${row.item || "核验项"}</strong>
            <p>${row.current_value || "当前值待补"}${row.threshold ? ` ｜ 门槛：${row.threshold}` : ""}</p>
            ${row.evidence ? `<small>${row.evidence}</small>` : ""}
          </div>
        </div>
      `).join("") : '<div class="empty-state small">缺规则核验清单。</div>'}
    </div>
  `;
}

function renderAnnouncementFacts(report) {
  const facts = report.announcement_facts || [];
  return `
    <div class="research-block compact">
      <p class="section-kicker">公告事实链</p>
      <h3>公告具体解决/推进了什么</h3>
      ${facts.length ? facts.map((fact) => `
        <div class="timeline-item">
          <span>${fact.date || "日期待补"}</span>
          <strong>${fact.title || "公告标题待补"}</strong>
          <em>${fact.impact || "待复核"} · ${fact.evidence_strength || "证据强度待补"}</em>
          ${asArray(fact.key_facts).length ? `<ul>${asArray(fact.key_facts).map((entry) => `<li>${entry}</li>`).join("")}</ul>` : '<p>缺公告事实摘要。</p>'}
          ${fact.evidence_url ? `<a href="${fact.evidence_url}" target="_blank" rel="noreferrer">查看公告</a>` : ""}
        </div>
      `).join("") : '<div class="empty-state small">缺公告事实链。</div>'}
    </div>
  `;
}

function renderFinancialRepair(report) {
  const financial = report.financial_repair || {};
  const metrics = financial.metrics || [];
  return `
    <div class="research-block compact">
      <p class="section-kicker">财务修复证据</p>
      <h3>${financial.snapshot_date ? `快照：${financial.snapshot_date}` : "关键财务指标"}</h3>
      ${metrics.length ? `<div class="metric-table">${metrics.map((row) => `
        <div>
          <span>${row.name}</span>
          <strong>${row.value || "--"}</strong>
          <small>${row.threshold || ""}${row.note ? ` ｜ ${row.note}` : ""}</small>
        </div>
      `).join("")}</div>` : '<div class="empty-state small">缺财务修复指标。</div>'}
      ${asArray(financial.quality_flags).length ? `<div class="tag-row">${asArray(financial.quality_flags).map((flag) => `<span>${flag}</span>`).join("")}</div>` : ""}
    </div>
  `;
}

function renderMarketExplanation(report) {
  const market = report.market_window_explanation || {};
  const metrics = market.metrics || [];
  const missing = asArray(market.missing_items);
  return `
    <p class="report-copy">${market.conclusion || "等待 C 阶段补充市场窗口解释。"}</p>
    ${metrics.length ? `<div class="market-metrics">${metrics.map((row) => `
      <div class="market-metric">
        <span>${row.label}</span>
        <strong>${row.value}</strong>
        <small>${row.interpretation || ""}</small>
      </div>
    `).join("")}</div>` : ""}
    ${missing.length ? `<div class="missing-box"><strong>缺口：</strong>${missing.join("；")}</div>` : ""}
  `;
}

function renderHistoricalComparison(report, item) {
  const history = report.historical_case_comparison || {};
  const success = asArray(history.success_cases);
  const failure = asArray(history.failure_cases);
  return `
    <div class="research-block compact">
      <p class="section-kicker">历史相似案例</p>
      <h3>${history.status || historyStatus(item)}</h3>
      ${success.length || failure.length ? `
        <div class="case-columns">
          <div><span>成功参照</span>${caseList(success)}</div>
          <div><span>失败参照</span>${caseList(failure)}</div>
        </div>
      ` : `<div class="empty-state small">${history.what_it_means || "历史库未接入，不输出类比结论。"}</div>`}
      ${history.what_it_means ? `<p class="report-copy">${history.what_it_means}</p>` : ""}
    </div>
  `;
}

function renderManualReviewMatrix(report, item) {
  const matrix = report.manual_review_matrix || item.reviewItems || [];
  const cap = item.capReasons.map((reason) => `
    <div class="review-card cap">
      <strong>封顶原因</strong>
      <p>${reason}</p>
    </div>
  `).join("");
  const rows = matrix.map((entry) => `
    <div class="review-card">
      <strong>${entry.item || "人工复核项"}</strong>
      <p>当前影响：${entry.current_impact || "影响置信度"}</p>
      <p>通过条件：${entry.pass_condition || "补齐证据后验证通过"}</p>
      <p class="pass">通过影响：${entry.pass_effect || "可能上调或提高置信度"} ${entry.score_delta_if_pass ? `（${entry.score_delta_if_pass}）` : ""}</p>
      <p>不通过条件：${entry.fail_condition || "关键假设被证伪"}</p>
      <p class="fail">不通过影响：${entry.fail_effect || "可能降级或剔除"} ${entry.score_delta_if_fail ? `（${entry.score_delta_if_fail}）` : ""}</p>
    </div>
  `).join("");
  return cap + rows || '<div class="empty-state">暂无显式复核项。</div>';
}

function renderFinalView(report, item) {
  const finalView = report.final_view || {};
  const reasons = asArray(finalView.main_reasons);
  const next = asArray(finalView.next_tracking);
  const caps = asArray(finalView.cap_reasons || item.capReasons);
  return `
    <div class="final-view">
      <div>
        <span>最终分层</span>
        <strong>${finalView.grade || item.grade} · ${formatScore(finalView.score ?? item.finalScore)}分</strong>
        <p>置信度：${finalView.confidence || item.benchmarkConfidence || "limited"}</p>
      </div>
      <div>
        <span>主要依据</span>
        ${reasons.length ? `<ul>${reasons.map((reason) => `<li>${reason}</li>`).join("")}</ul>` : "<p>等待 C 阶段补充主要依据。</p>"}
      </div>
      <div>
        <span>下一步</span>
        ${next.length ? `<ul>${next.map((entry) => `<li>${entry}</li>`).join("")}</ul>` : "<p>等待下一关键公告或人工复核。</p>"}
      </div>
      ${caps.length ? `<div><span>限制原因</span><ul>${caps.map((entry) => `<li>${entry}</li>`).join("")}</ul></div>` : ""}
    </div>
  `;
}

function renderReport() {
  if (!state.records.length) {
    $("reportSummary").innerHTML = '<p>等待上传 C 阶段研究包。</p>';
    return;
  }
  const top = state.records.slice(0, 5);
  const cap = state.records.filter((item) => item.capReasons.length > 0).length;
  const historyReady = state.records.filter((item) => {
    const report = item.researchReport || {};
    const history = report.historical_case_comparison || {};
    return asArray(history.success_cases).length || asArray(history.failure_cases).length;
  }).length;
  const marketReady = state.records.filter((item) => {
    const metrics = item.researchReport?.market_window_explanation?.metrics || [];
    return metrics.length > 0;
  }).length;
  const noticeReady = state.records.filter((item) => {
    const facts = item.researchReport?.announcement_facts || [];
    return facts.some((fact) => asArray(fact.key_facts).length > 0);
  }).length;
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
      <div>
        <h3>解释字段覆盖</h3>
        <p>公告事实 ${noticeReady}/${state.records.length}，行情窗口 ${marketReady}/${state.records.length}，历史类比 ${historyReady}/${state.records.length}。</p>
      </div>
      <div>
        <h3>下一步最该补什么</h3>
        <p>${nextBestDataGap()}</p>
      </div>
    </div>
    <div class="top-list">
      ${top.map((item) => `
        <button type="button" data-code="${item.code}">
          <span class="grade-badge ${gradeClass(item.grade)}">${item.grade}</span>
          <strong>${item.code} ${item.name}</strong>
          <small>${formatScore(item.finalScore)} 分 · ${item.researchReport?.executive_summary?.one_line || item.trackBWindow}</small>
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

function nextBestDataGap() {
  const all = state.records.flatMap((item) => collectEvidenceGaps(item, item.researchReport || {}));
  if (!all.length) return "当前研究包核心字段较完整，可进入人工复核和样本横向比较。";
  const counts = all.reduce((acc, gap) => {
    acc[gap.name] = (acc[gap.name] || 0) + 1;
    return acc;
  }, {});
  const [name, count] = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
  return `${name} 是当前最大缺口，影响 ${count} 只样本。`;
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

function isBenchmarkMissing(value) {
  if (!value) return true;
  const status = String(value.status || value.confidence || value.missing_reason || "").toLowerCase();
  return !status || status.includes("missing") || status.includes("缺") || status.includes("待");
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

function formatMetricValue(key, value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return String(value);
  if (String(key).includes("count")) return String(Math.round(number));
  if (String(key).includes("expansion")) return `${number.toFixed(2)}x`;
  if (String(key).includes("pct") || String(key).includes("return") || String(key).includes("drawdown")) return `${number.toFixed(2)}%`;
  return Number.isInteger(number) ? String(number) : number.toFixed(2);
}

function statusClass(status) {
  const text = String(status || "").toLowerCase();
  if (text.includes("satisfied") || text.includes("已") || text.includes("通过") || text.includes("具备")) return "ok";
  if (text.includes("improving") || text.includes("推进") || text.includes("修复")) return "active";
  if (text.includes("not_satisfied") || text.includes("不具备") || text.includes("未")) return "bad";
  return "pending";
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
