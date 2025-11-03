#!/usr/bin/env node

/**
 * 运行时SEO验证脚本
 * 实际访问页面并验证元数据是否正确渲染
 */

const http = require('http');

const BASE_URL = 'http://localhost:3001';
const LOCALES = ['en', 'zh', 'ja'];  // 测试几种代表性语言
const STYLE_KEYS = [
  'bold-text', 'cool', 'fancy', 'italic', 'exotic', 'mathematical',
  'decorative', 'vintage', 'modern', 'rounded', 'elegant', 'playful'
];

// 页面配置
const TEST_PAGES = [
  { name: '首页', paths: ['/', '/zh', '/ja'] },
  { name: 'Instagram', paths: ['/instagram', '/zh/instagram', '/ja/instagram'] },
  { name: 'Twitter', paths: ['/twitter', '/zh/twitter', '/ja/twitter'] },
  { name: 'TikTok', paths: ['/tiktok', '/zh/tiktok', '/ja/tiktok'] },
  { name: 'About', paths: ['/about', '/zh/about', '/ja/about'] },
  { name: 'Contact', paths: ['/contact', '/zh/contact', '/ja/contact'] },
  { name: 'Privacy', paths: ['/privacy', '/zh/privacy', '/ja/privacy'] },
  { name: 'Terms', paths: ['/terms', '/zh/terms', '/ja/terms'] },
  { name: 'Fonts Gallery', paths: ['/fonts-gallery', '/zh/fonts-gallery', '/ja/fonts-gallery'] },
  { name: 'Topic Index', paths: ['/topic', '/zh/topic', '/ja/topic'] },
  { name: 'Bold Text', paths: ['/bold-text', '/zh/bold-text', '/ja/bold-text'] },
  { name: 'Exotic', paths: ['/exotic', '/zh/exotic', '/ja/exotic'] },
  { name: 'Mathematical', paths: ['/mathematical', '/zh/mathematical', '/ja/mathematical'] },
  { name: 'Elegant', paths: ['/elegant', '/zh/elegant', '/ja/elegant'] },
];

let testResults = {
  passed: 0,
  failed: 0,
  total: 0
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

function checkMetaTags(html, pageName, path) {
  const checks = {
    hasTitle: /<title[^>]*>([^<]+)<\/title>/.test(html),
    hasDescription: /<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/.test(html),
    hasOgTitle: /<meta[^>]*property=["']og:title["']/.test(html),
    hasOgDescription: /<meta[^>]*property=["']og:description["']/.test(html),
    hasOgUrl: /<meta[^>]*property=["']og:url["']/.test(html),
    hasTwitterCard: /<meta[^>]*name=["']twitter:card["']/.test(html),
    hasCanonical: /<link[^>]*rel=["']canonical["']/.test(html),
    hasAlternate: /<link[^>]*rel=["']alternate["']/.test(html),
  };

  const allPassed = Object.values(checks).every(v => v === true);

  return { allPassed, checks };
}

async function runTests() {
  console.log('\n🚀 开始运行时验证...\n');
  console.log('=' .repeat(80));
  console.log(`测试服务器: ${BASE_URL}`);
  console.log('=' .repeat(80) + '\n');

  for (const page of TEST_PAGES) {
    console.log(`\n📄 测试 ${page.name}...`);

    for (const path of page.paths) {
      testResults.total++;
      try {
        const html = await fetchPage(path);
        const { allPassed, checks } = checkMetaTags(html, page.name, path);

        if (allPassed) {
          console.log(`  ✅ ${path} - 所有元数据正确`);
          testResults.passed++;
        } else {
          console.log(`  ❌ ${path} - 缺少元数据:`);
          Object.entries(checks).forEach(([key, value]) => {
            if (!value) console.log(`     - ${key}`);
          });
          testResults.failed++;
        }
      } catch (error) {
        console.log(`  ❌ ${path} - 错误: ${error.message}`);
        testResults.failed++;
      }

      // 避免过快请求
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  // 打印总结
  console.log('\n' + '='.repeat(80));
  console.log('\n📊 运行时验证报告\n');
  console.log(`总测试数: ${testResults.total}`);
  console.log(`✅ 通过: ${testResults.passed}`);
  console.log(`❌ 失败: ${testResults.failed}`);

  const passRate = ((testResults.passed / testResults.total) * 100).toFixed(1);
  console.log(`📈 通过率: ${passRate}%`);

  console.log('\n' + '='.repeat(80) + '\n');

  if (testResults.failed === 0) {
    console.log('🎉 所有运行时测试都通过！\n');
    process.exit(0);
  } else {
    console.log('⚠️  部分测试失败，请检查\n');
    process.exit(1);
  }
}

// 检查服务器是否运行
http.get(BASE_URL, (res) => {
  if (res.statusCode === 200 || res.statusCode === 404) {
    console.log('✅ 服务器正在运行');
    runTests();
  }
}).on('error', () => {
  console.error('❌ 服务器未运行，请先启动开发服务器: npm run dev');
  process.exit(1);
});
