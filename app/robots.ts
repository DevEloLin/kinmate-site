import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// 静态导出（output: export）要求 metadata 路由声明为静态
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
