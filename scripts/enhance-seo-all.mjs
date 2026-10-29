import fs from 'fs';
import path from 'path';

const articlesDir = 'src/content/articles';
const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'));

console.log(`Starting SEO enhancement for ${files.length} articles...\n`);

// 1. FAQ Supplements mapping for articles with < 3 FAQs
const faqSupplements = {
  'airport-pricing-plan-comparison.md': {
    question: "什么是节点扣费倍率？为什么 100GB 实际用不到 50GB 就消耗光了？",
    answer: "很多服务商为了调控晚高峰带宽，会对高成本节点设置 1.5x、2.0x 甚至 5.0x 的计费倍率。使用 2.0x 节点看 1GB 视频会扣除 2GB 账户额度。在选购和日常使用时务必优先选择 1.0x 正常倍率或标明真实扣费规则的服务商。"
  },
  'airport-selection-metrics-guide.md': {
    question: "为什么晚高峰测速与丢包率比白天测速跑分更具参考价值？",
    answer: "白天国际出口带宽普遍空闲，普通单线直连也能跑出较高带宽。只有在晚高峰 20:00 - 23:00 全网拥堵期，才能真正检验服务商是否拥有优质 BGP 跨境中转或内网 IEPL 专线冗余调度能力。"
  },
  'auto-start-and-background-running-guide.md': {
    question: "移动端后台长时间运行代理客户端耗电严重怎么办？",
    answer: "推荐选用协议开销小、内存占用低的轻量客户端（如 Android 端的 Flclash 或 iOS 端的 Shadowrocket），并在客户端内保持‘规则分流模式’，避免开启全局模式产生无谓的后台心跳保活流量。"
  },
  'chatgpt-claude-access-denied-and-human-verify-troubleshooting.md': {
    question: "什么是双 ISP 与住宅原生 IP？为什么对防封号至关重要？",
    answer: "双 ISP 属性代表 IP 地址在各大风控数据库（如 IP2Location、MaxMind）中被识别为真实家庭宽带住宅网络而非机房云主机（Hosting/DataCenter）。AI 平台对机房 IP 往往采用严格的验证码或直接阻断，而纯净住宅 IP 能够显著降低封号概率。"
  },
  'dns-leak-poisoning-and-slow-domain-resolution-guide.md': {
    question: "DoH（DNS over HTTPS）与传统 UDP 53 DNS 相比有什么优势？",
    answer: "传统 DNS 查询以明文传输，极易在本地网络网关遭遇污染或篡改；DoH 采用标准 443 端口加密传输，能有效规避 DNS 劫持并防止运营商窥探域名解析记录。"
  },
  'first-time-airport-selection-tips.md': {
    question: "新手第一次使用为什么坚决不建议直接购买年付？",
    answer: "网络代理行业变数较多，低价小作坊跑路或线路故障频发。新用户必须坚持‘先月付、后长期’的原则，至少完整体验一个月晚高峰和日常客服响应后，再考虑长期套餐。"
  },
  'network-line-types-iepl-iplc-guide.md': {
    question: "IEPL 专线与普通公网中转有什么根本区别？",
    answer: "普通中转仍走公网隧道，敏感时期入口或传输层易受干扰；IEPL（国际以太网私有专线）是点对点物理局域网光纤，数据不过公网防火墙，具有极致的抗封锁性与超低抖动。"
  },
  'node-auto-switching-speed-test-tutorial.md': {
    question: "url-test 自动切换的容差（Tolerance）应该设置多少比较合适？",
    answer: "建议设置在 50ms - 100ms 之间。若容差过小会导致网络稍有抖动就频繁切换节点，容易触发特定流媒体或银行 App 的异地登录风控；若过大则无法及时跳过真正宕机的节点。"
  },
  'node-connected-no-internet-troubleshooting.md': {
    question: "设备本地时间与网络时间不同步会导致断网吗？",
    answer: "会！TLS/SSL 加密握手以及 VMess 等协议依赖时间戳校验。若电脑或手机时间与标准时间相差超过 90 秒，TLS 握手将直接失败并导致‘节点延时正常但完全无法加载网页’。"
  },
  'node-speed-test-metrics-tutorial.md': {
    question: "单线程测速和多线程测速对看 4K 视频有什么不同影响？",
    answer: "多线程测速代表并发大文件下载的极限吞吐；而 YouTube 4K、网页加载与视频缓冲高度依赖单线程速度。单线程超过 30Mbps 即可秒开 4K，多线程跑满千兆但单线程差的节点实际看视频仍会卡顿。"
  },
  'routing-rules-and-custom-ruleset-guide.md': {
    question: "分流规则的匹配顺序是怎样的？为什么自定义规则没有生效？",
    answer: "所有智能分流规则遵循‘从上到下、命中即止’的优先级逻辑。如果将兜底的 MATCH / FINAL 放到了最上方，下方的特定域名分流将全部失效。自定义白名单或黑名单务必置于规则列表顶部。"
  }
};

// 2. Default Related Links for articles missing internal links
const defaultRelatedSection = `

---

## 延伸阅读与相关指南推荐

为了深入了解网络选型、客户端配置与线路调优，可参阅本站核心指南：
- [2026 机场推荐精选指南：新手避坑与稳定专线选型全方位指南](/articles/2026-airport-recommendation-guide/)
- [2026 美区 Apple ID 注册教程：免信用卡免海外手机号纯白嫖保姆级实操](/articles/us-apple-id-registration-guide-2026/)
- [2026 Clash 与 Shadowrocket 全平台下载使用教程](/articles/clash-and-shadowrocket-all-platform-tutorial-2026/)
- [BGP 跨网入口中转与公网直连原理详解：为什么单线直连晚高峰容易卡顿？](/articles/bgp-transit-vs-direct-line-deep-dive/)
- [流媒体与 AI 解锁全攻略：ChatGPT/Claude 风控机制差异与原生 IP 实测](/articles/streaming-ai-unlock-netflix-chatgpt-native-ip-guide/)
- [网络服务订阅链接导入全流程实操教程](/articles/subscription-link-import-and-sync-tutorial/)
`;

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(articlesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return;

  let fm = match[1];
  let body = content.slice(match[0].length);

  // Fix 1: Add missing 3rd FAQ if in supplements
  if (faqSupplements[file]) {
    const faqMatch = fm.match(/faq:\s*\r?\n([\s\S]*?)(?=\r?\n[a-z0-9_-]+:|$)/i);
    if (faqMatch) {
      const qCount = (faqMatch[1].match(/- question:/g) || []).length;
      if (qCount < 3) {
        const item = faqSupplements[file];
        const newFaqItem = `  - question: "${item.question}"\n    answer: "${item.answer}"\n`;
        const updatedFaq = faqMatch[0].trimEnd() + '\n' + newFaqItem;
        fm = fm.replace(faqMatch[0], updatedFaq);
        changed = true;
        console.log(`[${file}] Added 3rd FAQ item.`);
      }
    }
  }

  // Fix 2: Remove or convert # headings in body (outside of code blocks)
  const lines = body.split('\n');
  let inCodeBlock = false;
  let newLines = [];
  let headingFixed = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      newLines.push(line);
      continue;
    }

    if (!inCodeBlock && trimmed.startsWith('# ')) {
      // It's an H1 outside a code block! Convert to bold note or ###
      const text = trimmed.slice(2).trim();
      newLines.push(`> **${text}**`);
      headingFixed = true;
      changed = true;
    } else {
      newLines.push(line);
    }
  }

  if (headingFixed) {
    body = newLines.join('\n');
    console.log(`[${file}] Converted raw # heading outside code blocks.`);
  }

  // Fix 3: Check internal links in body
  const hasInternalLinks = /\[([^\]]+)\]\(((\/articles\/|\/recommend\/|\/category\/|\/clients\/|\/reviews\/|\/tutorials\/|\/network\/)[^)]*)\)/.test(body);
  if (!hasInternalLinks) {
    body = body.trimEnd() + defaultRelatedSection + '\n';
    changed = true;
    console.log(`[${file}] Appended related internal links section.`);
  }

  if (changed) {
    content = `---\n${fm.trim()}\n---${body}`;
    fs.writeFileSync(filePath, content, 'utf8');
    fixedCount++;
  }
});

console.log(`\nEnhanced ${fixedCount} articles successfully.`);
