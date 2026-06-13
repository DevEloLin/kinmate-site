// Poster 1 — Hero / 招牌（高密度版，v2 精修）。
//
// 1080×1920 portrait。Play Store / App Store hero banner 风格。
//
// 布局区段（1920px 高度从上到下）：
//   0–110px    顶部 nav 区（左 Logo + 名字 / 右 BETA + 评分）
//   130–500px  主标题区（hero title 96px + 副标题 22px + 3 个 feature pills）
//   500–1620px phone + 浮动卡片混合区
//                · 主 phone (width=440) 左下偏移，tilt -8°
//                · 副 phone (width=380) 右下偏移，tilt +6°
//                · 4 张浮动 UI 卡片错落在 phone 周围（避开手机正面）
//   1640–1820px 底部 CTA 区（商店徽章 + tagline + checks）
//
// 修复（vs v1）：
//   1. 副标题位置上移 + 限宽，不会被 phone 遮挡
//   2. Phones 往下挪 + 浮动卡片重新分布，互相不遮
//   3. "for the whole family" 改单色高对比绿（CSS background-clip text 在
//      Chrome headless 偶尔渲染异常，单色更稳）
//   4. 底部 CTA 区给足 180px 高度，pills 上移到主标题下方

import { MktHomeScreen, MktTrendsScreen } from '@/components/app-mockup/marketing-screens'
import { PhoneFrame } from '@/components/app-mockup/phone-frame'
import {
  Star, Heart, Activity, Pill, Sparkles, ShieldCheck,
  CheckCircle2, Lock,
} from 'lucide-react'

type Locale = 'en' | 'zh'

export function Poster1Hero({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh
    ? {
        chip: 'BETA · 公开测试',
        title1: '一处安静',
        title2: '装下整个家',
        sub: '文件 · 提醒 · 宠物档案。本地优先，AI 双语帮你读懂上传的文件。',
        cta1: '60 天免费试用',
        cta2: '本地优先 · 隐私第一',
        rating: '4.9 · 1,200+ 评价',
        pills: ['📄 文件归档', '⏰ 日常提醒', '🐾 宠物档案', '🌐 双语 AI'],
        store1: 'App Store',
        store2: 'Google Play',
        downloadOn: '下载于',
        getOn: '获取',
        floaters: [
          { icon: Pill,       label: '提醒 · 9:00',  sub: '本周 6 / 7 已完成', color: '#15803D' },
          { icon: Activity,   label: '指标趋势',     sub: '近 30 天稳定',     color: '#0EA5E9' },
          { icon: Sparkles,   label: 'AI 已就绪',    sub: '帮你读上传的文件', color: '#F59E0B' },
          { icon: ShieldCheck, label: '端到端加密',  sub: '只在你的网盘',     color: '#7C3AED' },
        ],
      }
    : {
        chip: 'BETA · OPEN TESTING',
        title1: 'One quiet place,',
        title2: 'for the whole family.',
        sub: 'Documents · reminders · pet records. Local-first, with bilingual AI to read what you upload.',
        cta1: '60-day free trial',
        cta2: 'Local-first · Private by design',
        rating: '4.9 · 1,200+ reviews',
        pills: ['📄 Document vault', '⏰ Daily reminders', '🐾 Pet records', '🌐 Bilingual AI'],
        store1: 'App Store',
        store2: 'Google Play',
        downloadOn: 'Download on the',
        getOn: 'Get it on',
        floaters: [
          { icon: Pill,       label: 'Reminder · 9:00',  sub: '6 / 7 done this week',  color: '#15803D' },
          { icon: Activity,   label: 'Tracking trend',   sub: 'Steady · 30 days',      color: '#0EA5E9' },
          { icon: Sparkles,   label: 'AI ready',         sub: 'Reads your uploads',    color: '#F59E0B' },
          { icon: ShieldCheck, label: 'End-to-end',      sub: 'Stays in your cloud',   color: '#7C3AED' },
        ],
      }

  return (
    <div
      className="relative h-screen w-screen overflow-hidden"
      style={{
        background:
          'linear-gradient(165deg, #ECFDF5 0%, #D1FAE5 35%, #BAE6FD 100%)',
        fontFamily: 'ui-sans-serif, -apple-system, "SF Pro Display", system-ui',
      }}
    >
      {/* ─── 背景装饰：渐变光斑 + 几何形 + 网格点 ─── */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl" style={{ background: '#15803D44' }} />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[680px] w-[680px] rounded-full opacity-50 blur-3xl" style={{ background: '#0EA5E944' }} />
      <div className="pointer-events-none absolute -bottom-48 left-1/4 h-[560px] w-[560px] rounded-full opacity-40 blur-3xl" style={{ background: '#F59E0B33' }} />

      {/* 装饰几何 */}
      <div className="pointer-events-none absolute right-24 top-36 h-28 w-28 rounded-[24px] border-2 opacity-25 rotate-12" style={{ borderColor: '#15803D' }} />
      <div className="pointer-events-none absolute left-20 top-[520px] h-20 w-20 rounded-full border-2 opacity-30" style={{ borderColor: '#0EA5E9' }} />
      <div className="pointer-events-none absolute right-32 top-[1500px] h-16 w-16 rounded-2xl opacity-25 rotate-45" style={{ background: '#F59E0B' }} />

      {/* 点阵纹理 */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0F172A 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* ────────────────────────── ZONE 1: 顶部 nav (0–110px) ────────────────────────── */}
      {/* 左上 Logo + 品牌名 */}
      <div className="absolute left-12 top-12 z-30 flex items-center gap-3">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg"
          style={{ background: 'linear-gradient(135deg, #15803D, #059669)' }}
        >
          <Heart className="h-9 w-9 text-white" fill="white" />
        </div>
        <div>
          <p className="text-3xl font-extrabold tracking-tight" style={{ color: '#0F172A' }}>
            KinMate
          </p>
          <p className="text-sm font-medium" style={{ color: '#475569' }}>
            {isZh ? '家庭记录工具' : 'Family record organizer'}
          </p>
        </div>
      </div>

      {/* 右上 BETA chip + 评分 */}
      <div className="absolute right-12 top-12 z-30 flex flex-col items-end gap-2.5">
        <span
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold uppercase shadow-md"
          style={{
            background: 'linear-gradient(90deg, #FF4D4D, #FF7A18)',
            color: 'white',
            letterSpacing: '0.14em',
          }}
        >
          {t.chip}
        </span>
        <div
          className="flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 shadow-sm backdrop-blur"
          style={{ border: '1px solid rgba(255,255,255,0.95)' }}
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="h-4 w-4" fill="#F59E0B" stroke="#F59E0B" />
          ))}
          <span className="ml-2 text-sm font-bold" style={{ color: '#0F172A' }}>
            {t.rating}
          </span>
        </div>
      </div>

      {/* ────────────────────── ZONE 2: 主标题区 (130–560px) ────────────────────── */}
      <div
        className="absolute left-1/2 z-20 -translate-x-1/2 text-center"
        style={{ top: '150px', maxWidth: '1000px', paddingLeft: '40px', paddingRight: '40px' }}
      >
        <h1
          className="font-extrabold"
          style={{
            fontSize: '88px',
            lineHeight: 0.98,
            letterSpacing: '-2.5px',
            color: '#0F172A',
          }}
        >
          {t.title1}
          <br />
          <span style={{ color: '#15803D' }}>{t.title2}</span>
        </h1>
        <p
          className="mx-auto mt-5 font-semibold"
          style={{
            fontSize: '24px',
            lineHeight: 1.4,
            color: '#1E293B',
            maxWidth: '820px',
          }}
        >
          {t.sub}
        </p>

        {/* feature pills 紧贴副标题下方（深色 chip 样式，跟浮动卡片视觉区分） */}
        <div className="mt-6 flex flex-wrap justify-center gap-2.5">
          {t.pills.map((p, i) => {
            const colors = ['#15803D', '#0EA5E9', '#F59E0B', '#7C3AED']
            return (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] font-bold shadow-md"
                style={{
                  background: colors[i % 4],
                  color: 'white',
                  transform: `rotate(${[-2, 1, -1, 2][i] || 0}deg)`,
                }}
              >
                {p}
              </span>
            )
          })}
        </div>
      </div>

      {/* ────────────────────── ZONE 3: phones + 浮动卡片 (580–1620px) ────────────────────── */}

      {/* 主 phone（左下，tilt -8°，缩小并下移） */}
      <div
        className="absolute z-10"
        style={{
          left: '70px',
          top: '760px',
          transform: 'rotate(-8deg)',
          filter: 'drop-shadow(0 30px 50px rgba(15,23,42,0.30))',
        }}
      >
        <PhoneFrame width={380}>
          <MktHomeScreen locale={locale} />
        </PhoneFrame>
      </div>

      {/* 副 phone（右下偏更低，tilt +6°） */}
      <div
        className="absolute z-10"
        style={{
          right: '60px',
          top: '940px',
          transform: 'rotate(6deg)',
          filter: 'drop-shadow(0 35px 55px rgba(15,23,42,0.32))',
        }}
      >
        <PhoneFrame width={350}>
          <MktTrendsScreen locale={locale} />
        </PhoneFrame>
      </div>

      {/* 浮动 UI 卡片 ×4（避开 phones 主体，落在空隙） */}
      {t.floaters.map((f, i) => {
        const positions: any = [
          { top: '780px',  right: '60px',  rotate: '5deg'  },  // 右上，副 phone 上方
          { top: '1380px', left: '60px',   rotate: '-5deg' },  // 左下，主 phone 下方
          { top: '1480px', right: '80px',  rotate: '4deg'  },  // 右下，副 phone 下方
          { top: '1140px', left: '440px',  rotate: '-3deg' },  // 中央两 phone 缝隙
        ][i]
        const Icon = f.icon
        return (
          <div
            key={i}
            className="absolute z-20 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur"
            style={{
              ...positions,
              border: '1.5px solid rgba(255,255,255,0.98)',
              transform: `rotate(${positions.rotate})`,
              maxWidth: '260px',
            }}
          >
            <div className="flex items-center gap-2.5">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: `${f.color}1A` }}
              >
                <Icon className="h-5 w-5" style={{ color: f.color }} />
              </span>
              <div className="leading-tight">
                <p className="text-[15px] font-bold" style={{ color: '#0F172A' }}>
                  {f.label}
                </p>
                <p className="text-xs font-medium" style={{ color: '#64748B' }}>
                  {f.sub}
                </p>
              </div>
            </div>
          </div>
        )
      })}

      {/* ────────────────────── ZONE 4: 底部 CTA (1640–1820px) ────────────────────── */}
      <div className="absolute inset-x-0 z-30 px-12" style={{ bottom: '60px' }}>
        {/* 商店徽章 */}
        <div className="mb-6 flex items-center justify-center gap-4">
          <div
            className="flex items-center gap-3 rounded-2xl px-6 py-3.5 shadow-xl"
            style={{ background: '#0F172A' }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
              <path d="M16.5 1.2c0 1.4-.6 2.7-1.5 3.6-1 1-2.3 1.7-3.6 1.6-.2-1.3.4-2.7 1.4-3.6 1-.9 2.4-1.5 3.7-1.6Zm4.4 16.5c-.7 1.6-1 2.3-1.9 3.7-1.2 1.9-2.9 4.3-5 4.3-1.9 0-2.4-1.2-4.9-1.2s-3.1 1.3-5 1.2c-2.1 0-3.7-2.1-4.9-4-3.4-5.3-3.7-11.6-1.6-14.9 1.5-2.4 3.8-3.7 6-3.7 2.2 0 3.6 1.2 5.4 1.2 1.8 0 2.8-1.2 5.4-1.2 2 0 4 1.1 5.5 3-4.8 2.6-4 9.4 0 11.6Z" />
            </svg>
            <div className="leading-tight">
              <p className="text-xs font-medium text-white/70">{t.downloadOn}</p>
              <p className="text-xl font-bold text-white">{t.store1}</p>
            </div>
          </div>
          <div
            className="flex items-center gap-3 rounded-2xl px-6 py-3.5 shadow-xl"
            style={{ background: '#0F172A' }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24">
              <path d="M3 2v20l11-10L3 2Z" fill="#34A853" />
              <path d="M3 2l11 10 4-3.6L5.5 1A2 2 0 0 0 3 2Z" fill="#FBBC04" />
              <path d="M3 22l11-10 4 3.6-12.5 7.5A2 2 0 0 1 3 22Z" fill="#EA4335" />
              <path d="M14 12l4-3.6 4.5 2.7c.8.5.8 1.7 0 2.2L18 15.6 14 12Z" fill="#4285F4" />
            </svg>
            <div className="leading-tight">
              <p className="text-xs font-medium text-white/70">{t.getOn}</p>
              <p className="text-xl font-bold text-white">{t.store2}</p>
            </div>
          </div>
        </div>

        {/* tagline */}
        <div className="flex items-center justify-center gap-8">
          <span className="inline-flex items-center gap-2 text-base font-bold" style={{ color: '#15803D' }}>
            <CheckCircle2 className="h-5 w-5" fill="#15803D" stroke="white" strokeWidth={1.5} />
            {t.cta1}
          </span>
          <span className="text-base font-medium" style={{ color: '#94A3B8' }}>·</span>
          <span className="inline-flex items-center gap-2 text-base font-bold" style={{ color: '#0EA5E9' }}>
            <Lock className="h-5 w-5" />
            {t.cta2}
          </span>
        </div>
      </div>
    </div>
  )
}
