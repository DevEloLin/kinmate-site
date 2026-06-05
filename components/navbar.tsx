// 顶部导航。
// 桌面端横向排布，移动端走简化版（汉堡菜单留给 V1.1）。
// 语言切换器固定在最右侧，hover 翻一下即可。
// UI/UX：导航链接有清晰的 hover/focus 状态，CTA 按钮符合触摸目标规范

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { LocaleSwitcher } from './locale-switcher'

export function Navbar() {
  const t = useTranslations('nav')
  const cta = useTranslations('cta')

  // 导航链接样式（复用）
  const navLinkClass =
    'relative py-2 text-ink-700 transition-colors duration-150 hover:text-ink-900 ' +
    'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand-500 ' +
    'after:transition-all after:duration-200 hover:after:w-full ' +
    'focus-visible:outline-none focus-visible:text-brand-600 focus-visible:after:w-full'

  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg transition-opacity duration-150 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
          aria-label="KinMate - Back to home"
        >
          {/* 品牌图标：与 App 图标一致（浅绿渐变底 + 珊瑚心 + 叶脉），见 public/kinmate-mark.svg */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/kinmate-mark.svg`}
            alt=""
            aria-hidden="true"
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg shadow-sm"
          />
          <span className="text-lg font-semibold tracking-tight text-ink-900">KinMate</span>
        </Link>

        <nav
          className="hidden items-center gap-6 text-sm md:flex"
          aria-label="Main navigation"
        >
          <Link href="/features" className={navLinkClass}>
            {t('features')}
          </Link>
          <Link href="/pricing" className={navLinkClass}>
            {t('pricing')}
          </Link>
          <Link href="/byoc" className={navLinkClass}>
            {t('byoc')}
          </Link>
          <Link href="/referral" className={navLinkClass}>
            {t('referral')}
          </Link>
          <Link href="/download" className={navLinkClass}>
            {t('download')}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <Link
            href="/download"
            className="hidden min-h-[36px] items-center justify-center rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-brand-500/25 transition-all duration-200 hover:bg-brand-600 hover:shadow-md hover:shadow-brand-500/30 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:inline-flex"
          >
            {cta('primary')}
          </Link>
        </div>
      </div>
    </header>
  )
}
