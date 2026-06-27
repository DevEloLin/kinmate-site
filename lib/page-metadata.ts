// 页面级本地化 metadata 生成器（SEO）。
// 每个 [locale] 页在 generateMetadata 里调用，产出：
//   - 本地化 title / description（来自 messages 的 seo.<page>）
//   - canonical（当前 locale + 路径）
//   - hreflang 替代链接（6 语 + x-default）
//   - Open Graph / Twitter 本地化 + og:locale 及备选 locale
//
// title 默认走根 layout 的模板 `%s · KinMate`；首页传 absolute=true 用整句标题避免重复品牌名。

import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { SITE_URL } from './site'

// 站点 locale → Open Graph locale 标签。
const OG_LOCALE: Record<string, string> = {
  en: 'en_US',
  zh: 'zh_CN',
  es: 'es_ES',
  hi: 'hi_IN',
  pt: 'pt_BR',
  ar: 'ar_AR',
}

type PageKey =
  | 'home'
  | 'features'
  | 'pricing'
  | 'byoc'
  | 'referral'
  | 'download'
  | 'about'
  | 'contact'
  | 'feedback'
  | 'privacy'
  | 'terms'
  | 'deleteAccount'
  | 'aiDisclaimer'

export async function buildPageMetadata(
  locale: string,
  pageKey: PageKey,
  path: string,
  opts: { absoluteTitle?: boolean } = {},
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'seo' })
  const titleText = t(`${pageKey}.title`)
  const description = t(`${pageKey}.description`)
  const canonical = `${SITE_URL}/${locale}${path}`

  const languages: Record<string, string> = Object.fromEntries(
    routing.locales.map((l) => [l, `${SITE_URL}/${l}${path}`]),
  )
  languages['x-default'] = `${SITE_URL}/${routing.defaultLocale}${path}`

  return {
    // absoluteTitle: 首页用整句标题（不再叠加 `· KinMate` 模板）
    title: opts.absoluteTitle ? { absolute: titleText } : titleText,
    description,
    alternates: { canonical, languages },
    openGraph: {
      title: titleText,
      description,
      url: canonical,
      siteName: 'KinMate',
      locale: OG_LOCALE[locale] ?? 'en_US',
      alternateLocale: routing.locales
        .filter((l) => l !== locale)
        .map((l) => OG_LOCALE[l] ?? 'en_US'),
    },
    twitter: { title: titleText, description },
  }
}
