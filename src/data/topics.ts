export interface TopicNode {
  slug: string;              // e.g. "recommend", "recommend/stable", "network/iepl"
  path: string;              // e.g. "/recommend/", "/recommend/stable/", "/network/iepl/"
  title: string;             // 完整标题/H1
  shortName: string;         // 面包屑/卡片短标题
  seoTitle: string;          // Meta Title
  description: string;       // Meta Description / 简介
  type: 'Pillar' | 'Cluster' | 'Long-tail';
  priority: 'P0' | 'P1' | 'P2' | 'P3';
  parentSlug: string | null; // 父级 topic slug
  category: string;          // 对应的一级分类 (recommend, ranking, reviews, compare, price, network, use-case, clients, tutorials, problems, guide)
  keywords: string[];        // 覆盖关键词集
  searchIntent: 'Commercial' | 'Informational' | 'Transactional' | 'Navigational';
  coreAnswer?: string;       // 核心结论/AI摘要解惑
  subtopicSlugs?: string[];   // 下属子专题/文章 slugs
  relatedTopicSlugs?: string[]; // 关联的横向 topic slugs
}

export const TOPICS_REGISTRY: Record<string, TopicNode> = {
  // ================= 一级核心 Pillar 专题 =================
  'recommend': {
    slug: 'recommend',
    path: '/recommend/',
    title: '机场推荐｜2026稳定机场选择与对比',
    shortName: '机场推荐',
    seoTitle: '机场推荐2026｜稳定、价格与线路选择指南 - 晚风机场服务指南',
    description: '面向中文用户的2026机场推荐核心专题。汇总稳定机场排行、性价比月付方案、IEPL专线推荐、AI平台解锁与客户端选择指引。',
    type: 'Pillar',
    priority: 'P0',
    parentSlug: null,
    category: 'recommend',
    keywords: ['机场推荐', '2026机场推荐', '机场推荐2026', '机场推荐哪个好', '机场推荐怎么选'],
    searchIntent: 'Commercial',
    coreAnswer: '挑选2026年稳定网络服务商的核心公式：优先选择“IEPL专线架构” + 坚持“月付订阅” + 认准“原生IP解锁”。切忌盲目购买超低价年付套餐。',
    subtopicSlugs: ['recommend/stable', 'recommend/value', 'recommend/budget', 'recommend/beginner', 'recommend/premium', 'recommend/monthly', 'recommend/yearly', 'recommend/payg', 'recommend/ai', 'recommend/streaming', 'recommend/work', 'recommend/coding'],
    relatedTopicSlugs: ['ranking', 'price', 'network', 'compare']
  },

  'ranking': {
    slug: 'ranking',
    path: '/ranking/',
    title: '2026机场排行榜单｜综合、稳定与性价比排名',
    shortName: '机场排行',
    seoTitle: '2026机场排行榜单｜综合、稳定与性价比排名 - 晚风机场服务指南',
    description: '根据实际晚高峰测速、线路质量、SLA可用性与用户口碑整理的网络服务商排行榜单。涵盖综合榜、稳定榜与性价比榜。',
    type: 'Pillar',
    priority: 'P0',
    parentSlug: null,
    category: 'ranking',
    keywords: ['机场排行', '机场排行榜', '机场推荐排行', '稳定机场排行', '性价比机场排行'],
    searchIntent: 'Commercial',
    coreAnswer: '排行榜基于客观晚高峰测速与丢包率计算。办公用户选稳定专线榜，学生族选高性价比榜。',
    subtopicSlugs: ['ranking/overall', 'ranking/stability', 'ranking/value', 'ranking/speed', 'ranking/price', 'ranking/ai', 'ranking/streaming'],
    relatedTopicSlugs: ['recommend', 'reviews', 'price']
  },

  'reviews': {
    slug: 'reviews',
    path: '/reviews/',
    title: '网络服务商深度评测｜真实体验与节点分析',
    shortName: '品牌评测',
    seoTitle: '网络服务商深度评测｜真实体验与节点分析 - 晚风机场服务指南',
    description: '针对主流服务商进行全方位深度测评，涵盖线路架构、晚高峰速度、延迟波动、流媒体解封率与客服支持情况。',
    type: 'Pillar',
    priority: 'P1',
    parentSlug: null,
    category: 'reviews',
    keywords: ['机场推荐评测', '服务商评测', '机场真实测速', '机场体验分析'],
    searchIntent: 'Commercial',
    coreAnswer: '每一份评测报告均包含真实环境速图、晚高峰丢包率测试与针对 AI 平台的解锁检测。',
    subtopicSlugs: [],
    relatedTopicSlugs: ['recommend', 'compare']
  },

  'compare': {
    slug: 'compare',
    path: '/compare/',
    title: '网络服务商横向对比｜价格、线路与功能对照表',
    shortName: '机场对比',
    seoTitle: '网络服务商横向对比｜价格、线路与功能对照表 - 晚风机场服务指南',
    description: '多视角对比不同网络服务商的套餐性价比、专线支持、流媒体解锁与使用体验差异。',
    type: 'Pillar',
    priority: 'P1',
    parentSlug: null,
    category: 'compare',
    keywords: ['机场推荐对比', '机场对比', 'IEPL vs IPLC', '月付 vs 年付'],
    searchIntent: 'Commercial',
    coreAnswer: '对比的核心是需求匹配度。不要为了过剩的指标买单，也不要为了几块钱牺牲核心稳定性。',
    subtopicSlugs: ['compare/iepl-vs-iplc', 'compare/monthly-vs-yearly', 'compare/payg-vs-subscription', 'compare/cheap-vs-premium'],
    relatedTopicSlugs: ['recommend', 'price', 'network']
  },

  'price': {
    slug: 'price',
    path: '/price/',
    title: '网络服务套餐与价格指南｜月付、年付与按量计费选择',
    shortName: '价格选择',
    seoTitle: '网络服务套餐与价格指南｜月付、年付与按量计费选择 - 晚风机场服务指南',
    description: '教你如何根据预算选择最划算的网络服务套餐，深入剖析月付包月、年付折扣与按量不限时套餐的区别，避免价格陷阱。',
    type: 'Pillar',
    priority: 'P0',
    parentSlug: null,
    category: 'price',
    keywords: ['机场推荐价格', '机场推荐套餐', '便宜机场推荐', '月付机场推荐', '按量机场推荐'],
    searchIntent: 'Commercial',
    coreAnswer: '高性价比不等于低价。15-20元/月的稳定中转套餐是综合性价比最高选择；追求极致稳定性可选择30-50元/月的专线套餐。',
    subtopicSlugs: ['price/10-yuan', 'price/15-yuan', 'price/20-yuan', 'price/30-yuan', 'price/50-yuan', 'price/monthly', 'price/yearly', 'price/payg'],
    relatedTopicSlugs: ['recommend', 'compare']
  },

  'network': {
    slug: 'network',
    path: '/network/',
    title: '网络线路知识详解｜IEPL、IPLC、BGP与节点区别',
    shortName: '线路知识',
    seoTitle: '网络线路知识详解｜IEPL、IPLC、BGP与节点区别 - 晚风机场服务指南',
    description: '深入浅出剖析 IEPL 国际以太网专线、IPLC 内网专线、BGP 入口中转与直连线路的区别，掌握选购的核心物理学逻辑。',
    type: 'Pillar',
    priority: 'P0',
    parentSlug: null,
    category: 'network',
    keywords: ['机场线路推荐', '机场节点推荐', 'IEPL专线', 'IPLC专线', 'BGP中转'],
    searchIntent: 'Informational',
    coreAnswer: 'IEPL/IPLC 专线不过公网防火墙，稳定度最高；BGP 中转优化跨网入口体验；公网直连价格低廉但易受干扰。',
    subtopicSlugs: ['network/iepl', 'network/iplc', 'network/transit', 'network/direct', 'network/native-ip', 'network/residential-ip', 'network/peak-hours'],
    relatedTopicSlugs: ['recommend', 'use-case']
  },

  'use-case': {
    slug: 'use-case',
    path: '/use-case/',
    title: '场景化服务选择｜AI平台、流媒体、远程开发与协同办公',
    shortName: '用途选择',
    seoTitle: '场景化服务选择｜AI平台、流媒体、远程开发与协同办公 - 晚风机场服务指南',
    description: '针对 ChatGPT / Claude / Gemini AI 开发交流环境、4K 跨国流媒体解锁与远程服务器运维提供高可靠性网络解决方案。',
    type: 'Pillar',
    priority: 'P1',
    parentSlug: null,
    category: 'use-case',
    keywords: ['AI机场推荐', 'ChatGPT机场推荐', 'Claude机场推荐', '流媒体机场推荐', '开发机场推荐', '办公机场推荐'],
    searchIntent: 'Commercial',
    coreAnswer: 'AI平台要求纯净住宅原生IP；4K流媒体要求高带宽保障；远程开发与跨国办公要求晚高峰极致稳定与0丢包率。',
    subtopicSlugs: ['use-case/chatgpt', 'use-case/claude', 'use-case/gemini', 'use-case/video', 'use-case/office', 'use-case/coding'],
    relatedTopicSlugs: ['recommend', 'network']
  },

  'clients': {
    slug: 'clients',
    path: '/clients/',
    title: '多平台连接客户端推荐与下载导航',
    shortName: '客户端',
    seoTitle: '多平台连接客户端推荐与下载导航 - 晚风机场服务指南',
    description: '涵盖 Windows、macOS、Android、iOS 与路由器全平台主流客户端软件介绍、对比与一键配置指引。',
    type: 'Pillar',
    priority: 'P1',
    parentSlug: null,
    category: 'clients',
    keywords: ['机场客户端推荐', 'Windows机场推荐', 'Mac机场推荐', 'Android机场推荐', 'iPhone机场推荐', 'Clash Verge', 'Sing-box'],
    searchIntent: 'Informational',
    coreAnswer: 'Windows 推荐 Clash Verge / Sing-box；macOS 推荐 Clash Verge / Surge；iOS 推荐 Shadowrocket / Stash；Android 推荐 Flclash / Surfboard。',
    subtopicSlugs: ['clients/windows', 'clients/macos', 'clients/android', 'clients/ios', 'clients/clash-verge', 'clients/sing-box', 'clients/shadowrocket'],
    relatedTopicSlugs: ['tutorials', 'guide']
  },

  'tutorials': {
    slug: 'tutorials',
    path: '/tutorials/',
    title: '网络服务图文使用教程｜零基础快速上手',
    shortName: '使用教程',
    seoTitle: '网络服务图文使用教程｜零基础快速上手 - 晚风机场服务指南',
    description: '手把手教学：包含客户端安装包下载、订阅链接导入、节点切换、规则模式选择与开机自启配置全流程。',
    type: 'Pillar',
    priority: 'P1',
    parentSlug: null,
    category: 'tutorials',
    keywords: ['机场推荐教程', '订阅导入教程', '节点切换教程', '网络测速教程'],
    searchIntent: 'Informational',
    coreAnswer: '导入订阅链接后，务必将路由模式切换为“规则模式 (Rule)”，以便自动识别国内流量直连与海外流量转发。',
    subtopicSlugs: ['tutorials/import-subscription', 'tutorials/switch-nodes', 'tutorials/speed-test'],
    relatedTopicSlugs: ['clients', 'problems']
  },

  'problems': {
    slug: 'problems',
    path: '/problems/',
    title: '常见网络故障与错误连接排查指南',
    shortName: '问题解决',
    seoTitle: '常见网络故障与错误连接排查指南 - 晚风机场服务指南',
    description: '解决节点超时、订阅更新失败、DNS 污染、网页加载缓慢与部分 App 无法打开的自检诊断手册。',
    type: 'Pillar',
    priority: 'P1',
    parentSlug: null,
    category: 'problems',
    keywords: ['常见问题解决', '网络连接排查', '节点超时解决', '订阅更新失败'],
    searchIntent: 'Informational',
    coreAnswer: '遇到打不开节点时，请优先检查：1. 系统时间是否对准；2. 订阅链接是否过期；3. 尝试更新订阅与更换节点。',
    subtopicSlugs: ['problems/dns', 'problems/timeout', 'problems/subscription-failed', 'problems/ai-blocked'],
    relatedTopicSlugs: ['tutorials', 'guide']
  },

  'guide': {
    slug: 'guide',
    path: '/guide/',
    title: '网络服务新手零基础入门百科',
    shortName: '新手指南',
    seoTitle: '网络服务新手零基础入门百科 - 晚风机场服务指南',
    description: '适合完全不了解的新手用户。从节点、线路、客户端与订阅的基本概念入手，建立正确认知，避开低价陷阱。',
    type: 'Pillar',
    priority: 'P0',
    parentSlug: null,
    category: 'guide',
    keywords: ['机场推荐新手', '新手入门', '机场是什么', '节点是什么', '线路是什么'],
    searchIntent: 'Informational',
    coreAnswer: '零基础新手小白只需要记住：选月付、用正规客户端、备用双线路。跟着本专题文章阅读，3分钟完成入门。',
    subtopicSlugs: ['guide/what-is-airport', 'guide/what-is-node', 'guide/subscription-explained'],
    relatedTopicSlugs: ['recommend', 'price', 'clients']
  },

  // ================= 二级 Sub-Pillar 专题 (部分 P0 / P1 代表) =================
  'recommend/stable': {
    slug: 'recommend/stable',
    path: '/recommend/stable/',
    title: '稳定机场推荐｜2026高可用与抗封锁网络方案',
    shortName: '稳定机场',
    seoTitle: '稳定机场推荐｜2026高可用与抗封锁网络方案 - 晚风机场服务指南',
    description: '专为追求高可靠性的用户挑选的稳定网络服务商。全IEPL/IPLC专线覆盖，晚高峰丢包率低至0.1%，适合远程办公与关键业务。',
    type: 'Pillar',
    priority: 'P0',
    parentSlug: 'recommend',
    category: 'recommend',
    keywords: ['稳定机场推荐', '高可用机场', '不掉线机场', 'IEPL稳定机场'],
    searchIntent: 'Commercial',
    coreAnswer: '稳定的两大保障：端到端物理专线（IEPL/IPLC）与 BGP 入口冗余。',
    subtopicSlugs: [],
    relatedTopicSlugs: ['network/iepl', 'recommend/value']
  },

  'recommend/value': {
    slug: 'recommend/value',
    path: '/recommend/value/',
    title: '性价比机场推荐｜高品质与合理价格平衡点',
    shortName: '性价比机场',
    seoTitle: '性价比机场推荐｜高品质与合理价格平衡点 - 晚风机场服务指南',
    description: '精选月均 15-25 元的高性价比网络服务，兼顾速度、流量与售后支持，拒绝劣质超卖。',
    type: 'Pillar',
    priority: 'P0',
    parentSlug: 'recommend',
    category: 'recommend',
    keywords: ['性价比机场推荐', '好用机场推荐', '划算机场'],
    searchIntent: 'Commercial',
    coreAnswer: '性价比最高的黄金区间在 15-25 元/月，既保证服务商盈利维持品质，又不过度增加个人开支。',
    subtopicSlugs: [],
    relatedTopicSlugs: ['price/15-yuan', 'price/20-yuan']
  },

  'recommend/budget': {
    slug: 'recommend/budget',
    path: '/recommend/budget/',
    title: '便宜机场推荐｜低预算与平价方案选择',
    shortName: '便宜机场',
    seoTitle: '便宜机场推荐｜低预算与平价方案选择 - 晚风机场服务指南',
    description: '针对预算有限的用户或学生群体，精选 10 元左右且口碑较佳的平价连接服务方案。',
    type: 'Pillar',
    priority: 'P1',
    parentSlug: 'recommend',
    category: 'recommend',
    keywords: ['便宜机场推荐', '平价机场', '低预算机场'],
    searchIntent: 'Commercial',
    coreAnswer: '低预算方案务必按月购买，优先选择 BGP 中转线路。',
    subtopicSlugs: [],
    relatedTopicSlugs: ['price/10-yuan']
  },

  'recommend/ai': {
    slug: 'recommend/ai',
    path: '/recommend/ai/',
    title: 'AI 平台专属机场推荐｜解锁 ChatGPT, Claude 与 Gemini',
    shortName: 'AI 机场',
    seoTitle: 'AI 平台专属机场推荐｜解锁 ChatGPT, Claude 与 Gemini - 晚风机场服务指南',
    description: '专门为 OpenAI ChatGPT, Anthropic Claude, Google Gemini 用户挑选的纯净 IP 节点服务。解决 Access Denied 与人机验证。',
    type: 'Pillar',
    priority: 'P0',
    parentSlug: 'recommend',
    category: 'recommend',
    keywords: ['AI机场推荐', 'ChatGPT机场推荐', 'Claude机场推荐', 'Gemini机场推荐', '住宅IP机场'],
    searchIntent: 'Commercial',
    coreAnswer: '解锁 AI 工具需要住宅原生 IP 或专享广播节点，避免使用万人共享的机房出口。',
    subtopicSlugs: [],
    relatedTopicSlugs: ['use-case/chatgpt', 'network/residential-ip']
  },

  'network/iepl': {
    slug: 'network/iepl',
    path: '/network/iepl/',
    title: 'IEPL 专线原理与优势详解｜为什么它是稳定之王',
    shortName: 'IEPL 专线',
    seoTitle: 'IEPL 专线原理与优势详解｜为什么它是稳定之王 - 晚风机场服务指南',
    description: '深入解析 IEPL 国际以太网专线架构。物理内网二层传输，彻底告别公网封锁与高峰期丢包。',
    type: 'Pillar',
    priority: 'P0',
    parentSlug: 'network',
    category: 'network',
    keywords: ['IEPL', 'IEPL专线', 'IEPL机场推荐', 'IEPL与IPLC区别'],
    searchIntent: 'Informational',
    coreAnswer: 'IEPL 是目前网络服务中规格最高、最稳定的传输协议，流量不过公网防火墙。',
    subtopicSlugs: [],
    relatedTopicSlugs: ['recommend/stable', 'network/iplc']
  },

  'price/20-yuan': {
    slug: 'price/20-yuan',
    path: '/price/20-yuan/',
    title: '20元左右机场推荐｜高性价比黄金预算区间选购',
    shortName: '20元预算方案',
    seoTitle: '20元左右机场推荐｜高性价比黄金预算区间选购 - 晚风机场服务指南',
    description: '20元/月是网络服务的黄金平衡预算。为您推荐包含 200GB+ 流量及中转/专线的高性价比服务商。',
    type: 'Pillar',
    priority: 'P1',
    parentSlug: 'price',
    category: 'price',
    keywords: ['20元机场推荐', '20元性价比机场', '20元月付机场'],
    searchIntent: 'Commercial',
    coreAnswer: '20元预算可买到质量非常优秀的中转乃至轻量专线套餐，足以支撑日常4K观看与办公。',
    subtopicSlugs: [],
    relatedTopicSlugs: ['recommend/value', 'price/monthly']
  }
};

// 获取某个 Topic 的面包屑继承树
export function getTopicBreadcrumbs(topicSlug: string): { name: string; url: string }[] {
  const breadcrumbs: { name: string; url: string }[] = [];
  let current: TopicNode | undefined = TOPICS_REGISTRY[topicSlug];

  while (current) {
    breadcrumbs.unshift({ name: current.shortName, url: current.path });
    if (current.parentSlug) {
      current = TOPICS_REGISTRY[current.parentSlug];
    } else {
      break;
    }
  }

  return breadcrumbs;
}
