'use client'

// 反馈表单（客户端交互）。
// 落地站是静态导出、无后端，所以「提交」= 构造预填内容：
//   - 主按钮：打开预填的 GitHub issue（公开、可追踪）
//   - 次按钮：mailto 邮件（不用 GitHub 的用户）
// issue 落到公开仓 DevEloLin/kinmate-site。

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Bug, Lightbulb, HelpCircle, MessageSquare, Github, Mail } from 'lucide-react'

const ISSUE_REPO = 'https://github.com/DevEloLin/kinmate-site'
const SUPPORT_EMAIL = 'kinmate@elolin.com'

type Category = 'bug' | 'feature' | 'question' | 'other'

export function FeedbackForm() {
  const t = useTranslations('feedback.form')
  const [category, setCategory] = useState<Category>('bug')
  const [summary, setSummary] = useState('')
  const [details, setDetails] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)

  const cats: Array<{ value: Category; label: string; icon: typeof Bug }> = [
    { value: 'bug', label: t('catBug'), icon: Bug },
    { value: 'feature', label: t('catFeature'), icon: Lightbulb },
    { value: 'question', label: t('catQuestion'), icon: HelpCircle },
    { value: 'other', label: t('catOther'), icon: MessageSquare },
  ]

  const labelFor: Record<Category, string> = {
    bug: 'bug',
    feature: 'enhancement',
    question: 'question',
    other: '',
  }

  function buildBody(): string {
    const lines = [
      details.trim(),
      '',
      '---',
      `Category: ${category}`,
      email.trim() ? `Contact: ${email.trim()}` : '',
      'Submitted via kinmate.app feedback form',
    ].filter(Boolean)
    return lines.join('\n')
  }

  function validate(): boolean {
    const ok = summary.trim().length > 0 && details.trim().length > 0
    setError(!ok)
    return ok
  }

  function openGithub() {
    if (!validate()) return
    const params = new URLSearchParams({
      title: `[${category}] ${summary.trim()}`,
      body: buildBody(),
    })
    const label = labelFor[category]
    if (label) params.set('labels', label)
    window.open(`${ISSUE_REPO}/issues/new?${params.toString()}`, '_blank', 'noopener')
  }

  function openMail() {
    if (!validate()) return
    const subject = `[KinMate ${category}] ${summary.trim()}`
    const body = buildBody()
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  const fieldClass =
    'w-full rounded-2xl border border-ink-100 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-300 transition-colors focus:border-brand-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500'

  return (
    <div className="rounded-3xl border border-ink-100 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-lg font-semibold text-ink-900">{t('title')}</h2>
      <p className="mt-1.5 text-sm leading-6 text-ink-500">{t('subtitle')}</p>

      {/* 类型选择 */}
      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-ink-700">{t('category')}</legend>
        <div className="mt-2.5 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {cats.map(({ value, label, icon: Icon }) => {
            const active = category === value
            return (
              <button
                key={value}
                type="button"
                onClick={() => setCategory(value)}
                aria-pressed={active}
                className={`flex items-center justify-center gap-2 rounded-2xl border px-3 py-2.5 text-sm font-medium transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
                  active
                    ? 'border-brand-300 bg-brand-50 text-brand-700'
                    : 'border-ink-100 bg-white text-ink-500 hover:border-brand-200 hover:text-ink-700'
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </button>
            )
          })}
        </div>
      </fieldset>

      {/* 概要 */}
      <div className="mt-5">
        <label htmlFor="fb-summary" className="text-sm font-medium text-ink-700">
          {t('summary')}
        </label>
        <input
          id="fb-summary"
          type="text"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder={t('summaryPlaceholder')}
          className={`mt-1.5 ${fieldClass}`}
          maxLength={120}
        />
      </div>

      {/* 详情 */}
      <div className="mt-4">
        <label htmlFor="fb-details" className="text-sm font-medium text-ink-700">
          {t('details')}
        </label>
        <textarea
          id="fb-details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder={t('detailsPlaceholder')}
          rows={5}
          className={`mt-1.5 resize-y ${fieldClass}`}
          maxLength={4000}
        />
      </div>

      {/* 邮箱（选填） */}
      <div className="mt-4">
        <label htmlFor="fb-email" className="text-sm font-medium text-ink-700">
          {t('email')}
        </label>
        <input
          id="fb-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('emailPlaceholder')}
          className={`mt-1.5 ${fieldClass}`}
          autoComplete="email"
        />
      </div>

      {error && (
        <p role="alert" className="mt-3 text-sm text-rose-600">
          {t('required')}
        </p>
      )}

      <p className="mt-4 text-xs leading-5 text-ink-400">{t('privacyNote')}</p>

      {/* 提交 */}
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={openGithub}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          {t('submitGithub')}
        </button>
        <button
          type="button"
          onClick={openMail}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-ink-200 bg-white px-5 py-3 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-200 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          {t('submitEmail')}
        </button>
      </div>
    </div>
  )
}
