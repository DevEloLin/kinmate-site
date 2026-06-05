// i18n 路由配置。
//
// 默认英文（海外市场为主），中文是平等的第二语言。
// 路由策略：always 前缀，便于 SEO 与社群分享带语言信息。
//   /en/pricing   - 英文价格页
//   /zh/pricing   - 中文价格页
//   /             - 中间件根据 Accept-Language 重定向

import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  locales: ['en', 'zh'],
  defaultLocale: 'en',
  localePrefix: 'always',
})

export type Locale = (typeof routing.locales)[number]

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)
