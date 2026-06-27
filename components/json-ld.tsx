// 结构化数据（JSON-LD）——SEO / GEO（生成式引擎）/ AEO（答案引擎）三合一。
//
// 渲染到每个页面 <body>：
//   - Organization        品牌实体（AI / 搜索引擎识别「KinMate 是谁」）
//   - WebSite             站点实体（站内搜索潜力 + 当前语言）
//   - MobileApplication   App 实体 + 套餐 offers（ProductivityApplication，不
//                          标记为 HealthApplication 以避免商店医疗类强审）
//   - FAQPage             常见问答（AEO：答案框 / 语音 / AI 概览直接引用）
//
// 文案全部来自 i18n messages，按 locale 本地化（6 语），FAQ/描述即 GEO/AEO 的
// 「事实答案源」。静态导出安全：async server component，输出 <script ld+json>。

import { getTranslations } from 'next-intl/server'
import { SITE_URL } from '@/lib/site'

const SITE = SITE_URL

// 站点 locale → BCP-47 语言标签（搜索引擎/AI 引擎用）。
const BCP47: Record<string, string> = {
  en: 'en',
  zh: 'zh-CN',
  es: 'es',
  hi: 'hi',
  pt: 'pt-BR',
  ar: 'ar',
}

// App 界面支持的语言（GEO：让 AI / 搜索引擎明确「KinMate 有几种语言」）。
const APP_LANGUAGES = ['en', 'zh-CN', 'es', 'hi', 'pt', 'ar']
const APP_LANGUAGE_NAMES = [
  'English',
  'Chinese',
  'Spanish',
  'Hindi',
  'Portuguese',
  'Arabic',
]

type Faq = { q: string; a: string }

export async function JsonLd({ locale }: { locale: string }) {
  const t = await getTranslations({ locale })
  const lang = BCP47[locale] ?? 'en'
  const url = `${SITE}/${locale}`

  // 本地化描述与 FAQ 来自 messages，6 语全覆盖。
  const description = t('seo.home.description')
  const featureList = t('seo.features.description')
  const faqs = t.raw('faq.items') as Faq[]

  const graph = [
    {
      '@type': 'Organization',
      '@id': 'https://elolin.com/#org',
      name: 'EloLin',
      url: 'https://elolin.com',
      logo: 'https://elolin.com/og-default.png',
      brand: 'EloLin',
      founder: { '@type': 'Person', name: 'Wei Li' },
      sameAs: ['https://github.com/DevEloLin', 'https://x.com/DevEloLin'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      name: 'KinMate',
      url: SITE,
      inLanguage: lang,
      publisher: { '@id': 'https://elolin.com/#org' },
      description,
    },
    {
      '@type': 'MobileApplication',
      '@id': `${SITE}/#app`,
      name: 'KinMate',
      url,
      operatingSystem: 'iOS, Android',
      applicationCategory: 'ProductivityApplication',
      inLanguage: APP_LANGUAGES,
      availableLanguage: APP_LANGUAGE_NAMES,
      description,
      publisher: { '@id': 'https://elolin.com/#org' },
      featureList,
      offers: [
        {
          '@type': 'Offer',
          name: t('pricing.plans.free.name'),
          price: '0',
          priceCurrency: 'USD',
        },
        {
          '@type': 'Offer',
          name: t('pricing.plans.family8.name'),
          price: '199.99',
          priceCurrency: 'USD',
          category: 'Lifetime one-time purchase',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      inLanguage: lang,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]

  const json = { '@context': 'https://schema.org', '@graph': graph }

  return (
    <script
      type="application/ld+json"
      // 结构化数据由本组件可信生成，非用户输入。
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}
