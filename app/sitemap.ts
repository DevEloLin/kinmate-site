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
  return PATHS.flatMap((p) =>
    routing.locales.map((loc) => ({
      url: `${base}/${loc}${p}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          ...Object.fromEntries(
            routing.locales.map((l) => [l, `${base}/${l}${p}`]),
          ),
          // x-default 指向默认语言，告诉搜索引擎语言/地区不匹配时的兜底页
          'x-default': `${base}/${routing.defaultLocale}${p}`,
        },
      },
    })),
  )
}
