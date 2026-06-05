// 语言级 layout。
// 在这里给 <html lang="..."> + Navbar + Footer。
// 用 setRequestLocale 让 next-intl 在 RSC 中直接拿到语言。

import { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { JsonLd } from '@/components/json-ld'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!routing.locales.includes(locale as 'en' | 'zh')) notFound()
  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className="min-h-screen antialiased">
        {/* 结构化数据：SEO + GEO（AI 引擎）+ AEO（答案引擎/FAQ） */}
        <JsonLd locale={locale} />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* 无障碍：跳过导航链接，让键盘用户可以直接跳到主内容 */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-white focus:outline-none"
          >
            {locale === 'zh' ? '跳到主要内容' : 'Skip to main content'}
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
