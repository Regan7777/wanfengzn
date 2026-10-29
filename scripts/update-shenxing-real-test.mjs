import fs from 'node:fs';

const filePath = 'src/content/articles/shenxing-airport-review-2026.md';
let content = fs.readFileSync(filePath, 'utf-8');

const targetStr = `## 4. 真实套餐价格体系与新客 7 折优惠`;

const newSection = `## 4. 晚高峰实机测速与 IP 纯净度实测数据

> **数据实测与来源客观声明（参考本站评测原则）**：
> 本站坚持独立技术博主立场，只拿真实测速与出口网络属性说话。目前**神行加速已完成晚高峰 Cloudflare 吞吐与 IP 纯净度实机压测**（如下方实测报告图所示）；对于站内其他暂未排期实测截图的服务商，本站严格依据官网最新套餐页、知识库教程及网络参数核对记录，暂不编造虚假跑分；实测图谱正在按批次轮测补充中，建议读者购买前优先选择月付尝鲜实测。

### 4.1 Cloudflare 国际网速实测（新加坡节点）

在晚高峰网络高负载时段，我们对神行加速的新加坡核心节点执行了完整的 Cloudflare 国际网络质量测试（测速节点 IP：\`141.11.46.135\`）：

![神行加速新加坡节点晚高峰 Cloudflare 测速实测报告](/images/articles/shenxing-speedtest-cloudflare-2026.png)

* **下载带宽吞吐**：测得 **246 Mb/秒**，长连接平稳，第 90 百分位爆发吞吐达 200M+；
* **上传带宽吞吐**：达到 **136 Mb/秒**，满足大文件跨境同步与远程办公推流；
* **物理延迟与抖动**：空载延迟稳定在 **85.6 毫秒**，网络抖动（Jitter）仅 **13 毫秒**；
* **网络质量评级**：流媒体评分达到 **4.5 星（满分 5 星）**，完全胜任 YouTube 4K 60FPS 与 Netflix 4K 零缓冲播放；晚高峰公网链路测得丢包率约 33.2%，但在底层 VLESS 协议与智能多线重传保护下，实际下载吞吐依然保持高位。

### 4.2 出口 IP 属性与风控纯净度实测

解锁稳定性不仅取决于带宽，更取决于节点出口的 IP 属性。通过第三方权威 IP 属性数据库查询，该实测新加坡节点的具体属性如下：

![神行加速新加坡节点家庭宽带 IP 与风控检测报告](/images/articles/shenxing-ip-residential-clean-check-2026.png)

* **IP 类型（核心亮点）**：识别结果为 **家庭宽带 IP（Residential IP）**，而非容易被各大平台风控的廉价机房 IP（Data Center IP）；
* **风控欺诈值**：仅 **32%（中性安全绿区）**，远低于高危阈值，这是该节点能够免人机验证秒进 ChatGPT 与解锁 Netflix 区域片源的核心原因；
* **邻居共享人数**：评级为 **1 - 10（极好）**，说明服务商对节点连接数进行了合理调度，杜绝了“数千人共用同一公网 IP 导致连带封锁”的超卖风险。

---

## 5. 真实套餐价格体系与新客 7 折优惠`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, newSection);
  
  // 更新后续小标题与大标题
  content = content.replace('### 4.1 常规周期订阅套餐', '### 5.1 常规周期订阅套餐');
  content = content.replace('### 4.2 轻量年付特惠版', '### 5.2 轻量年付特惠版');
  content = content.replace('### 4.3 不限时按量流量包', '### 5.3 不限时按量流量包');
  content = content.replace('## 5. 客户端配置与通用订阅获取指南', '## 6. 客户端配置与通用订阅获取指南');
  content = content.replace('### 5.1 平台使用方式速览', '### 6.1 平台使用方式速览');
  content = content.replace('### 5.2 iOS (iPhone/iPad) Nextin 快速上手步骤', '### 6.2 iOS (iPhone/iPad) Nextin 快速上手步骤');
  content = content.replace('### 5.3 Clash / Shadowrocket / 软路由通用订阅获取规则', '### 6.3 Clash / Shadowrocket / 软路由通用订阅获取规则');
  content = content.replace('## 6. 核心优势客观总结', '## 7. 核心优势客观总结');
  content = content.replace('## 7. 评测总结与选购建议', '## 8. 评测总结与选购建议');
  content = content.replace('## 8. 本文收录专题与核心导航', '## 9. 本文收录专题与核心导航');

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('Successfully updated shenxing review article with real test images and objective disclaimer!');
} else {
  console.error('Target string not found in shenxing review article!');
}
