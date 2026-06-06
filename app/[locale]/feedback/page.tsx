// 反馈页。GitHub 快捷入口（Bug/功能/提问）+ 表单（预填 GitHub issue / mailto）+ 邮箱。
// 视觉对齐站点：网格+渐变光斑背景、Reveal 错位进场、rounded-3xl 卡片、focus-visible。

import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Section, SectionHeading } from '@/components/section'
import { Reveal, RevealStagger, RevealItem } from '@/components/motion'
import { FeedbackForm } from '@/components/feedback-form'
import { Bug, Lightbulb, HelpCircle, ArrowUpRight, ListChecks, Mail } from 'lucide-react'

const ISSUE_REPO = 'https://github.com/DevEloLin/kinmate-site'
const SUPPORT_EMAIL = 'devs.applabs@gmail.com'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'feedback' })
  return { title: t('metaTitle'), description: t('subtitle') }
}

export default async function FeedbackPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('feedback')

  // GitHub 快捷卡：分别指向预填的 new issue（带 label + template 占位标题）。
  const cards = [
    {
      key: 'bug',
      icon: Bug,
      title: t('github.bug'),
      desc: t('github.bugDesc'),
      href: `${ISSUE_REPO}/issues/new?labels=bug&title=${encodeURIComponent('[bug] ')}`,
    },
    {
      key: 'feature',
      icon: Lightbulb,
      title: t('github.feature'),
      desc: t('github.featureDesc'),
      href: `${ISSUE_REPO}/issues/new?labels=enhancement&title=${encodeURIComponent('[feature] ')}`,
    },
    {
      key: 'question',
      icon: HelpCircle,
      title: t('github.question'),
      desc: t('github.questionDesc'),
      href: `${ISSUE_REPO}/issues/new?labels=question&title=${encodeURIComponent('[question] ')}`,
    },
  ]

  return (
    <Section className="relative overflow-hidden bg-cream/30">
      {/* 背景：网格 + 渐变光斑（与全站一致） */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.brand.100)_1px,transparent_0)] [background-size:32px_32px] opacity-40" />
        <div className="absolute -top-32 left-1/4 h-[26rem] w-[26rem] rounded-full bg-brand-200/35 blur-3xl" />
        <div className="absolute -top-16 right-0 h-[22rem] w-[22rem] rounded-full bg-accent-400/15 blur-3xl" />
      </div>

      <Reveal>
        <SectionHeading
          center
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
        />
      </Reveal>

      {/* GitHub 快捷入口 */}
      <Reveal>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm font-medium text-ink-700">
          {t('github.title')}
          <span className="mt-1 block text-sm font-normal text-ink-500">
            {t('github.subtitle')}
          </span>
        </p>
      </Reveal>

      <RevealStagger
        className="mx-auto mt-6 grid max-w-4xl gap-4 md:grid-cols-3 lg:gap-5"
        gap={0.1}
      >
        {cards.map(({ key, icon: Icon, title, desc, href }) => (
          <RevealItem key={key}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
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
              <h3 className="mt-5 text-base font-semibold text-ink-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-500">{desc}</p>
            </a>
          </RevealItem>
        ))}
      </RevealStagger>

      <Reveal>
        <div className="mx-auto mt-5 max-w-4xl text-center">
          <a
            href={`${ISSUE_REPO}/issues`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
          >
            <ListChecks className="h-4 w-4" aria-hidden="true" />
            {t('github.browse')}
          </a>
        </div>
      </Reveal>

      {/* 表单 */}
      <Reveal>
        <div className="mx-auto mt-12 max-w-2xl">
          <FeedbackForm />
        </div>
      </Reveal>

      {/* 邮箱兜底 */}
      <Reveal>
        <div className="mx-auto mt-8 max-w-2xl rounded-3xl border border-ink-100 bg-white/70 p-6 text-center">
          <span className="flex h-11 w-11 mx-auto items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
            <Mail className="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-base font-semibold text-ink-900">{t('contact.title')}</h3>
          <p className="mt-1.5 text-sm leading-6 text-ink-500">{t('contact.desc')}</p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="mt-3 inline-block text-sm font-medium text-brand-600 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
          >
            {SUPPORT_EMAIL}
          </a>
        </div>
      </Reveal>
    </Section>
  )
}
