// Google Play 强制要求的"网页版账号删除入口"。
// App 内删除是首选路径；这页用于商店审核与已卸载用户。
// 打磨：渐变页头 + eyebrow，突出首选方案，Reveal 进场。

import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/section'
import { Reveal } from '@/components/motion'
import { Mail, Smartphone, Trash2, ArrowRight } from 'lucide-react'

export default async function DeleteAccountPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('delete')

  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        {/* 渐变页头 */}
        <Reveal from="up">
          <div className="relative overflow-hidden rounded-3xl border border-red-200/70 bg-gradient-to-br from-red-50 via-red-50/50 to-white p-8 shadow-sm sm:p-10">
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-red-200/30 blur-3xl" aria-hidden />
            <div className="relative">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600 shadow-sm">
                <Trash2 className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-red-600">
                {locale === 'zh' ? '账号删除' : 'Account deletion'}
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                {t('title')}
              </h1>
            </div>
          </div>
        </Reveal>

        {/* 首选方案：App 内删除 */}
        <Reveal from="up" delay={0.1}>
          <div className="mt-6 rounded-2xl border-2 border-brand-200 bg-brand-50/30 p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100">
                <Smartphone className="h-5 w-5 text-brand-600" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-brand-700">
                  {locale === 'zh' ? '推荐方式' : 'Recommended'}
                </p>
                <p className="mt-2 leading-7 text-ink-700">{t('body')}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-brand-600">
                  <span>{locale === 'zh' ? '设置' : 'Settings'}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                  <span>{locale === 'zh' ? '账号' : 'Account'}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                  <span>{locale === 'zh' ? '删除账号' : 'Delete Account'}</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 备选方案：邮件删除 */}
        <Reveal from="up" delay={0.15}>
          <div className="mt-4 rounded-2xl border border-ink-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink-100">
                <Mail className="h-5 w-5 text-ink-600" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-ink-500">
                  {locale === 'zh' ? '备选方式' : 'Alternative'}
                </p>
                <p className="mt-2 leading-7 text-ink-600">{t('fallback')}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
