// 首页（landing）重设计版。
// Hero（文案 + 手机 mockup）→ 数据条 → 真实用户声音 → 痛点 → 信任 → 功能 → How it works → BYOC → 邀请 → CTA。
// 动效走 framer-motion（components/motion），手机图走纯 CSS app-mockup（与真实 App 同配色）。

import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Section, SectionHeading, TrustCard, FeatureCard } from '@/components/section'
import { CtaGroup } from '@/components/cta'
import { Reveal, RevealStagger, RevealItem, Floaty } from '@/components/motion'
import { TestimonialsWall } from '@/components/testimonials-wall'
import { PhoneFrame } from '@/components/app-mockup/phone-frame'
import { HomeScreen, HealthScreen } from '@/components/app-mockup/screens'
import { Link } from '@/i18n/routing'
import { ShieldCheck, Cloud, Languages, PawPrint, ArrowRight, Check, ArrowDown } from 'lucide-react'

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations()
  const appLocale = locale === 'zh' ? 'zh' : 'en'

  const trustIcons = [ShieldCheck, Cloud, Languages, PawPrint]
  const stats = t.raw('hero.stats') as Array<{ k: string; v: string }>
  const steps = t.raw('howItWorks.steps') as Array<{ title: string; body: string }>
  const testimonials = t.raw('testimonials.items') as Array<{
    name: string
    role: string
    quote: string
    outcome: string
  }>

  return (
    <>
      {/* ───────────────── Hero ───────────────── */}
      <section className="relative overflow-hidden">
        {/* 背景：网格 + 渐变光斑 */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.brand.100)_1px,transparent_0)] [background-size:32px_32px] opacity-50" />
          <div className="absolute -top-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-brand-200/40 blur-3xl" />
          <div className="absolute -top-20 right-0 h-[24rem] w-[24rem] rounded-full bg-accent-400/20 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-28">
          {/* 左：文案 */}
          <Reveal from="up">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-sm font-semibold uppercase tracking-wider text-brand-600 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              {t('hero.eyebrow')}
            </p>
            <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              {t('hero.title')}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600 sm:text-xl">
              {t('hero.subtitle')}
            </p>
            <CtaGroup
              primaryLabel={t('cta.primary')}
              primaryHref="/download"
              secondaryLabel={t('cta.secondary')}
              secondaryHref="/pricing"
            />
            <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-brand-200/60 bg-gradient-to-r from-brand-50/80 to-white px-4 py-2.5 text-sm text-ink-700 shadow-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-100">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-600" aria-hidden />
              </span>
              <span className="font-medium">{t('hero.promise')}</span>
            </div>
          </Reveal>

          {/* 右：手机 mockup（双机错位 + 浮动） */}
          <Reveal from="left" delay={0.15} className="relative">
            <div className="relative mx-auto flex max-w-md items-center justify-center">
              {/* 后置副屏（健康指标），偏移露出 */}
              <div className="absolute right-2 top-10 hidden rotate-6 opacity-90 sm:block lg:right-0">
                <div className="scale-[0.82]">
                  <PhoneFrame>
                    <HealthScreen locale={appLocale} />
                  </PhoneFrame>
                </div>
              </div>
              {/* 主屏（首页） */}
              <Floaty className="relative z-10 -rotate-2">
                <PhoneFrame>
                  <HomeScreen locale={appLocale} />
                </PhoneFrame>
              </Floaty>
            </div>
          </Reveal>
        </div>

        {/* 数据条 */}
        <div className="mx-auto max-w-7xl px-6 pb-12 lg:pb-16">
          <RevealStagger className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 shadow-sm sm:grid-cols-4">
            {stats.map((s) => (
              <RevealItem key={s.v} className="bg-white px-5 py-5 text-center">
                <p className="text-2xl font-bold tracking-tight text-brand-600 sm:text-3xl">{s.k}</p>
                <p className="mt-1 text-xs text-ink-500 sm:text-sm">{s.v}</p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ───────────────── 真实用户声音 ───────────────── */}
      <Section className="border-t border-ink-100 bg-white/80">
        <Reveal>
          <SectionHeading
            eyebrow={t('testimonials.eyebrow')}
            title={t('testimonials.title')}
            subtitle={t('testimonials.subtitle')}
            center
          />
        </Reveal>
        <Reveal className="mt-10">
          <TestimonialsWall items={testimonials} />
        </Reveal>
      </Section>

      {/* ───────────────── 痛点 → 方案 ───────────────── */}
      <Section className="border-t border-ink-100 bg-cream/30">
        <Reveal>
          <SectionHeading eyebrow="Pain → Solved" title={t('problems.title')} subtitle={t('problems.subtitle')} center />
        </Reveal>
        <RevealStagger className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {(t.raw('problems.items') as Array<{ pain: string; gain: string }>).map((it) => (
            <RevealItem key={it.pain}>
              <div className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition-all duration-200 hover:border-brand-200 hover:shadow-md">
                {/* 痛点 */}
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500/12 text-xs font-bold text-accent-600" aria-hidden>✕</span>
                  <p className="text-sm leading-6 text-ink-500">{it.pain}</p>
                </div>
                {/* 分隔箭头 */}
                <div className="my-3 ml-3 flex items-center gap-2 text-ink-300" aria-hidden>
                  <ArrowDown className="h-4 w-4" />
                  <span className="h-px flex-1 bg-gradient-to-r from-ink-200 to-transparent" />
                </div>
                {/* 方案 */}
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600" aria-hidden>
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm font-medium leading-6 text-ink-900">{it.gain}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      {/* ───────────────── 信任承诺 ───────────────── */}
      <Section className="bg-white">
        <Reveal><SectionHeading title={t('trust.title')} center /></Reveal>
        <RevealStagger className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {(t.raw('trust.items') as Array<{ title: string; body: string }>).map((item, i) => {
            const Icon = trustIcons[i] ?? ShieldCheck
            return (
              <RevealItem key={item.title}>
                <TrustCard icon={<Icon className="h-5 w-5" />} title={item.title} description={item.body} />
              </RevealItem>
            )
          })}
        </RevealStagger>
      </Section>

      {/* ───────────────── 功能 ───────────────── */}
      <Section className="bg-cream/30">
        <Reveal><SectionHeading title={t('features.title')} subtitle={t('features.subtitle')} center /></Reveal>
        <RevealStagger className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {(t.raw('features.items') as Array<{ title: string; body: string }>).map((it, index) => (
            <RevealItem key={it.title}>
              <FeatureCard
                icon={<span className="text-sm font-bold">{String(index + 1).padStart(2, '0')}</span>}
                title={it.title}
                description={it.body}
              />
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      {/* ───────────────── How it works ───────────────── */}
      <Section className="border-t border-ink-100 bg-white">
        <Reveal>
          <SectionHeading eyebrow="3 steps" title={t('howItWorks.title')} subtitle={t('howItWorks.subtitle')} center />
        </Reveal>
        <RevealStagger className="relative mt-12 grid gap-6 md:grid-cols-3 md:gap-5">
          {/* 连接线 */}
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent md:block" />
          {steps.map((s, i) => (
            <RevealItem key={s.title} className="relative">
              <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-lg font-bold text-white shadow-lg shadow-brand-500/20">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-500">{s.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      {/* ───────────────── BYOC ───────────────── */}
      <Section className="bg-cream/30">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <Reveal from="right">
            <SectionHeading eyebrow="BYOC" title={t('byoc.title')} subtitle={t('byoc.subtitle')} />
            <p className="mt-6 text-base leading-7 text-ink-600">{t('byoc.body')}</p>
            <Link
              href="/byoc"
              className="group mt-8 inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-brand-200 bg-white px-5 py-2.5 text-sm font-medium text-brand-700 transition-all duration-200 hover:border-brand-300 hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
            >
              {t('nav.byoc')}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
          <Reveal from="left" delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 p-8 text-white shadow-2xl shadow-brand-500/25 sm:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" aria-hidden />
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/5 blur-2xl" aria-hidden />
              <ul className="relative space-y-4">
                {(t.raw('byoc.providers') as Array<{ name: string; scope: string }>).map((p) => (
                  <li key={p.name} className="flex items-start gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-sm transition-colors duration-150 hover:bg-white/15">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15">
                      <Cloud className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold">{p.name}</p>
                      <p className="mt-0.5 text-sm text-white/70">{p.scope}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ───────────────── 邀请有奖 ───────────────── */}
      <Section className="border-t border-ink-100 bg-white">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 px-6 py-12 text-white shadow-2xl shadow-brand-500/25 sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white/5 blur-3xl" aria-hidden />
            <div className="relative">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold uppercase tracking-wider text-white/90 backdrop-blur-sm">
                <span className="flex h-1.5 w-1.5 rounded-full bg-accent-400" />
                {t('referral.title')}
              </p>
              <h2 className="mt-4 max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                {t('referral.subtitle')}
              </h2>
              <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
                {(t.raw('referral.tiers') as Array<{ invites: string; reward: string }>).map((row, index) => (
                  <div
                    key={row.invites}
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/15"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-sm font-bold">{index + 1}</span>
                      <span className="text-white/80">{row.invites}</span>
                    </span>
                    <span className="rounded-lg bg-accent-500/20 px-3 py-1 text-sm font-semibold text-accent-200">{row.reward}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  href="/referral"
                  className="group inline-flex min-h-[48px] items-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-brand-700 shadow-lg shadow-black/10 transition-all duration-200 hover:bg-cream hover:shadow-xl active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {t('nav.referral')}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ───────────────── 终端 CTA ───────────────── */}
      <Section className="border-t border-ink-100 bg-cream/30 text-center">
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <SectionHeading center title={t('download.title')} subtitle={t('download.subtitle')} />
            <CtaGroup center primaryLabel={t('cta.primary')} primaryHref="/download" secondaryLabel={t('cta.secondary')} secondaryHref="/pricing" />
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-400">
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4" /><span>GDPR Compliant</span></span>
              <span className="flex items-center gap-1.5"><Cloud className="h-4 w-4" /><span>Local-First</span></span>
              <span className="flex items-center gap-1.5"><Languages className="h-4 w-4" /><span>EN / 中文</span></span>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
