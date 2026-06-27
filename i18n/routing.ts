// i18n 路由配置。
//
// 默认英文（海外市场为主）。站点支持 6 种语言，与 App 对齐：
// 英语 / 中文 / 西班牙语 / 印地语 / 葡萄牙语 / 阿拉伯语（ar 为 RTL）。
// 路由策略：always 前缀，便于 SEO 与社群分享带语言信息。
//   /en/pricing   - 英文价格页
//   /ar/pricing   - 阿拉伯语价格页（RTL）
//   /             - 中间件根据 Accept-Language 重定向

import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  locales: ['en', 'zh', 'es', 'hi', 'pt', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'always',
})

export type Locale = (typeof routing.locales)[number]

// RTL 语言集合（用于 <html dir> 与布局镜像）。
export const RTL_LOCALES = new Set<string>(['ar'])
export const isRtl = (locale: string): boolean => RTL_LOCALES.has(locale)

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)
