'use client'

import { Quote } from 'lucide-react'
import clsx from 'clsx'

export interface TestimonialItem {
  name: string
  role: string
  quote: string
  outcome: string
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/)
  if (!parts.length) return '?'
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
}

function TestimonialCard({
  item,
  accent,
  compact = false,
}: {
  item: TestimonialItem
  accent: string
  compact?: boolean
}) {
  return (
    <article className="group relative w-[clamp(18rem,28vw,24rem)] shrink-0 overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-[0_22px_50px_-34px_rgba(15,23,42,0.35)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-34px_rgba(15,23,42,0.4)] sm:p-6">
      <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${accent}`} aria-hidden />
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-50/70 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-sm font-bold text-white shadow-lg shadow-brand-500/10`}
          >
            {getInitials(item.name)}
          </div>
          <div>
            <p className="text-base font-semibold text-ink-900">{item.name}</p>
            <p className="mt-0.5 text-sm text-ink-500">{item.role}</p>
          </div>
        </div>

        <div className="inline-flex shrink-0 items-center rounded-full border border-brand-200/70 bg-brand-50/70 px-3 py-1 text-xs font-semibold text-brand-700">
          {item.outcome}
        </div>
      </div>

      <div className="relative mt-5">
        <Quote className="h-5 w-5 text-brand-400/60" aria-hidden />
        <p
          className={clsx(
            'mt-4 text-ink-800',
            compact ? 'text-[1rem] leading-7' : 'text-[1.02rem] leading-8 sm:text-[1.05rem]'
          )}
        >
          {item.quote}
        </p>
      </div>
    </article>
  )
}

export function TestimonialsMarquee({ items }: { items: TestimonialItem[] }) {
  if (!items.length) return null

  const half = Math.ceil(items.length / 2)
  const topLane = items.slice(0, half)
  const bottomLane = items.slice(half)
  const accentStyles = [
    'from-brand-500/90 via-brand-400/80 to-accent-400/70',
    'from-sky-500/90 via-cyan-400/80 to-brand-400/70',
    'from-amber-500/90 via-orange-400/80 to-rose-400/70',
    'from-emerald-500/90 via-teal-400/80 to-brand-400/70',
  ]

  const renderLane = (lane: TestimonialItem[], reverse = false) => (
    <div className="overflow-hidden">
      <div
        className={clsx(
          'flex w-max gap-5 py-2 will-change-transform motion-reduce:animate-none',
          reverse
            ? 'animate-[testimonials-marquee-reverse_52s_linear_infinite]'
            : 'animate-[testimonials-marquee_52s_linear_infinite]'
        )}
      >
        {[...lane, ...lane].map((item, index) => (
          <TestimonialCard
            key={`${item.name}-${index}`}
            item={item}
            accent={accentStyles[index % accentStyles.length]}
            compact
          />
        ))}
      </div>
    </div>
  )

  return (
    <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[36px] border border-white/70 bg-white/70 px-4 py-6 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.34)] backdrop-blur-2xl sm:px-6 sm:py-8">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_38%),radial-gradient(circle_at_bottom,rgba(249,115,22,0.06),transparent_30%)]"
        aria-hidden
      />
      <div className="relative space-y-5">
        {renderLane(topLane, false)}
        {renderLane(bottomLane.length ? bottomLane : topLane, true)}
      </div>

      <style jsx global>{`
        @keyframes testimonials-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes testimonials-marquee-reverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}
