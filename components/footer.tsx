// 底部。
// 三列：Product / Company / Legal，加一行版权。
// 隐私 / 条款 / 删除账号链接醒目，是商店审核与合规的硬要求。
// UI/UX：链接有足够的触摸区域（44px 高度），清晰的 hover/focus 状态

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

export function Footer() {
  const t = useTranslations('footer')
  const cols: Array<{ title: string; items: Array<{ href: string; label: string }> }> = [
    {
      title: t('product'),
      items: [
        { href: '/features', label: t('links.features') },
        { href: '/pricing', label: t('links.pricing') },
        { href: '/byoc', label: t('links.byoc') },
        { href: '/referral', label: t('links.referral') },
        { href: '/download', label: t('links.download') },
      ],
    },
    {
      title: t('company'),
      items: [
        { href: '/about', label: t('links.about') },
        { href: '/contact', label: t('links.contact') },
        { href: '/feedback', label: t('links.feedback') },
      ],
    },
    {
      title: t('legal'),
      items: [
        { href: '/privacy', label: t('links.privacy') },
        { href: '/terms', label: t('links.terms') },
        { href: '/delete-account', label: t('links.deleteAccount') },
        { href: '/ai-disclaimer', label: t('links.aiDisclaimer') },
      ],
    },
  ]

  // 链接样式：44px 最小触摸高度，清晰的交互状态
  const linkClass =
    'inline-block py-1.5 text-ink-500 transition-colors duration-150 ' +
    'hover:text-ink-900 ' +
    'focus-visible:text-brand-600 focus-visible:outline-none focus-visible:underline focus-visible:underline-offset-2'

  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-5">
        {/* 品牌区域 */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg transition-opacity duration-150 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/kinmate-mark.svg`}
              alt=""
              aria-hidden="true"
              width={28}
              height={28}
              className="h-7 w-7 rounded-md shadow-sm"
            />
            <span className="font-semibold text-ink-900">KinMate</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-ink-500">{t('tagline')}</p>
        </div>

        {/* 链接列 */}
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-sm font-semibold text-ink-900">{c.title}</h4>
            <ul className="mt-4 space-y-1 text-sm">
              {c.items.map((it) => (
                <li key={it.href}>
                  <Link href={it.href} className={linkClass}>
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* EloLin Ecosystem */}
        <div>
          <h4 className="text-sm font-semibold text-ink-900">EloLin Ecosystem</h4>
          <ul className="mt-4 space-y-1 text-sm">
            <li>
              <a href="https://elolin.com" target="_blank" rel="noopener" className={linkClass}>
                EloLin Home
              </a>
            </li>
            <li>
              <a href="https://testhive.elolin.com" target="_blank" rel="noopener" className={linkClass}>
                TestHive
              </a>
            </li>
            <li>
              <a href="https://domains.elolin.com" target="_blank" rel="noopener" className={linkClass}>
                Domains
              </a>
            </li>
            <li>
              <a href="https://games.elolin.com" target="_blank" rel="noopener" className={linkClass}>
                EloGames
              </a>
            </li>
            <li>
              <a href="https://accounts.elolin.com" target="_blank" rel="noopener" className={linkClass}>
                Account
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* 版权行 */}
      <div className="border-t border-ink-100">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-ink-500">
          {t('rights')}
        </div>
      </div>
    </footer>
  )
}
