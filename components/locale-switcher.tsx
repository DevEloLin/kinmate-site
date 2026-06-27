// 语言切换（6 语下拉）。
// 站点支持 en/zh/es/hi/pt/ar，按钮展开列出各语言「原生名」，选中即切换当前路径的 locale。
// 无障碍：菜单 role + aria-expanded + Esc 关闭 + 点击外部关闭；44px 触摸区域。

'use client'

import { useEffect, useRef, useState } from 'react'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/routing'
import type { Locale } from '@/i18n/routing'
import { Globe, Check } from 'lucide-react'

const LOCALES: { code: Locale; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
  { code: 'es', label: 'Español' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'pt', label: 'Português' },
  { code: 'ar', label: 'العربية' },
]

export function LocaleSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // 点击外部 / Esc 关闭
  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0]

  const select = (code: Locale) => {
    setOpen(false)
    if (code !== locale) router.replace(pathname, { locale: code })
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-3 py-1.5 text-sm font-medium text-ink-700 transition-all duration-150 hover:border-ink-300 hover:bg-ink-50 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Switch language"
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        <span>{current.label}</span>
      </button>

      {open && (
        <ul
          role="menu"
          className="absolute end-0 z-50 mt-2 min-w-[10rem] overflow-hidden rounded-xl border border-ink-100 bg-white py-1 shadow-lg shadow-ink-900/5"
        >
          {LOCALES.map((l) => (
            <li key={l.code} role="none">
              <button
                type="button"
                role="menuitemradio"
                aria-checked={l.code === locale}
                onClick={() => select(l.code)}
                className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-start text-sm text-ink-700 transition-colors hover:bg-ink-50 focus-visible:bg-ink-50 focus-visible:outline-none"
                dir={l.code === 'ar' ? 'rtl' : 'ltr'}
              >
                <span>{l.label}</span>
                {l.code === locale && (
                  <Check className="h-4 w-4 text-brand-600" aria-hidden="true" />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
