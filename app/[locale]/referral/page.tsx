// 邀请有奖页：单层 6 档累计制。
// 重设计为紧凑优雅版——小巧的奖励档位卡片网格（不再用笨重的大渐变时间线），
// 紧凑 hero（修复标题重复），两张规则卡，CTA。视觉对齐首页。

import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Section, SectionHeading } from '@/components/section'
import { CtaGroup } from '@/components/cta'
import { Reveal, RevealStagger, RevealItem } from '@/components/motion'
import { CheckCircle2, Gift, Users, Clock } from 'lucide-react'

export default async function ReferralPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations()
  const zh = locale === 'zh'

  const tiers = t.raw('referral.tiers') as Array<{ invites: string; reward: string }>
  const validItems = t.raw('referral.validInviteItems') as string[]
  const settlementItems = t.raw('referral.settlementItems') as string[]

  return (
    <>
      {/* ───────────────── Hero（紧凑） ───────────────── */}
      <section className="relative overflow-hidden border-b border-ink-100">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.brand.100)_1px,transparent_0)] [background-size:32px_32px] opacity-50" />
          <div className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />
          <div className="absolute -top-16 right-10 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-2xl px-6 py-14 text-center sm:py-16">
          <Reveal from="up">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600 backdrop-blur">
              <Gift className="h-3.5 w-3.5" aria-hidden="true" />
              {zh ? '邀请计划' : 'Referral program'}
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-ink-900 sm:text-4xl">
              {t('referral.title')}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg">
              {t('referral.subtitle')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ───────────────── 奖励档位（紧凑卡片网格） ───────────────── */}
      <Section className="bg-cream/30">
        <Reveal>
          <SectionHeading
            center
            eyebrow={zh ? '累计奖励' : 'Cumulative rewards'}
            title={`${t('referral.tableInvites')} → ${t('referral.tableReward')}`}
          />
        </Reveal>
        <RevealStagger className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4" gap={0.07}>
          {tiers.map((row, i) => (
            <RevealItem key={row.invites}>
              <div className="group flex h-full flex-col items-center rounded-[1.6rem] border border-white/70 bg-white/75 p-4 text-center shadow-[0_10px_28px_rgba(15,23,42,0.05)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200/70 hover:bg-white/90 hover:shadow-[0_18px_40px_rgba(21,128,61,0.08)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-200 group-hover:bg-brand-100">
                  <Users className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-3 text-sm font-medium text-ink-600">{row.invites}</p>
                <p className="mt-2 inline-flex rounded-full bg-accent-500/12 px-3 py-1 text-sm font-bold text-accent-600">
                  {row.reward}
                </p>
                <span className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-ink-300">
                  {zh ? `第 ${i + 1} 档` : `Tier ${i + 1}`}
                </span>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      {/* ───────────────── 规则（两张紧凑卡） ───────────────── */}
      <Section className="border-t border-ink-100 bg-white">
        <Reveal>
          <SectionHeading center eyebrow={zh ? '规则说明' : 'The fine print'} title={t('referral.validInvite')} />
        </Reveal>
        <RevealStagger className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2 lg:gap-5">
          <RevealItem>
            <article className="group h-full rounded-[1.6rem] border border-white/70 bg-white/75 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.05)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200/70 hover:bg-white/90 hover:shadow-[0_18px_40px_rgba(21,128,61,0.08)]">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-100">
                  <Users className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-ink-900">{t('referral.validInvite')}</h3>
              </div>
              <ul className="space-y-2.5">
                {validItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                    <span className="text-sm leading-6 text-ink-600">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </RevealItem>
          <RevealItem>
            <article className="group h-full rounded-[1.6rem] border border-white/70 bg-white/75 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.05)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200/70 hover:bg-white/90 hover:shadow-[0_18px_40px_rgba(21,128,61,0.08)]">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-100">
                  <Clock className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-ink-900">{t('referral.settlement')}</h3>
              </div>
              <ul className="space-y-2.5">
                {settlementItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                    <span className="text-sm leading-6 text-ink-600">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </RevealItem>
        </RevealStagger>

        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <CtaGroup center primaryLabel={t('cta.primary')} primaryHref="/download" secondaryLabel={t('cta.secondary')} secondaryHref="/pricing" />
          </div>
        </Reveal>
      </Section>
    </>
  )
}
