'use client'

import { useMemo, useState } from 'react'
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
  ariaHidden = false,
}: {
  item: TestimonialItem
  accent: string
  compact?: boolean
  ariaHidden?: boolean
}) {
  return (
    <article
      aria-hidden={ariaHidden}
      className="group relative w-[clamp(18rem,28vw,24rem)] shrink-0 overflow-hidden rounded-[28px] border border-white/70 bg-white/82 p-5 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.30)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_50px_-28px_rgba(15,23,42,0.35)] sm:p-6"
    >
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
  const topLane = useMemo(() => items.slice(0, half), [items, half])
  const bottomLane = useMemo(() => items.slice(half), [items, half])
  const [hoveredLane, setHoveredLane] = useState<number | null>(null)
  const accentStyles = [
    'from-brand-500/90 via-brand-400/80 to-accent-400/70',
    'from-sky-500/90 via-cyan-400/80 to-brand-400/70',
    'from-amber-500/90 via-orange-400/80 to-rose-400/70',
    'from-emerald-500/90 via-teal-400/80 to-brand-400/70',
  ]

  const renderLane = (lane: TestimonialItem[], laneId: number, reverse = false) => (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setHoveredLane(laneId)}
      onMouseLeave={() => setHoveredLane(null)}
    >
      <div
        className={clsx(
          'flex w-max gap-5 py-2 will-change-transform motion-reduce:animate-none',
          reverse
            ? 'animate-[testimonials-marquee-reverse_96s_linear_infinite]'
            : 'animate-[testimonials-marquee_96s_linear_infinite]'
        )}
        style={{ animationPlayState: hoveredLane === laneId ? 'paused' : 'running' }}
      >
        {[...lane, ...lane].map((item, index) => (
          <TestimonialCard
            key={`${item.name}-${laneId}-${index}`}
            item={item}
            accent={accentStyles[index % accentStyles.length]}
            compact
            ariaHidden={index >= lane.length}
          />
        ))}
      </div>
    </div>
  )

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-2 sm:py-4">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.0)_0%,rgba(255,255,255,0.82)_10%,rgba(255,255,255,0.92)_50%,rgba(255,255,255,0.82)_90%,rgba(255,255,255,0.0)_100%),radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_36%),radial-gradient(circle_at_bottom,rgba(249,115,22,0.06),transparent_26%)]"
        aria-hidden
      />
      <div className="relative space-y-6 px-4 sm:px-6 lg:px-8">
        {renderLane(topLane, 0, false)}
        {renderLane(bottomLane.length ? bottomLane : topLane, 1, true)}
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
