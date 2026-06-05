// 联系我们页。卡片式联系方式，每类一张高级卡（brand 图标 + mailto 链接）。
// 视觉对齐首页：网格 + 渐变光斑背景、Reveal 错位进场、rounded-2xl/3xl、focus-visible、aria-hidden 装饰。

import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Section, SectionHeading } from '@/components/section'
import { Reveal, RevealStagger, RevealItem } from '@/components/motion'
import { HelpCircle, Shield, Newspaper, ArrowUpRight, type LucideIcon } from 'lucide-react'

type ContactKey = 'support' | 'privacy' | 'press'

interface ContactEntry {
  key: ContactKey
  icon: LucideIcon
  text: string
  label: { en: string; zh: string }
  email: string
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('contact')
  const isZh = locale === 'zh'

  const contacts: ContactEntry[] = [
    {
      key: 'support',
      icon: HelpCircle,
      text: t('support'),
      label: { en: 'Product Support', zh: '产品支持' },
      email: 'devs.applabs@gmail.com',
    },
    {
      key: 'privacy',
      icon: Shield,
      text: t('privacy'),
      label: { en: 'Privacy Concerns', zh: '隐私问题' },
      email: 'devs.applabs@gmail.com',
    },
    {
      key: 'press',
      icon: Newspaper,
      text: t('press'),
      label: { en: 'Press & Media', zh: '媒体合作' },
      email: 'devs.applabs@gmail.com',
    },
  ]

  return (
    <Section className="relative overflow-hidden bg-cream/30">
      {/* 背景：网格 + 渐变光斑（与首页一致） */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.brand.100)_1px,transparent_0)] [background-size:32px_32px] opacity-40" />
        <div className="absolute -top-32 left-1/4 h-[26rem] w-[26rem] rounded-full bg-brand-200/35 blur-3xl" />
        <div className="absolute -top-16 right-0 h-[22rem] w-[22rem] rounded-full bg-accent-400/15 blur-3xl" />
      </div>

      <Reveal>
        <SectionHeading
          center
          eyebrow={isZh ? '联系我们' : 'Get in touch'}
          title={t('title')}
          subtitle={isZh ? '我们很乐意听取您的反馈' : "We'd love to hear from you"}
        />
      </Reveal>

      <RevealStagger
        className="mx-auto mt-10 grid max-w-4xl gap-4 sm:mt-12 md:grid-cols-3 lg:gap-5"
        gap={0.1}
      >
        {contacts.map(({ key, icon: Icon, text, label, email }) => (
          <RevealItem key={key}>
            <a
              href={`mailto:${email}`}
              className="group flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-6 shadow-sm transition-all duration-200 hover:border-brand-200 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-200 group-hover:bg-brand-100">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <ArrowUpRight
                  className="h-5 w-5 text-ink-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-500"
                  aria-hidden="true"
                />
              </div>
              <h2 className="mt-5 text-base font-semibold text-ink-900">
                {isZh ? label.zh : label.en}
              </h2>
              <p className="mt-2 break-words text-sm leading-6 text-ink-500">{text}</p>
            </a>
          </RevealItem>
        ))}
      </RevealStagger>
    </Section>
  )
}
