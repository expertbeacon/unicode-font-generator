#!/usr/bin/env node

/**
 * 全面的运行时SEO验证脚本
 * 测试所有页面、所有语言的SEO元数据
 */

const http = require('http');

const BASE_URL = 'http://localhost:3001';
const ALL_LOCALES = ['en', 'es', 'de_DE', 'fr', 'it', 'nl', 'pl', 'pt', 'sv', 'tr', 'ru', 'zh', 'ja', 'ko'];

// 所有样式页面
const ALL_STYLES = [
  'bold-text', 'cool', 'fancy', 'italic', 'small-text', 'bold-italic',
  'sans-serif', 'serif', 'underline', 'bubble-text', 'square-text',
  'cursive-font', 'alternating', 'exotic', 'mathematical', 'decorative',
  'vintage', 'modern', 'artistic', 'rounded', 'sharp', 'handwritten',
  'gaming', 'retro', 'elegant', 'playful'
];

// 静态页面
const STATIC_PAGES = [
  { name: 'Home', path: '' },
  { name: 'Instagram', path: 'instagram' },
  { name: 'Twitter', path: 'twitter' },
  { name: 'TikTok', path: 'tiktok' },
  { name: 'About', path: 'about' },
  { name: 'Contact', path: 'contact' },
  { name: 'Privacy', path: 'privacy' },
  { name: 'Terms', path: 'terms' },
  { name: 'Fonts Gallery', path: 'fonts-gallery' },
  { name: 'Topic Index', path: 'topic' }
];

// 主题页面
const TOPIC_PAGES = ['facebook', 'handwriting'];

let results = {
  total: 0,
  passed: 0,
  failed: 0,
  details: []
};

function fetchPage(path) {
  return new Promise((resolve, reject) => {
    const url = `${BASE_URL}${path}`;
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(data);
        } else {
          reject(new Error(`HTTP ${res.statusCode}`));
        }
      });
    }).on('error', reject);
  });
}

function checkMetaTags(html) {
  return {
    hasTitle: /<title[^>]*>([^<]+)<\/title>/.test(html),
    hasDescription: /<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/.test(html),
    hasOgTitle: /<meta[^>]*property=["']og:title["']/.test(html),
    hasOgDescription: /<meta[^>]*property=["']og:description["']/.test(html),
    hasOgUrl: /<meta[^>]*property=["']og:url["']/.test(html),
    hasTwitterCard: /<meta[^>]*name=["']twitter:card["']/.test(html),
    hasCanonical: /<link[^>]*rel=["']canonical["']/.test(html),
    hasAlternate: /<link[^>]*rel=["']alternate["']/.test(html),
  };
}

async function testPage(pageName, locale, path) {
  results.total++;
  let fullPath;
  if (locale === 'en') {
    fullPath = path ? `/${path}` : '/';
  } else {
    fullPath = path ? `/${locale}/${path}` : `/${locale}`;
  }

  try {
    const html = await fetchPage(fullPath);
    const checks = checkMetaTags(html);
    const allPassed = Object.values(checks).every(v => v === true);

    if (allPassed) {
      results.passed++;
      return { success: true, path: fullPath };
    } else {
      results.failed++;
      const missing = Object.entries(checks)
        .filter(([key, value]) => !value)
        .map(([key]) => key);
      return { success: false, path: fullPath, missing };
    }
  } catch (error) {
    results.failed++;
    return { success: false, path: fullPath, error: error.message };
  }
}

async function testPageAllLocales(pageName, basePath) {
  console.log(`\n📄 Testing ${pageName}...`);
  const localeResults = [];

  for (const locale of ALL_LOCALES) {
    const result = await testPage(pageName, locale, basePath);
    localeResults.push({ locale, ...result });

    // 短暂延迟避免过快请求
    await new Promise(resolve => setTimeout(resolve, 50));
  }

  const passedCount = localeResults.filter(r => r.success).length;
  const failedCount = localeResults.filter(r => !r.success).length;

  if (failedCount === 0) {
    console.log(`  ✅ All ${ALL_LOCALES.length} locales passed`);
  } else {
    console.log(`  ⚠️  ${passedCount}/${ALL_LOCALES.length} locales passed, ${failedCount} failed`);
    localeResults.filter(r => !r.success).forEach(r => {
      console.log(`     ❌ ${r.locale}: ${r.error || r.missing.join(', ')}`);
    });
  }

  return { pageName, localeResults, passedCount, failedCount };
}

async function runTests() {
  console.log('\n🚀 Starting comprehensive verification...\n');
  console.log('=' .repeat(80));
  console.log(`Test server: ${BASE_URL}`);
  console.log(`Languages: ${ALL_LOCALES.length} (${ALL_LOCALES.join(', ')})`);
  console.log(`Static pages: ${STATIC_PAGES.length}`);
  console.log(`Style pages: ${ALL_STYLES.length}`);
  console.log(`Topic pages: ${TOPIC_PAGES.length}`);
  console.log('=' .repeat(80));

  // Test static pages
  console.log('\n\n📑 STATIC PAGES');
  console.log('─'.repeat(80));
  for (const page of STATIC_PAGES) {
    const result = await testPageAllLocales(page.name, page.path);
    results.details.push(result);
  }

  // Test style pages
  console.log('\n\n🎨 STYLE PAGES');
  console.log('─'.repeat(80));
  for (const style of ALL_STYLES) {
    const result = await testPageAllLocales(`Style: ${style}`, style);
    results.details.push(result);
  }

  // Test topic pages
  console.log('\n\n🏷️  TOPIC PAGES');
  console.log('─'.repeat(80));
  for (const topic of TOPIC_PAGES) {
    const result = await testPageAllLocales(`Topic: ${topic}`, `topic/${topic}`);
    results.details.push(result);
  }

  // Print summary
  console.log('\n\n' + '='.repeat(80));
  console.log('📊 VERIFICATION REPORT');
  console.log('='.repeat(80));

  const totalPages = STATIC_PAGES.length + ALL_STYLES.length + TOPIC_PAGES.length;
  const totalTests = totalPages * ALL_LOCALES.length;

  console.log(`\nTotal pages tested: ${totalPages}`);
  console.log(`Total tests (pages × locales): ${results.total} (expected: ${totalTests})`);
  console.log(`✅ Passed: ${results.passed}`);
  console.log(`❌ Failed: ${results.failed}`);

  const passRate = ((results.passed / results.total) * 100).toFixed(1);
  console.log(`📈 Pass rate: ${passRate}%`);

  // Detailed failures
  if (results.failed > 0) {
    console.log('\n❌ FAILED TESTS:');
    console.log('─'.repeat(80));
    results.details.forEach(pageResult => {
      const failures = pageResult.localeResults.filter(r => !r.success);
      if (failures.length > 0) {
        console.log(`\n${pageResult.pageName} (${failures.length} failures):`);
        failures.forEach(f => {
          console.log(`  - ${f.locale}: ${f.error || 'Missing: ' + f.missing.join(', ')}`);
        });
      }
    });
  }

  console.log('\n' + '='.repeat(80));

  if (results.failed === 0) {
    console.log('\n🎉 All tests passed! Perfect SEO metadata coverage!\n');
    process.exit(0);
  } else {
    console.log('\n⚠️  Some tests failed, please review\n');
    process.exit(1);
  }
}

// Check server and run
http.get(BASE_URL, (res) => {
  if (res.statusCode === 200 || res.statusCode === 404) {
    console.log('✅ Server is running');
    runTests();
  }
}).on('error', () => {
  console.error('❌ Server not running. Start dev server: npm run dev');
  process.exit(1);
});
