# 2026 网络服务选择与使用知识博客 - 全站 Content Map (100~150 URL 规划)

这份文档是全站内容架构、SEO 拓扑关系、Topic Cluster 建设与 URL 规则的最高指引。整个网站围绕核心搜索意图 **“机场推荐”** 进行深度 Topic Cluster 建模，分为 **Pillar Page（专题中心页）**、**Cluster Article（核心支撑文章）** 与 **Long-tail Article（长尾问答文章）**。

---

## 1. URL 命名规范与架构原则

1. **结构简短语义化：** 使用英文/拼音短语，禁止日期、随机 ID、`?id=123` 或 `.html`。
2. **层级继承：** 按照 `/[一级 Pillar]/[二级 Cluster]/[特定主题]/` 继承关系建立，例如 `/recommend/stable/`、`/network/iepl/`。
3. **消除 Keyword Cannibalization（关键词吞噬）：** 同一个搜索意图（如“2026机场推荐”与“2026年机场推荐”）严格收录于同一个强 Pillar Page，不拆分重复页面。
4. **优先级分层：**
   - **P0：** 核心核心柱页（全站权重中心，建立第一批上线）
   - **P1：** 核心商业/技术支撑专题（第一批上线）
   - **P2：** 高频操作与知识支撑文章（第二批上线）
   - **P3：** 长尾衍生问答（后期持续扩充）

---

## 2. 完整内容矩阵表格 (Full Content Matrix)

### 2.1 机场推荐专题 (`/recommend/`) - Pillar Cluster

| 页面名称 | URL | 页面类型 | 主关键词 | 搜索意图 | 父级页面 | 核心链接方向 | 优先级 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 机场推荐 (全站主柱) | `/recommend/` | Pillar Page | 机场推荐 | 商业调查 | 首页 | -> 全部分类, /ranking/, /price/ | **P0** |
| 稳定机场推荐 | `/recommend/stable/` | Sub-Pillar | 稳定机场推荐 | 商业调查 | `/recommend/` | -> /network/iepl/, /reviews/ | **P0** |
| 性价比机场推荐 | `/recommend/value/` | Sub-Pillar | 性价比机场推荐 | 商业调查 | `/recommend/` | -> /price/15-yuan/, /price/20-yuan/ | **P0** |
| 便宜机场推荐 | `/recommend/budget/` | Sub-Pillar | 便宜机场推荐 | 商业调查 | `/recommend/` | -> /price/10-yuan/, /price/monthly/ | **P1** |
| 新手机场推荐 | `/recommend/beginner/` | Sub-Pillar | 新手机场推荐 | 商业调查 | `/recommend/` | -> /guide/, /tutorials/ | **P0** |
| 高端机场推荐 | `/recommend/premium/` | Sub-Pillar | 高端机场推荐 | 商业调查 | `/recommend/` | -> /network/iepl/, /network/dedicated-ip/ | **P1** |
| 长期使用机场推荐 | `/recommend/long-term/` | Sub-Pillar | 长期使用机场 | 商业调查 | `/recommend/` | -> /ranking/stability/ | **P1** |
| 月付机场推荐 | `/recommend/monthly/` | Sub-Pillar | 月付机场推荐 | 商业调查 | `/recommend/` | -> /price/monthly/ | **P0** |
| 年付机场推荐 | `/recommend/yearly/` | Sub-Pillar | 年付机场推荐 | 商业调查 | `/recommend/` | -> /price/yearly/ | **P1** |
| 按量计费机场推荐 | `/recommend/payg/` | Sub-Pillar | 按量机场推荐 | 商业调查 | `/recommend/` | -> /price/payg/ | **P0** |
| AI 机场推荐 | `/recommend/ai/` | Sub-Pillar | AI机场推荐 | 商业调查 | `/recommend/` | -> /use-case/chatgpt/, /network/residential-ip/ | **P0** |
| 流媒体机场推荐 | `/recommend/streaming/` | Sub-Pillar | 流媒体机场推荐 | 商业调查 | `/recommend/` | -> /use-case/video/, /network/native-ip/ | **P0** |
| 办公机场推荐 | `/recommend/work/` | Sub-Pillar | 办公机场推荐 | 商业调查 | `/recommend/` | -> /network/iepl/ | **P1** |
| 游戏机场推荐 | `/recommend/gaming/` | Sub-Pillar | 游戏机场推荐 | 商业调查 | `/recommend/` | -> /network/latency/ | **P1** |
| 多设备机场推荐 | `/recommend/multi-device/`| Sub-Pillar | 多设备机场推荐 | 商业调查 | `/recommend/` | -> /clients/ | **P2** |
| 2026机场推荐指南文章 | `/articles/2026-airport-recommendation-guide/` | Cluster Article | 2026机场推荐 | 商业调查 | `/recommend/` | -> /recommend/stable/, /network/iepl/ | **P0** |
| 机场挑选指标详解文章 | `/articles/airport-selection-metrics-guide/` | Cluster Article | 机场挑选指标 | 交易前调查 | `/recommend/` | -> /network/latency/, /price/ | **P0** |

---

### 2.2 机场排行专题 (`/ranking/`) - Ranking Cluster

| 页面名称 | URL | 页面类型 | 主关键词 | 搜索意图 | 父级页面 | 核心链接方向 | 优先级 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 机场排行榜单首页 | `/ranking/` | Pillar Page | 机场排行 | 商业调查 | 首页 | -> /ranking/overall/, /reviews/ | **P0** |
| 综合机场排行榜 | `/ranking/overall/` | Sub-Pillar | 机场排行榜 | 商业调查 | `/ranking/` | -> /recommend/, /reviews/ | **P0** |
| 稳定性排行榜 | `/ranking/stability/` | Sub-Pillar | 稳定机场排行 | 商业调查 | `/ranking/` | -> /recommend/stable/ | **P0** |
| 性价比排行榜 | `/ranking/value/` | Sub-Pillar | 性价比机场排行 | 商业调查 | `/ranking/` | -> /recommend/value/ | **P0** |
| 节点测速排行榜 | `/ranking/speed/` | Sub-Pillar | 机场速度排行 | 商业调查 | `/ranking/` | -> /network/iepl/ | **P1** |
| 价格廉宜排行榜 | `/ranking/price/` | Sub-Pillar | 价格排行 | 商业调查 | `/ranking/` | -> /price/10-yuan/ | **P1** |
| AI 平台解锁排行榜 | `/ranking/ai/` | Sub-Pillar | AI机场排行 | 商业调查 | `/ranking/` | -> /recommend/ai/ | **P1** |
| 4K 流媒体解锁排行榜 | `/ranking/streaming/` | Sub-Pillar | 流媒体机场排行 | 商业调查 | `/ranking/` | -> /use-case/video/ | **P1** |
| 节点规模与分布榜 | `/ranking/nodes/` | Sub-Pillar | 节点数量排行 | 商业调查 | `/ranking/` | -> /network/native-ip/ | **P2** |
| 新手零入门榜单 | `/ranking/beginner/` | Sub-Pillar | 新手机场排行 | 商业调查 | `/ranking/` | -> /guide/ | **P1** |

---

### 2.3 品牌深度评测专题 (`/reviews/`) - Brand Reviews Cluster

| 页面名称 | URL | 页面类型 | 主关键词 | 搜索意图 | 父级页面 | 核心链接方向 | 优先级 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 品牌评测总览 | `/reviews/` | Pillar Page | 品牌评测 | 商业调查 | 首页 | -> 各种品牌评测 | **P1** |
| 服务商 Alpha 深度评测 | `/reviews/alpha/` | Brand Review | 服务商 Alpha 评测 | 商业调查 | `/reviews/` | -> /recommend/stable/, /compare/ | **P1** |
| 服务商 Beta 深度评测 | `/reviews/beta/` | Brand Review | 服务商 Beta 评测 | 商业调查 | `/reviews/` | -> /recommend/value/, /compare/ | **P1** |
| 服务商 Gamma 深度评测 | `/reviews/gamma/` | Brand Review | 服务商 Gamma 评测 | 商业调查 | `/reviews/` | -> /recommend/ai/ | **P1** |
| 服务商 Delta 深度评测 | `/reviews/delta/` | Brand Review | 服务商 Delta 评测 | 商业调查 | `/reviews/` | -> /price/payg/ | **P2** |

*(后续可扩展至 30+ 品牌单独评测，URL 架构无需改变)*

---

### 2.4 机场对比专题 (`/compare/`) - Comparison Cluster

| 页面名称 | URL | 页面类型 | 主关键词 | 搜索意图 | 父级页面 | 核心链接方向 | 优先级 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 对比总览首页 | `/compare/` | Pillar Page | 机场对比 | 商业调查 | 首页 | -> 各种对比文章 | **P1** |
| IEPL 专线 vs IPLC 专线 | `/compare/iepl-vs-iplc/` | Comparison | IEPL vs IPLC | 信息/调查 | `/compare/` | -> /network/iepl/, /network/iplc/ | **P0** |
| 月付套餐 vs 年付套餐 | `/compare/monthly-vs-yearly/` | Comparison | 月付 vs 年付 | 商业调查 | `/compare/` | -> /price/monthly/, /price/yearly/ | **P0** |
| 按量计费 vs 周期订阅 | `/compare/payg-vs-subscription/` | Comparison | 按量 vs 订阅 | 商业调查 | `/compare/` | -> /price/payg/ | **P0** |
| 平价机场 vs 独立高端专线 | `/compare/cheap-vs-premium/` | Comparison | 平价 vs 高端机场 | 商业调查 | `/compare/` | -> /recommend/budget/, /recommend/premium/ | **P1** |
| 品牌 A vs 品牌 B 对比 | `/compare/brand-a-vs-brand-b/` | Comparison | 品牌对比 | 商业调查 | `/compare/` | -> /reviews/alpha/, /reviews/beta/ | **P2** |

---

### 2.5 价格专题 (`/price/`) - Pricing & Budget Cluster

| 页面名称 | URL | 页面类型 | 主关键词 | 搜索意图 | 父级页面 | 核心链接方向 | 优先级 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 价格选择总览 | `/price/` | Pillar Page | 机场价格 | 商业/交易 | 首页 | -> 各预算专题 | **P0** |
| 10元机场推荐 | `/price/10-yuan/` | Sub-Pillar | 10元机场 | 商业/交易 | `/price/` | -> /recommend/budget/ | **P0** |
| 15元机场推荐 | `/price/15-yuan/` | Sub-Pillar | 15元机场 | 商业/交易 | `/price/` | -> /recommend/value/ | **P0** |
| 20元机场推荐 | `/price/20-yuan/` | Sub-Pillar | 20元机场 | 商业/交易 | `/price/` | -> /recommend/value/ | **P0** |
| 30元机场推荐 | `/price/30-yuan/` | Sub-Pillar | 30元机场 | 商业/交易 | `/price/` | -> /recommend/stable/ | **P1** |
| 50元及以上高端机场 | `/price/50-yuan/` | Sub-Pillar | 50元机场 | 商业/交易 | `/price/` | -> /recommend/premium/ | **P1** |
| 月付套餐选择指南 | `/price/monthly/` | Sub-Pillar | 月付机场 | 商业/交易 | `/price/` | -> /recommend/monthly/ | **P0** |
| 季付套餐选择指南 | `/price/quarterly/` | Sub-Pillar | 季付机场 | 商业/交易 | `/price/` | -> /recommend/value/ | **P2** |
| 年付打折套餐分析 | `/price/yearly/` | Sub-Pillar | 年付机场 | 商业/交易 | `/price/` | -> /recommend/yearly/ | **P1** |
| 按量计费流量包 | `/price/payg/` | Sub-Pillar | 按量机场 | 商业/交易 | `/price/` | -> /recommend/payg/ | **P0** |
| 不限时流量包 | `/price/unlimited-time/` | Sub-Pillar | 不限时机场 | 商业/交易 | `/price/` | -> /price/payg/ | **P1** |
| 机场套餐对比分析文章 | `/articles/airport-pricing-plan-comparison/` | Cluster Article | 机场套餐选择 | 商业/交易 | `/price/` | -> /price/monthly/, /price/payg/ | **P0** |

---

### 2.6 线路知识专题 (`/network/`) - Network Architecture Cluster

| 页面名称 | URL | 页面类型 | 主关键词 | 搜索意图 | 父级页面 | 核心链接方向 | 优先级 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 线路知识总览 | `/network/` | Pillar Page | 线路知识 | 信息型 | 首页 | -> 各线路知识页 | **P0** |
| IEPL 专线详解 | `/network/iepl/` | Sub-Pillar | IEPL专线 | 信息型 | `/network/` | -> /recommend/stable/ | **P0** |
| IPLC 专线详解 | `/network/iplc/` | Sub-Pillar | IPLC专线 | 信息型 | `/network/` | -> /compare/iepl-vs-iplc/ | **P0** |
| BGP 多线中转详解 | `/network/transit/` | Sub-Pillar | BGP中转 | 信息型 | `/network/` | -> /recommend/value/ | **P0** |
| 公网直连线路详解 | `/network/direct/` | Sub-Pillar | 公网直连 | 信息型 | `/network/` | -> /recommend/budget/ | **P1** |
| CN2 GIA 线路详解 | `/network/cn2/` | Sub-Pillar | CN2 GIA | 信息型 | `/network/` | -> /network/transit/ | **P1** |
| CMI 移动直连详解 | `/network/cmi/` | Sub-Pillar | CMI线路 | 信息型 | `/network/` | -> /network/transit/ | **P2** |
| 原生 IP 节点区别 | `/network/native-ip/` | Sub-Pillar | 原生IP | 信息型 | `/network/` | -> /use-case/video/ | **P1** |
| 住宅 IP (家宽 IP) 区别 | `/network/residential-ip/` | Sub-Pillar | 住宅IP | 信息型 | `/network/` | -> /use-case/chatgpt/ | **P0** |
| 共享 IP 机制 | `/network/shared-ip/` | Sub-Pillar | 共享IP | 信息型 | `/network/` | -> /problems/ai-blocked/ | **P2** |
| 独享 IP (独立节点) | `/network/dedicated-ip/` | Sub-Pillar | 独享IP | 信息型 | `/network/` | -> /recommend/premium/ | **P2** |
| 延迟 (Ping) 影响分析 | `/network/latency/` | Sub-Pillar | 延迟 | 信息型 | `/network/` | -> /use-case/gaming/ | **P1** |
| 丢包率 (Packet Loss) 分析| `/network/packet-loss/` | Sub-Pillar | 丢包率 | 信息型 | `/network/` | -> /problems/timeout/ | **P1** |
| 晚高峰拥堵原因分析 | `/network/peak-hours/` | Sub-Pillar | 晚高峰 | 信息型 | `/network/` | -> /recommend/stable/ | **P0** |
| 线路区别科普文章 | `/articles/network-line-types-iepl-iplc-guide/` | Cluster Article | 机场线路区别 | 信息型 | `/network/` | -> /network/iepl/, /network/transit/ | **P0** |

---

### 2.7 用途与场景专题 (`/use-case/`) - Use-Case Cluster

| 页面名称 | URL | 页面类型 | 主关键词 | 搜索意图 | 父级页面 | 核心链接方向 | 优先级 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 用途选择总览 | `/use-case/` | Pillar Page | 用途选择 | 信息/商业 | 首页 | -> 各用途页 | **P1** |
| ChatGPT 使用环境 | `/use-case/chatgpt/` | Sub-Pillar | ChatGPT机场 | 商业/信息 | `/use-case/` | -> /recommend/ai/, /network/residential-ip/ | **P0** |
| Claude 使用环境 | `/use-case/claude/` | Sub-Pillar | Claude机场 | 商业/信息 | `/use-case/` | -> /recommend/ai/ | **P0** |
| Gemini 使用环境 | `/use-case/gemini/` | Sub-Pillar | Gemini机场 | 商业/信息 | `/use-case/` | -> /recommend/ai/ | **P1** |
| AI 大模型通用环境 | `/use-case/ai/` | Sub-Pillar | AI平台解锁 | 商业/信息 | `/use-case/` | -> /recommend/ai/ | **P0** |
| 4K/8K 视频流媒体 | `/use-case/video/` | Sub-Pillar | 视频流媒体 | 商业/信息 | `/use-case/` | -> /recommend/streaming/ | **P0** |
| 海外社交媒体 | `/use-case/social/` | Sub-Pillar | 社媒代理 | 商业/信息 | `/use-case/` | -> /recommend/value/ | **P2** |
| 跨境远程办公 | `/use-case/office/` | Sub-Pillar | 办公机场 | 商业/信息 | `/use-case/` | -> /recommend/work/ | **P1** |
| 外服游戏加速 | `/use-case/gaming/` | Sub-Pillar | 游戏机场 | 商业/信息 | `/use-case/` | -> /recommend/gaming/ | **P1** |
| 代码开发与 GitHub | `/use-case/coding/` | Sub-Pillar | 开发者机场 | 商业/信息 | `/use-case/` | -> /recommend/stable/ | **P2** |
| 家人多设备并发 | `/use-case/multi-device/`| Sub-Pillar | 多设备支持 | 商业/信息 | `/use-case/` | -> /recommend/multi-device/ | **P2** |

---

### 2.8 客户端与软件专题 (`/clients/`) - Multi-Platform Clients Cluster

| 页面名称 | URL | 页面类型 | 主关键词 | 搜索意图 | 父级页面 | 核心链接方向 | 优先级 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 客户端总览 | `/clients/` | Pillar Page | 客户端下载 | 信息型 | 首页 | -> 各平台客户端 | **P1** |
| Windows 客户端 | `/clients/windows/` | Sub-Pillar | Windows机场客户端 | 信息型 | `/clients/` | -> /clients/clash-verge/ | **P0** |
| macOS 客户端 | `/clients/macos/` | Sub-Pillar | Mac机场客户端 | 信息型 | `/clients/` | -> /clients/clash-verge/ | **P0** |
| Android 客户端 | `/clients/android/` | Sub-Pillar | Android客户端 | 信息型 | `/clients/` | -> /clients/sing-box/ | **P0** |
| iOS / iPhone 客户端 | `/clients/ios/` | Sub-Pillar | iPhone客户端 | 信息型 | `/clients/` | -> /clients/shadowrocket/ | **P0** |
| Clash Verge Rev 教程 | `/clients/clash-verge/` | Sub-Pillar | Clash Verge | 信息型 | `/clients/` | -> /tutorials/import-subscription/ | **P0** |
| v2rayN 教程 | `/clients/v2rayn/` | Sub-Pillar | v2rayN | 信息型 | `/clients/` | -> /tutorials/import-subscription/ | **P1** |
| Shadowrocket (小火箭) | `/clients/shadowrocket/` | Sub-Pillar | Shadowrocket | 信息型 | `/clients/` | -> /tutorials/import-subscription/ | **P0** |
| Sing-box 教程 | `/clients/sing-box/` | Sub-Pillar | Sing-box | 信息型 | `/clients/` | -> /tutorials/import-subscription/ | **P0** |
| Stash 教程 | `/clients/stash/` | Sub-Pillar | Stash | 信息型 | `/clients/` | -> /tutorials/import-subscription/ | **P2** |

---

### 2.9 使用教程专题 (`/tutorials/`) - Operational Guides Cluster

| 页面名称 | URL | 页面类型 | 主关键词 | 搜索意图 | 父级页面 | 核心链接方向 | 优先级 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 教程总览 | `/tutorials/` | Pillar Page | 使用教程 | 信息型 | 首页 | -> 各教程文章 | **P1** |
| 如何导入订阅链接 | `/tutorials/import-subscription/` | Operational | 订阅导入教程 | 操作型 | `/tutorials/` | -> /clients/, /guide/ | **P0** |
| 如何切换节点与模式 | `/tutorials/switch-nodes/` | Operational | 节点切换 | 操作型 | `/tutorials/` | -> /clients/ | **P0** |
| 如何进行真实节点测速 | `/tutorials/speed-test/` | Operational | 测速教程 | 操作型 | `/tutorials/` | -> /network/latency/ | **P1** |
| 如何设置分流规则 | `/tutorials/routing-rules/` | Operational | 规则设置 | 操作型 | `/tutorials/` | -> /clients/clash-verge/ | **P1** |
| 开机自启与后台运行设置 | `/tutorials/auto-start/` | Operational | 开机自启 | 操作型 | `/tutorials/` | -> /clients/ | **P2** |

---

### 2.10 常见问题与故障排查 (`/problems/`) - Troubleshooting Cluster

| 页面名称 | URL | 页面类型 | 主关键词 | 搜索意图 | 父级页面 | 核心链接方向 | 优先级 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 问题解决总览 | `/problems/` | Pillar Page | 问题解决 | 故障排查 | 首页 | -> 各排错文章 | **P1** |
| DNS 污染与解析错误 | `/problems/dns/` | Troubleshooting | DNS污染 | 故障排查 | `/problems/` | -> /tutorials/ | **P1** |
| 节点连接超时 (Timeout) | `/problems/timeout/` | Troubleshooting | 节点超时 | 故障排查 | `/problems/` | -> /network/packet-loss/ | **P0** |
| 订阅链接无法更新 | `/problems/subscription-failed/`| Troubleshooting| 订阅更新失败 | 故障排查 | `/problems/` | -> /tutorials/import-subscription/ | **P0** |
| AI 平台提示 Access Denied| `/problems/ai-blocked/` | Troubleshooting | ChatGPT提示拒绝访问| 故障排查 | `/problems/` | -> /recommend/ai/, /use-case/chatgpt/ | **P0** |
| 网页打不开/连接缓慢 | `/problems/slow-loading/` | Troubleshooting | 网页加载慢 | 故障排查 | `/problems/` | -> /network/peak-hours/ | **P1** |
| 客户端系统代理无法开启 | `/problems/proxy-error/` | Troubleshooting | 系统代理开启失败 | 故障排查 | `/problems/` | -> /clients/ | **P2** |

---

### 2.11 新手指南专题 (`/guide/`) - Beginner Knowledge Cluster

| 页面名称 | URL | 页面类型 | 主关键词 | 搜索意图 | 父级页面 | 核心链接方向 | 优先级 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 新手指南总览 | `/guide/` | Pillar Page | 新手指南 | 教育/入门 | 首页 | -> 新手核心入门页 | **P0** |
| 什么是网络服务与节点？ | `/guide/what-is-airport/` | Educational | 机场是什么 | 教育/入门 | `/guide/` | -> /recommend/beginner/ | **P0** |
| 什么是订阅链接与配置？ | `/guide/subscription-explained/`| Educational| 订阅链接是什么 | 教育/入门 | `/guide/` | -> /tutorials/import-subscription/ | **P0** |
| 第一次选择注意事项 | `/articles/first-time-airport-selection-tips/` | Cluster Article | 第一次选机场 | 教育/入门 | `/guide/` | -> /recommend/monthly/ | **P0** |
| 节点术语速查手册 | `/guide/glossary/` | Educational | 节点术语表 | 教育/入门 | `/guide/` | -> /network/ | **P1** |

---

## 3. 第一阶段 (Phase 1) 优先上线页面清单 (P0 / P1)

本阶段优先建立 **所有 Pillar 结构** 及 **核心 P0 / P1 页面**（共计 35 个关键节点），确保网站基础设施 100% 连通：

1. `/` (首页)
2. `/recommend/` (机场推荐核心 Pillar)
3. `/recommend/stable/` (稳定机场推荐)
4. `/recommend/value/` (性价比机场推荐)
5. `/recommend/budget/` (便宜机场推荐)
6. `/recommend/beginner/` (新手机场推荐)
7. `/recommend/monthly/` (月付机场推荐)
8. `/recommend/payg/` (按量机场推荐)
9. `/recommend/ai/` (AI 机场推荐)
10. `/recommend/streaming/` (流媒体机场推荐)
11. `/ranking/` (机场排行 Pillar)
12. `/ranking/overall/` (综合排行榜)
13. `/ranking/stability/` (稳定榜)
14. `/ranking/value/` (性价比榜)
15. `/reviews/` (品牌评测 Pillar)
16. `/compare/` (机场对比 Pillar)
17. `/compare/iepl-vs-iplc/` (IEPL vs IPLC 对比)
18. `/compare/monthly-vs-yearly/` (月付 vs 年付)
19. `/price/` (价格选择 Pillar)
20. `/price/10-yuan/` (10元机场)
21. `/price/15-yuan/` (15元机场)
22. `/price/20-yuan/` (20元机场)
23. `/price/monthly/` (月付套餐)
24. `/price/payg/` (按量计费包)
25. `/network/` (线路知识 Pillar)
26. `/network/iepl/` (IEPL 专线)
27. `/network/iplc/` (IPLC 专线)
28. `/network/transit/` (BGP 中转)
29. `/network/residential-ip/` (住宅原生 IP)
30. `/network/peak-hours/` (晚高峰拥堵原因)
31. `/use-case/` (用途选择 Pillar)
32. `/use-case/chatgpt/` (ChatGPT 环境)
33. `/clients/` (客户端 Pillar)
34. `/tutorials/` (教程 Pillar)
35. `/problems/` (排错 Pillar)
36. `/guide/` (新手指南 Pillar)
