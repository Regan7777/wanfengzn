---
title: "2026 月之暗面机场深度评测：5元100GB超低月付、10元起不限时总量包与AnyTLS通用订阅实测"
description: "2026 月之暗面机场全方位评测。最低仅需5元100GB月付起步、25元年付（每月50GB）；提供10元100GB起四档永久不限时买断包；全节点1倍率不限速不限设备；支持AnyTLS协议与Clash/Sing-box通用订阅导入；附官方测速与避坑选购指南。"
publishedAt: 2026-10-21
updatedAt: 2026-10-25
category: "reviews"
tags: ["机场评测", "月之暗面", "低价机场", "不限时机场", "Clash订阅", "AnyTLS", "2026机场推荐", "科学上网"]
author: "W"
cover: "/images/covers/yuezhianmian-airport-review-2026.svg"
coverAlt: "月之暗面机场套餐资费与Clash通用订阅使用评测"
featured: false
draft: false
keywords: ["月之暗面", "月之暗面机场", "月之暗面官网", "低价机场", "5元机场", "不限时机场", "AnyTLS", "2026机场推荐"]
tldr: "月之暗面（代理订阅服务，域名月之暗面.org）定位于【极低入门门槛 / 纯通用订阅 / AnyTLS 协议 / 永久不限时包】的平价服务商。常规轻量级套餐仅需 5 元/月（100GB），另有 25 元/年（每月 50GB）的年付福利款；针对备用群体提供 10元100G、20元200G、50元500G 与 80元1000G 四档永久不限时买断包。全线节点执行 1.0x 计费，标称不限速、不限连接设备数。无自研客户端，提供适配 Clash Verge Rev、Sing-box、FlClash、小火箭的通用订阅。周期套餐明确不退款，不支持免费试用。"
faq:
  - question: "月之暗面机场最低月付真的是 5 元吗？年付 25 元怎么算？"
    answer: "是的，常规周期套餐【轻量级】月付标价即为 5 元/月，包含 100GB 流量。另有特惠【年付轻量福利】套餐售价 25 元/年，需一次性预付全年，每月自动配发 50GB 流量（折合约 2.08 元/月），该年付福利款不支持单月购买流量重置包。"
  - question: "月之暗面有哪些不限时流量包？规则是怎样的？"
    answer: "提供 4 档一次性买断不限时包：10 元 100GB、20 元 200GB、50 元 500GB 以及 80 元 1000GB。总额度永久有效不按月清零，流量用完即止，每 GB 成本低至 0.08~0.10 元，适合极低频出行或常备应急通道。"
  - question: "月之暗面有自研专属客户端吗？如何导入节点？"
    answer: "月之暗面不提供任何自研专属客户端，主打开源开放的通用订阅模式。支持导出为 Clash / Sing-box / 通用订阅链接，可直接导入至 Windows/macOS 的 Clash Verge Rev、Android 的 FlClash 以及 iOS 的 Shadowrocket 中。"
  - question: "月之暗面采用什么传输协议？节点倍率是多少？"
    answer: "商家采用 AnyTLS 协议与海外 BGP 节点集群。全线节点均为 1.0x 统一扣费倍率（使用 1GB 扣除 1GB），官方标称不限制客户端连接数，全节点不设速率上限。"
  - question: "月之暗面可以免费试用或申请退款吗？"
    answer: "不支持免费试用。官方在周期套餐卡片明确标注【无退款政策】。鉴于起步月付仅需 5 元，强烈建议首次接触的用户以 5 元月付短周期进行本地网络适配性体验。"
related:
  - "2026-airport-recommendation-guide"
  - "all-platforms-client-selection-and-config-guide"
  - "node-speed-test-metrics-tutorial"
  - "clash-and-shadowrocket-all-platform-tutorial-2026"
  - "airport-pricing-plan-comparison"
---

在众多的网络代理服务商中，以极低月费切入市场的平价服务商始终有着庞大的受众群体。**月之暗面（代理订阅服务，识别为月之暗面.org）** 正是凭借“起步月付仅 5 元 100GB、年付特惠仅 25 元、10 元即可买断不限时包”的超低价格标签吸引了大量轻度上网与学生用户。

需要特别说明的是：本文评测的“月之暗面”属于网络代理订阅服务商，与同名 AI 人工智能公司或大语言模型无任何股权或运营关联。

本文由晚风博客展开客观数据解读与技术说明，从资费构成、AnyTLS 协议特性、通用客户端导入步骤到避坑指南做出真实整理。

<div style="margin: 1.5rem 0; padding: 1.25rem; background: linear-gradient(135deg, #1e1035 0%, #150a26 100%); border-radius: 8px; border: 1.5px solid #a855f7; text-align: center;">
  <a href="/go/yuezhianmian" target="_blank" rel="nofollow sponsored noopener noreferrer" style="display: inline-block; padding: 0.75rem 1.85rem; background: linear-gradient(135deg, #a855f7 0%, #7e22ce 100%); color: #ffffff !important; font-size: 1.05rem; font-weight: 800; text-decoration: none; border-radius: 6px; box-shadow: 0 4px 14px rgba(168, 85, 247, 0.4); transition: all 0.2s ease;">
    🚀 点击直达月之暗面官网入口与查看最新套餐（邀请码：lAzTYBl2） →
  </a>
  <div style="margin-top: 0.75rem; font-size: 0.9rem; color: #e9d5ff; font-weight: 600;">
    低价门槛：轻量月付 5 元/月 ｜ 10 元起不限时买断包 ｜ 支持 Clash 与 AnyTLS
  </div>
</div>

---

## 1. 协议栈设计与服务定位

### 1.1 纯正开源通用订阅，无私有客户端绑定
与许多强制用户安装专属 APK 或桌面安装包的厂商不同，月之暗面坚持了纯粹的通用订阅模式：
* **无私有软件侵入**：用户完全依托成熟的第三方开源客户端（如 [Clash Verge Rev](https://github.com/clash-verge-rev/clash-verge-rev/releases)、[Sing-box](https://github.com/SagerNet/sing-box/releases)、[FlClash](https://github.com/chen08209/FlClash/releases)），保障本地设备安全；
* **支持 AnyTLS 协议**：AnyTLS 具备优良的抗识别伪装机制，结合 Sing-box 与 Mihomo 内核能够实现平稳的协议握手；
* **统一 1.0x 计费倍率**：全线节点不设虚高倍率，实际用量 1:1 扣除。

---

## 2. 月之暗面全量套餐价格与多周期梯队

以下数据经登录服务后台 API 实际核验记录。表中价格均为无折扣直接标价，单位为人民币（¥）：

### 2.1 周期型订阅套餐（月付 / 季付 / 半年付 / 年付）

| 套餐级别 | 月付价格 | 季付价格 | 半年付价格 | 年付价格 | 每月流量额度 | 节点倍率 | 重置包单价 | 官方规则说明 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **年付轻量福利** | — | — | — | **¥25.0/年** | **50GB/月** | 1.0x | ❌ 当月不支持重置 | 仅限年付，每月购买日自动刷新，不退款 |
| **轻量级** | **¥5.0** | ¥15.0 | ¥30.0 | ¥60.0 | **100GB/月** | 1.0x | ¥5.0/次 | 购买日自动重置，不限速不限设备，不退款 |
| **入门级** | **¥10.0** | ¥30.0 | ¥60.0 | ¥120.0 | **200GB/月** | 1.0x | ¥10.0/次 | 购买日自动重置，不限速不限设备，不退款 |
| **标准级** | **¥15.0** | ¥45.0 | ¥90.0 | ¥180.0 | **300GB/月** | 1.0x | ¥15.0/次 | 购买日自动重置，不限速不限设备，不退款 |
| **高级款** | **¥20.0** | ¥60.0 | ¥120.0 | ¥240.0 | **500GB/月** | 1.0x | ¥20.0/次 | 购买日自动重置，不限速不限设备，不退款 |

*核心细节说明：*
1. **长周期折算**：轻量级至高级款长周期售价为月付价格直接倍乘（季付为 3 倍月价，年付为 12 倍月价），长周期未设额外价格折让；
2. **25 元年付福利款**：每月按时配发 50GB 流量，非一次性发放 600GB。该套餐在额度耗尽后当月不支持购买重置包；
3. 横向价格对比详见 [《机场定价梯队与性价比指南》](/articles/airport-pricing-plan-comparison/)。

### 2.2 永久不限时买断流量包

针对需要免月租应急备用或多设备长周期挂载的用户，月之暗面提供 4 档一次性总量包：

| 不限时产品 | 一次性买断价格 | 一次性总流量 | 每GB折算成本 | 重置流量包价格 | 官方规则与有效期 |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **不限时 100G** | **¥10.0** | **100GB** | **¥0.100/GB** | ¥10.0/次 | 永久有效，不按月清零，用完即止 |
| **不限时 200G** | **¥20.0** | **200GB** | **¥0.100/GB** | ¥20.0/次 | 永久有效，不按月清零，用完即止 |
| **不限时 500G** | **¥50.0** | **500GB** | **¥0.100/GB** | ¥50.0/次 | 永久有效，不按月清零，用完即止 |
| **不限时 1000G** | **¥80.0** | **1000GB** | **¥0.080/GB** | ¥80.0/次 | 永久有效，不按月清零，用完即止 |

---

## 3. 开源客户端订阅导入与配置步骤

月之暗面全面依托开源生态，全平台主流客户端一键导入指引如下：

| 设备平台 | 推荐开源客户端（点击直达官方下载） | 推荐导入流程 |
| :--- | :--- | :--- |
| **Windows** | [Clash Verge Rev Releases](https://github.com/clash-verge-rev/clash-verge-rev/releases) ｜ [v2rayN Releases](https://github.com/2dust/v2rayN/releases) | 复制后台订阅 URL，在 Profiles 粘贴导入并开启 TUN 模式 |
| **macOS** | [Clash Verge Rev Releases](https://github.com/clash-verge-rev/clash-verge-rev/releases) ｜ [Sing-box Releases](https://github.com/SagerNet/sing-box/releases) | 下载 DMG 安装，导入配置并设置为规则分流 |
| **Android** | [FlClash 官方最新 Release](https://github.com/chen08209/FlClash/releases) ｜ [v2rayNG Releases](https://github.com/2dust/v2rayNG/releases) | 下载 APK 安装，点击‘配置’粘贴订阅链接一键拉取 |
| **iOS / iPad** | [Shadowrocket (App Store 官方)](https://apps.apple.com/app/shadowrocket/id932747118) ｜ [Stash (App Store)](https://apps.apple.com/app/stash/id1596063717) | 小火箭点击右上角加号，类型选择 Subscribe 粘贴 URL 即可 |
| **OpenWrt** | [OpenClash 官方 Releases](https://github.com/vernesong/OpenClash/releases) | 上传 IPK 固件插件，在配置文件管理中填入订阅更新 |

### 3.1 实操配置要点：
1. 从 <a href="/go/yuezhianmian" target="_blank" rel="nofollow sponsored noopener noreferrer">月之暗面官网入口</a> 注册并登录个人仪表盘；
2. 在用户中心复制对应格式的 Clash 或通用订阅链接；
3. 打开对应客户端粘贴并点击更新，建议内核保持在较新版本以完美兼容 AnyTLS；
4. 遇到订阅更新超时等问题，可查阅 [《订阅更新失败与 403/404 故障排查》](/articles/subscription-update-failed-and-403-404-error-guide/)。

---

## 4. 节点带宽与真实质量测速指引

完成订阅配置后，建议使用专业测速工具测量节点可用率：

1. **基准峰值测速**：
   - 登录 [Speedtest by Ookla 官网平台](https://www.speedtest.net/)，测试晚高峰时段的单线程下载与上传速率；
   - 更多实测诊断方式参考 [《网络节点测速与真实丢包率诊断》](/articles/node-speed-test-metrics-tutorial/)；
2. **流媒体承载能力**：
   - 使用 [Fast.com 官方测速站](https://fast.com/)，测试当前节点至 Netflix 国际 CDN 的握手延迟与吞吐；
3. **高并发丢包与抖动测试**：
   - 打开 [Cloudflare Speed Test 官方平台](https://speed.cloudflare.com/) 运行完整丢包率统计；
4. **出口 IP 风险值排查**：
   - 访问 [BrowserLeaks IP 泄漏检测](https://browserleaks.com/ip) 与 [IPinfo 数据库](https://ipinfo.io/)，确认是否为原生机房 IP。访问 AI 报错排查可参考 [《ChatGPT / Claude 访问受限排错教程》](/articles/chatgpt-claude-access-denied-and-human-verify-troubleshooting/)。

---

## 5. 真实避坑指南与选购建议

1. **明确无退款政策**：官方文案写明周期套餐不退款，切勿直接盲目大额年付，优先通过 5 元月付进行试跑；
2. **新手配置门槛**：该服务不提供“一键安装包”，小白用户需要掌握基本客户端的订阅导入步骤（详见 [《全平台客户端选型与配置指南》](/articles/all-platforms-client-selection-and-config-guide/)）；
3. **长周期价格无折扣**：由于季付、半年付与年付均为月价原价累加，按月续费更为灵活无资金压降；
4. **不限时按量储备**：10 元 100GB 不限时包性价比极高，适合作为主梯子故障时的救急备用通道。

更多优质机场横向参考与选型指南，欢迎浏览本站 [《2026 优质机场推荐终极指南》](/articles/2026-airport-recommendation-guide/)。
