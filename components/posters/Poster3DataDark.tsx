// Poster 3 v2 — Trends / 数据可视化（深色 hero，重做）。
//
// 风格独立点（vs P1/P2）：
//   · 全屏深色 #0F172A radial gradient（hero 但深色）
//   · 中央 1 个大 phone 显示 Trends UI（主视觉，不再是 prop）
//   · 周围浮动 4 个 metric chip（精致玻璃 morphism + glow border）
//   · 大背景 SVG 曲线作为环境氛围（不是主体）
//   · 衬线斜体大标题（区别于 P1 sans）
//   · 完整 hero 元素：logo + rating + store badges + CTA
//
// vs v1 改进：
//   · v1 phone 太小（0.7 倍角落），现在 phone 居中放大
//   · v1 SVG 曲线占主体，现在变成背景氛围层
//   · 加 KinMate logo + 5 星评分 + 商店徽章
//   · 标题更"故事性"（marketing 而不是数据陈述）

import { MktTrendsScreen } from '@/components/app-mockup/marketing-screens'
import { PhoneFrame } from '@/components/app-mockup/phone-frame'
import {
  Star, Heart, TrendingUp, TrendingDown, Minus, Activity, Sparkles,
} from 'lucide-react'

type Locale = 'en' | 'zh'

export function Poster3DataDark({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh
    ? {
        chip: 'BETA · 公开测试',
        title1: '一个数字',
        title2: '说不了',
        title3: '什么。',
        title4: '一条曲线，',
        title5: '说尽过去半年。',
        sub: '把每次上传的指标拼成 30 / 90 / 180 天的趋势线 —— 让眼睛替你判断方向。',
        rating: '4.9 · 1,200+ 评价',
        chips: ['📈 趋势线', '🎯 异常标注', '⏰ 多窗口', '✓ 仅供参考'],
        cta1: '60 天免费试用',
        cta2: '本地优先 · 隐私第一',
        store1: 'App Store', store2: 'Google Play',
        downloadOn: '下载于', getOn: '获取',
        metrics: [
          { label: '收缩压', value: '128', unit: 'mmHg', delta: '-4', dir: 'down', good: true },
          { label: '空腹血糖', value: '5.4', unit: 'mmol/L', delta: '稳定', dir: 'flat', good: true },
          { label: 'LDL',     value: '3.1',  unit: 'mmol/L', delta: '+0.2', dir: 'up',   good: false },
          { label: '步数 / 周', value: '38k', unit: 'steps', delta: '+12%', dir: 'up',   good: true },
        ],
      }
    : {
        chip: 'BETA · OPEN TESTING',
        title1: 'One number',
        title2: 'says nothing.',
        title3: 'A line',
        title4: 'tells your',
        title5: 'six-month story.',
        sub: 'Every value you upload becomes a 30 / 90 / 180-day trend — let your eyes see the direction.',
        rating: '4.9 · 1,200+ reviews',
        chips: ['📈 Trend lines', '🎯 Outliers flagged', '⏰ Multi-window', '✓ For reference'],
        cta1: '60-day free trial',
        cta2: 'Local-first · Private by design',
        store1: 'App Store', store2: 'Google Play',
        downloadOn: 'Download on the', getOn: 'Get it on',
        metrics: [
          { label: 'Systolic BP', value: '128', unit: 'mmHg',   delta: '-4',     dir: 'down', good: true  },
          { label: 'Fasting BS',  value: '5.4', unit: 'mmol/L', delta: 'steady', dir: 'flat', good: true  },
          { label: 'LDL',         value: '3.1', unit: 'mmol/L', delta: '+0.2',   dir: 'up',   good: false },
          { label: 'Steps / wk',  value: '38k', unit: 'steps',  delta: '+12%',   dir: 'up',   good: true  },
        ],
      }

  return (
    <div
      className="relative h-screen w-screen overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, #1E293B 0%, #0F172A 60%, #020617 100%)',
        fontFamily: 'ui-sans-serif, -apple-system, "SF Pro Display", system-ui',
      }}
    >
      {/* ─── 背景层：grid 网格 + 模糊光斑 ─── */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#0EA5E9 1px, transparent 1px), linear-gradient(90deg, #0EA5E9 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[480px] w-[480px] rounded-full opacity-25 blur-3xl" style={{ background: '#0EA5E9' }} />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[560px] w-[560px] rounded-full opacity-25 blur-3xl" style={{ background: '#F59E0B' }} />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl" style={{ background: '#5EEAD4' }} />

      {/* ─── 背景氛围 SVG 曲线（弱化、低不透明度） ─── */}
      <svg className="pointer-events-none absolute" style={{ left: '0', top: '600px', width: '100%', height: '500px', opacity: 0.18 }} viewBox="0 0 1080 500" preserveAspectRatio="none">
        <defs>
          <linearGradient id="bgLineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="50%" stopColor="#5EEAD4" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id="bgFillGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M 0 380 L 120 360 L 240 340 L 360 250 L 480 300 L 600 200 L 720 180 L 840 130 L 960 100 L 1080 70 L 1080 500 L 0 500 Z" fill="url(#bgFillGrad)" />
        <path d="M 0 380 L 120 360 L 240 340 L 360 250 L 480 300 L 600 200 L 720 180 L 840 130 L 960 100 L 1080 70" stroke="url(#bgLineGrad)" strokeWidth="5" fill="none" strokeLinejoin="round" strokeLinecap="round" />
      </svg>

      {/* ─── 顶部 nav：logo + rating / BETA ─── */}
      <div className="absolute left-12 top-12 z-30 flex items-center gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg" style={{ background: 'linear-gradient(135deg, #0EA5E9, #0284C7)' }}>
          <Heart className="h-9 w-9 text-white" fill="white" />
        </div>
        <div>
          <p className="text-3xl font-extrabold tracking-tight text-white">KinMate</p>
          <p className="text-sm font-medium text-white/60">{isZh ? '家庭记录工具' : 'Family record organizer'}</p>
        </div>
      </div>
      <div className="absolute right-12 top-12 z-30 flex flex-col items-end gap-2.5">
        <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold uppercase shadow-md" style={{ background: 'linear-gradient(90deg, #FF4D4D, #FF7A18)', color: 'white', letterSpacing: '0.14em' }}>{t.chip}</span>
        <div className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 shadow-sm" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
          {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4" fill="#FCD34D" stroke="#FCD34D" />)}
          <span className="ml-2 text-sm font-bold text-white">{t.rating}</span>
        </div>
      </div>

      {/* ─── 主标题（衬线斜体，hero 大字） ─── */}
      <div className="absolute left-1/2 z-20 -translate-x-1/2 text-center" style={{ top: '150px', maxWidth: '1000px', paddingLeft: '40px', paddingRight: '40px' }}>
        <h1 className="font-extrabold" style={{ fontFamily: 'ui-serif, Georgia, "Times New Roman", serif', fontSize: '88px', lineHeight: 0.98, letterSpacing: '-2.2px' }}>
          <span style={{ color: 'white' }}>{t.title1} </span>
          <span style={{ color: '#94A3B8', fontStyle: 'italic' }}>{t.title2}</span>
          <br />
          <span style={{ color: '#5EEAD4', fontStyle: 'italic' }}>{t.title3} </span>
          <span style={{ color: 'white' }}>{t.title4}</span>
          <br />
          <span style={{ color: '#F59E0B' }}>{t.title5}</span>
        </h1>
      </div>

      {/* ─── 主 phone（中央 hero，深色感） ─── */}
      <div className="absolute left-1/2 z-10 -translate-x-1/2" style={{ top: '660px', filter: 'drop-shadow(0 40px 80px rgba(14,165,233,0.4)) drop-shadow(0 20px 40px rgba(0,0,0,0.6))' }}>
        <PhoneFrame width={460} dark={true}>
          <MktTrendsScreen locale={locale} />
        </PhoneFrame>
      </div>

      {/* ─── 4 个 metric 浮卡（玻璃 morphism 风格） ─── */}
      {t.metrics.map((m, i) => {
        const positions: any = [
          { top: '740px',  left: '50px',  rotate: '-5deg' },
          { top: '880px',  right: '60px', rotate: '4deg'  },
          { top: '1240px', left: '60px',  rotate: '-3deg' },
          { top: '1340px', right: '70px', rotate: '5deg'  },
        ][i]
        const Arrow = m.dir === 'up' ? TrendingUp : m.dir === 'down' ? TrendingDown : Minus
        const color = m.good ? '#5EEAD4' : '#F59E0B'
        return (
          <div key={i} className="absolute z-20 rounded-2xl px-4 py-3 shadow-2xl backdrop-blur" style={{ ...positions, transform: `rotate(${positions.rotate})`, background: 'rgba(15,23,42,0.85)', border: `2px solid ${color}55`, boxShadow: `0 0 24px ${color}33, 0 20px 40px rgba(0,0,0,0.5)`, maxWidth: '230px' }}>
            <p className="text-[11px] font-bold uppercase" style={{ color: '#94A3B8', letterSpacing: '0.12em' }}>{m.label}</p>
            <div className="mt-1 flex items-baseline gap-1.5">
              <p className="text-3xl font-extrabold text-white" style={{ fontFeatureSettings: '"tnum"' }}>{m.value}</p>
              <p className="text-xs font-medium text-white/50">{m.unit}</p>
            </div>
            <div className="mt-1.5 flex items-center gap-1.5">
              <Arrow className="h-3.5 w-3.5" style={{ color }} />
              <span className="text-xs font-bold" style={{ color }}>{m.delta}</span>
            </div>
          </div>
        )
      })}

      {/* ─── 副标题（白色 chip） ─── */}
      <div className="absolute inset-x-0 z-30 px-12 text-center" style={{ top: '1480px' }}>
        <p className="mx-auto font-medium" style={{ fontSize: '20px', lineHeight: 1.4, color: '#94A3B8', maxWidth: '720px' }}>{t.sub}</p>
      </div>

      {/* ─── chips + CTA + 商店徽章 ─── */}
      <div className="absolute inset-x-0 z-30 px-12" style={{ bottom: '60px' }}>
        <div className="mb-5 flex flex-wrap justify-center gap-2.5">
          {t.chips.map((c, i) => {
            const colors = ['#0EA5E9', '#5EEAD4', '#F59E0B', '#7C3AED']
            return (
              <span key={i} className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] font-bold" style={{ background: `${colors[i%4]}22`, color: colors[i%4], border: `1.5px solid ${colors[i%4]}55`, transform: `rotate(${[-2,1,-1,2][i]||0}deg)` }}>{c}</span>
            )
          })}
        </div>
        <div className="mb-5 flex items-center justify-center gap-4">
          <div className="flex items-center gap-3 rounded-2xl px-6 py-3.5 shadow-xl" style={{ background: 'white' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#0F172A"><path d="M16.5 1.2c0 1.4-.6 2.7-1.5 3.6-1 1-2.3 1.7-3.6 1.6-.2-1.3.4-2.7 1.4-3.6 1-.9 2.4-1.5 3.7-1.6Zm4.4 16.5c-.7 1.6-1 2.3-1.9 3.7-1.2 1.9-2.9 4.3-5 4.3-1.9 0-2.4-1.2-4.9-1.2s-3.1 1.3-5 1.2c-2.1 0-3.7-2.1-4.9-4-3.4-5.3-3.7-11.6-1.6-14.9 1.5-2.4 3.8-3.7 6-3.7 2.2 0 3.6 1.2 5.4 1.2 1.8 0 2.8-1.2 5.4-1.2 2 0 4 1.1 5.5 3-4.8 2.6-4 9.4 0 11.6Z" /></svg>
            <div className="leading-tight"><p className="text-xs font-medium" style={{ color: '#64748B' }}>{t.downloadOn}</p><p className="text-xl font-bold" style={{ color: '#0F172A' }}>{t.store1}</p></div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl px-6 py-3.5 shadow-xl" style={{ background: 'white' }}>
            <svg width="32" height="32" viewBox="0 0 24 24"><path d="M3 2v20l11-10L3 2Z" fill="#34A853" /><path d="M3 2l11 10 4-3.6L5.5 1A2 2 0 0 0 3 2Z" fill="#FBBC04" /><path d="M3 22l11-10 4 3.6-12.5 7.5A2 2 0 0 1 3 22Z" fill="#EA4335" /><path d="M14 12l4-3.6 4.5 2.7c.8.5.8 1.7 0 2.2L18 15.6 14 12Z" fill="#4285F4" /></svg>
            <div className="leading-tight"><p className="text-xs font-medium" style={{ color: '#64748B' }}>{t.getOn}</p><p className="text-xl font-bold" style={{ color: '#0F172A' }}>{t.store2}</p></div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <span className="inline-flex items-center gap-2 text-base font-bold" style={{ color: '#5EEAD4' }}><Sparkles className="h-5 w-5" />{t.cta1}</span>
          <span className="text-base font-medium" style={{ color: '#475569' }}>·</span>
          <span className="inline-flex items-center gap-2 text-base font-bold" style={{ color: '#F59E0B' }}><Activity className="h-5 w-5" />{t.cta2}</span>
        </div>
      </div>
    </div>
  )
}
