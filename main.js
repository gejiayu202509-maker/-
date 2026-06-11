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

const templateFields = [
  "股票代码",
  "股票简称",
  "当前状态",
  "最新被ST/*ST时间",
  "ST原因",
  "*ST原因",
  "所属交易所",
  "所属板块",
  "当前阶段",
  "审计意见",
  "内控意见",
  "营业收入",
  "扣除后营业收入",
  "利润总额",
  "净利润",
  "扣非净利润",
  "净资产",
  "总资产",
  "总负债",
  "资产负债率",
  "股价",
  "市值",
  "所属行业",
  "数据快照日期",
  "备注",
];

const flowLabels = {
  observe: "基础观察池",
  review: "待人工复核池",
  risk: "风险池",
  exclude: "高风险排除池",
};

const deepSampleFlow = {
  "603580.SH": "observe",
  "600476.SH": "risk",
  "688496.SH": "exclude",
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
  state.pool = state.pool.map(normalizeRow);
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
    const poolMatch = pool === "all" || profile.flowCode === pool;
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
  const financial = state.pool.filter((row) => getAnalysis(row).tags.some((tag) => tag.name === "财务硬指标修复" && tag.status !== "未命中")).length;
  const review = state.pool.filter((row) => getAnalysis(row).flowCode === "review").length;
  const majorRisk = state.pool.filter((row) => getAnalysis(row).tags.some((tag) => tag.name === "重大违法风险" && tag.status !== "未命中")).length;

  const items = [
    ["当前股票池", total, "来自 2026-06-05 原始快照"],
    ["纯 ST", pureSt, "重点看摘帽"],
    ["纯 *ST", pureStar, "重点看摘星"],
    ["ST+*ST", stacked, "摘星和摘帽要分开"],
    ["财务硬指标线索", financial, "v0.2 优先自动识别类型"],
    ["人工复核样本", review, "原因模糊、多重问题或证据待补"],
    ["重大违法风险", majorRisk, "默认进入高风险复核"],
  ];
  els.kpiGrid.innerHTML = items
    .map(([label, value, note]) => `<div class="kpi"><span>${escapeHtml(label)}</span><strong>${value}</strong><span>${escapeHtml(note)}</span></div>`)
    .join("");
}

function renderFunnel() {
  const total = state.pool.length;
  const mapped = state.pool.filter((row) => getAnalysis(row).reasonQuality.mappingStatus !== "未映射").length;
  const quant = state.pool.filter((row) => getAnalysis(row).tags.some((tag) => tag.name === "财务硬指标修复" && tag.status !== "未命中")).length;
  const humanReview = state.pool.filter((row) => getAnalysis(row).needsReview).length;
  const observe = state.pool.filter((row) => getAnalysis(row).flowCode === "observe").length;

  const steps = [
    ["上传股票池", total, "先接收市场所有已挂 ST/*ST 的公司。"],
    ["原因可初拆", mapped, "把 ST/*ST 原因拆成财务、审计、内控、重整等线索。"],
    ["可量化线索", quant, "净资产、扣除后收入、利润三类硬指标优先识别。"],
    ["人工复核区", humanReview, "多重原因、重大违法、持续经营和弱来源必须复核。"],
    ["基础观察池", observe, "只代表值得进一步看，不代表高概率或交易结论。"],
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
    const pa = getProfile(a["证券代码"], a).flowCode;
    const pb = getProfile(b["证券代码"], b).flowCode;
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
          <td>${escapeHtml(profile.analysis.statusLayer || "待复核")}</td>
          <td>${renderTags(profile.strategyTags, true)}</td>
          <td>${escapeHtml(profile.analysis.reasonQuality.completionStatus)} · ${escapeHtml(profile.analysis.reasonQuality.mappingStatus)}</td>
          <td><span class="badge badge-${profile.flowCode}">${escapeHtml(profile.flowLabel)}</span></td>
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
          <p class="muted">${escapeHtml(profile.analysis.exchange || "待复核")} · ${escapeHtml(profile.analysis.board || "待复核")} · ${escapeHtml(profile.analysis.statusLayer || "待复核")}</p>
        </div>
        <span class="badge badge-${profile.flowCode}">${escapeHtml(profile.flowLabel)}</span>
      </div>

      ${isCurated ? renderCuratedDetail(profile) : renderGenericDetail(profile, row)}
    </div>
  `;
  renderReport(profile, row, isCurated);
}

function renderCuratedDetail(profile) {
  return `
    <p class="note">${escapeHtml(profile.oneLine)}</p>
    ${renderAutoSummary(profile)}
    <p class="note">下面四联判断属于三只样本的深度演示；v0.2 自动上传层只负责基础识别，最终预测策略后续继续打磨。</p>
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
    <p class="note">这家公司目前只完成 v0.2 基础自动识别：能看出它大概属于什么风险、哪些字段触发了标签、是否需要补公告和人工复核；暂不输出最终摘帽概率或投资结论。</p>
    ${renderAutoSummary(profile)}
    <div class="verdict-grid">
      ${renderVerdict("自动识别状态", [profile.flowLabel, "这是基础分流，不等于最终预测。"])}
      ${renderVerdict("原因补齐", [profile.analysis.reasonQuality.completionStatus, "上传原因只是初始线索，后续要用公告和年报校验。"])}
      ${renderVerdict("人工复核", [profile.analysis.needsReview ? "需要" : "暂不强制", (profile.analysis.reasonQuality.reviewReasons || []).join("；") || "未识别到强复核触发项。"])}
      ${renderVerdict("下一步", ["补证据链", "补戴帽公告、年报、审计/内控、问询或市场行为数据后再进入预测层。"])}
    </div>
    <div class="info-grid">
      <div class="info-block">
        <h3>原表原因</h3>
        <p><b>ST 原因：</b>${escapeHtml(row?.["ST原因"] || "无")}</p>
        <p><b>*ST 原因：</b>${escapeHtml(row?.["*ST原因"] || "无")}</p>
      </div>
      <div class="info-block">
        <h3>上传字段状态</h3>
        <p>${escapeHtml(profile.analysis.fieldStatus)}</p>
        <p style="margin-top:8px;"><b>识别口径：</b>系统优先用 ST原因、*ST原因、审计意见、内控意见、财务字段和备注初判。</p>
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

function renderAutoSummary(profile) {
  const analysis = profile.analysis;
  const topTags = analysis.tags.filter((tag) => tag.status !== "未命中").slice(0, 6);
  return `
    <div class="auto-grid">
      <div class="auto-card">
        <span>初步分流</span>
        <strong><span class="badge badge-${analysis.flowCode}">${escapeHtml(analysis.flowLabel)}</span></strong>
      </div>
      <div class="auto-card">
        <span>原因补齐状态</span>
        <strong>${escapeHtml(analysis.reasonQuality.completionStatus)}</strong>
      </div>
      <div class="auto-card">
        <span>规则映射状态</span>
        <strong>${escapeHtml(analysis.reasonQuality.mappingStatus)}</strong>
      </div>
    </div>
    <div class="info-grid">
      <div class="info-block">
        <h3>基础标签层</h3>
        <div class="mini-list">
          ${
            topTags.length
              ? topTags
                  .map(
                    (tag) => `
                      <div class="signal-row">
                        <strong>${escapeHtml(tag.name)} · ${escapeHtml(tag.status)} · ${escapeHtml(tag.progress)}</strong>
                        <span>${escapeHtml(tag.note || "根据上传字段和原因关键词初判。")}</span>
                        <span>触发：${escapeHtml(tag.triggers.join("；") || "待补字段")}</span>
                      </div>
                    `,
                  )
                  .join("")
              : `<p class="muted">暂未命中明显标签，需要补充 ST/*ST 原因、审计意见或财务字段。</p>`
          }
        </div>
      </div>
      <div class="info-block">
        <h3>原因结构化</h3>
        <p><b>原因大类：</b>${escapeHtml(analysis.reasonQuality.reasonClass)}</p>
        <p><b>公告证据强度：</b>${escapeHtml(analysis.reasonQuality.evidenceStrength)}</p>
        <p><b>是否多重原因：</b>${analysis.reasonQuality.isMultiple ? "是" : "否"}</p>
        <div class="reason-list">
          ${(analysis.reasonQuality.reviewReasons || []).map((item) => `<div class="reason-item">${escapeHtml(item)}</div>`).join("") || `<div class="reason-item">暂无强制复核提示。</div>`}
        </div>
      </div>
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
      <p>该公司当前只完成 v0.2 基础标签识别，初步分流为：${escapeHtml(profile.flowLabel)}。该结论不是摘帽概率，也不是交易建议。</p>
      <h4>二、自动识别结果</h4>
      <p>原因补齐状态：${escapeHtml(profile.analysis.reasonQuality.completionStatus)}；规则映射状态：${escapeHtml(profile.analysis.reasonQuality.mappingStatus)}；原因大类：${escapeHtml(profile.analysis.reasonQuality.reasonClass)}。</p>
      <h4>三、原始原因</h4>
      <p>${escapeHtml(genericReason)}</p>
      <h4>四、下一步</h4>
      <p>需要补戴帽公告、年报、审计/内控、问询或监管文件，再接入市场行为和历史相似案例，才能进入预测层。</p>
    `;

  els.reportPreview.innerHTML = `
    <h3>${escapeHtml(profile.code)} ${escapeHtml(profile.name)} 摘星摘帽研究报告</h3>
    <p class="note">v0.2 报告用于研究复核，不构成交易建议。当前报告先展示结构化逻辑，最终版本会继续补图表、行情窗口和历史相似案例。</p>
    ${reportBody}
  `;
}

function getProfile(code, row) {
  const normalized = normalizeRow(row || {});
  const analysis = getAnalysis(normalized, code);
  if (curatedProfiles[code]) {
    const curated = curatedProfiles[code];
    const flowCode = deepSampleFlow[code] || analysis.flowCode;
    return {
      ...curated,
      analysis: {
        ...analysis,
        flowCode,
        flowLabel: flowLabels[flowCode],
      },
      flowCode,
      flowLabel: flowLabels[flowCode],
      strategyTags: curated.strategyTags,
    };
  }
  const tags = analysis.tags.filter((tag) => tag.status !== "未命中").map((tag) => tag.name);
  const flowCode = analysis.flowCode;
  return {
    code: code || row?.["证券代码"] || "待复核",
    name: row?.["证券名称"] || "待复核",
    analysis,
    flowCode,
    flowLabel: flowLabels[flowCode],
    strategyTags: tags.length ? tags : ["待补充字段"],
  };
}

function classRank(code) {
  return { observe: 0, review: 1, risk: 2, exclude: 3 }[code] ?? 4;
}

function renderTags(tags, compact = false) {
  const normalized = (tags || []).map((item) => (Array.isArray(item) ? item[0] : item));
  const shown = compact ? normalized.slice(0, 2) : normalized;
  return `<div class="tag-list">${shown.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>`;
}

function normalizeRow(row) {
  const next = { ...row };
  next["证券代码"] ||= next["股票代码"] || next["代码"] || "";
  next["证券名称"] ||= next["股票简称"] || next["简称"] || "";
  next["ST原因"] = normalizeEmpty(next["ST原因"]);
  next["*ST原因"] = normalizeEmpty(next["*ST原因"]);
  next["当前状态"] ||= next["ST or *ST"] || (String(next["证券名称"]).includes("*ST") ? "*ST" : String(next["证券名称"]).includes("ST") ? "ST" : "待复核");
  next["状态分层"] = inferStatusLayer(next);
  next["所属交易所"] ||= inferExchange(next["证券代码"]);
  next["所属板块"] ||= inferBoard(next["证券代码"]);
  next["策略标签"] = Array.isArray(next["策略标签"]) ? next["策略标签"] : splitTags(next["策略标签"]);
  next.__analysis = analyzeRow(next);
  return next;
}

function getAnalysis(row, code = row?.["证券代码"]) {
  if (row?.__analysis) return row.__analysis;
  const normalized = normalizeRow({ ...row, 证券代码: code || row?.["证券代码"] });
  return normalized.__analysis;
}

function analyzeRow(row) {
  const text = [
    row["ST原因"],
    row["*ST原因"],
    row["当前阶段"],
    row["审计意见"],
    row["内控意见"],
    row["备注"],
  ]
    .filter(Boolean)
    .join("；");
  const lowerText = text.toLowerCase();
  const tags = [
    tagFinancial(row, text),
    tagAudit(row, text),
    tagInternalControl(row, text),
    tagOccupationGuarantee(row, text),
    tagRestructuring(row, text),
    tagStateIndustry(row, text),
    tagMajorViolation(row, text),
    tagGoingConcern(row, text),
  ];
  const reasonQuality = analyzeReasonQuality(row, tags, text);
  const flowCode = inferFlow(tags, reasonQuality, row, lowerText);
  return {
    statusLayer: row["状态分层"],
    exchange: row["所属交易所"],
    board: row["所属板块"],
    tags,
    flowCode,
    flowLabel: flowLabels[flowCode],
    reasonQuality,
    needsReview: reasonQuality.needsReview || tags.some((tag) => tag.status === "待人工复核"),
    fieldStatus: fieldStatus(row),
  };
}

function baseTag(name) {
  return { name, status: "未命中", progress: "未命中", triggers: [], note: "" };
}

function tagFinancial(row, text) {
  const tag = baseTag("财务硬指标修复");
  const revenue = parseNumber(row["扣除后营业收入"] || row["营业收入"]);
  const netAsset = parseNumber(row["净资产"]);
  const profits = [row["利润总额"], row["净利润"], row["扣非净利润"]].map(parseNumber).filter((value) => value !== null);
  const minProfit = profits.length ? Math.min(...profits) : null;
  const threshold = revenueThreshold(row["所属板块"]);
  const hasFinancialText = /净资产|营业收入|扣除后|扣非|净利润|利润总额|财务类|亏损|收入低于|收入达标|扭亏|业绩预告/.test(text);
  if (!hasFinancialText && revenue === null && netAsset === null && minProfit === null) return tag;

  tag.triggers.push("财务字段/财务类原因");
  if (/净资产为负|收入低于|营业收入低于|扣非.*负|亏损|触及财务类退市/.test(text) || netAsset < 0 || (revenue !== null && revenue < threshold && minProfit !== null && minProfit < 0)) {
    tag.status = "命中负向";
    tag.progress = "风险未消除";
    tag.note = "当前仍命中净资产、收入利润组合或亏损类风险线索。";
    return tag;
  }
  const positiveCount = [netAsset !== null && netAsset > 0, revenue !== null && revenue >= threshold, minProfit !== null && minProfit >= 0].filter(Boolean).length;
  if (/预计|预告|可能|有望|改善|扭亏/.test(text) && positiveCount < 2) {
    tag.status = "待人工复核";
    tag.progress = "弱信号";
    tag.note = "出现财务改善语义，但缺少完整硬指标确认。";
  } else if (positiveCount >= 3) {
    tag.status = "命中正向";
    tag.progress = "强推进";
    tag.note = "净资产、收入和利润字段初步支持财务硬指标修复。";
  } else if (positiveCount > 0 || /转正|达标|不触及|已满足/.test(text)) {
    tag.status = "命中正向";
    tag.progress = "推进中";
    tag.note = "部分财务字段或原因文本显示改善，仍需年报、审计和收入扣除专项说明确认。";
  } else {
    tag.status = "待人工复核";
    tag.progress = "待补字段";
    tag.note = "命中财务类原因，但缺少足够数值字段判断修复进度。";
  }
  return tag;
}

function tagAudit(row, text) {
  const tag = baseTag("审计意见修复");
  const audit = String(row["审计意见"] || "");
  if (!audit && !/审计|非标|保留意见|无法表示|否定意见|标准无保留|强调事项/.test(text)) return tag;
  tag.triggers.push("审计意见/审计相关原因");
  if (/无法表示|否定意见/.test(audit) || /无法表示|否定意见/.test(text)) {
    return { ...tag, status: "命中负向", progress: "风险未消除", note: "无法表示或否定意见通常是强风险项。" };
  }
  if (/强调事项/.test(audit) || /强调事项/.test(text)) {
    return { ...tag, status: "待人工复核", progress: "推进中", note: "带强调事项段不等于非标，但持续经营等内容需要复核。" };
  }
  if (/标准无保留|无保留意见|非标事项已消除/.test(audit + text)) {
    return { ...tag, status: "命中正向", progress: "强推进", note: "审计意见初步支持风险修复。" };
  }
  if (/保留/.test(audit) || /保留意见/.test(text)) {
    return { ...tag, status: "命中负向", progress: "待修复", note: "保留意见仍需看非标事项是否消除。" };
  }
  return { ...tag, status: "待人工复核", progress: "待补字段", note: "审计相关信息不完整。" };
}

function tagInternalControl(row, text) {
  const tag = baseTag("内控/合规整改");
  const ic = String(row["内控意见"] || "");
  if (!ic && !/内控|内部控制|整改|监管函|问询函|处罚|规范运作/.test(text)) return tag;
  tag.triggers.push("内控意见/整改原因");
  if (/否定意见|无法表示|重大缺陷|整改尚未完成/.test(ic + text)) {
    return { ...tag, status: "命中负向", progress: "风险未消除", note: "内控否定、无法表示或重大缺陷需要后续审计确认修复。" };
  }
  if (/标准无保留|内部控制有效|重大缺陷已整改|整改完成|相关风险已消除/.test(ic + text)) {
    return { ...tag, status: "命中正向", progress: "强推进", note: "内控或合规整改出现正向证据。" };
  }
  if (/正在整改|积极整改|承诺|拟|部分整改/.test(text)) {
    return { ...tag, status: "待人工复核", progress: "弱信号", note: "公司自述或推进中信号，需要公告和第三方确认。" };
  }
  return { ...tag, status: "待人工复核", progress: "待补字段", note: "内控/合规字段不完整。" };
}

function tagOccupationGuarantee(row, text) {
  const tag = baseTag("资金占用/违规担保");
  if (!/资金占用|非经营性占用|违规担保|担保责任|关联方占用/.test(text)) return tag;
  tag.triggers.push("资金占用/违规担保原因");
  if (/全部清偿|已清偿|已全部解除|担保责任已解除|无需承担责任|风险已消除/.test(text)) {
    return { ...tag, status: "命中正向", progress: "基本闭环", note: "占用或担保事项出现实质解除语义，仍需专项说明或律师意见确认。" };
  }
  if (/尚未清偿|尚未解除|余额|未解决|仍存在/.test(text)) {
    return { ...tag, status: "命中负向", progress: "风险未消除", note: "占用或担保仍未完全解决。" };
  }
  return { ...tag, status: "待人工复核", progress: "推进中", note: "占用/担保事项需要确认金额、责任主体和解除证据。" };
}

function tagRestructuring(row, text) {
  const tag = baseTag("司法重整");
  if (!/重整|预重整|债权人会议|管理人|投资人|债务重组|法院裁定/.test(text)) return tag;
  tag.triggers.push("重整/债务重组原因");
  if (/执行完毕|法院确认执行完毕|投资款到账/.test(text)) {
    return { ...tag, status: "命中正向", progress: "基本闭环", note: "重整执行完毕或资金落地是强前置信号。" };
  }
  if (/法院裁定受理|法院受理|计划获批准|债权人会议通过|投资人确定/.test(text)) {
    return { ...tag, status: "命中正向", progress: "强推进", note: "重整进入法定关键节点，但执行完毕前不能视为闭环。" };
  }
  if (/失败|终止|被驳回|投资人退出|未通过/.test(text)) {
    return { ...tag, status: "命中负向", progress: "风险暴露", note: "重整失败或终止通常进入风险池。" };
  }
  return { ...tag, status: "待人工复核", progress: "弱信号", note: "预重整、招募投资人或意向阶段只能算弱信号。" };
}

function tagStateIndustry(row, text) {
  const tag = baseTag("国资/产业方入主");
  if (!/国资|地方国资|央企|产业投资人|战略投资人|控制权变更|实控人变更|股权转让|资产注入/.test(text)) return tag;
  tag.triggers.push("控制权/投资人线索");
  if (/过户完成|实控人变更完成|资金到账|董事会改组完成|资产注入完成/.test(text)) {
    return { ...tag, status: "命中正向", progress: "强推进", note: "入主动作已接近落地，但仍要看是否解决原戴帽原因。" };
  }
  if (/终止|失败|冻结|争议|投资人退出/.test(text)) {
    return { ...tag, status: "命中负向", progress: "风险暴露", note: "控制权或投资人路径出现负面信号。" };
  }
  return { ...tag, status: "待人工复核", progress: "弱信号", note: "国资/产业方只是修复能力变量，不能直接等于摘帽概率。" };
}

function tagMajorViolation(row, text) {
  const tag = baseTag("重大违法风险");
  if (!/重大违法|行政处罚|事先告知书|证监会立案|立案调查|虚假记载|财务造假|欺诈发行|强制退市/.test(text)) return tag;
  tag.triggers.push("重大违法/监管处罚线索");
  if (/不触及重大违法|调查终结|风险已消除/.test(text)) {
    return { ...tag, status: "待人工复核", progress: "风险待确认", note: "处罚或调查风险需核对正式监管文件。" };
  }
  return { ...tag, status: "命中负向", progress: "高风险", note: "重大违法或立案调查未明时，不适合进入常规摘帽机会池。" };
}

function tagGoingConcern(row, text) {
  const tag = baseTag("持续经营不确定性");
  if (!/持续经营|经营能力|主营业务停滞|债务逾期|现金流/.test(text)) return tag;
  tag.triggers.push("持续经营相关表述");
  if (/已消除|能力改善|业务恢复|债务逾期已解决|现金流改善/.test(text)) {
    return { ...tag, status: "命中正向", progress: "推进中", note: "持续经营风险出现改善语义，仍需审计和财务验证。" };
  }
  if (/重大不确定性|存在不确定性|业务停滞|大额债务逾期|资产被冻结/.test(text)) {
    return { ...tag, status: "命中负向", progress: "风险未消除", note: "持续经营不确定性通常不好量化，需审计和经营证据复核。" };
  }
  return { ...tag, status: "待人工复核", progress: "待补证据", note: "持续经营相关信息需要人工判断。" };
}

function analyzeReasonQuality(row, tags, text) {
  const st = hasContent(row["ST原因"]);
  const star = hasContent(row["*ST原因"]);
  const reviewReasons = [];
  if (!st && !star) reviewReasons.push("ST原因和*ST原因均未补齐，需要查原始戴帽公告。");
  if (/财务问题|年报非标|其他原因|风险事项|待复核/.test(text) && text.length < 40) reviewReasons.push("原因表述偏模糊，需要拆成具体触发事实。");
  if (st && star) reviewReasons.push("同时存在 ST 与 *ST 原因，需要分别判断摘星和摘帽。");
  if (tags.some((tag) => ["重大违法风险", "资金占用/违规担保", "持续经营不确定性"].includes(tag.name) && tag.status !== "未命中")) {
    reviewReasons.push("命中监管、治理或持续经营类问题，不能只靠自动规则下结论。");
  }
  const reasonClass = tags
    .filter((tag) => tag.status !== "未命中")
    .map((tag) => tag.name)
    .slice(0, 4)
    .join(" / ") || "待补原因";
  const completionStatus = !st && !star ? "未补齐" : reviewReasons.length ? "部分补齐" : "基本补齐";
  const mappingStatus = !st && !star ? "未映射" : reviewReasons.length ? "部分映射" : "待公告校验";
  const evidenceStrength = "弱：来自上传表字段，尚未接入原始公告链接";
  return {
    completionStatus,
    mappingStatus,
    evidenceStrength,
    reasonClass,
    isMultiple: st && star,
    needsReview: reviewReasons.length > 0,
    reviewReasons,
  };
}

function inferFlow(tags, reasonQuality) {
  const hit = (name, status) => tags.some((tag) => tag.name === name && (!status || tag.status === status));
  const negativeCount = tags.filter((tag) => tag.status === "命中负向").length;
  const positiveCount = tags.filter((tag) => tag.status === "命中正向").length;
  const reviewCount = tags.filter((tag) => tag.status === "待人工复核").length;
  if (hit("重大违法风险", "命中负向")) return "exclude";
  if (negativeCount >= 2 || hit("持续经营不确定性", "命中负向")) return "risk";
  if (reviewCount || reasonQuality.needsReview) return "review";
  if (positiveCount) return "observe";
  return "review";
}

function inferStatusLayer(row) {
  const st = hasContent(row["ST原因"]);
  const star = hasContent(row["*ST原因"]);
  if (st && star) return "ST+*ST";
  if (star) return "纯*ST";
  if (st) return "纯ST";
  const status = row["当前状态"] || row["ST or *ST"];
  if (status === "*ST") return "纯*ST";
  if (status === "ST") return "纯ST";
  return "待复核";
}

function inferExchange(code) {
  const value = String(code || "").toUpperCase();
  if (value.endsWith(".SH")) return "上交所";
  if (value.endsWith(".SZ")) return "深交所";
  if (value.endsWith(".BJ")) return "北交所";
  return "待复核";
}

function inferBoard(code) {
  const value = String(code || "").toUpperCase().replace(/\.(SH|SZ|BJ)$/i, "");
  if (/^688/.test(value)) return "科创板";
  if (/^(600|601|603|605)/.test(value)) return "主板";
  if (/^(300|301)/.test(value)) return "创业板";
  if (/^(000|001|002|003)/.test(value)) return "主板";
  if (/^[89]/.test(value)) return "北交所";
  return "待复核";
}

function hasContent(value) {
  const text = String(value ?? "").trim();
  return Boolean(text && !["无", "暂无", "未披露", "null", "undefined", "-", "—"].includes(text));
}

function normalizeEmpty(value) {
  return hasContent(value) ? String(value).trim() : "";
}

function splitTags(value) {
  if (Array.isArray(value)) return value;
  return String(value || "")
    .split(/[;；,，/、]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseNumber(value) {
  if (value === null || value === undefined || value === "") return null;
  let text = String(value).trim();
  const isAccountingNegative = /^[(（].+[)）]$/.test(text);
  text = text.replace(/[,%亿元万约\s]/g, "").replace(/[()（）]/g, "");
  if (isAccountingNegative) text = `-${text}`;
  if (!text || text === "-") return null;
  const number = Number(text);
  return Number.isFinite(number) ? number : null;
}

function revenueThreshold(board) {
  return board === "科创板" || board === "创业板" ? 1 : 3;
}

function fieldStatus(row) {
  const filled = templateFields.filter((field) => hasContent(row[field] || row[field.replace("股票", "证券")])).length;
  return `v0.2 模板字段已识别 ${filled}/${templateFields.length} 个；字段越完整，自动识别越稳定。`;
}

async function handleUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const lower = file.name.toLowerCase();
  if (lower.endsWith(".json")) {
    const data = JSON.parse(await file.text());
    if (Array.isArray(data)) {
      state.pool = data.map(normalizeRow);
      state.selectedCode = state.pool[0]?.["证券代码"] || state.selectedCode;
      els.uploadStatus.textContent = `已载入 JSON：${file.name}，共 ${data.length} 行`;
      renderAll();
    }
    return;
  }
  if (lower.endsWith(".csv")) {
    const data = parseCsv(await file.text()).map(normalizeRow);
    state.pool = data;
    state.selectedCode = state.pool[0]?.["证券代码"] || state.selectedCode;
    els.uploadStatus.textContent = `已载入 CSV：${file.name}，共 ${data.length} 行`;
    renderAll();
    return;
  }
  els.uploadStatus.textContent = `已选择 ${file.name}。v0.2 当前先稳定支持 CSV/JSON；请把 Excel 按模板另存为 CSV 后上传。`;
}

function parseCsv(text) {
  const rawLines = text.trim().split(/\r?\n/).filter(Boolean);
  const headerIndex = rawLines.findIndex((line) => {
    const columns = splitCsvLine(line).map((column) => column.replace(/^\uFEFF/, "").trim());
    return columns.includes("证券代码") || columns.includes("股票代码");
  });
  const lines = headerIndex >= 0 ? rawLines.slice(headerIndex) : rawLines;
  const headers = splitCsvLine(lines[0]).map((header) => header.replace(/^\uFEFF/, "").trim());
  return lines.slice(1).filter((line) => splitCsvLine(line).some(hasContent)).map((line) => {
    const values = splitCsvLine(line);
    const row = {};
    headers.forEach((header, index) => {
      row[header] = values[index] ?? "";
    });
    row["证券代码"] ||= row["股票代码"];
    row["证券名称"] ||= row["股票简称"];
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
