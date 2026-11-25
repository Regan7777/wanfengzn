export interface CategoryMeta {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  title: string;
  path: string;
  isPillar?: boolean;
}

export const SITE_CONFIG = {
  siteName: '晚风指南',
  siteTitle: '2026机场推荐｜稳定、价格与线路选择指南 - 晚风指南',
  siteUrl: 'https://wanfengzn.com',
  description: '晚风指南（wanfengzn.com）是面向中文用户的网络服务选型与实测知识博客。专注于2026最新高性价比稳定机场推荐、服务商晚高峰深度评测、IEPL/IPLC专线线路科普、主流多端客户端配置教程以及网络故障排查自检手册，坚持数据实测与客观避坑原则。',
  author: '晚风指南编辑团队',
  tgChannel: 'https://t.me/wanfengjc',
  tgUser: 'https://t.me/wanfengzn',
  defaultOgImage: '/images/og-default.png',
  locale: 'zh-CN',
  bingVerificationCode: '7ec54bed5e684bee9e50ea059b0e5538', // Bing 站长所有权验证代码（用于输出 msvalidate.01 meta 标签）
  indexNowKey: '7ec54bed5e684bee9e50ea059b0e5538', // IndexNow API Key（用于即时推送收录）
  // 核心导航结构
  navigation: [
    { title: '首页', path: '/' },
    { title: '机场推荐', path: '/recommend/', isPillar: true },
    { title: '机场评测', path: '/reviews/' },
    { title: '机场对比', path: '/compare/' },
    { title: '价格选择', path: '/price/' },
    { title: '线路知识', path: '/network/' },
    { title: '用途选择', path: '/use-case/' },
    { title: '客户端', path: '/clients/' },
    { title: '使用教程', path: '/tutorials/' },
    { title: '问题解决', path: '/problems/' },
    { title: '新手指南', path: '/guide/' },
  ] as NavItem[],

  // 分类元数据
  categories: {
    'recommend': {
      slug: 'recommend',
      name: '机场推荐',
      shortName: '推荐',
      title: '机场推荐｜2026稳定与性价比选择指南',
      description: '全网精选2026最新稳定、高性价比网络连接服务深度推荐专栏。系统涵盖新手入门避坑、ChatGPT与Claude等AI工具解锁、4K海外流媒体播放与跨境办公专属方案，全维度剖析晚高峰测速、丢包率与月付套餐真实资费，拒绝虚假超卖与跑路风险。',
      icon: 'star'
    },
    'ranking': {
      slug: 'ranking',
      name: '机场排行',
      shortName: '排行',
      title: '2026机场排行榜单｜综合、稳定与性价比排名',
      description: '基于晚高峰真实测速、节点丢包率、物理线路规格、SLA可用性保障与真实用户长期口碑整理的2026网络服务商综合排行榜单。包含综合天梯榜、晚高峰稳定榜与高性价比月付榜，提供客观透明的多维度横向量化数据参考。',
      icon: 'trophy'
    },
    'reviews': {
      slug: 'reviews',
      name: '机场评测',
      shortName: '评测',
      title: '网络服务商深度评测｜真实体验与节点分析',
      description: '针对主流网络服务商进行全方位深度客观实测专栏。全面覆盖晚高峰真实测速、网络延迟抖动、Netflix与ChatGPT等流媒体与AI工具原生解锁能力、客服工单响应以及倍率计费透明度，提供详实严谨的选型避坑决策依据。',
      icon: 'search'
    },
    'compare': {
      slug: 'compare',
      name: '机场对比',
      shortName: '对比',
      title: '网络服务商横向对比｜价格、线路与功能对照表',
      description: '多视角多维度横向对比不同网络服务商的核心特性与套餐配置。深度剖析月付套餐性价比、IEPL与IPLC物理内网专线支持、节点倍率计费透明度与实际日常使用体验差异，助你在繁杂的市场宣传中精准筛选出高匹配度方案。',
      icon: 'scale'
    },
    'price': {
      slug: 'price',
      name: '价格选择',
      shortName: '价格',
      title: '网络服务套餐与价格指南｜月付、年付与按量计费选择',
      description: '教你如何根据实际预算科学挑选最划算的网络服务套餐。深度拆解月付包月、年付折扣特惠与不限时按量计费套餐的核心区别与隐藏规则，传授理性消费与资金安全防范技巧，有效规避虚假超卖跑路陷阱与资金损失。',
      icon: 'tag'
    },
    'network': {
      slug: 'network',
      name: '线路知识',
      shortName: '线路',
      title: '网络线路知识详解｜IEPL、IPLC、BGP与节点区别',
      description: '深入浅出硬核科普网络线路底层架构知识。全面解析IEPL国际以太网专线、IPLC内网专线、BGP多线中转入口与普通公网直连的核心技术差异，用通信工程逻辑拆解节点晚高峰丢包机理与原生IP属性，助你掌握科学选购的核心法则。',
      icon: 'cpu'
    },
    'use-case': {
      slug: 'use-case',
      name: '用途选择',
      shortName: '用途',
      title: '场景化服务选择｜AI平台、流媒体、游戏与协同办公',
      description: '围绕用户真实核心业务场景量身定制的网络服务选型指南。针对OpenAI ChatGPT、Claude、Gemini等AI大模型交互环境、Netflix与Disney+等4K流媒体原生播放、跨国远程办公与跨服游戏对战提供针对性高可靠性网络支撑方案。',
      icon: 'target'
    },
    'clients': {
      slug: 'clients',
      name: '客户端',
      shortName: '客户端',
      title: '多平台连接客户端推荐与下载导航',
      description: '全面涵盖Windows、macOS、Android、iOS与OpenWrt软路由各平台最佳网络连接客户端软件评测导航。提供官方正版正规下载途径、最新内核版本解析、一键订阅导入指引及系统代理分流规则快速配置操作手册。',
      icon: 'device'
    },
    'tutorials': {
      slug: 'tutorials',
      name: '使用教程',
      shortName: '教程',
      title: '网络服务图文使用教程｜零基础快速上手',
      description: '手把手保姆级图文实操教程专栏：详细教学多平台正版客户端安装包获取、通用订阅链接导入与转换、节点智能分流切换、规则模式定制以及开机自启静默运行全流程，零基础初学者也能快速掌握并轻松畅享流畅网络。',
      icon: 'book'
    },
    'problems': {
      slug: 'problems',
      name: '问题解决',
      shortName: '排错',
      title: '常见网络故障与错误连接排查指南',
      description: '针对节点无法打开、连接超时、订阅更新报错、DNS污染劫持与网页加载缓慢等常见网络故障，提供系统化全流程自检排查与诊断解决手册。手把手教你校准系统时间、排查节点可用性并迅速恢复高速稳定的网络连接。',
      icon: 'alert'
    },
    'guide': {
      slug: 'guide',
      name: '新手指南',
      shortName: '新手',
      title: '网络服务新手零基础入门百科',
      description: '专为零基础初学者打造的网络服务入门百科指南。系统拆解节点类型、物理线路特征、客户端工具与订阅机制等基础核心概念，树立坚持月付、正规下载、多线备份的理性安全使用习惯，帮助新手用户轻松避开各类低价割韭菜陷阱。',
      icon: 'help'
    }
  } as Record<string, CategoryMeta>,

  footerLinks: [
    {
      title: '核心专题',
      links: [
        { name: '2026机场推荐', path: '/recommend/' },
        { name: '综合排行榜', path: '/ranking/' },
        { name: '性价比选择', path: '/price/' },
        { name: 'IEPL专线知识', path: '/network/' }
      ]
    },
    {
      title: '使用与场景',
      links: [
        { name: 'AI使用环境', path: '/use-case/' },
        { name: '流媒体解锁', path: '/use-case/' },
        { name: '客户端下载', path: '/clients/' },
        { name: '新手入门', path: '/guide/' }
      ]
    },
    {
      title: '帮助与支持',
      links: [
        { name: '全站搜索', path: '/search/' },
        { name: '问题排查', path: '/problems/' },
        { name: '写作规范', path: '/docs/content-guide/' },
        { name: '站点地图', path: '/sitemap-index.xml' }
      ]
    },
    {
      title: '关于与条款',
      links: [
        { name: '关于本站', path: '/about/' },
        { name: '隐私政策', path: '/privacy/' },
        { name: '免责声明', path: '/disclaimer/' },
        { name: '机器索引 (llms.txt)', path: '/llms.txt' }
      ]
    }
  ]
};
