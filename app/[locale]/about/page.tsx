// 关于我们页面（重设计版）。
// 视觉语言对齐首页：网格/光斑 hero + Reveal 进场 + rounded 卡片 + brand 渐变愿景面板。

import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/section'
import { Reveal, RevealStagger, RevealItem } from '@/components/motion'
import { Heart, Shield, Sparkles, Users } from 'lucide-react'

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('about')

  const values = [
    {
      key: 'privacy',
      icon: Shield,
      label: locale === 'zh' ? '隐私优先' : 'Privacy First',
      desc: locale === 'zh' ? '数据本地存储，端到端加密' : 'Local-first, end-to-end encrypted',
    },
    {
      key: 'simplicity',
      icon: Sparkles,
      label: locale === 'zh' ? '简洁易用' : 'Simple & Easy',
      desc: locale === 'zh' ? '拍照上传，智能解读' : 'Snap, upload, understand',
    },
    {
      key: 'family',
      icon: Users,
      label: locale === 'zh' ? '家庭至上' : 'Family Focused',
      desc: locale === 'zh' ? '一家人一起管理健康' : 'Health management for the whole family',
    },
  ]

  return (
    <>
      {/* ───────────────── Hero ───────────────── */}
      <section className="relative overflow-hidden border-b border-ink-100">
        {/* 背景：网格 + 渐变光斑 */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.brand.100)_1px,transparent_0)] [background-size:32px_32px] opacity-50" />
          <div className="absolute -top-32 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl" />
          <div className="absolute -top-16 right-1/4 h-[20rem] w-[20rem] rounded-full bg-accent-400/20 blur-3xl" />
        </div>

        <div className="mx-auto max-w-2xl px-6 py-16 text-center sm:py-20 lg:py-24">
          <Reveal from="up">
            {/* 品牌标识 */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-lg shadow-brand-500/30">
                  <Heart className="h-10 w-10 text-white" aria-hidden="true" />
                </div>
                {/* 装饰性光晕 */}
                <div className="absolute -inset-2 -z-10 rounded-3xl bg-brand-200/40 blur-xl" aria-hidden="true" />
              </div>
            </div>

            <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-sm font-semibold uppercase tracking-wider text-brand-600 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" aria-hidden />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" aria-hidden />
              </span>
              {locale === 'zh' ? '关于 KinMate' : 'About KinMate'}
            </p>

            <h1 className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
              {t('title')}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-600 sm:text-xl">
              {t('body')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ───────────────── 品牌价值 + 愿景 ───────────────── */}
      <Section className="bg-cream/30">
        <div className="mx-auto max-w-3xl">
          {/* 品牌价值卡片 */}
          <RevealStagger className="grid gap-4 sm:grid-cols-3 lg:gap-5">
            {values.map(({ key, icon: Icon, label, desc }) => (
              <RevealItem key={key}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-ink-100 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:border-brand-200 hover:shadow-md">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand-50/60 blur-2xl transition-all duration-200 group-hover:bg-brand-100/60"
                  />
                  <div className="relative">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/20">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="font-semibold text-ink-900">{label}</p>
                    <p className="mt-1.5 text-sm leading-6 text-ink-500">{desc}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>

          {/* 团队愿景：brand 渐变面板 */}
          <Reveal from="up" delay={0.1}>
            <div className="relative mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 px-6 py-10 text-center text-white shadow-2xl shadow-brand-500/25 sm:mt-8 sm:px-12 sm:py-14">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/5 blur-3xl" aria-hidden />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-white/5 blur-3xl" aria-hidden />
              <div className="relative mx-auto max-w-2xl">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                  <Heart className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mt-5 text-lg font-medium leading-8 text-white/95 sm:text-xl">
                  {locale === 'zh'
                    ? '由一群相信技术可以让健康管理更简单的人打造'
                    : 'Built by people who believe technology can make health management simpler'}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
