// 套餐对比页。四档全展示，Family 3 居中突出（推荐档高亮 brand 渐变描边 + 徽章）。
// 视觉对齐首页：网格 + 渐变光斑背景、Reveal 错位进场、rounded-2xl/3xl、focus-visible、aria-hidden 装饰。

import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Section, SectionHeading } from '@/components/section'
import { Reveal } from '@/components/motion'
import { LaunchPromoDialog } from '@/components/launch-promo-dialog'
import { PricingPlans, type PricingPlan } from '@/components/pricing-plans'
import { ShieldCheck, Smartphone, Clock3 } from 'lucide-react'

type PlanKey = 'free' | 'personalPlus' | 'family3' | 'family5' | 'family8'

interface Plan {
  name: string
  price: string
  yearly?: string
  originalPrice?: string
  billing?: string
  offer?: string
  tag: string
  features: string[]
}

interface LaunchPromoCopy {
  title: string
  badge: string
  body: string
  originalPriceLabel: string
  originalPrice: string
  launchPriceLabel: string
  launchPrice: string
  footer: string
  primaryCta: string
  secondaryCta: string
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations()

  const plans: Array<{ key: PlanKey; highlighted?: boolean }> = [
    { key: 'free' },
    { key: 'personalPlus' },
    { key: 'family3', highlighted: true },
    { key: 'family5' },
    { key: 'family8' },
  ]
  const launchPromo = t.raw('pricing.launchPromo') as LaunchPromoCopy
  const isZh = locale === 'zh'
  const planCards = plans.map(({ key, highlighted }): PricingPlan => {
    const plan = t.raw(`pricing.plans.${key}`) as Plan
    return { key, ...plan, highlighted }
  })

  return (
    <Section className="relative overflow-hidden bg-cream/30">
      <LaunchPromoDialog copy={launchPromo} />
      {/* 背景：网格 + 渐变光斑（与首页一致） */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.brand.100)_1px,transparent_0)] [background-size:32px_32px] opacity-50" />
        <div className="absolute -top-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute -top-20 right-0 h-[24rem] w-[24rem] rounded-full bg-accent-400/20 blur-3xl" />
      </div>

      <Reveal>
        <SectionHeading
          center
          title={t('pricing.title')}
          subtitle={t('pricing.subtitle')}
        />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-3">
          <div className="rounded-[1.6rem] border border-white/70 bg-white/75 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.05)] backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600/90">
              {isZh ? '首发试用' : 'Launch trial'}
            </p>
            <p className="mt-2 text-lg font-semibold text-ink-900">
              {isZh ? '前 1000 名用户可获得 60 天免费试用' : 'The first 1,000 users get a 60-day free trial'}
            </p>
            <p className="mt-2 text-sm leading-6 text-ink-500">
              {isZh ? '先到先得，名额用完即止。' : 'First come, first served. The offer ends once the quota is claimed.'}
            </p>
          </div>
          <div className="rounded-[1.6rem] border border-white/70 bg-white/75 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.05)] backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600/90">
              {isZh ? '当前可订阅平台' : 'Subscription availability'}
            </p>
            <p className="mt-2 text-lg font-semibold text-ink-900">
              {isZh ? '目前仅开放 iPhone / iPad 订阅' : 'Subscriptions are available on iPhone and iPad only for now'}
            </p>
            <p className="mt-2 text-sm leading-6 text-ink-500">
              {isZh ? 'Android 用户可先下载使用，待 Google Play 上架后再开放订阅。' : 'Android users can download the app now and wait for Google Play launch before subscriptions open.'}
            </p>
          </div>
          <div className="rounded-[1.6rem] border border-white/70 bg-white/75 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.05)] backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600/90">
              {isZh ? '计费方式' : 'Billing'}
            </p>
            <p className="mt-2 text-lg font-semibold text-ink-900">
              {isZh ? '先只看月付，年付稍后开放' : 'Monthly first, yearly coming later'}
            </p>
            <p className="mt-2 text-sm leading-6 text-ink-500">
              {isZh ? '先把产品用顺手，再开放更复杂的计费选项。' : 'We are keeping the flow simple while the product is still growing.'}
            </p>
          </div>
        </div>
      </Reveal>

      <PricingPlans
        plans={planCards}
        currentLabel={t('pricing.current')}
        perMonth={t('pricing.perMonth')}
        perYear={t('pricing.perYear')}
        billingMonthlyLabel={t('pricing.billingMonthly')}
        billingYearlyLabel={t('pricing.billingYearly')}
      />

      <Reveal delay={0.1}>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-6 text-ink-500 sm:mt-12">
          {t.raw('pricing.plans.bigFamilies')}
        </p>
      </Reveal>
    </Section>
  )
}
