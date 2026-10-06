---
title: "网络客户端规则分流配置完全指南：DOMAINS、IP-CIDR、Rule-Set 自定义与广告拦截配置"
description: "手把手教你掌握网络客户端的规则分流（Rule Mode）。涵盖 DOMAIN-SUFFIX、GEOIP、Rule-Set 第三方规则库导入、AI/流媒体指定节点路由及广告拦截规则配置。"
publishedAt: 2026-10-05
updatedAt: 2026-10-05
category: "tutorials"
tags: ["新手教程", "规则模式", "分流规则", "使用教程", "Rule-Set", "广告拦截"]
author: "晚风机场服务指南编辑团队"
cover: "/images/covers/recommend-guide.svg"
coverAlt: "网络客户端规则分流与自定义 Rule-Set 配置示意图"
featured: false
draft: false
keywords: ["规则分流教程", "Rule-Set配置", "GEOIP规则", "Clash自定义规则", "Shadowrocket规则", "广告拦截分流"]
tldr: "规则分流实现原理与配置：1. 客户端通过域名 (DOMAIN) 与 IP (GEOIP/IP-CIDR) 逐条匹配分流逻辑；2. 优先匹配自定义规则 -> 匹配第三方 Rule-Set -> 匹配 GeoIP/GeoSite -> 最终走 Match 默认规则；3. 学会配置语法 DOMAIN-SUFFIX,openai.com,AI 节点，实现精准流量导流与广告自动拦截。"
faq:
  - question: "开启代理后访问国内网站（如淘宝、B站）非常慢，甚至显示海外版？"
    answer: "说明流量被误分流到了海外代理节点。请确认客户端的路由模式是否为‘规则模式 (Rule)’而非‘全局模式 (Global)’，并检查系统的 GEOIP / GeoSite 规则库是否升级到了最新版本。"
  - question: "如何让特定的网站固定走直连或者走指定的代理节点？"
    answer: "可以在客户端的自定义规则 (User Rules) 中添加一行规则：直连示例 DOMAIN-SUFFIX,example.com,DIRECT；指定代理节点示例 DOMAIN-SUFFIX,chatgpt.com,AI 节点组。"
---

为什么在开启网络代理软件后，浏览 YouTube、Twitter 能够顺畅打开，而访问国内的百度、微信或淘宝依然能保持原生的极速加载且不消耗代理流量？

这背后全赖客户端强大的 **“规则分流模式 (Rule Mode / Routing Rules)”**。

分流规则是网络代理工具的灵魂。合理的分流策略不仅能保障国内外流量各行其道，还能顺带过滤网页垃圾广告、锁定流媒体解锁节点以及保障敏感应用的安全。

本教程将系统化讲解规则分流的工作原理、四类核心匹配规则语法，以及如何导入第三方 **Rule-Set** 规则集。

---

## 1. 规则分流的核心工作原理

当你的设备尝试访问某个网址（例如 `https://www.google.com` 或 `https://www.baidu.com`）时，客户端会在本地拦截网络请求，并从上到下**依次比对**配置好的分流规则列表：

```
流量分流匹配决策树：
[发起网络请求]
     │
     ├─► 是否匹配【自定义用户规则】?  ──► (YES) ──► 执行指定动作 (Direct/Proxy/Reject)
     │         │ (NO)
     ├─► 是否匹配【第三方 Rule-Set】? ──► (YES) ──► 匹配对应分组 (如 AI / Streaming / AdBlock)
     │         │ (NO)
     ├─► 是否属于【GeoIP / CN IP】?  ──► (YES) ──► 走 DIRECT (直连)
     │         │ (NO)
     └─► 最终兜底规则 【MATCH / FINAL】 ──► 走默认代理节点 (Proxy)
```

> [!IMPORTANT]
> **匹配原则：从上到下，一击即中。**
> 一旦某条请求成功匹配到了上面的任何一条规则，就会立刻按照该规则指令发送流量，不再继续向下匹配后续规则。因此，**优先级高的自定义规则必须写在最顶部**。

---

## 2. 常用分流规则语法详解

主流客户端（Clash, Sing-box, Shadowrocket, Surge）支持以下四种核心匹配类型：

| 规则类型 | 语法示例 | 匹配含义与应用场景 |
| :--- | :--- | :--- |
| **DOMAIN-SUFFIX** | `DOMAIN-SUFFIX,google.com,代理组` | **域名后缀匹配**：所有以 `.google.com` 结尾的请求均走代理 |
| **DOMAIN-KEYWORD**| `DOMAIN-KEYWORD,openai,AI节点` | **域名关键字匹配**：包含 `openai` 的域名（如 api.openai.com）走指定节点 |
| **IP-CIDR** | `IP-CIDR,192.168.1.0/24,DIRECT` | **IP 段匹配**：局域网私有 IP 强制直连，不走代理 |
| **GEOIP** | `GEOIP,CN,DIRECT` | **地理位置 IP 匹配**：所有中国大陆地区的公网 IP 强制直连 |

```yaml
# 典型用户自定义规则书写示例：
rules:
  # 1. 广告拦截（直接丢弃）
  - DOMAIN-KEYWORD,adservice,REJECT
  - DOMAIN-SUFFIX,doubleclick.net,REJECT

  # 2. 专项 AI 平台指定专用原生 IP 节点
  - DOMAIN-SUFFIX,openai.com,🤖 AI 专用节点
  - DOMAIN-SUFFIX,claude.ai,🤖 AI 专用节点

  # 3. 国内特定公司服务强制直连
  - DOMAIN-SUFFIX,baidu.com,DIRECT
  - DOMAIN-SUFFIX,qq.com,DIRECT
  - GEOIP,CN,DIRECT

  # 4. 剩余未匹配到的流量默认走主代理
  - MATCH,🚀 节点选择
```

---

## 3. 导入第三方开源 Rule-Set 规则集

手动逐条添加规则极其繁琐。目前开源社区维护了极其庞大的规则集（如 **Loyalsoldier/clash-rules** 或 **ACL4SSR**），可一键引入自动更新。

### 常用第三方 Rule-Set 分流库分类：
- **Category-ads-all**：全网常见广告拦截规则集（REJECT）；
- **Gfw** / **Geosite:gfw**：被防火墙拦截的海外网站列表（Proxy）；
- **China-media**：国内主流音视频平台列表（Bilibili, 爱奇艺, 优酷 -> DIRECT）；
- **Telegram-cidr**：Telegram 官方数据中心 IP 段（单独走低延迟节点）。

### 引入方法：
以 **Clash Verge Rev** 为例：
1. 打开 `订阅 (Profiles)` -> 右键当前配置 -> 点击 `Merge / Parsers (配置预处理/合并)`。
2. 插入社区推荐的 Rule-Provider 链接。
3. 客户端会在后台自动按照 24 小时周期同步最新的规则库。

---

## 4. 实操技巧：配置广告拦截与规则调优

1. **开启网页与 App 广告拦截 (AdBlock)**：
   在规则库中加入 `REJECT` 动作的广告规则，可以在无需安装额外浏览器插件的情况下，在手机和电脑端拦截大部分追踪脚本与弹窗广告。
2. **防范 DNS 泄露 (GeoSite / Fake-IP 配合)**：
   确保配置文件中包含 `geosite:cn` 规则，避免访问国内应用时通过海外 DNS 服务器进行域名解析。

---

## 5. 常见问题 FAQ

### Q1: 为什么配置了 `DOMAIN-SUFFIX,google.com,DIRECT` 依然连不上谷歌？
**答**：谷歌网站在国内由于没有大陆服务器 IP，即便在本地强制匹配 `DIRECT` 直连，数据包发送给国内 ISP 后依然会被阻断。直连规则只适用于本就能正常连通的国内网站或局域网设备。

### Q2: 规则匹配成功了，为什么页面依然显示旧的节点 IP？
**答**：浏览器或操作系统可能缓存了之前的 TCP 连接或 DNS 解析结果。请尝试：1. 清空浏览器缓存；2. 在客户端界面点击 **“清除 DNS 缓存 (Clear DNS Cache)”** 并重新加载页面。
