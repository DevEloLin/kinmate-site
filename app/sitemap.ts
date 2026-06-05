// 双语 sitemap。每条目都生成 hreflang 替代链接，给 Google 多语言索引看。

import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'

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
  '/privacy',
  '/terms',
  '/delete-account',
  '/ai-disclaimer',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://kinmate.app'
  return PATHS.flatMap((p) =>
    routing.locales.map((loc) => ({
      url: `${base}/${loc}${p}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${base}/${l}${p}`]),
        ),
      },
    })),
  )
}
