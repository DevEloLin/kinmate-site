// 语言级 layout。
// 在这里给 <html lang="..."> + Navbar + Footer。
// 用 setRequestLocale 让 next-intl 在 RSC 中直接拿到语言。

import { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing, isRtl, type Locale } from '@/i18n/routing'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { JsonLd } from '@/components/json-ld'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

// 无障碍「跳到主内容」文案，6 语内置（单 a11y 字符串，不值得进 messages 全量文件）。
const SKIP_TO_CONTENT: Record<string, string> = {
  en: 'Skip to main content',
  zh: '跳到主要内容',
  es: 'Saltar al contenido principal',
  hi: 'मुख्य सामग्री पर जाएं',
  pt: 'Pular para o conteúdo principal',
  ar: 'تخطّ إلى المحتوى الرئيسي',
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!routing.locales.includes(locale as Locale)) notFound()
  setRequestLocale(locale)
  const messages = await getMessages()
  const dir = isRtl(locale) ? 'rtl' : 'ltr'

  return (
    <html lang={locale} dir={dir}>
      <body className="min-h-screen antialiased">
        {/* 结构化数据：SEO + GEO（AI 引擎）+ AEO（答案引擎/FAQ），按 locale 本地化 */}
        <JsonLd locale={locale} />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* 无障碍：跳过导航链接，让键盘用户可以直接跳到主内容。
              RTL 下用 start-4（逻辑属性），LTR/RTL 都贴正确一侧 */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-white focus:outline-none"
          >
            {SKIP_TO_CONTENT[locale] ?? SKIP_TO_CONTENT.en}
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
