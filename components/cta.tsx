// 通用 CTA 按钮组（主操作 + 次操作）
// UI/UX：遵循 44px 最小触摸目标，150-300ms 过渡动画，明确的 focus-visible 状态

import { Link } from '@/i18n/routing'
import clsx from 'clsx'

export function CtaGroup({
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  center = false,
}: {
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
  center?: boolean
}) {
  return (
    <div
      className={clsx(
        'mt-8 flex flex-col gap-4 sm:flex-row',
        center && 'justify-center'
      )}
    >
      <Link
        href={primaryHref}
        className={clsx(
          // 基础样式
          'inline-flex min-h-[44px] items-center justify-center rounded-xl px-6 py-3',
          'text-base font-medium',
          // 颜色与背景
          'bg-accent-500 text-white',
          // 阴影层级
          'shadow-sm shadow-accent-500/25',
          // 过渡动画（150-300ms）
          'transition-all duration-200 ease-out',
          // Hover 状态
          'hover:bg-accent-600 hover:shadow-md hover:shadow-accent-500/30',
          // Active 状态（按下反馈）
          'active:scale-[0.98] active:shadow-sm',
          // Focus 可见状态（键盘导航）
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500'
        )}
      >
        {primaryLabel}
      </Link>
      {secondaryLabel && secondaryHref && (
        <Link
          href={secondaryHref}
          className={clsx(
            // 基础样式
            'inline-flex min-h-[44px] items-center justify-center rounded-xl px-6 py-3',
            'text-base font-medium',
            // 颜色与背景
            'border border-ink-200 bg-white text-ink-900',
            // 过渡动画
            'transition-all duration-200 ease-out',
            // Hover 状态
            'hover:border-ink-300 hover:bg-ink-50',
            // Active 状态
            'active:scale-[0.98]',
            // Focus 可见状态
            'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500'
          )}
        >
          {secondaryLabel}
        </Link>
      )}
    </div>
  )
}
