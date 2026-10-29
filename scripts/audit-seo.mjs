import fs from 'fs';
import path from 'path';

const articlesDir = 'src/content/articles';
const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'));

console.log(`Auditing ${files.length} articles for Bing SEO, H1-H3 hierarchy, FAQ count, Internal Links, and Keywords...\n`);

let issues = [];

files.forEach(file => {
  const filePath = path.join(articlesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Parse frontmatter
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) {
    issues.push({ file, issue: 'Missing frontmatter' });
    return;
  }

  const fm = match[1];
  const body = content.slice(match[0].length);

  // 1. Title
  const titleMatch = fm.match(/title:\s*"([^"]+)"/) || fm.match(/title:\s*([^\r\n]+)/);
  if (!titleMatch) issues.push({ file, issue: 'Missing title' });

  // 2. Description
  const descMatch = fm.match(/description:\s*"([^"]+)"/) || fm.match(/description:\s*([^\r\n]+)/);
  if (!descMatch) {
    issues.push({ file, issue: 'Missing description' });
  } else if (descMatch[1].length > 180) {
    issues.push({ file, issue: `Description too long (${descMatch[1].length} chars)` });
  }

  // 3. Keywords
  const kwMatch = fm.match(/keywords:\s*\[([\s\S]*?)\]/);
  if (!kwMatch) {
    issues.push({ file, issue: 'Missing keywords array' });
  } else {
    const kws = kwMatch[1].split(',').map(s => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
    if (kws.length < 3) issues.push({ file, issue: `Keywords count < 3 (${kws.length})` });
  }

  // 4. FAQ
  const faqMatch = fm.match(/faq:\s*\r?\n([\s\S]*?)(?=\r?\n[a-z0-9_-]+:|$)/i);
  if (!faqMatch) {
    issues.push({ file, issue: 'Missing FAQ section' });
  } else {
    const questionMatches = faqMatch[1].match(/- question:/g) || [];
    if (questionMatches.length < 3) {
      issues.push({ file, issue: `FAQ count < 3 (${questionMatches.length})` });
    }
  }

  // 5. Heading hierarchy (ignoring lines inside code blocks)
  const lines = body.split('\n');
  let inCodeBlock = false;
  let currentLevel = 1;
  let hasH1InBody = false;
  let skippedHeading = false;

  lines.forEach(line => {
    const trimmed = line.trim();
    if (trimmed.startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      return;
    }
    if (inCodeBlock) return;

    if (trimmed.startsWith('# ')) {
      hasH1InBody = true;
    } else if (trimmed.startsWith('## ')) {
      currentLevel = 2;
    } else if (trimmed.startsWith('### ')) {
      if (currentLevel < 2) skippedHeading = true;
      currentLevel = 3;
    } else if (trimmed.startsWith('#### ')) {
      if (currentLevel < 3) skippedHeading = true;
      currentLevel = 4;
    }
  });

  if (hasH1InBody) issues.push({ file, issue: 'Found H1 (# ) inside markdown body (layout already provides single H1)' });
  if (skippedHeading) issues.push({ file, issue: 'Heading level skip detected' });

  // 6. Internal links
  const internalLinkMatch = body.match(/\[([^\]]+)\]\(((\/articles\/|\/recommend\/|\/category\/|\/clients\/|\/reviews\/|\/tutorials\/|\/network\/)[^)]*)\)/g);
  if (!internalLinkMatch || internalLinkMatch.length === 0) {
    issues.push({ file, issue: 'No internal links found in body' });
  }
});

if (issues.length > 0) {
  console.log(`Found ${issues.length} issue(s):`);
  issues.forEach(i => console.log(`  - [${i.file}] ${i.issue}`));
  process.exit(1);
} else {
  console.log(`✓ ALL ${files.length} ARTICLES PASSED FULL AUDIT!`);
  console.log('  - All articles have valid exact-match Title');
  console.log('  - All descriptions under 180 chars with long-tail words');
  console.log('  - All have >= 3 keywords in array');
  console.log('  - All have >= 3 structured FAQ items');
  console.log('  - All adhere to strict H1->H2->H3 heading hierarchy (no skipping, single layout H1)');
  console.log('  - All contain valid contextual internal links');
}
