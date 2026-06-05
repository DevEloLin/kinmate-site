// 套餐对比页。四档全展示，Family 3 居中突出（推荐档高亮 brand 渐变描边 + 徽章）。
// 视觉对齐首页：网格 + 渐变光斑背景、Reveal 错位进场、rounded-2xl/3xl、focus-visible、aria-hidden 装饰。

import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Section, SectionHeading } from '@/components/section'
import { Reveal, RevealStagger, RevealItem } from '@/components/motion'
import { Link } from '@/i18n/routing'
import { CheckCircle2, Sparkles, Users, Crown } from 'lucide-react'
import clsx from 'clsx'

type PlanKey = 'free' | 'personalPlus' | 'family3' | 'family5' | 'family8'

interface Plan {
  name: string
  price: string
  yearly?: string
  tag: string
  features: string[]
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

  // 套餐图标映射
  const planIcons: Record<PlanKey, typeof Sparkles> = {
    free: Sparkles,
    personalPlus: Users,
    family3: Crown,
    family5: Crown,
    family8: Crown,
  }

  return (
    <Section className="relative overflow-hidden bg-cream/30">
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

      {/* 试用徽章 */}
      <Reveal delay={0.1}>
        <div className="mx-auto mt-6 flex justify-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-200/60 bg-gradient-to-r from-brand-50/80 to-white px-4 py-2 text-sm font-medium text-brand-700 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            {t('pricing.freeTrialBadge')}
          </div>
        </div>
      </Reveal>

      {/* 计费周期说明（月 / 年） */}
      <Reveal delay={0.15}>
        <div className="mx-auto mt-5 flex w-fit items-center gap-1 rounded-full border border-ink-100 bg-white p-1 text-sm shadow-sm">
          <span className="rounded-full bg-ink-900 px-4 py-1.5 font-medium text-white">
            {t('pricing.billingMonthly')}
          </span>
          <span className="px-4 py-1.5 font-medium text-ink-500">
            {t('pricing.billingYearly')}
          </span>
        </div>
      </Reveal>

      <RevealStagger
        className="mt-10 grid items-start gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-5"
        gap={0.1}
      >
        {plans.map(({ key, highlighted }) => {
          const plan = t.raw(`pricing.plans.${key}`) as Plan
          const Icon = planIcons[key]
          return (
            <RevealItem key={key} className={clsx(highlighted && 'lg:-mt-4')}>
              <article
                className={clsx(
                  'group relative flex h-full flex-col rounded-3xl p-6 transition-all duration-200',
                  highlighted
                    // 推荐档：brand 渐变描边（gradient border via padding trick）+ 高亮阴影
                    ? 'bg-gradient-to-b from-brand-400 to-brand-600 p-[1.5px] shadow-xl shadow-brand-500/20 lg:scale-[1.03]'
                    : 'border border-ink-100 bg-white shadow-sm hover:border-ink-200 hover:shadow-md'
                )}
              >
                {/* 推荐徽章 */}
                {highlighted && (
                  <div className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-4 py-1.5 text-xs font-semibold text-white shadow-md shadow-accent-500/30">
                      <Crown className="h-3 w-3" aria-hidden="true" />
                      {plan.tag}
                    </span>
                  </div>
                )}

                {/* 推荐档：内层白卡（实现渐变描边效果） */}
                <div
                  className={clsx(
                    'flex h-full flex-col',
                    highlighted && 'rounded-[calc(1.5rem-1.5px)] bg-white p-6'
                  )}
                >
                  {/* 套餐图标和标签 */}
                  <div className="flex items-center gap-3">
                    <span
                      className={clsx(
                        'flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-200',
                        highlighted
                          ? 'bg-brand-100 text-brand-600 group-hover:bg-brand-200'
                          : 'bg-ink-100/60 text-ink-500 group-hover:bg-ink-100'
                      )}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {!highlighted && (
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                        {plan.tag}
                      </p>
                    )}
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-ink-900">{plan.name}</h3>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span
                      className={clsx(
                        'text-4xl font-bold tracking-tight',
                        highlighted ? 'text-brand-600' : 'text-ink-900'
                      )}
                    >
                      {plan.price}
                    </span>
                    {key !== 'free' && (
                      <span className="text-sm text-ink-500">{t('pricing.perMonth')}</span>
                    )}
                  </div>

                  {plan.yearly && (
                    <p className="mt-1.5 inline-flex items-center gap-1 text-sm text-ink-500">
                      <span className="rounded bg-brand-50 px-1.5 py-0.5 text-xs font-medium text-brand-600">
                        Save
                      </span>
                      {plan.yearly} {t('pricing.perYear')}
                    </p>
                  )}

                  <div className="my-6 h-px bg-ink-100" />

                  <ul className="flex-1 space-y-3 text-sm text-ink-700">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className={clsx(
                            'mt-0.5 h-4 w-4 shrink-0',
                            highlighted ? 'text-brand-500' : 'text-ink-400'
                          )}
                          aria-hidden="true"
                        />
                        <span className="leading-6">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/download"
                    className={clsx(
                      'mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold',
                      'transition-all duration-200',
                      highlighted
                        ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/30 hover:from-accent-600 hover:to-accent-700 hover:shadow-xl hover:shadow-accent-500/40 active:scale-[0.98]'
                        : 'bg-ink-100/60 text-ink-900 hover:bg-ink-100 active:scale-[0.98]',
                      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                      highlighted
                        ? 'focus-visible:outline-accent-500'
                        : 'focus-visible:outline-brand-500'
                    )}
                  >
                    {t('pricing.current')}
                  </Link>
                </div>
              </article>
            </RevealItem>
          )
        })}
      </RevealStagger>

      <Reveal delay={0.1}>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-6 text-ink-500 sm:mt-12">
          {t.raw('pricing.plans.bigFamilies')}
        </p>
      </Reveal>
    </Section>
  )
}
