'use client'

// 滚动进场动效原语。基于 framer-motion，统一全站节奏。
// 自动尊重 prefers-reduced-motion（用户关闭动效时直接静态渲染）。

import { ReactNode } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

interface RevealProps {
  children: ReactNode
  className?: string
  /** 进场延迟（秒），用于错位 */
  delay?: number
  /** 位移方向 */
  from?: 'up' | 'down' | 'left' | 'right' | 'none'
  /** 整段作为一次性触发 */
  once?: boolean
}

/** 单元素滚动进场。 */
export function Reveal({
  children,
  className,
  delay = 0,
  from = 'up',
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion()
  const offset = 24
  const initial = reduce
    ? { opacity: 0 }
    : {
        opacity: 0,
        y: from === 'up' ? offset : from === 'down' ? -offset : 0,
        x: from === 'left' ? offset : from === 'right' ? -offset : 0,
      }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

/** 子元素依次错位进场的容器。配合 RevealItem 使用。 */
export function RevealStagger({
  children,
  className,
  gap = 0.08,
  once = true,
}: {
  children: ReactNode
  className?: string
  gap?: number
  once?: boolean
}) {
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: gap } },
  }
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-80px' }}
    >
      {children}
    </motion.div>
  )
}

/** RevealStagger 的子项。 */
export function RevealItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()
  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: EASE },
    },
  }
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  )
}

/** 浮动装饰（hero 手机 mockup 等）。 */
export function Floaty({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
    >
      {children}
    </motion.div>
  )
}
