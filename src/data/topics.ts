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
    seoTitle: '机场推荐2026｜稳定、价格与线路选择指南 - 晚风指南',
    description: '面向中文用户的2026机场推荐核心专题入口。为您系统汇总稳定高品质机场排行榜单、真实月付套餐方案、BGP多线中转与IEPL专线推荐、ChatGPT与4K流媒体原生解锁表现及官网直达通道，坚持月付避坑原则，助你轻松选出高满意度方案。',
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
    seoTitle: '2026机场排行榜单｜综合、稳定与性价比排名 - 晚风指南',
    description: '晚风指南2026网络服务商综合排行榜单：基于晚高峰真实测速、节点丢包率、物理线路架构、SLA高可用性与真实用户长期口碑进行全方位量化评估。系统涵盖综合天梯榜、晚高峰稳定榜与高性价比月付榜，为各类用户提供客观透明的选型参考。',
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
    seoTitle: '网络服务商深度评测｜真实体验与节点分析 - 晚风指南',
    description: '针对主流网络服务商进行全方位深度客观实测专栏。全面覆盖晚高峰真实测速、网络延迟抖动、Netflix与ChatGPT等流媒体与AI工具原生解锁能力、客服工单响应以及倍率计费透明度，提供详实严谨的选型避坑决策依据。',
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
    seoTitle: '网络服务商横向对比｜价格、线路与功能对照表 - 晚风指南',
    description: '晚风指南多维度横向对比不同网络服务商：深度剖析月付套餐性价比、IEPL物理专线支持、倍率计费透明度、晚高峰抗丢包能力与实际日常使用体验差异，提供清晰客观的参数对照矩阵，助你避开虚假宣传并精准锁定适合自己的高品质方案。',
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
    seoTitle: '网络服务套餐与价格指南｜月付、年付与按量计费选择 - 晚风指南',
    description: '晚风指南网络服务套餐与价格选择指南：教你如何根据预算挑选最划算且稳健的网络方案。深入拆解月付包月、年付打折优惠与不限时按量计费流量包的区别与适用场景，揭秘商家定价套路，坚持月付尝鲜原则，从源头上杜绝资金损失与跑路风险。',
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
    seoTitle: '网络线路知识详解｜IEPL、IPLC、BGP与节点区别 - 晚风指南',
    description: '晚风指南硬核网络线路知识科普专栏：深入浅出剖析IEPL国际以太网专线、IPLC内网专线、BGP多线入口中转与公网直连线路的底层物理差异与晚高峰表现，拆解原生住宅IP与广播机房IP的解锁本质，助你掌握理性选购的核心网络工程逻辑。',
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
    seoTitle: '场景化服务选择｜AI平台、流媒体、远程开发与协同办公 - 晚风指南',
    description: '晚风指南场景化网络服务选型专栏：针对OpenAI ChatGPT、Claude、Gemini等AI大模型交互开发、4K高码率跨国流媒体原生播放、跨境电商运维与多设备协同办公提供量身定制的专属网络解决方案，兼顾晚高峰低延迟与纯净原生IP解锁。',
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
    seoTitle: '多平台连接客户端推荐与下载导航 - 晚风指南',
    description: '晚风指南多平台网络连接客户端精选导航：全面涵盖Windows、macOS、Android、iOS与软路由全平台主流客户端软件对比评测、官方正规开源下载渠道解析、一键订阅导入步骤与系统分流规则配置指南，助你快速挑选适合自己设备的最佳工具。',
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
    seoTitle: '网络服务图文使用教程｜零基础快速上手 - 晚风指南',
    description: '晚风指南网络服务图文实操教学中心：手把手教你完成多平台客户端正版安装、通用订阅链接一键导入与托管、节点智能延迟测速与自动故障切换、规则模式选择以及开机自启静默运行全流程，细节完备，零基础初学者也能轻松上手。',
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
    seoTitle: '常见网络故障与错误连接排查指南 - 晚风指南',
    description: '晚风指南网络故障排除速查手册：系统排查节点连接超时、订阅更新失败、DNS污染与域名解析缓慢、部分海外网站及App无法打开等高频问题。提供手把手自检诊断流程、系统时间校准及客户端分流规则修复方案，快速恢复高速流畅网络。',
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
    seoTitle: '网络服务新手零基础入门百科 - 晚风指南',
    description: '晚风指南网络服务新手零基础入门百科：专为初学者打造的系统化认知手册。通俗拆解节点、线路、客户端软件与订阅链接的基本概念与运作逻辑，详解初次选购的避坑黄金法则与资金安全防护要点，帮助新手用户告别盲目跟风，建立正确的科学认知。',
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
    seoTitle: '稳定机场推荐｜2026高可用与抗封锁网络方案 - 晚风指南',
    description: '专为追求极高稳定性的用户挑选的稳定网络服务商。全IEPL与IPLC内网专线覆盖，晚高峰丢包率低至0.1%，支持智能故障切换与BGP冗余入口，极速秒开4K高清流媒体与跨国协同业务，是远程办公与核心商业用户长期使用的稳健首选，从容应对各类复杂严苛的网络封锁环境。',
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
    seoTitle: '性价比机场推荐｜高品质与合理价格平衡点 - 晚风指南',
    description: '精选月均15-25元黄金预算区间的高性价比网络服务方案。兼顾晚高峰测速带宽、充沛流量配额与流媒体及ChatGPT原生解锁支持，坚持月付灵活购买原则，杜绝低价劣质超卖与虚标倍率，真正实现网络综合性能与套餐价格的理想平衡，助你在预算与使用体验之间找到最佳平衡点。',
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
    seoTitle: '便宜机场推荐2026｜低预算与平价月付方案选购指南 - 晚风指南',
    description: '针对预算有限的用户与学生群体精选的平价网络服务方案。深入评测10元左右月付套餐，严格甄选具备BGP多线中转架构与合理流量配额的良心服务商，坚持按月订阅尝鲜原则，有效避开劣质超卖跑路陷阱与资金损失，真正实现花小钱办大事，为低预算用户提供切实可行的高性价比选择。',
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
    seoTitle: 'AI 平台专属机场推荐｜解锁 ChatGPT, Claude 与 Gemini - 晚风指南',
    description: '专门为OpenAI ChatGPT、Anthropic Claude与Google Gemini等AI大模型重度用户精选的纯净节点网络服务。精选原生住宅IP与低风控广播IP，彻底解决Access Denied报错、频繁人机验证与长连接SSE流式输出中断痛点。',
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
    seoTitle: 'IEPL 专线原理与优势详解｜为什么它是稳定之王 - 晚风指南',
    description: '深入硬核解析IEPL国际以太网专线架构：物理二层内网点对点数据传输不过公网防火墙，晚高峰抗波动与抗丢包性能极其卓越，彻底告别封锁敏感与频繁断连卡顿，是跨国企业远程办公、高频量化交易与关键跨境业务的首选物理通信架构方案，助你建立起对高端专线服务质量的客观认知。',
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
    seoTitle: '20元左右机场推荐｜高性价比黄金预算区间选购 - 晚风指南',
    description: '20元/月是网络连接服务市场的黄金平衡预算区间。为您深度测评推荐包含200GB以上大流量配额、BGP多线优化中转或轻量专线的高性价比服务商，兼顾晚高峰测速带宽与稳定性，从容支撑日常4K流媒体追剧与AI办公交互，综合性价比极高，是学生党与日常轻度办公用户的绝佳首选。',
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
