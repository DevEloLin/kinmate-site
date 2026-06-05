// 下载页。左文案 + 商店徽章 + GitHub APK 直链 + 信任标识，右侧一台手机 mockup（HomeScreen）。
// URL 来源：环境变量 NEXT_PUBLIC_APP_STORE_URL / NEXT_PUBLIC_GOOGLE_PLAY_URL / NEXT_PUBLIC_ANDROID_APK_URL（见 .env.example）
// 或 CI 生成的 data/release.json。未配置时按钮以 disabled 状态渲染，避免链向无效 href。
// 视觉对齐首页：网格 + 渐变光斑背景、Reveal 错位进场、rounded-2xl/3xl、focus-visible、aria-hidden 装饰。

import { getTranslations, setRequestLocale } from 'next-intl/server'
import { SectionHeading } from '@/components/section'
import { Reveal, RevealStagger, RevealItem, Floaty } from '@/components/motion'
import { PhoneFrame } from '@/components/app-mockup/phone-frame'
import { HomeScreen } from '@/components/app-mockup/screens'
import { Apple, Smartphone, ShieldCheck, Cloud, Zap, Download } from 'lucide-react'
import { latestRelease } from '@/lib/release'
import { getAppStoreUrl, getAndroidApkUrl, getGooglePlayUrl } from '@/lib/store-links'

interface StoreBadgeProps {
  href: string | null
  ariaLabel: string
  badgeText: string
  storeText: string
  icon: React.ReactNode
}

function StoreBadge({ href, ariaLabel, badgeText, storeText, icon }: StoreBadgeProps) {
  const sharedClasses =
    'group inline-flex min-h-[72px] w-full items-center gap-4 rounded-2xl bg-ink-900 px-6 py-4 text-white shadow-lg shadow-ink-900/20 transition-all duration-200 sm:w-auto'
  const enabledClasses =
    'hover:bg-ink-800 hover:shadow-xl hover:shadow-ink-900/25 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500'
  const disabledClasses = 'opacity-50 cursor-not-allowed pointer-events-none'

  const content = (
    <>
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 transition-colors duration-200 group-hover:bg-white/15">
        {icon}
      </span>
      <div className="text-left">
        <p className="text-xs font-medium text-white/60">{storeText}</p>
        <p className="text-lg font-semibold">{badgeText}</p>
      </div>
    </>
  )

  if (!href) {
    return (
      <span
        className={`${sharedClasses} ${disabledClasses}`}
        aria-label={ariaLabel}
        aria-disabled="true"
        role="link"
      >
        {content}
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${sharedClasses} ${enabledClasses}`}
      aria-label={ariaLabel}
    >
      {content}
    </a>
  )
}

const trustItems = [
  { icon: ShieldCheck, label: 'GDPR Compliant' },
  { icon: Cloud, label: 'Local-First' },
  { icon: Zap, label: 'Offline Ready' },
] as const

export default async function DownloadPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations()
  const appLocale = locale === 'zh' ? 'zh' : 'en'

  const appStoreUrl = getAppStoreUrl()
  const googlePlayUrl = getGooglePlayUrl()
  const androidApkUrl = getAndroidApkUrl()

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

          {/* 商店徽章 */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <StoreBadge
              href={appStoreUrl}
              ariaLabel={t('download.ios')}
              badgeText={t('download.ios')}
              storeText={t('cta.appStore')}
              icon={<Apple className="h-7 w-7" aria-hidden="true" />}
            />
            <StoreBadge
              href={googlePlayUrl}
              ariaLabel={t('download.android')}
              badgeText={t('download.android')}
              storeText={t('cta.playStore')}
              icon={<Smartphone className="h-7 w-7" aria-hidden="true" />}
            />
            <StoreBadge
              href={androidApkUrl}
              ariaLabel={t('download.apk')}
              badgeText={t('download.apk')}
              storeText={t('download.apkStore')}
              icon={<Download className="h-7 w-7" aria-hidden="true" />}
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
            {t('download.version', { baseVersion: latestRelease.baseVersion })} · iOS 15+ / Android 10+
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
