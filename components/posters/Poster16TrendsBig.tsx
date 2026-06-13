// Poster 16 v2 — 极简 typography quote（一句话大字海报）。
import { Heart, Star } from 'lucide-react'
type Locale = 'en' | 'zh'

export function Poster16TrendsBig({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh ? {
    chip: 'BETA · 公开测试',
    quote: '关心',
    quote2: '不是',
    quote3: '一个动词。',
    quote4: '是',
    quote5: '一种安排。',
    attribution: 'KinMate 的产品哲学',
    sub: '把"记得"和"在意"分开。让 app 替你"记得"，你只需要"在意"。',
    rating: '4.9 · 1,200+',
    cta: '60 天免费试用 · KinMate',
  } : {
    chip: 'BETA · OPEN TESTING',
    quote: 'Care',
    quote2: 'isn\'t',
    quote3: 'a verb.',
    quote4: 'It\'s',
    quote5: 'a system.',
    attribution: '— KinMate product philosophy',
    sub: 'Separate "remembering" from "caring". Let the app remember; you focus on caring.',
    rating: '4.9 · 1,200+',
    cta: '60-day free trial · KinMate',
  }
  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: '#FAFAF9', fontFamily: 'ui-serif, Georgia, "Times New Roman", serif' }}>
      {/* 极简：仅一条对角线 + 一个角色块 */}
      <div className="pointer-events-none absolute" style={{ top: 0, left: 0, width: '6px', height: '100%', background: '#0F172A' }} />
      <div className="pointer-events-none absolute" style={{ bottom: 0, right: 0, width: '30%', height: '8px', background: '#F59E0B' }} />
      <div className="pointer-events-none absolute" style={{ top: 0, right: 0, width: '180px', height: '180px', background: '#0F172A' }} />

      <div className="absolute left-12 top-12 z-30 flex items-center gap-3">
        <Heart className="h-7 w-7" style={{ color: '#0F172A' }} fill="#0F172A" />
        <p className="text-2xl font-extrabold tracking-tight" style={{ color: '#0F172A', fontFamily: 'ui-sans-serif, system-ui' }}>KinMate</p>
      </div>
      <span className="absolute right-12 top-14 z-30 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase" style={{ background: '#FCD34D', color: '#0F172A', letterSpacing: '0.18em', fontFamily: 'ui-sans-serif, system-ui' }}>★ {t.rating}</span>

      {/* 巨型 quote — 多行斜体 */}
      <div className="absolute z-20" style={{ left: '60px', top: '260px', maxWidth: '960px' }}>
        <p className="font-black" style={{ fontSize: '220px', lineHeight: 0.84, letterSpacing: '-6px', color: '#0F172A' }}>{t.quote}</p>
        <p className="font-black mt-2" style={{ fontSize: '180px', lineHeight: 0.84, letterSpacing: '-4px', color: '#64748B', fontStyle: 'italic' }}>{t.quote2}</p>
        <p className="font-black mt-2" style={{ fontSize: '220px', lineHeight: 0.84, letterSpacing: '-6px', color: '#0F172A' }}>{t.quote3}</p>
      </div>

      <div className="absolute z-20 text-right" style={{ right: '60px', top: '1340px', maxWidth: '700px' }}>
        <p className="font-black" style={{ fontSize: '120px', lineHeight: 0.84, letterSpacing: '-4px', color: '#0F172A' }}>{t.quote4} <span style={{ color: '#F59E0B', fontStyle: 'italic' }}>{t.quote5}</span></p>
      </div>

      <div className="absolute inset-x-0 z-30 px-12" style={{ bottom: '120px', fontFamily: 'ui-sans-serif, system-ui' }}>
        <p className="text-base font-bold uppercase mb-3" style={{ color: '#64748B', letterSpacing: '0.18em' }}>{t.attribution}</p>
        <p className="text-2xl font-semibold" style={{ color: '#0F172A', maxWidth: '720px' }}>{t.sub}</p>
      </div>

      <div className="absolute inset-x-0 z-30 px-12" style={{ bottom: '50px', fontFamily: 'ui-sans-serif, system-ui' }}>
        <div className="flex items-center justify-between">
          <p className="text-base font-bold uppercase" style={{ color: '#0F172A', letterSpacing: '0.16em' }}>{t.cta}</p>
          <p className="text-base font-bold uppercase" style={{ color: '#F59E0B', letterSpacing: '0.16em' }}>{t.chip}</p>
        </div>
      </div>
    </div>
  )
}
