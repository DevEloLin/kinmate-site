'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import clsx from 'clsx'

import { Link } from '@/i18n/routing'

type LaunchPromoCopy = {
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

const SESSION_KEY = 'kinmate.pricing.launch_promo_seen.v1'

export function LaunchPromoDialog({ copy }: { copy: LaunchPromoCopy }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.sessionStorage.getItem(SESSION_KEY) === '1') return
    window.sessionStorage.setItem(SESSION_KEY, '1')
    setOpen(true)
  }, [])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="launch-promo-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/55 p-4 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className={clsx(
          'relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/60',
          'bg-white shadow-2xl shadow-ink-900/20'
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-500 via-accent-500 to-brand-500" />
        <div className="flex items-start justify-between gap-4 p-6 pb-3 sm:p-7 sm:pb-4">
          <div>
            <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
              {copy.badge}
            </span>
            <h2
              id="launch-promo-title"
              className="mt-4 text-2xl font-semibold tracking-tight text-ink-900 sm:text-[2rem]"
            >
              {copy.title}
            </h2>
          </div>

          <button
            type="button"
            aria-label="Close"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-500 transition hover:border-ink-300 hover:text-ink-700"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="px-6 pb-6 sm:px-7 sm:pb-7">
          <p className="text-sm leading-7 text-ink-600 sm:text-base">
            {copy.body}
          </p>

          <div className="mt-5 grid gap-3 rounded-3xl bg-cream/40 p-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-ink-100 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                {copy.originalPriceLabel}
              </p>
              <p className="mt-2 text-2xl font-bold text-ink-500 line-through">
                {copy.originalPrice}
              </p>
            </div>
            <div className="rounded-2xl border border-brand-200 bg-brand-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                {copy.launchPriceLabel}
              </p>
              <p className="mt-2 text-2xl font-bold text-brand-700">
                {copy.launchPrice}
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-ink-500">{copy.footer}</p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-ink-200 px-4 py-3 text-sm font-semibold text-ink-700 transition hover:border-ink-300 hover:bg-ink-50"
              onClick={() => setOpen(false)}
            >
              {copy.secondaryCta}
            </button>
            <Link
              href="/download"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-500/20 transition hover:from-brand-600 hover:to-accent-600"
            >
              {copy.primaryCta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
