// 语言切换。
// 写法故意简单：当前 /en/... 时给出 /zh/... 跳转，反之亦然。
// 不用 dropdown，按钮直接 toggle，海外用户切换需求低，复杂控件没必要。
// UI/UX：44px 最小触摸区域，清晰的交互状态

'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/routing'
import { Globe } from 'lucide-react'

export function LocaleSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const next = locale === 'en' ? 'zh' : 'en'
  const label = locale === 'en' ? '中文' : 'EN'

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: next })}
      className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-3 py-1.5 text-sm font-medium text-ink-700 transition-all duration-150 hover:border-ink-300 hover:bg-ink-50 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
      aria-label={`Switch language to ${label}`}
    >
      <Globe className="h-4 w-4" aria-hidden="true" />
      <span>{label}</span>
    </button>
  )
}
