// 隐私政策。Apple/Google 审核必看页。
// 内容完整由 i18n messages 提供，方便法务后期单独迭代不动代码。
// 打磨：渐变标题区 + eyebrow/lastUpdated，章节保持清晰可读层级，轻微 Reveal。

import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/section'
import { Reveal, RevealStagger, RevealItem } from '@/components/motion'
import { Shield } from 'lucide-react'

import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/page-metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return buildPageMetadata(locale, 'privacy', '/privacy')
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('privacy')

  return (
    <Section>
      <div className="mx-auto max-w-prose">
        {/* 渐变标题区 */}
        <Reveal from="up">
          <div className="relative overflow-hidden rounded-3xl border border-brand-200/60 bg-gradient-to-br from-brand-50 via-brand-50/50 to-white p-8 shadow-sm sm:p-10">
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-200/40 blur-3xl" aria-hidden />
            <div className="relative">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600 shadow-sm">
                <Shield className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-brand-600">
                {t('lastUpdated')}
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                {t('title')}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-600">{t('summary')}</p>
            </div>
          </div>
        </Reveal>

        {/* 章节内容 */}
        <RevealStagger className="mt-12 space-y-10">
          {(t.raw('sections') as Array<{ h: string; p: string }>).map((s, i) => (
            <RevealItem key={s.h}>
              <article className="group">
                <h2 className="flex items-center gap-3 text-xl font-semibold text-ink-900">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-ink-100 text-sm font-medium text-ink-600 transition-colors group-hover:bg-brand-100 group-hover:text-brand-600">
                    {i + 1}
                  </span>
                  {s.h}
                </h2>
                <p className="mt-3 pl-10 leading-7 text-ink-600">{s.p}</p>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </Section>
  )
}
