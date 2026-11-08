import fs from 'fs';
import path from 'path';

function getHtmlFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const htmlFiles = getHtmlFiles('dist');
console.log('Total HTML files in dist:', htmlFiles.length);

const indexablePages = [];
const noindexPages = [];

htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const relPath = path.relative('dist', f).replace(/\\/g, '/');

  // Match title
  const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';

  // Match description
  const descMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) 
                 || content.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
  const desc = descMatch ? descMatch[1].trim() : '';

  // Match noindex
  const noindexMatch = content.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']*)["']/i);
  const robots = noindexMatch ? noindexMatch[1] : '';
  const isNoindex = robots.includes('noindex');

  const page = { relPath, title, titleLen: title.length, desc, descLen: desc.length, isNoindex };
  if (isNoindex) {
    noindexPages.push(page);
  } else {
    indexablePages.push(page);
  }
});

console.log('Total indexable pages:', indexablePages.length);
console.log('Total noindex pages:', noindexPages.length);

const shortTitles = indexablePages.filter(p => p.titleLen < 25);
const longTitles = indexablePages.filter(p => p.titleLen > 65);
const shortDescs = indexablePages.filter(p => p.descLen < 50);
const longDescs = indexablePages.filter(p => p.descLen > 180);

console.log(`\n=== AUDIT SUMMARY ===`);
console.log(`Titles < 25 chars: ${shortTitles.length}`);
console.log(`Titles > 65 chars: ${longTitles.length}`);
if (longTitles.length > 0) {
  console.log('Long titles (>65 chars):');
  longTitles.forEach(p => console.log(`  [${p.titleLen}] ${p.title} (${p.relPath})`));
}
console.log(`Descriptions < 50 chars: ${shortDescs.length}`);
console.log(`Descriptions > 180 chars: ${longDescs.length}`);

if (shortTitles.length === 0 && shortDescs.length === 0) {
  console.log('\n✓ PERFECT: 0 short titles and 0 short descriptions found across all indexable pages!');
}
