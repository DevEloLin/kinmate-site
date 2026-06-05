// 功能详解页（重设计版）。
// 视觉语言对齐首页：网格/光斑背景 hero + Reveal 进场 + 编号功能卡片 + brand 渐变 CTA 面板。
// 层次：首条功能升级为跨列「主打卡」，其余走两列编号卡片网格。

import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/section'
import { CtaGroup } from '@/components/cta'
import { Reveal, RevealStagger, RevealItem } from '@/components/motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations()

  const items = t.raw('features.items') as Array<{ title: string; body: string }>
  const [lead, ...rest] = items

  return (
    <>
      {/* ───────────────── Hero ───────────────── */}
      <section className="relative overflow-hidden border-b border-ink-100">
        {/* 背景：网格 + 渐变光斑 */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.brand.100)_1px,transparent_0)] [background-size:32px_32px] opacity-50" />
          <div className="absolute -top-32 left-1/3 h-[26rem] w-[26rem] rounded-full bg-brand-200/40 blur-3xl" />
          <div className="absolute -top-16 right-0 h-[22rem] w-[22rem] rounded-full bg-accent-400/20 blur-3xl" />
        </div>

        <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20 lg:py-24">
          <Reveal from="up">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-sm font-semibold uppercase tracking-wider text-brand-600 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" aria-hidden />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" aria-hidden />
              </span>
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              {t('features.title')}
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl">
              {t('features.title')}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-600 sm:text-xl">
              {t('features.subtitle')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ───────────────── 功能列表 ───────────────── */}
      <Section className="bg-cream/30">
        {/* 主打功能：跨列渐变面板，建立层次 */}
        {lead && (
          <Reveal from="up">
            <article className="group relative overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br from-white via-brand-50/40 to-white p-8 shadow-sm transition-all duration-200 hover:shadow-md sm:p-10 lg:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-brand-100/50 blur-3xl transition-all duration-200 group-hover:bg-brand-200/50"
              />
              <div className="relative grid items-center gap-6 lg:grid-cols-[auto_1fr] lg:gap-10">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-xl font-bold text-white shadow-lg shadow-brand-500/25">
                  01
                </span>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
                    {lead.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-ink-600 sm:text-lg">
                    {lead.body}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        )}

        {/* 其余功能：两列编号卡片 */}
        <RevealStagger className="mt-4 grid gap-4 md:grid-cols-2 lg:mt-5 lg:gap-5">
          {rest.map((it, index) => (
            <RevealItem key={it.title}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition-all duration-200 hover:border-brand-200 hover:shadow-md sm:p-8">
                {/* 背景装饰光斑 */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-50/60 blur-2xl transition-all duration-200 group-hover:bg-brand-100/60"
                />
                <div className="relative">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white shadow-lg shadow-brand-500/20">
                      {String(index + 2).padStart(2, '0')}
                    </span>
                    <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-brand-100 to-transparent" />
                  </div>
                  <h3 className="text-lg font-semibold text-ink-900 sm:text-xl">{it.title}</h3>
                  <p className="mt-3 leading-7 text-ink-600">{it.body}</p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      {/* ───────────────── CTA 渐变面板 ───────────────── */}
      <Section className="border-t border-ink-100 bg-white">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 px-6 py-12 text-center text-white shadow-2xl shadow-brand-500/25 sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white/5 blur-3xl" aria-hidden />
            <div className="relative mx-auto max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold uppercase tracking-wider text-white/90 backdrop-blur-sm">
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                {t('download.title')}
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                {t('download.subtitle')}
              </h2>
              <div className="mt-8 flex justify-center">
                <CtaGroup
                  center
                  primaryLabel={t('cta.primary')}
                  primaryHref="/download"
                  secondaryLabel={t('cta.secondary')}
                  secondaryHref="/pricing"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
