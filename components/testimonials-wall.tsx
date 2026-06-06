import { Quote } from 'lucide-react'
import clsx from 'clsx'

export interface TestimonialItem {
  name: string
  role: string
  quote: string
  outcome: string
}

const ACCENT_STYLES = [
  'from-brand-500/90 via-brand-400/80 to-accent-400/70',
  'from-sky-500/90 via-cyan-400/80 to-brand-400/70',
  'from-amber-500/90 via-orange-400/80 to-rose-400/70',
  'from-emerald-500/90 via-teal-400/80 to-brand-400/70',
]

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/)
  if (!parts.length) return '?'
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
}

export function TestimonialsWall({
  items,
}: {
  items: TestimonialItem[]
}) {
  if (!items.length) return null

  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => {
          const accent = ACCENT_STYLES[index % ACCENT_STYLES.length]
          const offset = index % 3 === 1 ? 'lg:-translate-y-3' : index % 3 === 2 ? 'lg:translate-y-2' : ''

          return (
            <article
              key={item.name}
              className={clsx(
                'group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-[0_22px_50px_-30px_rgba(15,23,42,0.32)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.38)] sm:p-7',
                offset
              )}
            >
              <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${accent}`} aria-hidden />
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-50/70 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-sm font-bold text-white shadow-lg shadow-brand-500/10`}>
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

              <div className="relative mt-6">
                <Quote className="h-5 w-5 text-brand-400/60" aria-hidden />
                <p className="mt-4 text-[1.02rem] leading-8 text-ink-800 sm:text-[1.05rem]">
                  {item.quote}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-ink-500">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500/70" aria-hidden />
                <span>One user, one card, one clear payoff.</span>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
