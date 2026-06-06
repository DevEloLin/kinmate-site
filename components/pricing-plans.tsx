'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { CheckCircle2, Crown, Sparkles, Users } from 'lucide-react'

import { Link } from '@/i18n/routing'

type PlanKey = 'free' | 'personalPlus' | 'family3' | 'family5' | 'family8'
type Billing = 'monthly' | 'yearly'

export interface PricingPlan {
  key: PlanKey
  name: string
  price: string
  yearly?: string
  originalPrice?: string
  billing?: string
  offer?: string
  tag: string
  features: string[]
  highlighted?: boolean
}

const PLAN_ICONS: Record<PlanKey, typeof Sparkles> = {
  free: Sparkles,
  personalPlus: Users,
  family3: Crown,
  family5: Crown,
  family8: Crown,
}

export function PricingPlans({
  plans,
  currentLabel,
  perMonth,
  perYear,
  billingMonthlyLabel,
  billingYearlyLabel,
}: {
  plans: PricingPlan[]
  currentLabel: string
  perMonth: string
  perYear: string
  billingMonthlyLabel: string
  billingYearlyLabel: string
}) {
  const [billing, setBilling] = useState<Billing>('monthly')

  const selectedMonthly = billing === 'monthly'

  return (
    <div>
      <div className="mx-auto mt-8 flex w-fit items-center gap-1 rounded-full border border-white/70 bg-white/75 p-1 text-sm shadow-[0_10px_28px_rgba(15,23,42,0.05)] backdrop-blur-md">
        <button
          type="button"
          onClick={() => setBilling('monthly')}
          className={clsx(
            'rounded-full px-4 py-1.5 font-medium transition-all duration-200',
            selectedMonthly ? 'bg-ink-900 text-white shadow-sm' : 'text-ink-500 hover:text-ink-800'
          )}
        >
          {billingMonthlyLabel}
        </button>
        <button
          type="button"
          onClick={() => setBilling('yearly')}
          className={clsx(
            'rounded-full px-4 py-1.5 font-medium transition-all duration-200',
            !selectedMonthly ? 'bg-ink-900 text-white shadow-sm' : 'text-ink-500 hover:text-ink-800'
          )}
        >
          {billingYearlyLabel}
        </button>
      </div>

      <div className="mt-8 grid items-start gap-4 sm:mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-5">
        {plans.map((plan) => {
          const Icon = PLAN_ICONS[plan.key]
          const highlighted = plan.highlighted
          const isLifetime = Boolean(plan.originalPrice)
          const showYearlyPrice = billing === 'yearly' && plan.yearly && !isLifetime
          const displayPrice = showYearlyPrice ? plan.yearly! : plan.price
          const displaySuffix = isLifetime
            ? plan.billing ?? 'Lifetime'
            : selectedMonthly
              ? perMonth
              : perYear

          return (
            <article
              key={plan.key}
              className={clsx(
                'group relative flex h-full flex-col rounded-3xl p-6 transition-all duration-200',
                highlighted
                  ? 'bg-gradient-to-b from-brand-400 to-brand-600 p-[1.5px] shadow-xl shadow-brand-500/20 lg:scale-[1.03]'
                  : 'border border-white/70 bg-white/75 shadow-[0_10px_28px_rgba(15,23,42,0.05)] backdrop-blur-md hover:-translate-y-0.5 hover:border-brand-200/70 hover:bg-white/90 hover:shadow-[0_18px_40px_rgba(21,128,61,0.08)]'
              )}
            >
              {highlighted && (
                <div className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-4 py-1.5 text-xs font-semibold text-white shadow-md shadow-accent-500/30">
                    <Crown className="h-3 w-3" aria-hidden="true" />
                    {plan.tag}
                  </span>
                </div>
              )}

              <div className={clsx('flex h-full flex-col', highlighted && 'rounded-[calc(1.5rem-1.5px)] bg-white p-6')}>
                <div className="flex items-center gap-3">
                  <span
                    className={clsx(
                      'flex h-10 w-10 items-center justify-center rounded-2xl transition-colors duration-200',
                      highlighted ? 'bg-brand-100 text-brand-600 group-hover:bg-brand-200' : 'bg-ink-100/60 text-ink-500 group-hover:bg-ink-100'
                    )}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  {!highlighted && <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">{plan.tag}</p>}
                </div>

                <h3 className="mt-4 text-xl font-bold text-ink-900">{plan.name}</h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className={clsx('text-4xl font-bold tracking-tight', highlighted ? 'text-brand-600' : 'text-ink-900')}>
                    {displayPrice}
                  </span>
                  {displaySuffix ? <span className="text-sm text-ink-500">{displaySuffix}</span> : null}
                </div>

                {plan.originalPrice ? (
                  <p className="mt-1.5 inline-flex flex-wrap items-center gap-1.5 text-sm text-ink-500">
                    <span className="rounded bg-accent-50 px-1.5 py-0.5 text-xs font-medium text-accent-700">
                      {plan.offer ?? '50% off'}
                    </span>
                    <span className="text-ink-400 line-through">{plan.originalPrice}</span>
                    <span>{plan.billing ?? 'Lifetime'}</span>
                  </p>
                ) : null}

                <div className="my-6 h-px bg-ink-100" />

                <ul className="flex-1 space-y-3 text-sm text-ink-700">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className={clsx('mt-0.5 h-4 w-4 shrink-0', highlighted ? 'text-brand-500' : 'text-ink-400')}
                        aria-hidden="true"
                      />
                      <span className="leading-6">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/download"
                  className={clsx(
                    'mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200',
                    highlighted
                      ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/30 hover:from-accent-600 hover:to-accent-700 hover:shadow-xl hover:shadow-accent-500/40 active:scale-[0.98]'
                      : 'bg-ink-100/60 text-ink-900 hover:bg-ink-100 active:scale-[0.98]',
                    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                    highlighted ? 'focus-visible:outline-accent-500' : 'focus-visible:outline-brand-500'
                  )}
                >
                  {currentLabel}
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
