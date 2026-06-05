import type { MetadataRoute } from 'next'

// 静态导出（output: export）要求 metadata 路由声明为静态
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://develolin.github.io/kinmate-site/sitemap.xml',
  }
}
