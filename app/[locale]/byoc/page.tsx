// BYOC 自带云盘说明页（重设计版）。
// 视觉语言对齐首页：网格/光斑 hero + 手机 mockup（FamilyScreen）展示 + 提供商卡片 + 安全胶囊 + 警告框。

import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Section, SectionHeading } from '@/components/section'
import { Reveal, RevealStagger, RevealItem, Floaty } from '@/components/motion'
import { PhoneFrame } from '@/components/app-mockup/phone-frame'
import { FamilyScreen } from '@/components/app-mockup/screens'
import { Cloud, AlertTriangle, KeyRound, Shield, Lock } from 'lucide-react'

export default async function ByocPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations()
  const appLocale = locale === 'zh' ? 'zh' : 'en'

  const providers = t.raw('byoc.providers') as Array<{ name: string; scope: string }>

  return (
    <>
      {/* ───────────────── Hero（文案 + 手机 mockup） ───────────────── */}
      <section className="relative overflow-hidden border-b border-ink-100">
        {/* 背景：网格 + 渐变光斑 */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.brand.100)_1px,transparent_0)] [background-size:32px_32px] opacity-50" />
          <div className="absolute -top-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-brand-200/40 blur-3xl" />
          <div className="absolute -top-20 right-0 h-[24rem] w-[24rem] rounded-full bg-accent-400/20 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-24">
          {/* 左：文案 */}
          <Reveal from="up">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-sm font-semibold uppercase tracking-wider text-brand-600 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" aria-hidden />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" aria-hidden />
              </span>
              <Cloud className="h-3.5 w-3.5" aria-hidden />
              BYOC
            </p>
            <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl">
              {t('byoc.title')}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600 sm:text-xl">
              {t('byoc.subtitle')}
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-ink-600">
              {t('byoc.body')}
            </p>

            {/* 安全说明胶囊 */}
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-ink-500">
              <span className="inline-flex items-center gap-2 rounded-full border border-ink-100 bg-white px-3 py-1.5 shadow-sm">
                <Shield className="h-4 w-4 text-brand-500" aria-hidden />
                AES-256-GCM
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-ink-100 bg-white px-3 py-1.5 shadow-sm">
                <KeyRound className="h-4 w-4 text-brand-500" aria-hidden />
                12-word BIP39
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-ink-100 bg-white px-3 py-1.5 shadow-sm">
                <Lock className="h-4 w-4 text-brand-500" aria-hidden />
                Device-only
              </span>
            </div>
          </Reveal>

          {/* 右：手机 mockup（家庭页，浮动） */}
          <Reveal from="left" delay={0.15} className="relative">
            <div className="relative mx-auto flex max-w-sm items-center justify-center">
              <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 rounded-[3rem] bg-brand-200/30 blur-3xl" />
              <Floaty className="relative z-10 -rotate-2">
                <PhoneFrame>
                  <FamilyScreen locale={appLocale} />
                </PhoneFrame>
              </Floaty>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────── 云盘提供商 ───────────────── */}
      <Section className="bg-cream/30">
        <Reveal>
          <SectionHeading
            center
            eyebrow={locale === 'zh' ? '支持的云盘' : 'Supported providers'}
            title={t('byoc.title')}
          />
        </Reveal>
        <RevealStagger className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-3 lg:gap-5">
          {providers.map((p, index) => (
            <RevealItem key={p.name}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition-all duration-200 hover:border-brand-200 hover:shadow-md">
                {/* 背景装饰 */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full bg-brand-50/50 blur-xl transition-all duration-200 group-hover:bg-brand-100/50"
                />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/20">
                      <Cloud className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-100/60 text-xs font-bold text-ink-500">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-ink-900">{p.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-500">{p.scope}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      {/* ───────────────── 加密承诺（渐变面板） + 警告 ───────────────── */}
      <Section className="border-t border-ink-100 bg-white">
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          {/* 加密承诺面板：复用 hero 安全要点，重点强调本地加密 */}
          <Reveal from="right">
            <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 p-8 text-white shadow-2xl shadow-brand-500/25 sm:p-10">
              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/5 blur-3xl" aria-hidden />
              <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-white/5 blur-3xl" aria-hidden />
              <div className="relative">
                <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold uppercase tracking-wider text-white/90 backdrop-blur-sm">
                  <Lock className="h-3.5 w-3.5" aria-hidden />
                  {t('byoc.subtitle')}
                </p>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
                  {t('byoc.body')}
                </p>
                <ul className="mt-8 space-y-3">
                  {[
                    { icon: Shield, label: 'AES-256-GCM' },
                    { icon: KeyRound, label: '12-word BIP39' },
                    { icon: Lock, label: 'Device-only' },
                  ].map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm transition-colors duration-150 hover:bg-white/15"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="font-medium">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* 警告框 */}
          <Reveal from="left" delay={0.1}>
            <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-amber-50/40 p-6 sm:p-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 shadow-sm">
                <AlertTriangle className="h-6 w-6 text-amber-600" aria-hidden="true" />
              </div>
              <h4 className="mt-5 text-lg font-semibold text-amber-900">
                {locale === 'zh' ? '重要提示' : 'Important Notice'}
              </h4>
              <p className="mt-2 text-sm leading-7 text-amber-800">{t('byoc.warning')}</p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
