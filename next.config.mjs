// Next.js 配置。
// 两种构建模式：
//   1) 默认（standalone 风格）：next build / next start，带安全响应头，用于 Vercel / Cloudflare / VPS。
//   2) 静态导出：STATIC_EXPORT=1 时输出纯静态 HTML（out/），用于 GitHub Pages（项目 docs/ 目录）。
//      静态导出不支持运行时 headers()/middleware，故在该模式下关闭 headers，并由导出脚本临时移开 middleware。
// 走 next-intl 插件接入 i18n。

import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

const isExport = process.env.STATIC_EXPORT === '1'
// GitHub Pages 项目站点（username.github.io/REPO）需把 basePath 设为 /REPO；
// 自定义域名或本地静态服务保持空。通过环境变量覆盖，默认空。
//
// .trim() 用途：deploy workflow 里 `${{ vars.SITE_BASE_PATH || fallback }}` 这种 GitHub
// Actions 表达式会把**空字符串当成 falsy 回退**到默认 fallback；要让自定义域绕过 fallback
// 又不让 Next 收到非空 basePath，业界做法是把仓库变量设为单个空格 " "（truthy 跳过 ||
// 回退），然后在这里 trim 掉得到 ''。没有 .trim() 时 basePath 会是字面 " "，下发到所有
// 静态 URL 前会输出 ` /_next/...`，照样 404。
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').trim()

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: isExport
    ? { unoptimized: true } // 静态导出不能用 Next 图片优化服务
    : { remotePatterns: [{ protocol: 'https', hostname: 'images.kinmate.app' }] },
  ...(isExport
    ? {
        output: 'export',
        trailingSlash: true, // 每个路由生成独立目录 + index.html，静态托管更友好
        basePath: basePath || undefined,
        assetPrefix: basePath || undefined,
      }
    : {
        async headers() {
          return [{ source: '/(.*)', headers: securityHeaders }]
        },
      }),
}

export default withNextIntl(nextConfig)
