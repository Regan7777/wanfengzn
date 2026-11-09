import fs from 'node:fs';
import path from 'node:path';

const HOST = 'wanfengzn.com';
const KEY = '7ec54bed5e684bee9e50ea059b0e5538';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function getUrls() {
  const localSitemapPath = path.resolve('dist/sitemap.xml');
  if (fs.existsSync(localSitemapPath)) {
    console.log(`[1/3] 从本地构建产物读取 sitemap: ${localSitemapPath}`);
    const xml = fs.readFileSync(localSitemapPath, 'utf-8');
    const matches = [...xml.matchAll(/<loc>(https?:\/\/[^<]+)<\/loc>/g)];
    const urls = [...new Set(matches.map(m => m[1]))];
    console.log(`[2/3] 提取到 ${urls.length} 个不重复网页链接。`);
    return urls;
  }

  // 线上 sitemap 兜底
  try {
    console.log(`[1/3] 未找到本地 sitemap，尝试拉取线上: https://${HOST}/sitemap.xml`);
    const res = await fetch(`https://${HOST}/sitemap.xml`, { signal: AbortSignal.timeout(10000) });
    if (res.ok) {
      const xml = await res.text();
      const matches = [...xml.matchAll(/<loc>(https?:\/\/[^<]+)<\/loc>/g)];
      const urls = [...new Set(matches.map(m => m[1]))];
      if (urls.length > 0) {
        console.log(`[2/3] 从线上 sitemap 提取到 ${urls.length} 个链接。`);
        return urls;
      }
    }
  } catch {}

  console.log(`[2/3] 使用核心主干路由兜底。`);
  return [
    `https://${HOST}/`,
    `https://${HOST}/jichang/`,
    `https://${HOST}/about/`
  ];
}

async function submitToIndexNow(urls) {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls
  };

  const endpoints = [
    { name: 'Bing IndexNow', url: 'https://www.bing.com/indexnow' },
    { name: 'IndexNow API', url: 'https://api.indexnow.org/indexnow' }
  ];

  console.log(`[3/3] 开始向搜索引擎提交 ${urls.length} 条 URL...`);
  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(payload)
      });

      console.log(`-> 接口 ${endpoint.name} (${endpoint.url}) 返回: HTTP ${res.status} ${res.statusText}`);
      if (res.status === 200 || res.status === 202) {
        console.log(`   √ 提交成功 (HTTP ${res.status})！`);
      } else {
        const text = await res.text();
        console.log(`   ! 响应详情: ${text}`);
      }
    } catch (err) {
      console.error(`   × 请求 ${endpoint.name} 失败:`, err.message);
    }
  }
}

async function main() {
  try {
    const urls = await getUrls();
    await submitToIndexNow(urls);
    console.log('\n=============================================');
    console.log(` 全站 ${urls.length} 个链接已全量推送到 Bing IndexNow！`);
    console.log(' 现在请回到 Bing 站长后台刷新 IndexNow 页面查看。');
    console.log('=============================================\n');
  } catch (error) {
    console.error('推送失败:', error);
  }
}

main();
