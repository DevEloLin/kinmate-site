// Poster 20 v2 — 杂志封面 巨数字 + 评分（CTA finale，磁性大字）。
import { Heart, Star, Sparkles, CheckCircle2 } from 'lucide-react'
type Locale = 'en' | 'zh'

export function Poster20Testimonial({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh ? {
    chip: 'BETA · 公开测试',
    big1: '60', big2: '天',
    label1: '免费', label2: '试用',
    title: '把一家人，', title2: '装进口袋。',
    sub: '本地优先 · 双语 AI · 自带网盘 · 随时取消',
    rating: '4.9', reviews: '1,200+',
    quote: '"我换手机的时候本来挺紧张，结果一登录全自动回来了。" — 林女士',
    chips: ['App Store 4.9 ★', 'Play 4.8 ★', '无广告', '随时取消'],
    cta: '下载 KinMate · 今天就开始',
    store1: 'App Store', store2: 'Google Play',
  } : {
    chip: 'BETA · OPEN TESTING',
    big1: '60', big2: 'days',
    label1: 'free', label2: 'trial',
    title: 'Put a family', title2: 'in your pocket.',
    sub: 'Local-first · Bilingual AI · Your own cloud · Cancel anytime',
    rating: '4.9', reviews: '1,200+',
    quote: '"I switched phones — logged in, and everything was just there." — Sarah K.',
    chips: ['App Store 4.9 ★', 'Play 4.8 ★', 'Zero ads', 'Cancel anytime'],
    cta: 'Download KinMate · Start today',
    store1: 'App Store', store2: 'Google Play',
  }
  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: '#FCD34D', fontFamily: 'ui-sans-serif, -apple-system, system-ui' }}>
      {/* 杂志拼贴色块 */}
      <div className="pointer-events-none absolute" style={{ top: 0, right: 0, width: '55%', height: '380px', background: '#0F172A' }} />
      <div className="pointer-events-none absolute" style={{ bottom: 0, left: 0, width: '60%', height: '420px', background: '#15803D' }} />
      <div className="pointer-events-none absolute" style={{ top: '380px', left: 0, width: '100%', height: '4px', background: '#0F172A' }} />

      <div className="absolute left-12 top-12 z-30 flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg"><Heart className="h-8 w-8" style={{ color: '#DC2626' }} fill="#DC2626" /></div>
        <p className="text-3xl font-extrabold tracking-tight" style={{ color: '#0F172A' }}>KinMate</p>
      </div>
      <span className="absolute right-12 top-14 z-30 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase shadow-md" style={{ background: 'white', color: '#0F172A', letterSpacing: '0.18em' }}>{t.chip}</span>

      {/* 巨型 "60 days" 杂志封面 */}
      <div className="absolute z-20" style={{ left: '60px', top: '180px' }}>
        <p className="font-black" style={{ fontSize: '440px', lineHeight: 0.78, letterSpacing: '-22px', color: '#0F172A', textShadow: '12px 12px 0 #DC2626' }}>{t.big1}</p>
      </div>
      <div className="absolute z-20 text-right" style={{ right: '60px', top: '270px' }}>
        <p className="font-black text-white" style={{ fontSize: '140px', lineHeight: 0.86, letterSpacing: '-6px' }}>{t.big2}</p>
        <p className="font-black mt-2" style={{ fontSize: '80px', lineHeight: 0.86, letterSpacing: '-3px', color: '#FCD34D' }}>{t.label1}</p>
        <p className="font-black" style={{ fontSize: '80px', lineHeight: 0.86, letterSpacing: '-3px', color: '#FCD34D' }}>{t.label2}</p>
      </div>

      {/* 标题副 */}
      <div className="absolute z-20" style={{ left: '60px', top: '770px', maxWidth: '900px' }}>
        <h2 className="font-extrabold" style={{ fontSize: '72px', lineHeight: 1, letterSpacing: '-1.8px', color: '#0F172A' }}>{t.title}<br /><span style={{ color: 'white', WebkitTextStroke: '2px #0F172A' }}>{t.title2}</span></h2>
        <p className="mt-4 text-xl font-bold" style={{ color: '#0F172A' }}>{t.sub}</p>
      </div>

      {/* 评分大块 */}
      <div className="absolute z-20" style={{ right: '60px', top: '1020px', textAlign: 'right' }}>
        <p className="font-black" style={{ fontSize: '180px', lineHeight: 0.86, letterSpacing: '-8px', color: 'white' }}>{t.rating}</p>
        <div className="flex justify-end items-center gap-1 mt-2">{[1,2,3,4,5].map(i => <Star key={i} className="h-8 w-8" fill="#FCD34D" stroke="#FCD34D" />)}</div>
        <p className="text-xl font-extrabold mt-1" style={{ color: '#FCD34D' }}>{t.reviews}</p>
      </div>

      {/* Testimonial quote (左下) */}
      <div className="absolute z-20" style={{ left: '60px', top: '1180px', maxWidth: '600px' }}>
        <p className="text-lg font-bold italic" style={{ color: '#15803D', lineHeight: 1.4 }}>{t.quote}</p>
      </div>

      {/* trust chips */}
      <div className="absolute z-30 flex flex-wrap gap-2.5" style={{ left: '60px', bottom: '320px', maxWidth: '900px' }}>
        {t.chips.map((c, i) => (
          <span key={i} className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold shadow-md" style={{ background: 'white', color: '#0F172A' }}>
            <CheckCircle2 className="h-4 w-4" style={{ color: '#15803D' }} />{c}
          </span>
        ))}
      </div>

      {/* 商店徽章 */}
      <div className="absolute z-30 flex items-center gap-4" style={{ left: '60px', bottom: '150px' }}>
        <div className="flex items-center gap-3 rounded-2xl px-6 py-3.5 shadow-2xl" style={{ background: 'white' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#0F172A"><path d="M16.5 1.2c0 1.4-.6 2.7-1.5 3.6-1 1-2.3 1.7-3.6 1.6-.2-1.3.4-2.7 1.4-3.6 1-.9 2.4-1.5 3.7-1.6Zm4.4 16.5c-.7 1.6-1 2.3-1.9 3.7-1.2 1.9-2.9 4.3-5 4.3-1.9 0-2.4-1.2-4.9-1.2s-3.1 1.3-5 1.2c-2.1 0-3.7-2.1-4.9-4-3.4-5.3-3.7-11.6-1.6-14.9 1.5-2.4 3.8-3.7 6-3.7 2.2 0 3.6 1.2 5.4 1.2 1.8 0 2.8-1.2 5.4-1.2 2 0 4 1.1 5.5 3-4.8 2.6-4 9.4 0 11.6Z" /></svg>
          <div className="leading-tight"><p className="text-xs font-medium" style={{ color: '#64748B' }}>Download</p><p className="text-xl font-bold" style={{ color: '#0F172A' }}>{t.store1}</p></div>
        </div>
        <div className="flex items-center gap-3 rounded-2xl px-6 py-3.5 shadow-2xl" style={{ background: 'white' }}>
          <svg width="32" height="32" viewBox="0 0 24 24"><path d="M3 2v20l11-10L3 2Z" fill="#34A853" /><path d="M3 2l11 10 4-3.6L5.5 1A2 2 0 0 0 3 2Z" fill="#FBBC04" /><path d="M3 22l11-10 4 3.6-12.5 7.5A2 2 0 0 1 3 22Z" fill="#EA4335" /><path d="M14 12l4-3.6 4.5 2.7c.8.5.8 1.7 0 2.2L18 15.6 14 12Z" fill="#4285F4" /></svg>
          <div className="leading-tight"><p className="text-xs font-medium" style={{ color: '#64748B' }}>Get</p><p className="text-xl font-bold" style={{ color: '#0F172A' }}>{t.store2}</p></div>
        </div>
      </div>

      <p className="absolute z-30 text-right text-lg font-extrabold" style={{ right: '60px', bottom: '60px', color: 'white' }}>{t.cta} →</p>
    </div>
  )
}
