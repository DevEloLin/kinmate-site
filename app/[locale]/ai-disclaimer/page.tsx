// AI 免责声明。链接到 App 内同名页 + 商店描述。
// 轻量打磨：渐变页头 + eyebrow，突出警告信息，Reveal 进场。

import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/section'
import { Reveal } from '@/components/motion'
import { Bot, AlertTriangle, Stethoscope } from 'lucide-react'

export default async function AiDisclaimerPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('aiDisclaimer')

  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        {/* 渐变页头 */}
        <Reveal from="up">
          <div className="relative overflow-hidden rounded-3xl border border-amber-200/70 bg-gradient-to-br from-amber-50 via-amber-50/60 to-white p-8 shadow-sm sm:p-10">
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-amber-200/30 blur-3xl" aria-hidden />
            <div className="relative">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600 shadow-sm">
                <Bot className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-amber-700">
                {locale === 'zh' ? 'AI 使用说明' : 'AI usage notice'}
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                {t('title')}
              </h1>
            </div>
          </div>
        </Reveal>

        {/* 主要警告 */}
        <Reveal from="up" delay={0.1}>
          <div className="mt-6 flex gap-4 rounded-2xl border border-amber-200 bg-amber-50/80 p-5 sm:gap-5 sm:p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100">
              <AlertTriangle className="h-5 w-5 text-amber-600" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-amber-900">
                {locale === 'zh' ? '重要提示' : 'Important Notice'}
              </p>
              <p className="mt-2 leading-7 text-amber-800">{t('body')}</p>
            </div>
          </div>
        </Reveal>

        {/* 医疗建议提示 */}
        <Reveal from="up" delay={0.15}>
          <div className="mt-4 flex gap-4 rounded-2xl border border-ink-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50">
              <Stethoscope className="h-5 w-5 text-brand-600" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-ink-900">
                {locale === 'zh' ? '寻求专业帮助' : 'Seek Professional Help'}
              </p>
              <p className="mt-2 leading-7 text-ink-600">
                {locale === 'zh'
                  ? 'AI 解读仅供参考，不能替代医生的专业诊断。如有健康问题，请咨询持证医疗专业人员。'
                  : 'AI explanations are for reference only and cannot replace professional medical diagnosis. For health concerns, please consult a licensed healthcare professional.'}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
