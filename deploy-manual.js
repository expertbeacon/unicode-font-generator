#!/usr/bin/env node

const fs = require('fs');
const https = require('https');
const path = require('path');

const API_TOKEN = '8TS1Aw57CauhdSZRcMaYm7HzWR8GiqqbOsJIcoNX';
const ACCOUNT_ID = '16103373804db1ac745b6b26fd7299ca';
const PROJECT_NAME = 'font-generator';
const BUILD_DIR = '.vercel/output/static';

async function deploy() {
    console.log('🚀 开始手动部署到 Cloudflare Pages...');

    // 创建 manifest
    const manifest = {
        compatibility_date: '2023-05-18',
        compatibility_flags: ['nodejs_compat']
    };

    // 准备部署数据
    const formData = new FormData();
    formData.append('manifest', JSON.stringify(manifest));

    // 递归添加所有文件
    const addFiles = (dir, prefix = '') => {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const filePath = path.join(dir, file);
            const relativePath = path.join(prefix, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
                addFiles(filePath, relativePath);
            } else {
                const fileContent = fs.readFileSync(filePath);
                formData.append('files[' + relativePath + ']', new Blob([fileContent]));
            }
        }
    };

    try {
        addFiles(BUILD_DIR);

        // 创建部署
        const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/pages/projects/${PROJECT_NAME}/deployments`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_TOKEN}`,
            },
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            console.log('✅ 部署成功！');
            console.log('🌐 网站URL: https://fontgenerator.dev');
            console.log('📦 部署ID:', result.result.id);
            console.log('🔗 预览URL:', result.result.url);
        } else {
            console.error('❌ 部署失败:', result.errors);
        }
    } catch (error) {
        console.error('❌ 部署过程中出错:', error.message);
    }
}

deploy();