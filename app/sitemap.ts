// 多语 sitemap。每条目都生成 hreflang 替代链接（含 x-default），给搜索引擎多语言索引看。

import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import { SITE_URL } from '@/lib/site'

// 静态导出（output: export）要求 metadata 路由声明为静态
export const dynamic = 'force-static'

const PATHS = [
  '',
  '/features',
  '/pricing',
  '/byoc',
  '/referral',
  '/download',
  '/about',
  '/contact',
  '/feedback',
  '/privacy',
  '/terms',
  '/delete-account',
  '/ai-disclaimer',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL
  // 静态导出用 trailingSlash: true（next.config.mjs），页面实际服务在 /<loc>/<path>/
  // （文件是 /<loc>/<path>/index.html）。sitemap 必须带尾斜杠，否则每条 URL 都会
  // 301 重定向到带斜杠版 → Google Search Console 报「重定向错误」无法编入索引。
  const url = (loc: string, p: string) => `${base}/${loc}${p}/`
  return PATHS.flatMap((p) =>
    routing.locales.map((loc) => ({
      url: url(loc, p),
      lastModified: new Date(),
      alternates: {
        languages: {
          ...Object.fromEntries(
            routing.locales.map((l) => [l, url(l, p)]),
          ),
          // x-default 指向默认语言，告诉搜索引擎语言/地区不匹配时的兜底页
          'x-default': url(routing.defaultLocale, p),
        },
      },
    })),
  )
}
