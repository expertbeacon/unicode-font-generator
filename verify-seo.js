#!/usr/bin/env node

/**
 * SEO Metadata Verification Script
 * 验证所有页面的SEO元数据完整性
 */

const fs = require('fs');
const path = require('path');

// 配置
const LOCALES = ['en', 'es', 'de_DE', 'fr', 'it', 'nl', 'pl', 'pt', 'sv', 'tr', 'ru', 'zh', 'ja', 'ko'];
const STYLE_KEYS = [
  'bold-text', 'cool', 'fancy', 'italic', 'small-text', 'bold-italic',
  'sans-serif', 'serif', 'underline', 'bubble-text', 'square-text',
  'cursive-font', 'alternating', 'exotic', 'mathematical', 'decorative',
  'vintage', 'modern', 'artistic', 'rounded', 'sharp', 'handwritten',
  'gaming', 'retro', 'elegant', 'playful'
];
const TOPIC_KEYS = ['facebook', 'handwriting'];

// 页面定义
const PAGES = [
  { name: '首页', path: 'src/app/[locale]/(frontend)/(home)/page.tsx', metadataFunction: 'homeMetadata' },
  { name: 'Instagram', path: 'src/app/[locale]/(frontend)/instagram/page.tsx', metadataFunction: 'instagramMetadata' },
  { name: 'Twitter', path: 'src/app/[locale]/(frontend)/twitter/page.tsx', metadataFunction: 'twitterMetadata' },
  { name: 'TikTok', path: 'src/app/[locale]/(frontend)/tiktok/page.tsx', metadataFunction: 'tiktokMetadata' },
  { name: 'About', path: 'src/app/[locale]/(frontend)/about/page.tsx', metadataFunction: 'aboutMetadata' },
  { name: 'Contact', path: 'src/app/[locale]/(frontend)/contact/page.tsx', metadataFunction: 'contactMetadata' },
  { name: 'Privacy', path: 'src/app/[locale]/(frontend)/privacy/page.tsx', metadataFunction: 'privacyMetadata' },
  { name: 'Terms', path: 'src/app/[locale]/(frontend)/terms/page.tsx', metadataFunction: 'termsMetadata' },
  { name: 'Fonts Gallery', path: 'src/app/[locale]/(frontend)/fonts-gallery/page.tsx', metadataFunction: 'fontsGalleryMetadata' },
  { name: 'Topic Index', path: 'src/app/[locale]/(frontend)/topic/page.tsx', metadataFunction: 'topicMetadata' },
];

// 验证结果
const results = {
  passed: [],
  failed: [],
  warnings: []
};

console.log('\n🔍 开始验证 SEO 元数据...\n');
console.log('=' .repeat(80));

// 1. 验证 metadata.ts 文件
console.log('\n📄 验证 metadata.ts 文件...');
const metadataPath = path.join(__dirname, 'src/metadata.ts');
if (!fs.existsSync(metadataPath)) {
  console.error('❌ metadata.ts 文件不存在！');
  process.exit(1);
}

const metadataContent = fs.readFileSync(metadataPath, 'utf-8');

// 检查所有必需的元数据函数
const requiredFunctions = [
  'homeMetadata',
  'styleMetadata',
  'topicMetadata',
  'instagramMetadata',
  'twitterMetadata',
  'tiktokMetadata',
  'aboutMetadata',
  'contactMetadata',
  'privacyMetadata',
  'termsMetadata',
  'fontsGalleryMetadata'
];

let missingFunctions = [];
requiredFunctions.forEach(func => {
  if (!metadataContent.includes(`export const ${func}`)) {
    missingFunctions.push(func);
  }
});

if (missingFunctions.length > 0) {
  console.error(`❌ 缺少元数据函数: ${missingFunctions.join(', ')}`);
  results.failed.push({
    page: 'metadata.ts',
    error: `缺少函数: ${missingFunctions.join(', ')}`
  });
} else {
  console.log('✅ 所有元数据函数都存在');
  results.passed.push({ page: 'metadata.ts', status: '所有函数定义正确' });
}

// 2. 验证页面文件
console.log('\n📝 验证页面文件...');
PAGES.forEach(page => {
  const pagePath = path.join(__dirname, page.path);
  if (!fs.existsSync(pagePath)) {
    console.error(`❌ ${page.name}: 文件不存在 - ${page.path}`);
    results.failed.push({
      page: page.name,
      error: '文件不存在'
    });
    return;
  }

  const content = fs.readFileSync(pagePath, 'utf-8');

  // 检查是否导出了 generateMetadata
  if (!content.includes('generateMetadata')) {
    console.error(`❌ ${page.name}: 缺少 generateMetadata`);
    results.failed.push({
      page: page.name,
      error: '缺少 generateMetadata'
    });
  } else if (!content.includes(page.metadataFunction)) {
    console.error(`❌ ${page.name}: 未使用 ${page.metadataFunction}`);
    results.failed.push({
      page: page.name,
      error: `未使用 ${page.metadataFunction}`
    });
  } else {
    console.log(`✅ ${page.name}: 正确使用 ${page.metadataFunction}`);
    results.passed.push({
      page: page.name,
      status: `使用 ${page.metadataFunction}`
    });
  }
});

// 3. 验证样式页面
console.log('\n🎨 验证样式页面...');
const stylePath = path.join(__dirname, 'src/app/[locale]/(frontend)/[style]/page.tsx');
if (!fs.existsSync(stylePath)) {
  console.error('❌ 样式页面文件不存在');
  results.failed.push({
    page: '样式页面',
    error: '文件不存在'
  });
} else {
  const styleContent = fs.readFileSync(stylePath, 'utf-8');
  if (!styleContent.includes('styleMetadata')) {
    console.error('❌ 样式页面: 未使用 styleMetadata');
    results.failed.push({
      page: '样式页面',
      error: '未使用 styleMetadata'
    });
  } else {
    console.log(`✅ 样式页面: 正确使用 styleMetadata`);

    // 检查 metadata.ts 中所有样式的翻译键
    let missingStyles = [];
    STYLE_KEYS.forEach(style => {
      const styleCase = style.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      if (!metadataContent.includes(`case "${style}":`)) {
        missingStyles.push(style);
      }
    });

    if (missingStyles.length > 0) {
      console.error(`⚠️  metadata.ts 中缺少样式: ${missingStyles.join(', ')}`);
      results.warnings.push({
        page: '样式元数据',
        warning: `可能缺少: ${missingStyles.join(', ')}`
      });
    } else {
      console.log(`✅ 所有 ${STYLE_KEYS.length} 个样式都在 styleMetadata 中定义`);
      results.passed.push({
        page: '所有样式',
        status: `${STYLE_KEYS.length} 个样式完整`
      });
    }
  }
}

// 4. 验证翻译文件
console.log('\n🌍 验证翻译文件...');
let translationResults = { ok: 0, missing: 0 };

LOCALES.forEach(locale => {
  const translationPath = path.join(__dirname, `public/i18n/${locale}.json`);
  if (!fs.existsSync(translationPath)) {
    console.error(`❌ 翻译文件不存在: ${locale}.json`);
    results.failed.push({
      page: `翻译-${locale}`,
      error: '文件不存在'
    });
    translationResults.missing++;
  } else {
    translationResults.ok++;
  }
});

console.log(`✅ ${translationResults.ok}/${LOCALES.length} 个翻译文件存在`);
if (translationResults.ok === LOCALES.length) {
  results.passed.push({
    page: '翻译文件',
    status: `所有 ${LOCALES.length} 种语言`
  });
}

// 5. 验证 SEO 工具库
console.log('\n🔧 验证 SEO 工具库...');
const seoLibPath = path.join(__dirname, 'src/lib/seo.ts');
if (!fs.existsSync(seoLibPath)) {
  console.error('❌ SEO 工具库不存在');
  results.failed.push({
    page: 'SEO 工具库',
    error: '文件不存在'
  });
} else {
  const seoContent = fs.readFileSync(seoLibPath, 'utf-8');
  const requiredHelpers = [
    'generateCanonicalUrl',
    'generateAlternateLinks',
    'getOgLocale'
  ];

  let missingHelpers = [];
  requiredHelpers.forEach(helper => {
    if (!seoContent.includes(`export function ${helper}`)) {
      missingHelpers.push(helper);
    }
  });

  if (missingHelpers.length > 0) {
    console.error(`❌ 缺少工具函数: ${missingHelpers.join(', ')}`);
    results.failed.push({
      page: 'SEO 工具库',
      error: `缺少: ${missingHelpers.join(', ')}`
    });
  } else {
    console.log('✅ 所有 SEO 工具函数都存在');
    results.passed.push({
      page: 'SEO 工具库',
      status: '所有工具函数完整'
    });
  }
}

// 打印最终报告
console.log('\n' + '='.repeat(80));
console.log('\n📊 验证报告\n');

console.log(`✅ 通过: ${results.passed.length} 项`);
if (results.warnings.length > 0) {
  console.log(`⚠️  警告: ${results.warnings.length} 项`);
}
if (results.failed.length > 0) {
  console.log(`❌ 失败: ${results.failed.length} 项`);
}

if (results.failed.length > 0) {
  console.log('\n❌ 失败项目:');
  results.failed.forEach(item => {
    console.log(`  - ${item.page}: ${item.error}`);
  });
}

if (results.warnings.length > 0) {
  console.log('\n⚠️  警告项目:');
  results.warnings.forEach(item => {
    console.log(`  - ${item.page}: ${item.warning}`);
  });
}

console.log('\n' + '='.repeat(80));

// 总结
const totalChecks = results.passed.length + results.failed.length;
const passRate = ((results.passed.length / totalChecks) * 100).toFixed(1);

console.log(`\n📈 通过率: ${passRate}% (${results.passed.length}/${totalChecks})`);

if (results.failed.length === 0 && results.warnings.length === 0) {
  console.log('\n🎉 所有验证都通过！SEO 元数据配置完整！\n');
  process.exit(0);
} else if (results.failed.length === 0) {
  console.log('\n✅ 核心验证通过，但有一些警告需要注意\n');
  process.exit(0);
} else {
  console.log('\n⚠️  发现问题，请修复后重新验证\n');
  process.exit(1);
}
