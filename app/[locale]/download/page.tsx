// 下载页。App 已正式上线 Google Play —— 只保留一个可点击的 Google Play 链接。
// 商店地址固定：https://play.google.com/store/apps/details?id=com.kinmate.kinmate
// (已移除 iOS/APK/Beta 徽章、审核中横幅、Beta 警告、封闭测试加入步骤。)

import { getTranslations, setRequestLocale } from 'next-intl/server'
import { SectionHeading } from '@/components/section'
import { Reveal, RevealStagger, RevealItem, Floaty } from '@/components/motion'
import { PhoneFrame } from '@/components/app-mockup/phone-frame'
import { HomeScreen } from '@/components/app-mockup/screens'
import { Smartphone, ShieldCheck, Cloud, Zap } from 'lucide-react'
import { latestRelease } from '@/lib/release'

// 固定 Google Play 商店地址（App 已正式上线）。
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.kinmate.kinmate'

interface StoreBadgeProps {
  href: string
  ariaLabel: string
  badgeText: string
  storeText: string
  icon: React.ReactNode
}

function StoreBadge({ href, ariaLabel, badgeText, storeText, icon }: StoreBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex min-h-[72px] w-full items-center gap-4 rounded-2xl bg-ink-900 px-6 py-4 text-white shadow-lg shadow-ink-900/20 transition-all duration-200 hover:bg-ink-800 hover:shadow-xl hover:shadow-ink-900/25 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:w-auto"
      aria-label={ariaLabel}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 transition-colors duration-200 group-hover:bg-white/15">
        {icon}
      </span>
      <div className="text-left">
        <p className="text-xs font-medium text-white/60">{storeText}</p>
        <p className="text-lg font-semibold">{badgeText}</p>
      </div>
    </a>
  )
}

const trustItems = [
  { icon: ShieldCheck, label: 'GDPR Compliant' },
  { icon: Cloud, label: 'Local-First' },
  { icon: Zap, label: 'Offline Ready' },
] as const

import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/page-metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return buildPageMetadata(locale, 'download', '/download')
}

export default async function DownloadPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations()
  const appLocale = locale === 'zh' ? 'zh' : 'en'

  return (
    <section className="relative overflow-hidden">
      {/* 背景：网格 + 渐变光斑（与首页一致） */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.brand.100)_1px,transparent_0)] [background-size:32px_32px] opacity-50" />
        <div className="absolute -top-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute -top-20 right-0 h-[24rem] w-[24rem] rounded-full bg-accent-400/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-28">
        {/* 左：文案 + 商店徽章 + 信任标识 */}
        <Reveal from="up">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-sm font-semibold uppercase tracking-wider text-brand-600 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            {t('cta.primary')}
          </p>

          <SectionHeading title={t('download.title')} subtitle={t('download.subtitle')} />

          {/* 商店徽章 —— 仅 Google Play（已正式上线） */}
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <StoreBadge
              href={GOOGLE_PLAY_URL}
              ariaLabel={t('download.android')}
              badgeText={t('download.android')}
              storeText={t('cta.playStore')}
              icon={<Smartphone className="h-7 w-7" aria-hidden="true" />}
            />
          </div>

          {/* 信任标识 */}
          <RevealStagger className="mt-8 grid max-w-md grid-cols-3 gap-3" gap={0.1}>
            {trustItems.map(({ icon: Icon, label }) => (
              <RevealItem key={label}>
                <div className="flex h-full flex-col items-center gap-2 rounded-xl border border-ink-100 bg-white/80 p-4 shadow-sm backdrop-blur transition-all duration-200 hover:border-brand-200 hover:shadow-md">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-center text-xs font-medium text-ink-600">{label}</span>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>

          {/* 版本信息 */}
          <p className="mt-8 text-sm text-ink-400">
            {t('download.version', { baseVersion: latestRelease.baseVersion })} · Android 10+
          </p>
        </Reveal>

        {/* 右：手机 mockup（HomeScreen） */}
        <Reveal from="left" delay={0.15} className="relative">
          <div className="relative mx-auto flex max-w-md items-center justify-center">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 mx-auto my-auto h-72 w-72 rounded-full bg-brand-300/30 blur-3xl"
            />
            <Floaty className="relative z-10 -rotate-2">
              <PhoneFrame>
                <HomeScreen locale={appLocale} />
              </PhoneFrame>
            </Floaty>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
