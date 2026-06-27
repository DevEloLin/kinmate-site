// 功能详解页（重设计版）。
// 视觉语言对齐首页：网格/光斑背景 hero + Reveal 进场 + 编号功能卡片 + brand 渐变 CTA 面板。
// 层次：首条功能升级为跨列「主打卡」，其余走两列编号卡片网格。

import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/section'
import { CtaGroup } from '@/components/cta'
import { Reveal, RevealStagger, RevealItem } from '@/components/motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'

interface FeatureItem {
  title: string
  body: string
}

interface FeatureGroup {
  key: string
  eyebrow: string
  heading: string
  items: FeatureItem[]
}

import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/page-metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return buildPageMetadata(locale, 'features', '/features')
}

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations()

  const groups = t.raw('features.groups') as FeatureGroup[]
  // 在三组之间累计编号，让用户对全部功能数有整体感
  let runningNumber = 0

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

        <div className="mx-auto max-w-3xl px-6 py-14 text-center sm:py-18 lg:py-22">
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

      {/* ───────────────── 分组功能列表 ───────────────── */}
      <Section className="bg-cream/30">
        <div className="space-y-14 sm:space-y-16 lg:space-y-20">
          {groups.map((group, gIdx) => (
            <div key={group.key}>
              {/* 组标题：eyebrow + heading，建立层次 */}
              <Reveal from="up">
                <div className="mb-6 flex flex-col items-start gap-2 sm:mb-8">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-white/80 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-brand-600 backdrop-blur">
                    {group.eyebrow}
                  </span>
                  <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
                    {group.heading}
                  </h2>
                  <span aria-hidden className="mt-1 h-1 w-12 rounded-full bg-gradient-to-r from-brand-400 to-brand-600" />
                </div>
              </Reveal>

              {/* 该组卡片：3 列紧凑网格，减小尺寸避免视觉过大 */}
              <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                {group.items.map((it) => {
                  runningNumber += 1
                  const num = String(runningNumber).padStart(2, '0')
                  // 中间组（Health Intelligence）用强调色，与其它两组拉开视觉
                  const isHighlight = group.key === 'intelligence'
                  return (
                    <RevealItem key={it.title}>
                      <article
                        className={
                          'group relative h-full overflow-hidden rounded-2xl border bg-white/80 p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(21,128,61,0.08)] ' +
                          (isHighlight
                            ? 'border-brand-200/70 hover:border-brand-300'
                            : 'border-white/70 hover:border-brand-200/70')
                        }
                      >
                        <div
                          aria-hidden
                          className={
                            'pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full blur-2xl transition-all duration-200 ' +
                            (isHighlight
                              ? 'bg-brand-100/60 group-hover:bg-brand-200/60'
                              : 'bg-brand-50/40 group-hover:bg-brand-100/60')
                          }
                        />
                        <div className="relative">
                          <span
                            className={
                              'inline-flex h-8 w-8 items-center justify-center rounded-xl text-xs font-bold text-white shadow-md ' +
                              (isHighlight
                                ? 'bg-gradient-to-br from-brand-500 to-brand-700 shadow-brand-500/30'
                                : 'bg-gradient-to-br from-brand-400/90 to-brand-600/90 shadow-brand-500/20')
                            }
                          >
                            {num}
                          </span>
                          <h3 className="mt-3 text-base font-semibold text-ink-900">
                            {it.title}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-ink-600">{it.body}</p>
                        </div>
                      </article>
                    </RevealItem>
                  )
                })}
              </RevealStagger>

              {/* 组之间的分隔线，最后一组不加 */}
              {gIdx < groups.length - 1 && (
                <div aria-hidden className="mx-auto mt-12 h-px max-w-md bg-gradient-to-r from-transparent via-ink-200 to-transparent sm:mt-14" />
              )}
            </div>
          ))}
        </div>
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
