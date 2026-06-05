// 纯 CSS iPhone 外框（Dynamic Island + 圆角 + 边框高光）。
// 不依赖任何图片，包裹一个 App 屏幕组件即可生成「手机打开 App」的宣传图。

import { ReactNode } from 'react'
import clsx from 'clsx'

export function PhoneFrame({
  children,
  className,
  statusTime = '9:41',
  dark = false,
}: {
  children: ReactNode
  className?: string
  statusTime?: string
  dark?: boolean
}) {
  return (
    <div
      className={clsx(
        'relative mx-auto w-[270px] shrink-0 rounded-[2.6rem] p-[10px] shadow-2xl sm:w-[300px]',
        'bg-gradient-to-b from-neutral-700 via-neutral-900 to-black',
        'ring-1 ring-black/10',
        className,
      )}
    >
      {/* 侧边按钮 */}
      <span className="absolute -left-[3px] top-[110px] h-9 w-[3px] rounded-l bg-neutral-700" />
      <span className="absolute -left-[3px] top-[160px] h-14 w-[3px] rounded-l bg-neutral-700" />
      <span className="absolute -right-[3px] top-[140px] h-20 w-[3px] rounded-r bg-neutral-700" />

      {/* 屏幕 */}
      <div
        className={clsx(
          'relative overflow-hidden rounded-[2.05rem]',
          dark ? 'bg-app-ink' : 'bg-app-bg',
        )}
        style={{ aspectRatio: '9 / 19.5' }}
      >
        {/* 状态栏 */}
        <div className="absolute inset-x-0 top-0 z-20 flex h-9 items-center justify-between px-6 text-[11px] font-semibold text-app-ink">
          <span>{statusTime}</span>
          <div className="flex items-center gap-1">
            {/* 信号 */}
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" aria-hidden>
              <rect x="0" y="7" width="3" height="4" rx="1" fill="currentColor" />
              <rect x="4.5" y="5" width="3" height="6" rx="1" fill="currentColor" />
              <rect x="9" y="2.5" width="3" height="8.5" rx="1" fill="currentColor" />
              <rect x="13.5" y="0" width="2.5" height="11" rx="1" fill="currentColor" opacity="0.35" />
            </svg>
            {/* 电池 */}
            <svg width="22" height="11" viewBox="0 0 22 11" fill="none" aria-hidden>
              <rect x="0.5" y="0.5" width="18" height="10" rx="2.5" stroke="currentColor" opacity="0.4" />
              <rect x="2" y="2" width="13" height="7" rx="1.5" fill="currentColor" />
              <rect x="20" y="3.5" width="1.5" height="4" rx="0.75" fill="currentColor" opacity="0.4" />
            </svg>
          </div>
        </div>

        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-2 z-30 h-[26px] w-[88px] -translate-x-1/2 rounded-full bg-black" />

        {/* 内容 */}
        <div className="absolute inset-0 overflow-hidden pt-9">{children}</div>
      </div>
    </div>
  )
}
