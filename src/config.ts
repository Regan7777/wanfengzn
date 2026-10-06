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
  siteName: '晚风机场服务指南',
  siteTitle: '2026机场推荐｜稳定、价格与线路选择指南 - 晚风机场服务指南',
  siteUrl: 'https://example.com', // 请修改为您部署的真实域名，例如 https://yourdomain.com
  description: '面向中文用户的网络服务选择与使用知识博客。提供2026机场推荐、服务商深度评测、排行榜单、IEPL/IPLC线路知识、客户端使用教程与常见网络排查指南。',
  author: '晚风机场服务指南编辑团队',
  tgChannel: 'https://t.me/wanfengjc',
  defaultOgImage: '/images/og-default.png',
  locale: 'zh-CN',
  
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
      description: '全网精选稳定、高性价比网络连接服务推荐，包含新手入门、AI环境、流媒体解锁与办公专属方案。',
      icon: 'star'
    },
    'ranking': {
      slug: 'ranking',
      name: '机场排行',
      shortName: '排行',
      title: '2026机场排行榜单｜综合、稳定与性价比排名',
      description: '根据实际测速、线路质量、服务稳定性与用户口碑整理的网络服务商排行榜单。',
      icon: 'trophy'
    },
    'reviews': {
      slug: 'reviews',
      name: '机场评测',
      shortName: '评测',
      title: '网络服务商深度评测｜真实体验与节点分析',
      description: '针对主流服务商进行全方位深度测评，涵盖速度、延迟、流媒体解封率与客服支持。',
      icon: 'search'
    },
    'compare': {
      slug: 'compare',
      name: '机场对比',
      shortName: '对比',
      title: '网络服务商横向对比｜价格、线路与功能对照表',
      description: '多视角对比不同网络服务商的套餐性价比、专线支持与使用体验差异。',
      icon: 'scale'
    },
    'price': {
      slug: 'price',
      name: '价格选择',
      shortName: '价格',
      title: '网络服务套餐与价格指南｜月付、年付与按量计费选择',
      description: '教你如何根据预算选择最划算的网络服务套餐，避免低价陷阱与跑路风险。',
      icon: 'tag'
    },
    'network': {
      slug: 'network',
      name: '线路知识',
      shortName: '线路',
      title: '网络线路知识详解｜IEPL、IPLC、BGP与节点区别',
      description: '深入浅出剖析IEPL专线、IPLC内网专线、直连线路与各种传输协议的区别与优劣。',
      icon: 'cpu'
    },
    'use-case': {
      slug: 'use-case',
      name: '用途选择',
      shortName: '用途',
      title: '场景化服务选择｜AI平台、流媒体、游戏与协同办公',
      description: '针对ChatGPT/Claude/Gemini AI使用环境、4K 8K流媒体播放与外服游戏提供针对性方案。',
      icon: 'target'
    },
    'clients': {
      slug: 'clients',
      name: '客户端',
      shortName: '客户端',
      title: '多平台连接客户端推荐与下载导航',
      description: '涵盖Windows、macOS、Android、iOS与路由器各平台最佳连接客户端介绍与配置。',
      icon: 'device'
    },
    'tutorials': {
      slug: 'tutorials',
      name: '使用教程',
      shortName: '教程',
      title: '网络服务图文使用教程｜零基础快速上手',
      description: '手把手教你完成客户端下载、订阅导入、节点选择与高级规则配置。',
      icon: 'book'
    },
    'problems': {
      slug: 'problems',
      name: '问题解决',
      shortName: '排错',
      title: '常见网络故障与错误连接排查指南',
      description: '针对节点打不开、连接超时、订阅无法更新、DNS污染与速度慢等典型问题提供解决办法。',
      icon: 'alert'
    },
    'guide': {
      slug: 'guide',
      name: '新手指南',
      shortName: '新手',
      title: '网络服务新手零基础入门百科',
      description: '适合完全不了解的新手用户，快速搞懂节点、线路、客户端与订阅的基本概念。',
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
