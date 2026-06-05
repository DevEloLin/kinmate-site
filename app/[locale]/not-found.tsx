// 404 页面
// UI/UX：友好的错误提示，清晰的返回路径

import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/routing'
import { Section } from '@/components/section'
import { Home, Search } from 'lucide-react'

export default async function NotFound() {
  // 尝试获取翻译，如果失败则使用默认英文
  let notFoundText = 'Page not found'
  let backText = 'Back to home'

  try {
    const t = await getTranslations('notFound')
    notFoundText = t('message')
    backText = t('backHome')
  } catch {
    // 如果翻译命名空间不存在，使用默认值
    // 这样即使 i18n 配置不完整也不会崩溃
  }

  return (
    <Section>
      <div className="mx-auto max-w-md text-center">
        {/* 图标 */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-ink-100">
          <Search className="h-8 w-8 text-ink-400" aria-hidden="true" />
        </div>

        {/* 错误码 */}
        <h1 className="text-7xl font-bold tracking-tight text-ink-200 sm:text-8xl">
          404
        </h1>

        {/* 错误信息 */}
        <p className="mt-4 text-lg text-ink-500">{notFoundText}</p>

        {/* 返回按钮 */}
        <Link
          href="/"
          className="mt-8 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3 text-sm font-medium text-white shadow-sm shadow-accent-500/25 transition-all duration-200 hover:bg-accent-600 hover:shadow-md hover:shadow-accent-500/30 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
        >
          <Home className="h-4 w-4" aria-hidden="true" />
          {backText}
        </Link>
      </div>
    </Section>
  )
}
