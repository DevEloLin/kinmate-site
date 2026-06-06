// 关于我们页面（重设计版）。
// 目标：不只是“我们是谁”，而是“我们为什么存在、帮谁省时间、减少什么麻烦”。

import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Section, SectionHeading } from '@/components/section'
import { Reveal, RevealStagger, RevealItem, Floaty } from '@/components/motion'
import { Heart, Shield, Sparkles, Users, Clock3, Search, MessageSquareText, CloudCog } from 'lucide-react'
import clsx from 'clsx'

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('about')
  const zh = locale === 'zh'

  const valueCards = [
    {
      key: 'privacy',
      icon: Shield,
      label: zh ? '隐私优先' : 'Privacy first',
      desc: zh ? '默认本地保存，只在你选择时分享' : 'Local by default, shared only when you decide',
    },
    {
      key: 'clarity',
      icon: Sparkles,
      label: zh ? '更容易看懂' : 'Clarity first',
      desc: zh ? '把复杂信息变成能马上行动的内容' : 'Turn complex health info into something actionable',
    },
    {
      key: 'family',
      icon: Users,
      label: zh ? '面向家庭' : 'Built for families',
      desc: zh ? '照顾、共享、提醒，都围绕家庭协作展开' : 'Care, sharing, and reminders designed for family coordination',
    },
  ]

  const outcomes = [
    {
      icon: Clock3,
      title: zh ? '少花时间找资料' : 'Spend less time searching',
      body: zh
        ? '报告、提醒、服药、宠物记录都集中在一个地方，临时看诊前不用再翻相册和聊天记录。'
        : 'Reports, reminders, medications, and pet records stay in one place, so you do not scramble through photos and chats before an appointment.',
    },
    {
      icon: MessageSquareText,
      title: zh ? '少重复解释同一件事' : 'Repeat yourself less',
      body: zh
        ? '家人、监护人、照护者看到的是同一条时间线，少了“我上次讲过了吗”的来回确认。'
        : 'Family members, guardians, and caregivers can see the same timeline, so you stop re-explaining the same details.',
    },
    {
      icon: Search,
      title: zh ? '少在关键时刻手忙脚乱' : 'Stay calmer when it matters',
      body: zh
        ? '平安打卡、提醒、AI 解读和家庭共享会在合适的时间出现，不把你拖进更多管理负担。'
        : 'Check-ins, reminders, AI explanations, and family sharing show up when useful, without adding another layer of admin work.',
    },
    {
      icon: CloudCog,
      title: zh ? '少担心数据去哪了' : 'Worry less about where data lives',
      body: zh
        ? '默认本地优先，也支持你自己的云盘备份。你可以决定哪些内容留在设备，哪些内容共享。'
        : 'Local first, with optional backup to your own cloud. You decide what stays on device and what gets shared.',
    },
  ]

  const principles = [
    {
      key: 'practical',
      title: zh ? '实际' : 'Practical',
      body: zh
        ? '不做花哨但没用的功能，优先解决日常里最常见的麻烦。'
        : 'We avoid flashy features that do not help in daily life and focus on the most common pain points.',
    },
    {
      key: 'humble',
      title: zh ? '谦虚' : 'Humble',
      body: zh
        ? '我们不会假装自己已经替每个家庭想全了，产品还会继续听反馈和迭代。'
        : 'We do not pretend we have solved everything for every family; the product keeps evolving with feedback.',
    },
    {
      key: 'private',
      title: zh ? '私密' : 'Private',
      body: zh
        ? '健康记录是很私人的事，默认就应该尽量少暴露。'
        : 'Health records are personal, so the default should be to expose as little as possible.',
    },
    {
      key: 'family',
      title: zh ? '面向家庭' : 'Family-oriented',
      body: zh
        ? '我们希望它不是“另一个 App”，而是一个全家都能用的安静工具。'
        : 'We want this to feel less like another app and more like a calm tool the whole family can use.',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink-100">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.brand.100)_1px,transparent_0)] [background-size:32px_32px] opacity-50" />
          <div className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand-200/35 blur-3xl" />
          <div className="absolute -top-10 right-1/4 h-[20rem] w-[20rem] rounded-full bg-accent-400/20 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
          <Reveal from="up">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-600 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" aria-hidden />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" aria-hidden />
                </span>
                {zh ? '关于 KinMate' : 'About KinMate'}
              </p>

              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
                {t('title')}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600 sm:text-xl">
                {t('body')}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {valueCards.map(({ key, label }) => (
                  <span
                    key={key}
                    className="inline-flex items-center rounded-full border border-white/70 bg-white/75 px-4 py-2 text-sm font-medium text-ink-700 shadow-[0_10px_24px_rgba(15,23,42,0.05)] backdrop-blur-md"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal from="left" delay={0.12} className="relative">
            <div className="relative mx-auto max-w-md">
              <Floaty className="relative">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_18px_48px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-8">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-brand-200/30 blur-3xl" aria-hidden />
                  <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-accent-200/30 blur-3xl" aria-hidden />
                  <div className="relative space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/20">
                        <Heart className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-600/90">
                          {zh ? '我们在做什么' : 'What we are building'}
                        </p>
                        <p className="mt-1 text-sm text-ink-500">
                          {zh ? '一个安静、可靠、对家庭有用的健康工具' : 'A calm, reliable health tool that actually helps families'}
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
                          {zh ? '省下什么' : 'What it saves'}
                        </p>
                        <p className="mt-2 text-base font-semibold text-ink-900">
                          {zh ? '时间、重复沟通和临时翻找' : 'Time, repeated explanations, and last-minute searching'}
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
                          {zh ? '带来什么' : 'What it brings'}
                        </p>
                        <p className="mt-2 text-base font-semibold text-ink-900">
                          {zh ? '更清楚的记录、更轻的家务感' : 'Clearer records and less family admin'}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50/80 to-white/80 p-4">
                      <p className="text-sm leading-7 text-ink-600">
                        {zh
                          ? '我们希望 KinMate 像一个可靠的家庭健康底座：不抢戏，但你需要它的时候，它就在。'
                          : 'We want KinMate to feel like a dependable base layer for family health: quiet, not flashy, and there when you need it.'}
                      </p>
                    </div>
                  </div>
                </div>
              </Floaty>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What it helps with */}
      <Section className="bg-cream/30">
        <Reveal>
          <SectionHeading
            eyebrow={zh ? '它帮你解决什么' : 'What it helps with'}
            title={zh ? '把最常见的家庭麻烦，变得不那么麻烦' : 'Making the common family hassles less painful'}
            subtitle={
              zh
                ? '很多问题并不大，但它们会不断占用时间和注意力。KinMate 试着把这些碎片收拢起来。'
                : 'Most problems are not huge on their own, but they keep taking up time and attention. KinMate tries to pull those pieces together.'
            }
            center
          />
        </Reveal>
        <RevealStagger className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {outcomes.map(({ icon: Icon, title: itemTitle, body }) => (
            <RevealItem key={itemTitle}>
              <div className="group h-full rounded-[1.6rem] border border-white/70 bg-white/75 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.05)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200/70 hover:bg-white/90 hover:shadow-[0_18px_40px_rgba(21,128,61,0.08)]">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50/80 text-brand-600 transition-colors duration-200 group-hover:bg-brand-100">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="mt-4 text-base font-semibold text-ink-900">{itemTitle}</h2>
                <p className="mt-2 text-sm leading-6 text-ink-500">{body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      {/* Principles */}
      <Section className="border-t border-ink-100 bg-white">
        <Reveal>
          <SectionHeading
            eyebrow={zh ? '我们坚持什么' : 'What we stand for'}
            title={zh ? '少一点夸张，多一点可靠' : 'Less hype, more reliability'}
            subtitle={
              zh
                ? '这是一款和家庭日常有关的工具，所以我们更在意它是否清楚、是否私密、是否真的能减轻负担。'
                : 'This is a tool for everyday family life, so we care more about clarity, privacy, and whether it actually reduces the burden.'
            }
            center
          />
        </Reveal>
        <RevealStagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {principles.map(({ key, title: itemTitle, body }) => (
            <RevealItem key={key}>
              <div className="rounded-[1.6rem] border border-white/70 bg-white/75 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.05)] backdrop-blur-md">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600/90">
                  {itemTitle}
                </p>
                <p className="mt-3 text-sm leading-6 text-ink-500">{body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      {/* Closing */}
      <Section className="border-t border-ink-100 bg-cream/30">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 px-6 py-10 text-white shadow-2xl shadow-brand-500/25 backdrop-blur-md sm:px-10 sm:py-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/5 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-white/5 blur-3xl" aria-hidden />
            <div className="relative mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-sm">
                {zh ? '来自一个小团队' : 'From a small team'}
              </p>
              <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                {zh
                  ? '我们没有把 KinMate 做成“功能最多”的那一类，而是做成“最不麻烦”的那一类。'
                  : 'We are not trying to build the most feature-packed app. We are trying to build the least annoying one.'}
              </h2>
              <p className="mt-5 text-base leading-7 text-white/90 sm:text-lg">
                {zh
                  ? '如果它能帮一个家庭少找一次资料、少重复一句解释、少晚一点担心，这就值得继续做下去。'
                  : 'If it helps one family search a little less, repeat themselves a little less, and worry a little less, it is worth continuing.'}
              </p>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
