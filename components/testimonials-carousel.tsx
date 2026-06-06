'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import clsx from 'clsx'

export interface TestimonialItem {
  name: string
  role: string
  quote: string
  outcome: string
}

export function TestimonialsCarousel({
  items,
}: {
  items: TestimonialItem[]
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (items.length <= 1) return
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length)
    }, 5200)
    return () => window.clearInterval(timer)
  }, [items.length])

  if (!items.length) return null

  const current = items[index]

  const goTo = (next: number) => {
    const normalized = (next + items.length) % items.length
    setIndex(normalized)
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div className="relative overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-sm">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(21,128,61,0.08),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.08),transparent_35%)]" />
        <div className="relative p-6 sm:p-8 lg:p-10">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                <Quote className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                  {current.outcome}
                </p>
                <p className="mt-1 text-sm text-ink-500">
                  {index + 1} / {items.length}
                </p>
              </div>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="Previous testimonial"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-700 transition hover:border-brand-200 hover:bg-brand-50"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="Next testimonial"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-700 transition hover:border-brand-200 hover:bg-brand-50"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-6">
            <p className="max-w-4xl text-2xl font-medium leading-relaxed tracking-tight text-ink-900 sm:text-[1.75rem]">
              “{current.quote}”
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
                {current.name}
              </div>
              <div className="rounded-full border border-ink-200 bg-white px-4 py-2 text-sm text-ink-600">
                {current.role}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, itemIndex) => {
              const active = itemIndex === index
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setIndex(itemIndex)}
                  className={clsx(
                    'rounded-2xl border px-4 py-3 text-left transition-all duration-200',
                    active
                      ? 'border-brand-300 bg-brand-50 shadow-sm'
                      : 'border-ink-100 bg-white hover:border-brand-200 hover:bg-cream/50'
                  )}
                >
                  <p className="text-sm font-semibold text-ink-900">{item.name}</p>
                  <p className="mt-0.5 text-xs text-ink-500">{item.role}</p>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
