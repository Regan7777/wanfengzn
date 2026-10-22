---
title: "Windows 与 macOS 客户端推荐：Clash Verge Rev 与 Sing-box 下载安装与订阅导入实操教程"
description: "专为 PC 与 Mac 用户打造的主流客户端全流程指南。涵盖 Clash Verge Rev 和 Sing-box 客户端下载、内核选择、一键订阅导入、TUN 虚拟网卡模式配置与开机自启设置。"
publishedAt: 2026-10-05
updatedAt: 2026-10-05
category: "clients"
tags: ["客户端", "Windows客户端", "macOS客户端", "Clash Verge", "Sing-box", "Surge", "订阅导入", "TUN模式", "2026机场推荐", "VPN推荐", "翻墙推荐", "梯子节点", "科学上网"]
author: "W"
cover: "/images/covers/windows-mac-clash-verge-singbox-setup-tutorial.svg"
coverAlt: "Windows 和 macOS 客户端下载与订阅导入实操示意图"
featured: false
draft: false
keywords: ["Windows机场客户端", "Mac机场客户端", "Clash Verge Rev教程", "Sing-box Mac配置", "TUN模式设置", "电脑端订阅导入"]
tldr: "PC/Mac 用户首选 Clash Verge Rev（支持中文与多内核）：1. 从 GitHub 正版 Release 下载安装；2. 复制服务商订阅 URL 到 Profiles 粘贴导入；3. 开启 System Proxy 系统代理与 Rule 规则分流；4. 终端命令行、跨国开发或全局协议代理建议开启 TUN Mode。"
faq:
  - question: "Clash Verge Rev 与已停更的旧版 Clash for Windows 有何区别？"
    answer: "旧版 Clash for Windows 源码已停止维护。Clash Verge Rev 是由开源社区接管的现代化重构版，不仅更新安全漏洞，还内置了 Clash.Meta (Mihomo) 内核，支持 Hysteria 2、TUIC 等新协议及全新的可视化 UI。"
  - question: "macOS 提示‘应用已损坏，无法打开’怎么办？"
    answer: "这是 Mac 的 Gatekeeper 安全机制提示。只需打开终端 (Terminal) 执行命令：sudo xattr -r -d com.apple.quarantine /Applications/Clash\\ Verge.app 即可解除锁定。"
  - question: "开启代理后，专用桌面客户端或 CMD 终端无法连通？"
    answer: "传统系统代理仅接管浏览器 HTTP 流量。请在客户端设置中勾选开启‘TUN 模式 (Service Mode)’并允许安装服务，即可创建虚拟网卡接管全局 UDP/TCP 流量。"
---

在桌面端（Windows PC 与 macOS 苹果电脑）上，网络连接客户端的性能与功能丰富度直接决定了远程办公、代码开发与 4K 流媒体观看的体验。随着旧版客户端的逐步淘汰，以 **Clash Verge Rev** 和 **Sing-box** 为代表的新一代开源客户端已成为 2026 年的主流首选。

本教程将手把手带你完成 Windows 与 macOS 系统下主流客户端的正版安装、中文设置、订阅导入与高级 TUN 模式配置。

---

## 1. 客户端选型：为什么首选 Clash Verge Rev？

| 评价维度 | Clash Verge Rev | Sing-box GUI | Surge for Mac |
| :--- | :--- | :--- | :--- |
| **适用系统** | Windows / macOS / Linux | Windows / macOS / Android / iOS | macOS 独占 |
| **界面语言** | 官方原生中文 | 中文 / 英文 | 英文 |
| **内核架构** | Clash.Meta (Mihomo) | Sing-box 原生内核 | Surge 自研协议栈 |
| **适用人群** | **绝大多数普通及进阶用户 🌟** | 追求下一代协议特性的极客 | 苹果生态高端开发者/调试者 |
| **价格** | 开源免费 | 开源免费 | 较高买断费用 |
| **官方入口** | [GitHub Releases](https://github.com/clash-verge-rev/clash-verge-rev/releases) / [官方文档](https://clash-verge-rev.github.io/) | [GitHub Releases](https://github.com/SagerNet/sing-box/releases) / [官方文档](https://sing-box.sagernet.org/) | [Surge 官网](https://nssurge.com/) |

---

## 2. Clash Verge Rev 实操教程（以 Windows & Mac 通用为例）

### 第一步：正版下载与安装
请务必认准官方开源仓库，避免下载被植入后门篡改的“修改版”：
- **官方正版入口**：前往 [Clash Verge Rev GitHub Releases](https://github.com/clash-verge-rev/clash-verge-rev/releases) 下载最新发行版系统包：
  - **Windows 用户**：推荐下载 `Clash.Verge_x.x.x_x64-setup.exe` 安装包（便携版可选择 `.zip`）。
  - **macOS 用户（按芯片架构区分）**：
    - Apple Silicon 芯片 (M1/M2/M3/M4 系列)：下载带有 `aarch64.dmg` 标识的安装包。
    - Intel 芯片老款 Mac：下载带有 `x64.dmg` 标识的安装包。
  - **备选官方文档库**：查阅 [Clash Verge Rev 官方在线文档](https://clash-verge-rev.github.io/) 获取完整快捷键与脚本配置说明。

> [!TIP]
> **Mac 用户避坑提示：** 安装后打开若提示“已损坏，无法打开”，请在 Mac 终端 (Terminal) 中运行以下权限签名解除命令：
> `sudo xattr -r -d com.apple.quarantine /Applications/Clash\ Verge.app`

### 第二步：软件语言切换为中文
1. 启动 Clash Verge Rev，在左侧导航栏点击 **Settings (设置)**。
2. 找到 **Language** 选项，选择 **简体中文**，界面将自动刷新展示中文菜单。

### 第三步：订阅导入与节点更新
1. 在服务商后台点击“复制 Clash 订阅链接”。
2. 打开 Clash Verge Rev，点击左侧栏的 **订阅 (Profiles)**。
3. 在顶部 URL 输入框中粘贴刚刚复制的链接，点击 **导入 (Import)**。
4. 导入成功后，在订阅列表中点击刚添加的配置，使其**高亮变色**表示激活。

```
订阅导入检查机制：
[订阅列表] -> 粘贴 URL -> 点击“导入” -> 成功获取节点 -> 单击高亮选中此配置
```

### 第四步：启用系统代理与规则模式
1. 点击左侧栏 **代理 (Proxies)** 菜单，顶部选择 **规则 (Rule)** 模式。
2. 点击展开节点组，选择一个低延迟节点（如 `香港 IEPL 01`）。
3. 点击左侧栏 **设置 (Settings)**，开启 **系统代理 (System Proxy)** 开关。
4. 此时电脑任务栏图标将变为高亮，尝试在浏览器中访问谷歌或 YouTube 检验连通性。

---

## 3. 进阶配置：开启 TUN 模式接管全局流量

普通的系统代理（System Proxy）无法影响终端 CMD、PowerShell、Git、Docker 或 Node.js 环境。通过开启 **TUN (Tunnel) 虚拟网卡模式**，可以实现系统全局透明代理。

```
普通系统代理 vs TUN 虚拟网卡模式：
┌───────────────────┬──────────────────────────────────────────┐
│ 系统代理          │ 仅接管 Chrome/Edge 等支持 HTTP 代理的应用  │
├───────────────────┼──────────────────────────────────────────┤
│ TUN 模式 (推荐)   │ 在系统底层建立虚拟网卡，100% 接管所有流量  │
└───────────────────┴──────────────────────────────────────────┘
```

### 开启步骤：
1. 打开 Clash Verge Rev 设置菜单。
2. 找到 **Service Mode (服务模式)**，点击右侧的 **Install (安装)** 按钮（需管理员权限）。
3. 安装成功后，将 **TUN Mode (TUN 模式)** 开关切换为 **开启 (On)**。
4. 开启 TUN 模式后，各类桌面客户端及终端命令行无需额外配置环境变量即可直接连通。

---

## 4. macOS 独占客户端：Surge & Stash 快速上手

对于苹果 Mac 深度用户：
- **[Stash for Mac](https://stash.ws/)**：被称为“Mac 上的小火箭”，原生适配 Clash 规则与规则集，支持通过 [Mac App Store](https://apps.apple.com/app/stash/id1596063717) 购买下载，占用极低内存。
- **[Surge for Mac](https://nssurge.com/)**：官方由 [Surge 团队](https://nssurge.com/) 维护，拥有全网顶级的抓包网络调试、链路追踪与 Enhanced Mode（增强网卡接管）能力，适合高端工程师与高级开发者。

---

## 5. 常见问题 FAQ

### Q1: 开机后访问不了网页，必须打开客户端才能上网？
**答**：这是因为退出客户端时未能正常关闭系统代理。请打开 Clash Verge 重新关闭“系统代理”开关，或者在 Windows `设置 -> 网络和 Internet -> 代理` 中手动关闭代理服务器服务。

### Q2: 切换节点后页面依然没有刷新或提示地区不匹配？
**答**：浏览器可能缓存了 DNS 或 Socket 管道。尝试使用无痕模式 (Incognito) 重新打开，或者在 Clash Verge 中点击“清除 DNS 缓存”。
