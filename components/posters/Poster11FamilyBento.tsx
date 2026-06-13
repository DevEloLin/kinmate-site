// Poster 11 v2 — 跨设备同步（3 device mockup：iPhone + iPad 风 + 同步连线）。
// 重新设计：完全不同主题、避审核词。
import { MktHomeScreen, MktTrendsScreen, MktFamilyDetailScreen } from '@/components/app-mockup/marketing-screens'
import { PhoneFrame } from '@/components/app-mockup/phone-frame'
import { Heart, Star, RefreshCw, Cloud, Smartphone } from 'lucide-react'
type Locale = 'en' | 'zh'

export function Poster11FamilyBento({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh ? {
    chip: 'BETA · 公开测试',
    title1: '一处归档，', title2: '处处看见。',
    sub: '换手机不丢、加平板自动同步、家人之间各看各的页 —— 你想到的，KinMate 都做到。',
    rating: '4.9 · 1,200+',
    syncLabels: ['你的手机', '你的平板', '家人手机'],
    bullets: ['新设备登录 · 一秒回来', '加密同步 · 只在你网盘', '家人独立 · 看到的不一样'],
    cta: '60 天免费试用 · KinMate',
  } : {
    chip: 'BETA · OPEN TESTING',
    title1: 'Filed once,', title2: 'seen everywhere.',
    sub: 'Switch phones, add an iPad, share with family — same vault, different angles, never lost.',
    rating: '4.9 · 1,200+',
    syncLabels: ['Your phone', 'Your tablet', 'Family phone'],
    bullets: ['Sign in on new device · everything\'s back', 'Encrypted sync · in your own cloud', 'Family sees only what you share'],
    cta: '60-day free trial · KinMate',
  }
  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: 'linear-gradient(160deg, #F0F9FF 0%, #E0F2FE 50%, #BAE6FD 100%)', fontFamily: 'ui-sans-serif, -apple-system, system-ui' }}>
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl" style={{ background: '#0EA5E9' }} />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[560px] w-[560px] rounded-full opacity-35 blur-3xl" style={{ background: '#15803D' }} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #0F172A 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />

      <div className="absolute left-12 top-12 z-30 flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg" style={{ background: 'linear-gradient(135deg, #0EA5E9, #0284C7)' }}><Heart className="h-8 w-8 text-white" fill="white" /></div>
        <p className="text-3xl font-extrabold tracking-tight" style={{ color: '#0C4A6E' }}>KinMate</p>
      </div>
      <div className="absolute right-12 top-14 z-30 flex flex-col items-end gap-2.5">
        <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase shadow-md" style={{ background: 'linear-gradient(90deg, #FF4D4D, #FF7A18)', color: 'white', letterSpacing: '0.14em' }}>{t.chip}</span>
        <div className="flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 shadow-sm">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4" fill="#F59E0B" stroke="#F59E0B" />)}<span className="ml-2 text-sm font-bold" style={{ color: '#0F172A' }}>{t.rating}</span></div>
      </div>

      <div className="absolute left-1/2 z-20 -translate-x-1/2 text-center" style={{ top: '160px', maxWidth: '960px' }}>
        <h1 className="font-extrabold" style={{ fontSize: '92px', lineHeight: 0.96, letterSpacing: '-2.5px', color: '#0C4A6E' }}>{t.title1}<br /><span style={{ color: '#0EA5E9' }}>{t.title2}</span></h1>
        <p className="mx-auto mt-5 font-semibold" style={{ fontSize: '22px', lineHeight: 1.4, color: '#0F172A', maxWidth: '780px' }}>{t.sub}</p>
      </div>

      {/* 3 个 device 模拟（左右错落） */}
      <div className="absolute z-10" style={{ left: '60px', top: '760px', transform: 'rotate(-10deg)', filter: 'drop-shadow(0 25px 50px rgba(12,74,110,0.4))' }}>
        <PhoneFrame width={340}><MktHomeScreen locale={locale} /></PhoneFrame>
        <p className="mt-4 text-center text-base font-bold" style={{ color: '#0C4A6E' }}>{t.syncLabels[0]}</p>
      </div>
      <div className="absolute z-10" style={{ left: '50%', top: '700px', transform: 'translateX(-50%)', filter: 'drop-shadow(0 35px 60px rgba(12,74,110,0.5))' }}>
        <PhoneFrame width={380}><MktTrendsScreen locale={locale} /></PhoneFrame>
        <p className="mt-4 text-center text-base font-bold" style={{ color: '#0C4A6E' }}>{t.syncLabels[1]}</p>
      </div>
      <div className="absolute z-10" style={{ right: '60px', top: '760px', transform: 'rotate(10deg)', filter: 'drop-shadow(0 25px 50px rgba(12,74,110,0.4))' }}>
        <PhoneFrame width={340}><MktFamilyDetailScreen locale={locale} /></PhoneFrame>
        <p className="mt-4 text-center text-base font-bold" style={{ color: '#0C4A6E' }}>{t.syncLabels[2]}</p>
      </div>

      {/* 中央同步 icon（连接 3 个 device） */}
      <div className="absolute z-20" style={{ left: '50%', top: '670px', transform: 'translateX(-50%)' }}>
        <div className="flex h-20 w-20 items-center justify-center rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #0EA5E9, #0284C7)', border: '4px solid white' }}><RefreshCw className="h-10 w-10 text-white" /></div>
      </div>

      {/* bullet stripe 横排 */}
      <div className="absolute inset-x-0 z-30 px-12 text-center" style={{ bottom: '110px' }}>
        <div className="mx-auto flex flex-wrap justify-center gap-3" style={{ maxWidth: '960px' }}>
          {t.bullets.map((b, i) => (
            <span key={i} className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2.5 text-base font-bold shadow-md" style={{ color: '#0F172A', border: '1.5px solid #0EA5E933' }}>
              <Cloud className="h-4 w-4" style={{ color: '#0EA5E9' }} />{b}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 z-30 px-12 text-center" style={{ bottom: '50px' }}>
        <p className="text-xl font-extrabold" style={{ color: '#0C4A6E' }}>★ {t.cta}</p>
      </div>
    </div>
  )
}
