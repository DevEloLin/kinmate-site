// 区段壳子。统一最大宽度与上下间距，少一处魔法数字。
// UI/UX：响应式间距，清晰的视觉层次

import { ReactNode } from 'react'
import clsx from 'clsx'

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={clsx('py-16 sm:py-20 lg:py-24', className)}>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
}) {
  return (
    <div className={clsx('max-w-3xl', center && 'mx-auto text-center')}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.5rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-ink-500 sm:mt-5 sm:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}

// 功能卡片组件（统一卡片样式）
export function FeatureCard({
  icon,
  title,
  description,
  className,
}: {
  icon?: ReactNode
  title: string
  description: string
  className?: string
}) {
  return (
    <div
      className={clsx(
        // 基础样式
        'group rounded-2xl border border-ink-100 bg-white p-6',
        // 阴影层级（subtle → medium on hover）
        'shadow-sm transition-all duration-200',
        'hover:border-ink-200 hover:shadow-md',
        className
      )}
    >
      {icon && (
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-200 group-hover:bg-brand-100">
          {icon}
        </div>
      )}
      <h3 className="text-base font-semibold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-ink-500">{description}</p>
    </div>
  )
}

// 信任卡片组件（带图标的卡片）
export function TrustCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode
  title: string
  description: string
}) {
  return (
    <div className="group rounded-2xl border border-ink-100 bg-cream/50 p-6 transition-all duration-200 hover:border-brand-200 hover:bg-cream/80">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100/50 text-brand-500 transition-colors duration-200 group-hover:bg-brand-100">
        {icon}
      </div>
      <h3 className="mt-4 text-base font-semibold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-ink-500">{description}</p>
    </div>
  )
}
