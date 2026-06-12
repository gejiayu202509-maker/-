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
  archive: "非当前样本已排除",
};

const deepSampleFlow = {
  "603580.SH": "observe",
  "600476.SH": "risk",
  "688496.SH": "exclude",
  "002217.SZ": "observe",
  "000656.SZ": "review",
};

Object.assign(curatedProfiles, {
  "002217.SZ": {
    code: "002217.SZ",
    name: "合力泰",
    poolCode: "A",
    poolLabel: "A/A+ 候选",
    poolNote: "高确定性样本骨架，待公告核验",
    strategyTags: [
      ["财务硬指标修复", "高适用"],
      ["审计意见修复", "待核验"],
      ["合规整改闭环", "待核验"],
      ["司法重整节点", "待确认"],
    ],
    four: {
      probability: ["高/待核验", "2025 年关键财务指标较 2024 年明显改善，且存在撤销风险警示节点线索。"],
      evidence: ["待公告核验", "财务数据已部分接入，公告链仍需回到巨潮/交易所原文核验。"],
      catalyst: ["强", "历史部门提示存在申请撤销和结果节点，适合作为高确定性窗口样本。"],
      market: ["低/待行情验证", "轻量行情显示申请公告前 20 日未明显上涨，但缺 T-60/T-120 和相对收益。"],
    },
    scores: { certainty: 82, window: 70 },
    rule: {
      type: "深交所主板 · 财务硬指标修复待映射",
      trigger: "原风险警示原因需核验原实施公告。",
      condition: "需核验年报、审计意见、撤销申请和交易所同意撤销公告是否完整覆盖原原因。",
      gray: "公告链未核验前，不能写成已闭环成功案例。",
    },
    announcements: [
      {
        date: "2025-04-29",
        title: "撤销风险警示申请节点待核验",
        impact: "强正面线索",
        note: "历史部门提示该日存在申请节点，需核验公告标题、规则条款和申请理由。",
      },
      {
        date: "2025-06-23",
        title: "撤销风险警示结果节点待核验",
        impact: "结果确认线索",
        note: "需确认是否正式撤销风险警示，以及是否仍有其他风险警示。",
      },
    ],
    market: {
      quoteDate: "事件窗口试跑",
      close: "待补",
      change: "T-20：-4.46% / -0.93%",
      turnover: "待补",
      amount: "待补",
      mcap: "待补",
      industry: "电子--光学光电子--面板",
      note: "初步看公告前未明显抢跑，需补 T-60/T-120、成交额、换手、相对行业收益。",
    },
    similar: {
      success: "财务修复 + 申请撤销 + 结果兑现型历史样本。",
      failure: "需重点防止公告链不完整、原风险原因未全部解除或只是部分撤销。",
      gap: "缺原始公告、年报审计、完整行情窗口。",
    },
    risks: ["公告链未核验", "原戴帽原因未结构化映射", "行情窗口未完整计算"],
    nextAction: "核验 2025-04-29 与 2025-06-23 公告原文，补 T-60/T-120/T+20/T+60 行情窗口。",
    oneLine: "合力泰用于展示高确定性/接近兑现型样本，但目前仍是样本骨架，不是最终结论。",
  },
  "000656.SZ": {
    code: "000656.SZ",
    name: "*ST金科",
    poolCode: "B",
    poolLabel: "B 类修复观察",
    poolNote: "当前不完全具备，但未来修复线索强",
    strategyTags: [
      ["司法重整节点", "高适用"],
      ["财务硬指标修复", "中适用"],
      ["持续经营修复", "待核验"],
      ["行业景气", "偏弱"],
    ],
    four: {
      probability: ["中低/修复观察", "净资产由负转正、负债结构改善，但扣非利润仍大幅亏损。"],
      evidence: ["部分闭环", "财务修复线索已出现，是否构成完整撤销条件仍待公告和规则核验。"],
      catalyst: ["中到强", "重整/撤销部分风险警示节点可能提升关注度。"],
      market: ["低/待行情验证", "关键节点前 20 日没有明显上涨，但需补长期窗口和行业相对表现。"],
    },
    scores: { certainty: 48, window: 60 },
    rule: {
      type: "深交所主板 · 重整修复/财务修复待映射",
      trigger: "原 ST/*ST 原因需回到实施公告核验。",
      condition: "需确认净资产转正、扣非亏损、持续经营和其他风险警示之间的规则关系。",
      gray: "可能只是部分风险解除，不等于完整摘帽。",
    },
    announcements: [
      {
        date: "2025-12-23",
        title: "申请/重整相关节点待核验",
        impact: "正面线索",
        note: "需确认公告性质和对应风险原因。",
      },
      {
        date: "2025-12-26",
        title: "撤销部分风险警示/继续风险警示待核验",
        impact: "正面但有冲突",
        note: "适合验证系统能否区分“当前不具备”和“未来有修复路径”。",
      },
    ],
    market: {
      quoteDate: "事件窗口试跑",
      close: "待补",
      change: "T-20：-10.34% / -9.03%",
      turnover: "待补",
      amount: "待补",
      mcap: "待补",
      industry: "房地产--房地产开发--住宅开发",
      note: "初步看公告前没有过热，但房地产行业和扣非亏损会压制窗口质量。",
    },
    similar: {
      success: "重整执行、净资产转正、债务结构改善后的修复观察样本。",
      failure: "扣非利润继续大幅亏损、持续经营未消除、只撤销部分风险警示的延迟样本。",
      gap: "缺重整公告链、持续经营说明、完整行情窗口和行业相对收益。",
    },
    risks: ["扣非净利润仍大幅为负", "可能仍继续 *ST", "房地产行业景气偏弱", "公告性质未核验"],
    nextAction: "核验原实施公告、重整执行和撤销风险警示公告，判断它是 B 类观察还是风险池。",
    oneLine: "金科用于展示 B 类修复观察：当前资格不完整，但修复线索强，不能简单排除。",
  },
});

const v3Research = {
  "603580.SH": {
    dataStatus: [
      ["上传", "已接入"],
      ["规则", "部分映射"],
      ["公告", "基本核验"],
      ["财务", "已接入"],
      ["行情", "待窗口"],
      ["历史", "待匹配"],
    ],
    trackA: {
      eligibility: "基本具备",
      repair: "强",
      certainty: "高",
      blockers: ["交易所审核结果尚未公告", "公告前市场反映度未计算"],
      liftNodes: ["已出现：年报、审计、撤销申请", "待公告：交易所审核结果"],
      summary: "当前更接近高确定性样本，剩余不确定性主要是交易所审核和市场是否已提前反映。",
    },
    trackB: {
      windowType: "高确定性窗口",
      reflection: "待行情验证",
      crowding: "待成交额/换手率",
      catalyst: "强",
      industry: "中性",
      liquidity: "待判断",
      summary: "需要用公告前 20/60/120 日行情判断是 A 还是 A-。",
    },
    bucket: "A",
  },
  "600476.SH": {
    dataStatus: [
      ["上传", "已接入"],
      ["规则", "部分映射"],
      ["公告", "已确认风险"],
      ["财务", "待修复"],
      ["行情", "待窗口"],
      ["历史", "待匹配"],
    ],
    trackA: {
      eligibility: "明显不具备",
      repair: "弱/无",
      certainty: "低",
      blockers: ["净资产为负", "持续经营能力存在不确定性", "撤销条件未形成"],
      liftNodes: ["待公告：2026 年定期报告", "待公告：审计意见和持续经营说明"],
      summary: "当前是风险确认样本，不是摘帽机会样本；后续需看财务和持续经营是否改善。",
    },
    trackB: {
      windowType: "风险观察窗口",
      reflection: "待行情验证",
      crowding: "待判断",
      catalyst: "风险催化强",
      industry: "中性",
      liquidity: "待判断",
      summary: "短期不输出机会窗口，先监控修复证据是否出现。",
    },
    bucket: "D",
  },
  "688496.SH": {
    dataStatus: [
      ["上传", "已接入"],
      ["规则", "重大违法待核"],
      ["公告", "风险公告已出现"],
      ["财务", "非核心"],
      ["行情", "不作机会依据"],
      ["历史", "应匹配失败反例"],
    ],
    trackA: {
      eligibility: "明显不具备",
      repair: "负向",
      certainty: "低",
      blockers: ["重大违法强制退市风险未定", "内控否定意见未消除", "行政处罚决定未落地"],
      liftNodes: ["待公告：行政处罚决定书", "待公告：内控整改和风险解除"],
      summary: "当前核心是重大违法风险，不属于常规摘帽机会池。",
    },
    trackB: {
      windowType: "风险监控窗口",
      reflection: "不作为机会依据",
      crowding: "低价高换手需警惕",
      catalyst: "风险催化强",
      industry: "不适用",
      liquidity: "高风险",
      summary: "即使短期异动，也应先作为重大风险样本处理。",
    },
    bucket: "D",
  },
  "002217.SZ": {
    dataStatus: [
      ["上传", "样本骨架"],
      ["规则", "待映射"],
      ["公告", "待核验"],
      ["财务", "部分接入"],
      ["行情", "部分试跑"],
      ["历史", "待入库"],
    ],
    trackA: {
      eligibility: "基本具备",
      repair: "强",
      certainty: "高/待核验",
      blockers: ["公告链未核验", "撤销条件条款未映射"],
      liftNodes: ["已出现：财务改善、申请撤销节点", "待核验：撤销结果和正式简称变更"],
      summary: "更接近高确定性路径，但必须先用公告原文确认。",
    },
    trackB: {
      windowType: "高确定性窗口",
      reflection: "低/待完整行情",
      crowding: "待成交额/换手率",
      catalyst: "强",
      industry: "电子行业，待景气校准",
      liquidity: "待判断",
      summary: "轻量行情显示申请公告前没有明显抢跑，适合补完整事件窗口。",
    },
    bucket: "A+候选",
  },
  "000656.SZ": {
    dataStatus: [
      ["上传", "样本骨架"],
      ["规则", "待映射"],
      ["公告", "待核验"],
      ["财务", "部分接入"],
      ["行情", "部分试跑"],
      ["历史", "待入库"],
    ],
    trackA: {
      eligibility: "暂不具备/明显不具备",
      repair: "强",
      certainty: "中低，修复观察",
      blockers: ["扣非利润仍大幅为负", "可能仍继续 *ST", "持续经营和行业风险待复核"],
      liftNodes: ["已出现：净资产转正、负债率下降", "待公告：重整执行、年报审计、是否完整撤销风险警示"],
      summary: "当前资格不完整，但修复线索强，应作为 B 类观察而不是直接排除。",
    },
    trackB: {
      windowType: "修复预期窗口",
      reflection: "低/待完整行情",
      crowding: "待成交额/换手率",
      catalyst: "中到强",
      industry: "房地产偏弱",
      liquidity: "待判断",
      summary: "如果公告链确认修复线索真实，可能有修复预期窗口；但行业和扣非亏损压制明显。",
    },
    bucket: "B",
  },
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
  downloadTemplate: document.querySelector("#downloadTemplateBtn"),
  downloadExample: document.querySelector("#downloadExampleBtn"),
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
  els.downloadTemplate?.addEventListener("click", downloadUploadTemplate);
  els.downloadExample?.addEventListener("click", downloadUploadExample);
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
    const isCurrent = profile.analysis.sampleType?.isCurrent;
    const textMatch = !keyword || `${code} ${name}`.toLowerCase().includes(keyword);
    const poolMatch =
      pool === "all"
        ? isCurrent
        : pool === "archive"
          ? !isCurrent
          : isCurrent && profile.flowCode === pool;
    const strategyMatch =
      strategy === "all" || (profile.strategyTags || []).some((item) => item[0] === strategy || item === strategy);
    return textMatch && poolMatch && strategyMatch;
  });
  renderTable();
}

function renderKpis() {
  const total = state.pool.length;
  const activeRows = state.pool.filter((row) => getAnalysis(row).sampleType.isCurrent);
  const archived = total - activeRows.length;
  const pureSt = activeRows.filter((row) => row["状态分层"] === "纯ST").length;
  const pureStar = activeRows.filter((row) => row["状态分层"] === "纯*ST").length;
  const stacked = activeRows.filter((row) => row["状态分层"] === "ST+*ST").length;
  const financial = activeRows.filter((row) => getAnalysis(row).tags.some((tag) => tag.name === "财务硬指标修复" && tag.status !== "未命中")).length;
  const review = activeRows.filter((row) => getAnalysis(row).needsReview).length;
  const observe = activeRows.filter((row) => getAnalysis(row).flowCode === "observe").length;
  const majorRisk = activeRows.filter((row) => getAnalysis(row).tags.some((tag) => tag.name === "重大违法风险" && tag.status !== "未命中")).length;

  const items = [
    ["上传总行数", total, "先做样本清洗"],
    ["进入当前池", activeRows.length, "仅保留当前 ST/*ST"],
    ["排除非当前", archived, "正常、退市或历史样本"],
    ["纯 ST", pureSt, "重点看摘帽"],
    ["纯 *ST", pureStar, "重点看摘星"],
    ["ST+*ST", stacked, "摘星和摘帽要分开"],
    ["财务硬指标线索", financial, "上传层优先自动识别类型"],
    ["基础观察池", observe, "有线索，待证据补齐"],
    ["需复核提示", review, "提示待补项，不等于无判断"],
    ["重大违法风险", majorRisk, "默认进入高风险复核"],
  ];
  els.kpiGrid.innerHTML = items
    .map(([label, value, note]) => `<div class="kpi"><span>${escapeHtml(label)}</span><strong>${value}</strong><span>${escapeHtml(note)}</span></div>`)
    .join("");
}

function renderFunnel() {
  const total = state.pool.length;
  const activeRows = state.pool.filter((row) => getAnalysis(row).sampleType.isCurrent);
  const archived = total - activeRows.length;
  const mapped = activeRows.filter((row) => getAnalysis(row).reasonQuality.mappingStatus !== "未映射").length;
  const quant = activeRows.filter((row) => getAnalysis(row).tags.some((tag) => tag.name === "财务硬指标修复" && tag.status !== "未命中")).length;
  const humanReview = activeRows.filter((row) => getAnalysis(row).needsReview).length;
  const observe = activeRows.filter((row) => getAnalysis(row).flowCode === "observe").length;

  const steps = [
    ["上传原始表", total, "允许混入脏样本，但先做清洗。"],
    ["进入当前池", activeRows.length, "只分析当前仍戴帽 ST/*ST 公司。"],
    ["排除非当前", archived, "正常、退市、历史样本不参与当前筛选。"],
    ["原因可初拆", mapped, "把 ST/*ST 原因拆成财务、审计、内控、重整等线索。"],
    ["可量化线索", quant, "净资产、扣除后收入、利润三类硬指标优先识别。"],
    ["待补证据提示", humanReview, "人工复核是提示项，不直接吞掉初判。"],
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
    .map((code) => `<option value="${code}">${code} ${curatedProfiles[code].name} · v0.3样本</option>`)
    .join("");
  const poolOptions = state.pool
    .filter((row) => !curatedProfiles[row["证券代码"]] && getAnalysis(row).sampleType.isCurrent)
    .map((row) => `<option value="${escapeHtml(row["证券代码"])}">${escapeHtml(row["证券代码"])} ${escapeHtml(row["证券名称"])} · 基础诊断</option>`)
    .join("");
  els.stockSelect.innerHTML = `
    <optgroup label="深度样本 / v0.3骨架">
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
      const research = getResearchState(profile, row);
      const code = row["证券代码"];
      const active = code === state.selectedCode ? "active-row" : "";
      return `
        <tr class="${active}" data-code="${escapeHtml(code)}">
          <td><b>${escapeHtml(code)}</b></td>
          <td>${escapeHtml(row["证券名称"] || "")}</td>
          <td>${escapeHtml(profile.analysis.sampleType.isCurrent ? profile.analysis.statusLayer || "待复核" : profile.analysis.sampleType.label)}</td>
          <td>${renderTags(profile.strategyTags, true)}</td>
          <td>${escapeHtml(profile.analysis.reasonQuality.completionStatus)} · ${escapeHtml(profile.analysis.reasonQuality.mappingStatus)}</td>
          <td><span class="badge ${bucketClass(research.bucket)}">${escapeHtml(research.bucket)}</span></td>
          <td>${renderDataStatusMini(research.dataStatus)}</td>
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
  const row = state.pool.find((item) => item["证券代码"] === state.selectedCode) || curatedRow(state.selectedCode) || state.pool[0];
  const profile = getProfile(state.selectedCode, row);
  const research = getResearchState(profile, row);
  const isCurated = Boolean(curatedProfiles[state.selectedCode]);

  els.detailContent.innerHTML = `
    <div class="detail-stack">
      <div class="identity">
        <div>
          <h3>${escapeHtml(profile.code)} ${escapeHtml(profile.name)}</h3>
          <p class="muted">${escapeHtml(profile.analysis.exchange || "待复核")} · ${escapeHtml(profile.analysis.board || "待复核")} · ${escapeHtml(profile.analysis.sampleType.isCurrent ? profile.analysis.statusLayer || "待复核" : profile.analysis.sampleType.label)}</p>
        </div>
        <span class="badge badge-${profile.flowCode}">${escapeHtml(profile.flowLabel)}</span>
      </div>

      ${isCurated ? renderCuratedDetail(profile, research) : renderGenericDetail(profile, row, research)}
    </div>
  `;
  renderReport(profile, row, isCurated, research);
}

function curatedRow(code) {
  const profile = curatedProfiles[code];
  if (!profile) return null;
  return normalizeRow({
    证券代码: profile.code,
    证券名称: profile.name,
    当前状态: profile.name.includes("*ST") ? "*ST" : profile.name.includes("ST") ? "ST" : "历史样本",
    "ST原因": profile.code === "000656.SZ" ? "重整修复及持续经营相关原因待公告核验" : "",
    "*ST原因": profile.rule?.trigger || "待公告核验",
    所属交易所: profile.code.endsWith(".SH") ? "上交所" : profile.code.endsWith(".SZ") ? "深交所" : "待复核",
    所属板块: inferBoard(profile.code),
    当前阶段: profile.poolLabel,
    所属行业: profile.market?.industry || "",
    数据快照日期: "v0.3样本骨架",
    备注: profile.poolNote || "",
  });
}

function renderCuratedDetail(profile, research) {
  return `
    <p class="note">${escapeHtml(profile.oneLine)}</p>
    ${renderAutoSummary(profile)}
    ${renderV3Research(research)}
    <p class="note">下面保留旧版四联摘要作为证据回看；v0.3 的正式承载会以 Track A / Track B 为主。</p>
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

function renderGenericDetail(profile, row, research) {
  const notCurrent = !profile.analysis.sampleType.isCurrent;
  return `
    <p class="note">${
      notCurrent
        ? "这条记录不是当前仍戴帽的 ST/*ST 公司，已从当前机会筛选池排除；如需使用，应转入历史案例库或退市风险样本库。"
        : "这家公司目前只完成上传层基础自动识别：能看出它大概属于什么风险、哪些字段触发了标签、是否需要补公告和人工复核；暂不输出最终摘帽概率或投资结论。"
    }</p>
    ${renderAutoSummary(profile)}
    ${renderV3Research(research)}
    <div class="verdict-grid">
      ${renderVerdict("样本类型", [profile.analysis.sampleType.label, profile.analysis.sampleType.reason])}
      ${renderVerdict("自动识别状态", [profile.flowLabel, "这是基础分流，不等于最终预测。"])}
      ${renderVerdict("原因补齐", [profile.analysis.reasonQuality.completionStatus, "上传原因只是初始线索，后续要用公告和年报校验。"])}
      ${renderVerdict("待补/复核项", [profile.analysis.needsReview ? "有" : "暂不强制", (profile.analysis.reasonQuality.reviewReasons || []).join("；") || "未识别到强复核触发项。"])}
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

function renderV3Research(research) {
  return `
    <section class="v3-card">
      <div class="section-heading">
        <p class="eyebrow">v0.3 双轨研究卡</p>
        <h3>当前结论不是最终概率，而是系统下一步要补齐的研究结构</h3>
      </div>
      <div class="data-status-row">
        ${renderDataStatusPills(research.dataStatus)}
      </div>
      <div class="track-grid">
        <div class="track-card track-a">
          <div class="track-title">
            <span>Track A</span>
            <strong>摘帽确定性</strong>
          </div>
          <div class="track-metrics">
            ${renderMiniMetric("当前撤销资格", research.trackA.eligibility)}
            ${renderMiniMetric("未来修复线索", research.trackA.repair)}
            ${renderMiniMetric("摘帽确定性", research.trackA.certainty)}
          </div>
          <div class="mini-list">
            <div class="signal-row">
              <strong>主要硬伤</strong>
              <span>${escapeHtml(research.trackA.blockers.join("；") || "暂无明确硬伤，仍需公告核验。")}</span>
            </div>
            <div class="signal-row">
              <strong>概率抬升节点</strong>
              <span>${escapeHtml(research.trackA.liftNodes.join("；") || "待公告和规则补齐。")}</span>
            </div>
          </div>
          <p class="track-summary">${escapeHtml(research.trackA.summary)}</p>
        </div>
        <div class="track-card track-b">
          <div class="track-title">
            <span>Track B</span>
            <strong>投资窗口</strong>
          </div>
          <div class="track-metrics">
            ${renderMiniMetric("窗口类型", research.trackB.windowType)}
            ${renderMiniMetric("市场反映度", research.trackB.reflection)}
            ${renderMiniMetric("拥挤度", research.trackB.crowding)}
            ${renderMiniMetric("事件催化", research.trackB.catalyst)}
            ${renderMiniMetric("行业景气", research.trackB.industry)}
            ${renderMiniMetric("流动性", research.trackB.liquidity)}
          </div>
          <p class="track-summary">${escapeHtml(research.trackB.summary)}</p>
        </div>
      </div>
      <div class="classification-strip">
        <span>综合分类</span>
        <strong class="badge ${bucketClass(research.bucket)}">${escapeHtml(research.bucket)}</strong>
        <p>${escapeHtml(research.bucketReason)}</p>
      </div>
    </section>
  `;
}

function renderMiniMetric(label, value) {
  return `
    <div class="mini-metric">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value || "待判断")}</strong>
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
        <span>样本清洗</span>
        <strong>${escapeHtml(analysis.sampleType.label)}</strong>
      </div>
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

function renderReport(profile, row, isCurated, research) {
  const genericReason = row
    ? `ST 原因：${row["ST原因"] || "无"}；*ST 原因：${row["*ST原因"] || "无"}。`
    : "";
  const v3Section = `
      <h4>二、v0.3 双轨判断</h4>
      <ul>
        <li>综合分类：${escapeHtml(research.bucket)}。${escapeHtml(research.bucketReason)}</li>
        <li>Track A 当前撤销资格：${escapeHtml(research.trackA.eligibility)}；未来修复线索：${escapeHtml(research.trackA.repair)}；摘帽确定性：${escapeHtml(research.trackA.certainty)}。</li>
        <li>主要硬伤：${escapeHtml(research.trackA.blockers.join("；") || "暂无明确硬伤，仍需公告核验。")}</li>
        <li>Track B 窗口类型：${escapeHtml(research.trackB.windowType)}；市场反映度：${escapeHtml(research.trackB.reflection)}；拥挤度：${escapeHtml(research.trackB.crowding)}。</li>
      </ul>
    `;
  const reportBody = isCurated
    ? `
      <h4>一、核心结论</h4>
      <p>${escapeHtml(profile.oneLine)}</p>
      ${v3Section}
      <h4>三、旧版四联摘要</h4>
      <ul>
        <li>摘帽概率：${escapeHtml(profile.four.probability[0])}。${escapeHtml(profile.four.probability[1])}</li>
        <li>证据闭环：${escapeHtml(profile.four.evidence[0])}。${escapeHtml(profile.four.evidence[1])}</li>
        <li>事件催化：${escapeHtml(profile.four.catalyst[0])}。${escapeHtml(profile.four.catalyst[1])}</li>
        <li>市场反映度：${escapeHtml(profile.four.market[0])}。${escapeHtml(profile.four.market[1])}</li>
      </ul>
      <h4>四、规则与公告依据</h4>
      <p>${escapeHtml(profile.rule.trigger)} ${escapeHtml(profile.rule.condition)}</p>
      <ul>${profile.announcements.map((item) => `<li>${escapeHtml(item.date)}：${escapeHtml(item.title)}。${escapeHtml(item.note)}</li>`).join("")}</ul>
      <h4>五、市场行为与历史参照</h4>
      <p>${escapeHtml(profile.market.note)} ${escapeHtml(profile.similar.gap)}</p>
      <h4>六、风险提示与下一步</h4>
      <ul>${profile.risks.map((risk) => `<li>${escapeHtml(risk)}</li>`).join("")}</ul>
      <p>${escapeHtml(profile.nextAction)}</p>
    `
    : `
      <h4>一、核心结论</h4>
      <p>样本类型：${escapeHtml(profile.analysis.sampleType.label)}。初步分流为：${escapeHtml(profile.flowLabel)}。该结论不是摘帽概率，也不是交易建议。</p>
      ${v3Section}
      <h4>三、自动识别结果</h4>
      <p>原因补齐状态：${escapeHtml(profile.analysis.reasonQuality.completionStatus)}；规则映射状态：${escapeHtml(profile.analysis.reasonQuality.mappingStatus)}；原因大类：${escapeHtml(profile.analysis.reasonQuality.reasonClass)}。</p>
      <h4>四、原始原因</h4>
      <p>${escapeHtml(genericReason)}</p>
      <h4>五、下一步</h4>
      <p>需要补戴帽公告、年报、审计/内控、问询或监管文件，再接入市场行为和历史相似案例，才能进入预测层。</p>
    `;

  els.reportPreview.innerHTML = `
    <h3>${escapeHtml(profile.code)} ${escapeHtml(profile.name)} 摘星摘帽研究报告</h3>
    <p class="note">v0.3 报告用于研究复核，不构成交易建议。当前报告先展示双轨结构，最终版本会继续补图表、行情窗口和历史相似案例。</p>
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
    strategyTags: analysis.sampleType.isCurrent ? (tags.length ? tags : ["待补充字段"]) : [analysis.sampleType.label],
  };
}

function getResearchState(profile, row) {
  if (v3Research[profile.code]) {
    const item = v3Research[profile.code];
    return {
      ...item,
      bucketReason: bucketReason(item.bucket, profile),
    };
  }
  const analysis = profile.analysis || getAnalysis(row || {});
  const positiveTags = analysis.tags.filter((tag) => tag.status === "命中正向");
  const negativeTags = analysis.tags.filter((tag) => tag.status === "命中负向");
  const reviewTags = analysis.tags.filter((tag) => tag.status === "待人工复核");
  const isArchive = !analysis.sampleType.isCurrent;
  const hasMajorRisk = negativeTags.some((tag) => tag.name === "重大违法风险");
  const hasRepair = positiveTags.length > 0;
  const bucket = isArchive
    ? "非当前"
    : hasMajorRisk
      ? "D"
      : analysis.flowCode === "risk" || analysis.flowCode === "exclude"
        ? "D"
        : hasRepair
          ? "B候选"
          : reviewTags.length || analysis.reasonQuality.needsReview
            ? "C"
            : "C";
  const eligibility = isArchive
    ? "不适用"
    : hasMajorRisk || analysis.flowCode === "risk" || analysis.flowCode === "exclude"
      ? "明显不具备"
      : hasRepair
        ? "暂不具备/待证据"
        : "待复核";
  const repair = isArchive
    ? "不适用"
    : hasMajorRisk || negativeTags.length >= 2
      ? "负向"
      : hasRepair
        ? "中"
        : reviewTags.length
          ? "弱"
          : "无";
  const certainty = bucket === "B候选" ? "中低，待公告验证" : bucket === "D" ? "低" : bucket === "非当前" ? "不适用" : "低/待复核";
  const blockers = [
    ...negativeTags.map((tag) => tag.name),
    ...(analysis.reasonQuality.reviewReasons || []),
  ].slice(0, 4);
  const liftNodes = buildLiftNodes(analysis, positiveTags);
  return {
    dataStatus: [
      ["上传", "已接入"],
      ["规则", analysis.reasonQuality.mappingStatus || "待映射"],
      ["公告", "待核验"],
      ["财务", positiveTags.some((tag) => tag.name === "财务硬指标修复") ? "字段初判" : "待补齐"],
      ["行情", "待接入"],
      ["历史", "待匹配"],
    ],
    trackA: {
      eligibility,
      repair,
      certainty,
      blockers,
      liftNodes,
      summary: isArchive
        ? "这条记录不进入当前机会池，可后续转入历史案例库。"
        : hasRepair
          ? "上传字段已经出现修复线索，但当前只是基础识别，必须补规则、公告和财务核验后才能上调。"
          : "当前缺少足够的正向证据，先作为待复核或风险样本处理。",
    },
    trackB: {
      windowType: isArchive ? "不适用" : hasRepair ? "修复预期窗口待验证" : "无明显窗口",
      reflection: "待行情接入",
      crowding: "待成交额/换手率",
      catalyst: hasRepair ? "待公告确认" : "弱/待确认",
      industry: row?.["所属行业"] || "待补",
      liquidity: "待市值和成交数据",
      summary: "当前上传层没有完整 T-20/T-60/T-120 行情窗口，不能判断市场是否已经提前反映。",
    },
    bucket,
    bucketReason: bucketReason(bucket, profile),
  };
}

function buildLiftNodes(analysis, positiveTags) {
  const nodes = [];
  if (positiveTags.some((tag) => tag.name === "财务硬指标修复")) nodes.push("待公告：年报、审计报告、收入扣除专项说明");
  if (positiveTags.some((tag) => tag.name === "司法重整")) nodes.push("待公告：重整计划批准、执行完毕、投资款到账");
  if (positiveTags.some((tag) => tag.name === "内控/合规整改")) nodes.push("待公告：内控审计意见改善、整改专项说明");
  if (positiveTags.some((tag) => tag.name === "资金占用/违规担保")) nodes.push("待公告：全部清偿、全部解除、专项核查意见");
  if (!nodes.length && analysis.sampleType.isCurrent) nodes.push("待补：原实施风险警示公告、最近一期年报和审计意见");
  return nodes;
}

function bucketReason(bucket, profile) {
  const reasons = {
    "A+候选": "高确定性且初步看市场未明显反映，仍需公告和行情完整复核。",
    A: "高确定性样本，需进一步判断是否还有预期差。",
    "B候选": "有修复线索，但当前只是上传层基础识别，需公告和规则补证。",
    B: "当前不完全具备，但未来修复线索强，适合修复观察。",
    C: "线索弱或字段不完整，先补原因和公告。",
    D: "存在重大硬伤或风险线索，暂不进入机会池。",
    非当前: "正常、退市、已摘帽或状态不明样本，不进入当前 ST/*ST 机会筛选。",
  };
  return reasons[bucket] || profile.poolNote || "待复核。";
}

function renderDataStatusPills(items) {
  return items
    .map(([label, value]) => `<span class="status-pill"><b>${escapeHtml(label)}</b>${escapeHtml(value)}</span>`)
    .join("");
}

function renderDataStatusMini(items) {
  const unresolved = items.filter(([, value]) => /待|部分|骨架|初判/.test(String(value))).length;
  const ready = items.length - unresolved;
  return `<span class="muted">${ready}/${items.length} 接入</span>`;
}

function bucketClass(bucket) {
  if (/A\+|^A$/.test(bucket)) return "badge-A";
  if (/B/.test(bucket)) return "badge-B";
  if (/C|待复核/.test(bucket)) return "badge-C";
  if (/D|风险/.test(bucket)) return "badge-D";
  return "badge-neutral";
}

function classRank(code) {
  return { observe: 0, review: 1, risk: 2, exclude: 3, archive: 4 }[code] ?? 5;
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
  next["当前状态"] = normalizeStatusText(next["当前状态"], next["证券名称"]);
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
    hasContent(row["审计意见"]) ? row["审计意见"] : "",
    hasContent(row["内控意见"]) ? row["内控意见"] : "",
  ]
    .filter(Boolean)
    .join("；");
  const lowerText = text.toLowerCase();
  const sampleType = inferSampleType(row);
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
  const reasonQuality = analyzeReasonQuality(row, tags, text, sampleType);
  const flowCode = inferFlow(tags, reasonQuality, sampleType, lowerText);
  return {
    sampleType,
    statusLayer: row["状态分层"],
    exchange: row["所属交易所"],
    board: row["所属板块"],
    tags,
    flowCode,
    flowLabel: flowLabels[flowCode],
    reasonQuality,
    needsReview: sampleType.isCurrent && (reasonQuality.needsReview || tags.some((tag) => tag.status === "待人工复核")),
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
  const audit = hasContent(row["审计意见"]) ? String(row["审计意见"] || "") : "";
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
  const ic = hasContent(row["内控意见"]) ? String(row["内控意见"] || "") : "";
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

function analyzeReasonQuality(row, tags, text, sampleType) {
  const st = hasContent(row["ST原因"]);
  const star = hasContent(row["*ST原因"]);
  const reviewReasons = [];
  const reasonText = [row["ST原因"], row["*ST原因"]].filter(Boolean).join("；");
  if (!sampleType.isCurrent) {
    reviewReasons.push(sampleType.reason);
  } else if (!st && !star) {
    reviewReasons.push("ST原因和*ST原因均未补齐，需要查原始戴帽公告。");
  }
  if (sampleType.isCurrent && /财务问题|年报非标|其他原因|风险事项/.test(reasonText) && reasonText.length < 40) {
    reviewReasons.push("原因表述偏模糊，需要拆成具体触发事实。");
  }
  if (sampleType.isCurrent && st && star) reviewReasons.push("同时存在 ST 与 *ST 原因，需要分别判断摘星和摘帽。");
  if (sampleType.isCurrent && tags.some((tag) => ["重大违法风险", "资金占用/违规担保", "持续经营不确定性"].includes(tag.name) && tag.status !== "未命中")) {
    reviewReasons.push("命中监管、治理或持续经营类问题，不能只靠自动规则下结论。");
  }
  const reasonClass = tags
    .filter((tag) => tag.status !== "未命中")
    .map((tag) => tag.name)
    .slice(0, 4)
    .join(" / ") || (sampleType.isCurrent ? "待补原因" : sampleType.label);
  const completionStatus = !sampleType.isCurrent ? "不适用" : !st && !star ? "未补齐" : reviewReasons.length ? "部分补齐" : "基本补齐";
  const mappingStatus = !sampleType.isCurrent ? "不进入当前池" : !st && !star ? "未映射" : reviewReasons.length ? "部分映射" : "待公告校验";
  const evidenceStrength = "弱：来自上传表字段，尚未接入原始公告链接";
  return {
    completionStatus,
    mappingStatus,
    evidenceStrength,
    reasonClass,
    isMultiple: st && star,
    needsReview: sampleType.isCurrent && reviewReasons.length > 0,
    reviewReasons,
  };
}

function inferFlow(tags, reasonQuality, sampleType) {
  if (!sampleType.isCurrent) return "archive";
  const hit = (name, status) => tags.some((tag) => tag.name === name && (!status || tag.status === status));
  const negativeCount = tags.filter((tag) => tag.status === "命中负向").length;
  const positiveCount = tags.filter((tag) => tag.status === "命中正向").length;
  const reviewCount = tags.filter((tag) => tag.status === "待人工复核").length;
  if (hit("重大违法风险", "命中负向")) return "exclude";
  if (negativeCount >= 2 || hit("持续经营不确定性", "命中负向")) return "risk";
  if (positiveCount) return "observe";
  if (negativeCount) return "risk";
  if (reviewCount || reasonQuality.needsReview) return "review";
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

function normalizeStatusText(status, name = "") {
  const text = String(status || "").trim();
  const combined = `${text} ${name}`;
  if (/退市|终止上市/.test(combined)) return "退市";
  if (/正常|已摘帽|撤销风险警示/.test(combined)) return "正常";
  if (/\*ST/i.test(combined)) return "*ST";
  if (/(^|[^A-Z])ST/i.test(combined)) return "ST";
  return text || "待复核";
}

function inferSampleType(row) {
  const status = normalizeStatusText(row["当前状态"] || row["ST or *ST"], row["证券名称"]);
  const name = String(row["证券名称"] || "");
  const stReason = hasContent(row["ST原因"]);
  const starReason = hasContent(row["*ST原因"]);
  if (status === "退市" || /退市/.test(name)) {
    return {
      code: "delisted",
      label: "退市/历史样本",
      isCurrent: false,
      reason: "退市公司不进入当前 ST/*ST 机会池，应转入历史失败样本或退市风险样本库。",
    };
  }
  if (status === "正常" || (!/ST/i.test(name) && /正常|已摘帽/.test(String(row["备注"] || "")))) {
    return {
      code: "normal",
      label: "正常/已摘帽样本",
      isCurrent: false,
      reason: "正常或已摘帽公司不进入当前监控池，可作为历史成功样本另行使用。",
    };
  }
  if (status === "ST" || status === "*ST" || /ST/i.test(name) || stReason || starReason) {
    return {
      code: "current",
      label: "当前ST/*ST样本",
      isCurrent: true,
      reason: "当前仍戴帽，进入基础识别和后续证据链分析。",
    };
  }
  return {
    code: "unknown",
    label: "状态不明样本",
    isCurrent: false,
    reason: "未识别为当前 ST/*ST，公司状态需先清洗确认。",
  };
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
  return Boolean(
    text &&
      ![
        "无",
        "暂无",
        "未披露",
        "待复核",
        "历史/退市原因待复核",
        "原因待复核",
        "规则待映射",
        "null",
        "undefined",
        "-",
        "—",
      ].includes(text),
  );
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
  return `v0.2.1 模板字段已识别 ${filled}/${templateFields.length} 个；字段越完整，自动识别越稳定。`;
}

function downloadUploadTemplate() {
  downloadCsv("摘帽咯_ST股票池上传模板_v0.2.1.csv", [templateFields]);
}

function downloadUploadExample() {
  const rows = [
    templateFields,
    [
      "603580.SH",
      "*ST艾艾",
      "*ST",
      "*ST：2025年5月6日",
      "无",
      "2024年度扣非前后净利润为负且扣除后营业收入低于3亿元",
      "上交所",
      "主板",
      "申请撤销中",
      "标准无保留",
      "标准无保留",
      "3.16",
      "3.16",
      "0.01",
      "0.01",
      "0.01",
      "4.52",
      "",
      "",
      "",
      "22.46",
      "29.4",
      "橡胶和塑料制品业",
      "2026年6月11日",
      "示例：财务硬指标修复样本",
    ],
    [
      "600476.SH",
      "*ST湘邮",
      "*ST",
      "ST：2026年4月29日；*ST：2026年4月29日",
      "连续三年亏损且持续经营能力存在不确定性",
      "2025年末经审计净资产为负",
      "上交所",
      "主板",
      "无",
      "带强调事项段的无保留意见",
      "待复核",
      "",
      "",
      "",
      "",
      "",
      "-4.45",
      "",
      "",
      "",
      "10.84",
      "17.5",
      "软件和信息技术服务业",
      "2026年6月11日",
      "示例：撤销条件未闭环样本",
    ],
    [
      "688496.SH",
      "*ST清越",
      "*ST",
      "ST：2026年4月30日；*ST：2026年5月12日",
      "2025年度财务报告内部控制被出具否定意见",
      "可能触及重大违法强制退市情形",
      "上交所",
      "科创板",
      "行政处罚待落地",
      "保留意见",
      "否定意见",
      "6.69",
      "",
      "",
      "-1.24",
      "",
      "10.34",
      "",
      "",
      "",
      "1.28",
      "5.76",
      "计算机、通信和其他电子设备制造业",
      "2026年6月11日",
      "示例：重大违法风险观察样本",
    ],
  ];
  downloadCsv("摘帽咯_ST股票池上传示例_v0.2.1.csv", rows);
}

function downloadCsv(filename, rows) {
  const content = rows.map((row) => row.map(csvCell).join(",")).join("\n");
  const blob = new Blob([`\uFEFF${content}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function csvCell(value) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

async function handleUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const lower = file.name.toLowerCase();
  if (lower.endsWith(".json")) {
    const data = JSON.parse(await file.text());
    if (Array.isArray(data)) {
      state.pool = data.map(normalizeRow);
      state.selectedCode = firstSelectableCode(state.pool) || state.pool[0]?.["证券代码"] || state.selectedCode;
      els.uploadStatus.textContent = uploadSummary(`已载入 JSON：${file.name}`, state.pool);
      renderAll();
    }
    return;
  }
  if (lower.endsWith(".csv")) {
    const data = parseCsv(await file.text()).map(normalizeRow);
    state.pool = data;
    state.selectedCode = firstSelectableCode(state.pool) || state.pool[0]?.["证券代码"] || state.selectedCode;
    els.uploadStatus.textContent = uploadSummary(`已载入 CSV：${file.name}`, state.pool);
    renderAll();
    return;
  }
  els.uploadStatus.textContent = `已选择 ${file.name}。v0.2.1 当前先稳定支持 CSV/JSON；请把 Excel 按模板另存为 CSV 后上传。`;
}

function firstSelectableCode(rows) {
  return rows.find((row) => getAnalysis(row).sampleType.isCurrent)?.["证券代码"] || rows[0]?.["证券代码"] || "";
}

function uploadSummary(prefix, rows) {
  const active = rows.filter((row) => getAnalysis(row).sampleType.isCurrent).length;
  const archived = rows.length - active;
  return `${prefix}，共 ${rows.length} 行；进入当前ST/*ST池 ${active} 行，排除非当前样本 ${archived} 行。`;
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
