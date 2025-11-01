#!/bin/bash

# Font Generator 部署脚本
# 使用方法: chmod +x deploy.sh && ./deploy.sh

echo "🚀 开始部署 Font Generator 到 Cloudflare Pages..."

# 设置 API Token
export CLOUDFLARE_API_TOKEN="8TS1Aw57CauhdSZRcMaYm7HzWR8GiqqbOsJIcoNX"

# 项目信息
PROJECT_NAME="font-generator"
ACCOUNT_ID="16103373804db1ac745b6b26fd7299ca"

echo "📦 构建项目..."
npm run pages:build

echo "📤 上传到 Cloudflare Pages..."
npx wrangler pages deploy .vercel/output/static --project-name $PROJECT_NAME --commit-message "Updated: Complete font generator with 27 styles and new features"

echo "✅ 部署完成！"
echo "🌐 网站将在几分钟内更新: https://fontgenerator.dev"