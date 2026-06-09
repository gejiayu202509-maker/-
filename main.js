const curatedProfiles = {
  "603580.SH": {
    code: "603580.SH",
    name: "*ST艾艾",
    poolCode: "A",
    poolLabel: "A 类重点池",
    poolNote: "高概率，市场反映度待行情验证",
    strategyTags: [
      ["财务硬指标修复", "高适用"],
      ["合规整改闭环", "中适用"],
      ["司法重整节点", "不适用"],
      ["国资/产业方入主", "不适用"],
    ],
    four: {
      probability: ["高", "收入利润组合指标已由 2025 年报与审计结果基本支持撤销条件。"],
      evidence: ["基本闭环", "年报、审计、内控和撤销申请已出现，剩余上交所审核确认。"],
      catalyst: ["强", "已发布撤销退市风险警示申请公告，进入申请期/审核期。"],
      market: ["待行情验证", "需补公告前 20/60/120 日涨幅、换手率、成交额和涨停次数。"],
    },
    scores: { certainty: 86, window: 62 },
    rule: {
      type: "财务类",
      trigger: "2024 年度扣非前后净利润为负，且扣除后营业收入低于 3 亿元。",
      condition:
        "最近一年扣除后营业收入达标，扣非净利润转正，审计意见与内控审计意见均不再构成障碍。",
      gray: "交易所审核结果尚未公告，仍保留审核灰度。",
    },
    announcements: [
      {
        date: "2025-05-06",
        title: "实施退市风险警示公告",
        impact: "风险原因锚点",
        note: "确认原 *ST 原因来自收入利润组合指标。",
      },
      {
        date: "2026-04-30",
        title: "关于申请撤销股票退市风险警示的公告",
        impact: "强正面",
        note: "披露 2025 年扣除后营收 31,644.99 万元、扣非净利润 62.73 万元、净资产 45,153.83 万元，审计和内控均为标准无保留。",
      },
      {
        date: "待公告",
        title: "上交所审核结果公告",
        impact: "结果确认",
        note: "下一关键节点，决定证据是否进入已闭环。",
      },
    ],
    market: {
      quoteDate: "2026-06-08",
      close: "22.46",
      change: "-0.09%",
      turnover: "0.58%",
      amount: "1706.17 万元",
      mcap: "约 29.4 亿元",
      industry: "橡胶和塑料制品业",
      note: "单日快照只能看当前热度，不能替代公告前事件窗口。",
    },
    similar: {
      success: "收入利润指标修复型：年报确认收入达标、扣非转正、审计意见标准无保留后申请撤销。",
      failure: "反例重点看收入扣除口径、收入真实性问询、扣非利润过薄导致审核延迟。",
      gap: "当前缺的是公告前市场反映度和同类历史样本的事件窗口收益。",
    },
    risks: ["上交所审核未最终确认", "公告前是否已被市场提前交易尚未验证", "扣非利润较薄，需关注收入扣除和问询风险"],
    nextAction: "补齐公告前 20/60/120 日行情窗口，判断是 A1 高概率有预期差，还是 A2 高概率但已明显反映。",
    oneLine: "规则口径清楚、财务证据基本闭环、申请节点已出现，是 v0.1 重点展示的高概率样本。",
  },
  "600476.SH": {
    code: "600476.SH",
    name: "*ST湘邮",
    poolCode: "C",
    poolLabel: "C 类谨慎池",
    poolNote: "风险确认，撤销条件未闭环",
    strategyTags: [
      ["财务硬指标修复", "低适用"],
      ["合规整改闭环", "中适用"],
      ["司法重整节点", "待确认"],
      ["国资/产业方入主", "待确认"],
    ],
    four: {
      probability: ["低", "2025 年末净资产仍为负，短期缺少撤销条件改善证据。"],
      evidence: ["未闭环", "戴星戴帽原因已确认，但摘星/摘帽证据尚未形成。"],
      catalyst: ["风险催化强", "当前核心公告是风险警示实施，不是撤销申请或改善确认。"],
      market: ["待行情验证", "需看后续修复公告前后的市场反应。"],
    },
    scores: { certainty: 28, window: 22 },
    rule: {
      type: "财务类 + 其他风险警示",
      trigger:
        "2025 年末经审计归属于母公司股东权益为负；同时连续三年亏损且持续经营能力存在不确定性。",
      condition:
        "摘星需净资产转正；摘帽还需持续经营不确定性消除，并取得审计层面的支持。",
      gray: "持续经营能力依赖审计判断和经营修复，不是单一硬指标。",
    },
    announcements: [
      {
        date: "2026-04-28/29",
        title: "实施退市风险警示并叠加其他风险警示公告",
        impact: "负面",
        note: "确认净资产为负和持续经营不确定性两条主线。",
      },
      {
        date: "未来定期报告",
        title: "2026 年财务修复与持续经营说明",
        impact: "待复核",
        note: "是否从风险样本转为可观察样本，取决于净资产和持续经营证据。",
      },
    ],
    market: {
      quoteDate: "2026-06-08",
      close: "10.84",
      change: "-2.17%",
      turnover: "1.63%",
      amount: "2857 万元",
      mcap: "约 17.5 亿元",
      industry: "软件和信息技术服务业",
      note: "行业属性有一定弹性，但当前基本面证据不足，不能替代撤销条件。",
    },
    similar: {
      success: "净资产转正型成功样本：财务修复 + 审计意见支持 + 其他风险同步解除。",
      failure: "持续经营不确定性长期存在、净资产修复迟迟不落地、多重问题叠加的延迟样本。",
      gap: "需要找到同类净资产为负 + 持续经营不确定性案例，比较修复周期和失败信号。",
    },
    risks: ["净资产为负", "持续经营能力存在不确定性", "ST+*ST 多重原因叠加"],
    nextAction: "先作为风险/观察样本，等 2026 年定期报告、审计意见或经营修复公告再重算。",
    oneLine: "当前更像风险确认样本，而不是摘帽机会样本。",
  },
  "688496.SH": {
    code: "688496.SH",
    name: "*ST清越",
    poolCode: "D",
    poolLabel: "D 类高风险排除池",
    poolNote: "重大违法风险待落地",
    strategyTags: [
      ["合规整改闭环", "低适用"],
      ["财务硬指标修复", "不适用"],
      ["司法重整节点", "不适用"],
      ["国资/产业方入主", "不适用"],
    ],
    four: {
      probability: ["极低/不适用", "重大违法强制退市风险未落地前，不适合作为常规摘帽样本。"],
      evidence: ["部分闭环", "内控否定已明确，行政处罚最终结论尚未闭环。"],
      catalyst: ["风险催化强", "核心事件是处罚决定和重大违法认定，不是机会催化。"],
      market: ["不作为机会依据", "即使短期异动，也应先归入高风险监控。"],
    },
    scores: { certainty: 8, window: 12 },
    rule: {
      type: "重大违法类 + 其他风险警示",
      trigger:
        "2025 年内控审计报告否定意见；行政处罚事先告知书提示可能触及重大违法强制退市。",
      condition:
        "需最终处罚决定未触及重大违法强退，且内控否定事项完成实质整改。",
      gray: "高度依赖监管定性，预测灰度极高。",
    },
    announcements: [
      {
        date: "2026-05-09",
        title: "实施退市风险警示并继续实施其他风险警示公告",
        impact: "强负面",
        note: "重大违法风险暴露，需等待行政处罚决定书。",
      },
      {
        date: "待公告",
        title: "行政处罚决定书及重大违法强制退市进展",
        impact: "结果性风险节点",
        note: "决定是否仍可进入任何摘帽研究路径。",
      },
    ],
    market: {
      quoteDate: "2026-06-08",
      close: "1.28",
      change: "8.47%",
      turnover: "8.69%",
      amount: "2609.34 万元",
      mcap: "5.76 亿元",
      industry: "计算机、通信和其他电子设备制造业",
      note: "低价高换手只说明市场博弈活跃，不提高摘帽概率。",
    },
    similar: {
      success: "少数成功路径需处罚未触及重大违法、内控整改闭环、交易所认可。",
      failure: "重大违法待定、内控否定延续、立案调查后风险升级的失败/退市样本。",
      gap: "应优先匹配重大违法反例，而不是财务修复成功样本。",
    },
    risks: ["重大违法强制退市风险", "内控否定意见未消除", "监管结论未落地"],
    nextAction: "高风险监控，不进入摘帽机会池；等待处罚决定和内控整改证据。",
    oneLine: "当前核心不是预测摘帽，而是识别重大违法风险并排除。",
  },
};

const state = {
  pool: [],
  filtered: [],
  selectedCode: "603580.SH",
};

const els = {
  kpiGrid: document.querySelector("#kpiGrid"),
  funnel: document.querySelector("#funnel"),
  poolTable: document.querySelector("#poolTable"),
  searchInput: document.querySelector("#searchInput"),
  poolFilter: document.querySelector("#poolFilter"),
  strategyFilter: document.querySelector("#strategyFilter"),
  stockSelect: document.querySelector("#stockSelect"),
  detailContent: document.querySelector("#detailContent"),
  reportPreview: document.querySelector("#reportPreview"),
  fileInput: document.querySelector("#fileInput"),
  uploadStatus: document.querySelector("#uploadStatus"),
  printTop: document.querySelector("#printReportBtn"),
  printBottom: document.querySelector("#printReportBtnBottom"),
};

init();

async function init() {
  try {
    if (Array.isArray(window.__ZHMG_CURRENT_POOL__) && window.__ZHMG_CURRENT_POOL__.length) {
      state.pool = window.__ZHMG_CURRENT_POOL__;
    } else {
      const response = await fetch("./data/current_pool.json?v=20260609b");
      if (!response.ok) throw new Error(`current_pool.json 读取失败：${response.status}`);
      state.pool = await response.json();
    }
    if (!Array.isArray(state.pool) || !state.pool.length) {
      throw new Error("股票池为空");
    }
  } catch (error) {
    state.pool = fallbackRows();
    showDataWarning(error);
  }
  state.filtered = [...state.pool];
  bindEvents();
  renderAll();
}

function bindEvents() {
  els.searchInput.addEventListener("input", applyFilters);
  els.poolFilter.addEventListener("change", applyFilters);
  els.strategyFilter.addEventListener("change", applyFilters);
  els.stockSelect.addEventListener("change", (event) => {
    state.selectedCode = event.target.value;
    renderDetail();
    renderTable();
  });
  els.fileInput.addEventListener("change", handleUpload);
  els.printTop.addEventListener("click", () => window.print());
  els.printBottom.addEventListener("click", () => window.print());
}

function showDataWarning(error) {
  const panel = document.querySelector(".upload-panel");
  if (!panel) return;
  const warning = document.createElement("p");
  warning.className = "note";
  warning.style.marginTop = "10px";
  warning.textContent = `数据文件暂未加载，当前进入三只样本兜底模式。请检查 GitHub 是否上传了 data/current_pool.js 和 data/current_pool.json。错误信息：${error.message}`;
  panel.firstElementChild?.appendChild(warning);
  els.uploadStatus.textContent = "当前使用：三只样本兜底数据；253家股票池数据未成功加载";
}

function fallbackRows() {
  return Object.values(curatedProfiles).map((profile, index) => ({
    序号: index + 1,
    证券代码: profile.code,
    证券名称: profile.name,
    "ST or *ST": "*ST",
    "最新被ST/*ST时间": "待复核",
    ST原因: profile.code === "603580.SH" ? null : profile.rule.trigger,
    "*ST原因": profile.rule.trigger,
    当前阶段: profile.four.catalyst[0],
    所属交易所: profile.code.startsWith("688") || profile.code.startsWith("603") || profile.code.startsWith("600") ? "上交所" : "深交所",
    所属板块: profile.code.startsWith("688") ? "科创板" : "主板",
    状态分层: profile.code === "603580.SH" ? "纯*ST" : "ST+*ST",
    策略标签: profile.strategyTags.map((item) => item[0]),
    主规则类型: profile.rule.type,
    数据快照日期: "兜底样本",
  }));
}

function renderAll() {
  renderKpis();
  renderFunnel();
  renderStockSelect();
  applyFilters();
  renderDetail();
}

function applyFilters() {
  const keyword = els.searchInput.value.trim().toLowerCase();
  const pool = els.poolFilter.value;
  const strategy = els.strategyFilter.value;

  state.filtered = state.pool.filter((row) => {
    const code = String(row["证券代码"] || "");
    const name = String(row["证券名称"] || "");
    const profile = getProfile(code, row);
    const textMatch = !keyword || `${code} ${name}`.toLowerCase().includes(keyword);
    const poolMatch = pool === "all" || profile.poolCode === pool;
    const strategyMatch =
      strategy === "all" || (profile.strategyTags || []).some((item) => item[0] === strategy || item === strategy);
    return textMatch && poolMatch && strategyMatch;
  });
  renderTable();
}

function renderKpis() {
  const total = state.pool.length;
  const pureSt = state.pool.filter((row) => row["状态分层"] === "纯ST").length;
  const pureStar = state.pool.filter((row) => row["状态分层"] === "纯*ST").length;
  const stacked = state.pool.filter((row) => row["状态分层"] === "ST+*ST").length;
  const financial = state.pool.filter((row) => (row["策略标签"] || []).includes("财务硬指标修复")).length;
  const majorRisk = state.pool.filter((row) => (row["策略标签"] || []).includes("重大违法风险观察")).length;

  const items = [
    ["当前股票池", total, "来自 2026-06-05 原始快照"],
    ["纯 ST", pureSt, "重点看摘帽"],
    ["纯 *ST", pureStar, "重点看摘星"],
    ["ST+*ST", stacked, "摘星和摘帽要分开"],
    ["财务硬指标样本", financial, "v0.1 优先可预测类型"],
    ["重大违法风险", majorRisk, "默认进入高风险复核"],
  ];
  els.kpiGrid.innerHTML = items
    .map(([label, value, note]) => `<div class="kpi"><span>${escapeHtml(label)}</span><strong>${value}</strong><span>${escapeHtml(note)}</span></div>`)
    .join("");
}

function renderFunnel() {
  const total = state.pool.length;
  const ruleKnown = state.pool.filter((row) => row["主规则类型"] !== "待复核").length;
  const quant = state.pool.filter((row) => (row["策略标签"] || []).includes("财务硬指标修复")).length;
  const humanReview = state.pool.filter((row) => row["状态分层"] === "ST+*ST" || (row["策略标签"] || []).includes("重大违法风险观察")).length;
  const curatedA = Object.values(curatedProfiles).filter((profile) => profile.poolCode === "A").length;

  const steps = [
    ["全量股票池", total, "先接受市场所有已挂 ST/*ST 的公司。"],
    ["规则可初判", ruleKnown, "用交易所、板块和原因做第一层映射。"],
    ["可量化优先", quant, "净资产、收入、利润、审计意见更适合预测。"],
    ["人工复核区", humanReview, "ST+*ST、重大违法、治理和持续经营问题必须复核。"],
    ["A 类样本", curatedA, "v0.1 先用强样本跑通方法，不追求一次全覆盖。"],
  ];

  els.funnel.innerHTML = steps
    .map(
      ([title, value, note]) => `
        <div class="funnel-step">
          <small>${escapeHtml(title)}</small>
          <b>${value}</b>
          <small>${escapeHtml(note)}</small>
        </div>
      `,
    )
    .join("");
}

function renderStockSelect() {
  const curatedCodes = Object.keys(curatedProfiles);
  const curatedOptions = curatedCodes
    .map((code) => `<option value="${code}">${code} ${curatedProfiles[code].name} · 深度样本</option>`)
    .join("");
  const poolOptions = state.pool
    .filter((row) => !curatedProfiles[row["证券代码"]])
    .map((row) => `<option value="${escapeHtml(row["证券代码"])}">${escapeHtml(row["证券代码"])} ${escapeHtml(row["证券名称"])} · 基础诊断</option>`)
    .join("");
  els.stockSelect.innerHTML = `
    <optgroup label="端到端样本">
      ${curatedOptions}
    </optgroup>
    <optgroup label="当前股票池基础诊断">
      ${poolOptions}
    </optgroup>
  `;
  els.stockSelect.value = state.selectedCode;
}

function renderTable() {
  const sorted = [...state.filtered].sort((a, b) => {
    const pa = getProfile(a["证券代码"], a).poolCode;
    const pb = getProfile(b["证券代码"], b).poolCode;
    return classRank(pa) - classRank(pb);
  });
  els.poolTable.innerHTML = sorted
    .slice(0, 120)
    .map((row) => {
      const profile = getProfile(row["证券代码"], row);
      const code = row["证券代码"];
      const active = code === state.selectedCode ? "active-row" : "";
      return `
        <tr class="${active}" data-code="${escapeHtml(code)}">
          <td><b>${escapeHtml(code)}</b></td>
          <td>${escapeHtml(row["证券名称"] || "")}</td>
          <td>${escapeHtml(row["状态分层"] || "待复核")}</td>
          <td>${escapeHtml(row["主规则类型"] || "待复核")}</td>
          <td>${renderTags(profile.strategyTags, true)}</td>
          <td><span class="badge badge-${profile.poolCode}">${escapeHtml(profile.poolLabel)}</span></td>
        </tr>
      `;
    })
    .join("");

  els.poolTable.querySelectorAll("tr").forEach((tr) => {
    tr.addEventListener("click", () => {
      state.selectedCode = tr.dataset.code;
      els.stockSelect.value = state.selectedCode;
      renderDetail();
      renderTable();
      document.querySelector("#single-stock").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderDetail() {
  const row = state.pool.find((item) => item["证券代码"] === state.selectedCode) || state.pool[0];
  const profile = getProfile(state.selectedCode, row);
  const isCurated = Boolean(curatedProfiles[state.selectedCode]);

  els.detailContent.innerHTML = `
    <div class="detail-stack">
      <div class="identity">
        <div>
          <h3>${escapeHtml(profile.code)} ${escapeHtml(profile.name)}</h3>
          <p class="muted">${escapeHtml(row?.["所属交易所"] || "待复核")} · ${escapeHtml(row?.["所属板块"] || "待复核")} · ${escapeHtml(row?.["状态分层"] || "待复核")}</p>
        </div>
        <span class="badge badge-${profile.poolCode}">${escapeHtml(profile.poolLabel)}</span>
      </div>

      ${isCurated ? renderCuratedDetail(profile) : renderGenericDetail(profile, row)}
    </div>
  `;
  renderReport(profile, row, isCurated);
}

function renderCuratedDetail(profile) {
  return `
    <p class="note">${escapeHtml(profile.oneLine)}</p>
    <div class="verdict-grid">
      ${renderVerdict("摘帽概率", profile.four.probability)}
      ${renderVerdict("证据闭环", profile.four.evidence)}
      ${renderVerdict("事件催化", profile.four.catalyst)}
      ${renderVerdict("市场反映度", profile.four.market)}
    </div>
    <div class="score-row">
      <div class="score-label"><span>摘帽确定性分</span><span>${profile.scores.certainty}/100</span></div>
      <div class="bar"><i style="width:${profile.scores.certainty}%"></i></div>
    </div>
    <div class="score-row">
      <div class="score-label"><span>投资窗口分</span><span>${profile.scores.window}/100</span></div>
      <div class="bar"><i style="width:${profile.scores.window}%"></i></div>
    </div>
    <div class="info-grid">
      <div class="info-block">
        <h3>规则映射</h3>
        <p><b>规则类型：</b>${escapeHtml(profile.rule.type)}</p>
        <p><b>触发原因：</b>${escapeHtml(profile.rule.trigger)}</p>
        <p><b>撤销条件：</b>${escapeHtml(profile.rule.condition)}</p>
        <p><b>灰度：</b>${escapeHtml(profile.rule.gray)}</p>
      </div>
      <div class="info-block">
        <h3>策略标签</h3>
        <div class="tag-list">${profile.strategyTags.map(([tag, fit]) => `<span class="tag">${escapeHtml(tag)}：${escapeHtml(fit)}</span>`).join("")}</div>
        <p style="margin-top:10px;">策略标签只解释路径，不替代规则和公告证据。</p>
      </div>
      <div class="info-block">
        <h3>公告证据链</h3>
        <div class="timeline">
          ${profile.announcements
            .map(
              (item) => `
                <div class="timeline-item">
                  <strong>${escapeHtml(item.date)} · ${escapeHtml(item.title)}</strong>
                  <span>${escapeHtml(item.impact)}：${escapeHtml(item.note)}</span>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
      <div class="info-block">
        <h3>市场行为</h3>
        <p><b>快照：</b>${escapeHtml(profile.market.quoteDate)}，收盘 ${escapeHtml(profile.market.close)}，涨跌 ${escapeHtml(profile.market.change)}，换手 ${escapeHtml(profile.market.turnover)}。</p>
        <p><b>成交额：</b>${escapeHtml(profile.market.amount)}；<b>市值：</b>${escapeHtml(profile.market.mcap)}。</p>
        <p><b>行业：</b>${escapeHtml(profile.market.industry)}。</p>
        <p>${escapeHtml(profile.market.note)}</p>
      </div>
      <div class="info-block">
        <h3>历史相似案例</h3>
        <p><b>成功参照：</b>${escapeHtml(profile.similar.success)}</p>
        <p><b>失败参照：</b>${escapeHtml(profile.similar.failure)}</p>
        <p><b>待补：</b>${escapeHtml(profile.similar.gap)}</p>
      </div>
      <div class="info-block">
        <h3>风险和下一步</h3>
        <ul>${profile.risks.map((risk) => `<li>${escapeHtml(risk)}</li>`).join("")}</ul>
        <p style="margin-top:8px;"><b>下一步：</b>${escapeHtml(profile.nextAction)}</p>
      </div>
    </div>
  `;
}

function renderGenericDetail(profile, row) {
  return `
    <p class="note">这家公司目前只完成了自动初筛。v0.1 会先给出规则和策略路径，最终结论仍需公告证据链、行情窗口和人工复核补齐。</p>
    <div class="verdict-grid">
      ${renderVerdict("摘帽概率", [profile.poolCode === "D" ? "低/不适用" : "待复核", "未形成完整公告证据链。"])}
      ${renderVerdict("证据闭环", ["未闭环", "仅来自原始股票池原因字段。"])}
      ${renderVerdict("事件催化", ["待复核", "需要查看近期公告和下一关键时间点。"])}
      ${renderVerdict("市场反映度", ["待行情验证", "需要 20/60/120 日事件窗口数据。"])}
    </div>
    <div class="info-grid">
      <div class="info-block">
        <h3>原表原因</h3>
        <p><b>ST 原因：</b>${escapeHtml(row?.["ST原因"] || "无")}</p>
        <p><b>*ST 原因：</b>${escapeHtml(row?.["*ST原因"] || "无")}</p>
      </div>
      <div class="info-block">
        <h3>自动标签</h3>
        <div class="tag-list">${renderTags(profile.strategyTags, true)}</div>
      </div>
    </div>
  `;
}

function renderVerdict(label, pair) {
  return `
    <div class="verdict">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(pair[0])}</strong>
      <p>${escapeHtml(pair[1])}</p>
    </div>
  `;
}

function renderReport(profile, row, isCurated) {
  const genericReason = row
    ? `ST 原因：${row["ST原因"] || "无"}；*ST 原因：${row["*ST原因"] || "无"}。`
    : "";
  const reportBody = isCurated
    ? `
      <h4>一、核心结论</h4>
      <p>${escapeHtml(profile.oneLine)}</p>
      <h4>二、四联判断</h4>
      <ul>
        <li>摘帽概率：${escapeHtml(profile.four.probability[0])}。${escapeHtml(profile.four.probability[1])}</li>
        <li>证据闭环：${escapeHtml(profile.four.evidence[0])}。${escapeHtml(profile.four.evidence[1])}</li>
        <li>事件催化：${escapeHtml(profile.four.catalyst[0])}。${escapeHtml(profile.four.catalyst[1])}</li>
        <li>市场反映度：${escapeHtml(profile.four.market[0])}。${escapeHtml(profile.four.market[1])}</li>
      </ul>
      <h4>三、规则与公告依据</h4>
      <p>${escapeHtml(profile.rule.trigger)} ${escapeHtml(profile.rule.condition)}</p>
      <ul>${profile.announcements.map((item) => `<li>${escapeHtml(item.date)}：${escapeHtml(item.title)}。${escapeHtml(item.note)}</li>`).join("")}</ul>
      <h4>四、市场行为与历史参照</h4>
      <p>${escapeHtml(profile.market.note)} ${escapeHtml(profile.similar.gap)}</p>
      <h4>五、风险提示与下一步</h4>
      <ul>${profile.risks.map((risk) => `<li>${escapeHtml(risk)}</li>`).join("")}</ul>
      <p>${escapeHtml(profile.nextAction)}</p>
    `
    : `
      <h4>一、核心结论</h4>
      <p>该公司当前只完成自动初筛，尚未形成可输出投资判断的证据链。</p>
      <h4>二、原始原因</h4>
      <p>${escapeHtml(genericReason)}</p>
      <h4>三、下一步</h4>
      <p>需要补公告证据链、规则条款、历史相似案例和事件窗口行情。</p>
    `;

  els.reportPreview.innerHTML = `
    <h3>${escapeHtml(profile.code)} ${escapeHtml(profile.name)} 摘星摘帽研究报告</h3>
    <p class="note">v0.1 报告用于研究复核，不构成交易建议。结论来自规则、公告、历史案例和市场行为四类证据。</p>
    ${reportBody}
  `;
}

function getProfile(code, row) {
  if (curatedProfiles[code]) return curatedProfiles[code];
  const tags = row?.["策略标签"] || ["待人工归类"];
  const poolCode = inferPoolCode(row);
  return {
    code: code || row?.["证券代码"] || "待复核",
    name: row?.["证券名称"] || "待复核",
    poolCode,
    poolLabel: poolLabel(poolCode),
    strategyTags: tags,
  };
}

function inferPoolCode(row) {
  if (!row) return "C";
  const tags = row["策略标签"] || [];
  const audit = `${row["审计意见"] || ""} ${row["内控意见"] || ""}`;
  const netAsset = Number(row["净资产"]);
  const profit = Number(row["净利润"]);
  const revenue = Number(row["营业收入"]);

  if (tags.includes("重大违法风险观察")) return "D";
  if (row["状态分层"] === "ST+*ST") return "C";
  if (tags.includes("财务硬指标修复") && audit.includes("标准无保留") && netAsset > 0 && profit > 0 && revenue >= 3) return "B";
  if (tags.includes("财务硬指标修复")) return "B";
  if (tags.includes("合规整改闭环") || tags.includes("审计意见修复")) return "C";
  return "B";
}

function poolLabel(code) {
  return {
    A: "A 类重点",
    B: "B 类观察",
    C: "C 类谨慎",
    D: "D 类排除",
  }[code];
}

function classRank(code) {
  return { A: 0, B: 1, C: 2, D: 3 }[code] ?? 4;
}

function renderTags(tags, compact = false) {
  const normalized = (tags || []).map((item) => (Array.isArray(item) ? item[0] : item));
  const shown = compact ? normalized.slice(0, 2) : normalized;
  return `<div class="tag-list">${shown.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>`;
}

async function handleUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const lower = file.name.toLowerCase();
  if (lower.endsWith(".json")) {
    const data = JSON.parse(await file.text());
    if (Array.isArray(data)) {
      state.pool = data;
      state.selectedCode = data[0]?.["证券代码"] || state.selectedCode;
      els.uploadStatus.textContent = `已载入 JSON：${file.name}，共 ${data.length} 行`;
      renderAll();
    }
    return;
  }
  if (lower.endsWith(".csv")) {
    const data = parseCsv(await file.text());
    state.pool = data;
    state.selectedCode = data[0]?.["证券代码"] || state.selectedCode;
    els.uploadStatus.textContent = `已载入 CSV：${file.name}，共 ${data.length} 行`;
    renderAll();
    return;
  }
  els.uploadStatus.textContent = `已选择 ${file.name}。v0.1 页面先演示上传入口，XLSX 浏览器解析后续接入；当前仍使用本地台账抽取数据。`;
}

function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/).filter(Boolean);
  const headers = splitCsvLine(lines[0]);
  return lines.slice(1).map((line) => {
    const values = splitCsvLine(line);
    const row = {};
    headers.forEach((header, index) => {
      row[header] = values[index] ?? "";
    });
    row["证券代码"] ||= row["股票代码"];
    row["证券名称"] ||= row["股票简称"];
    row["策略标签"] = row["策略标签"] ? row["策略标签"].split(/[;；,，]/).filter(Boolean) : ["待人工归类"];
    row["状态分层"] ||= row["当前状态"] || "待复核";
    row["主规则类型"] ||= "待复核";
    return row;
  });
}

function splitCsvLine(line) {
  const result = [];
  let current = "";
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result.map((value) => value.replace(/^"|"$/g, ""));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
