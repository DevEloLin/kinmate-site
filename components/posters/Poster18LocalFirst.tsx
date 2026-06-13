// Poster 18 — Typography poster "Local · First."（组 F：纯文字海报，无 phone）。
// 杂志封面风格，巨型字 + 极简装饰 + 商店徽章。
import { Heart, Star, Lock, CheckCircle2 } from 'lucide-react'
type Locale = 'en' | 'zh'

export function Poster18LocalFirst({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh ? {
    chip: 'BETA · 公开测试',
    big1: '本地', big2: '优先',
    big3: '家人', big4: '优先',
    sub: '数据不上服务器。备份只到你的网盘。',
    sub2: '是承诺，也是设计。',
    pills: ['🔒 AES-256-GCM', '☁️ 你的网盘', '👁 我们读不到', '✓ 60 天试用'],
    rating: '4.9 · 1,200+', cta: '60 天免费试用',
    store1: 'App Store', store2: 'Google Play', downloadOn: '下载于', getOn: '获取',
  } : {
    chip: 'BETA · OPEN TESTING',
    big1: 'Local', big2: 'First.',
    big3: 'Family', big4: 'First.',
    sub: 'Data stays on your device. Backups land in your own cloud.',
    sub2: 'A promise. Also a design.',
    pills: ['🔒 AES-256-GCM', '☁️ Your cloud', '👁 We see zero', '✓ 60-day trial'],
    rating: '4.9 · 1,200+', cta: '60-day free trial',
    store1: 'App Store', store2: 'Google Play', downloadOn: 'Download on the', getOn: 'Get it on',
  }
  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: '#0F172A', fontFamily: 'ui-sans-serif, -apple-system, system-ui' }}>
      <div className="pointer-events-none absolute" style={{ top: 0, left: 0, width: '55%', height: '480px', background: 'linear-gradient(135deg, #15803D 0%, #059669 100%)' }} />
      <div className="pointer-events-none absolute" style={{ bottom: 0, right: 0, width: '45%', height: '420px', background: 'linear-gradient(45deg, #F59E0B 0%, #FCD34D 100%)' }} />
      <div className="absolute left-12 top-12 z-30 flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg"><Heart className="h-8 w-8" style={{ color: '#15803D' }} fill="#15803D" /></div>
        <p className="text-3xl font-extrabold text-white tracking-tight">KinMate</p>
      </div>
      <span className="absolute right-12 top-14 z-30 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase shadow-sm" style={{ background: 'white', color: '#0F172A', letterSpacing: '0.18em' }}>★ {t.rating}</span>

      {/* 巨型 typography */}
      <div className="absolute z-20" style={{ left: '60px', top: '180px' }}>
        <p className="font-black text-white" style={{ fontSize: '200px', lineHeight: 0.86, letterSpacing: '-10px' }}>{t.big1}</p>
        <p className="font-black" style={{ fontSize: '200px', lineHeight: 0.86, letterSpacing: '-10px', color: '#FCD34D' }}>{t.big2}</p>
      </div>
      <div className="absolute z-20 text-right" style={{ right: '60px', top: '660px' }}>
        <p className="font-black text-white" style={{ fontSize: '160px', lineHeight: 0.86, letterSpacing: '-8px' }}>{t.big3}</p>
        <p className="font-black" style={{ fontSize: '160px', lineHeight: 0.86, letterSpacing: '-8px', color: '#5EEAD4' }}>{t.big4}</p>
      </div>

      <div className="absolute z-20" style={{ left: '60px', top: '1080px', maxWidth: '700px' }}>
        <p className="text-3xl font-semibold" style={{ color: '#E2E8F0', lineHeight: 1.3 }}>{t.sub}</p>
        <p className="text-2xl font-bold mt-3" style={{ color: '#FCD34D' }}>{t.sub2}</p>
      </div>

      {/* pills */}
      <div className="absolute z-30 flex flex-wrap gap-2.5" style={{ left: '60px', bottom: '380px', maxWidth: '900px' }}>
        {t.pills.map((p, i) => (
          <span key={i} className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold" style={{ background: 'rgba(255,255,255,0.16)', color: 'white', border: '1.5px solid rgba(255,255,255,0.3)' }}>{p}</span>
        ))}
      </div>

      {/* 商店徽章 */}
      <div className="absolute z-30 flex items-center gap-4" style={{ left: '60px', bottom: '180px' }}>
        <div className="flex items-center gap-3 rounded-2xl px-6 py-3.5 shadow-xl" style={{ background: 'white' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#0F172A"><path d="M16.5 1.2c0 1.4-.6 2.7-1.5 3.6-1 1-2.3 1.7-3.6 1.6-.2-1.3.4-2.7 1.4-3.6 1-.9 2.4-1.5 3.7-1.6Zm4.4 16.5c-.7 1.6-1 2.3-1.9 3.7-1.2 1.9-2.9 4.3-5 4.3-1.9 0-2.4-1.2-4.9-1.2s-3.1 1.3-5 1.2c-2.1 0-3.7-2.1-4.9-4-3.4-5.3-3.7-11.6-1.6-14.9 1.5-2.4 3.8-3.7 6-3.7 2.2 0 3.6 1.2 5.4 1.2 1.8 0 2.8-1.2 5.4-1.2 2 0 4 1.1 5.5 3-4.8 2.6-4 9.4 0 11.6Z" /></svg>
          <div className="leading-tight"><p className="text-xs font-medium" style={{ color: '#64748B' }}>{t.downloadOn}</p><p className="text-xl font-bold" style={{ color: '#0F172A' }}>{t.store1}</p></div>
        </div>
        <div className="flex items-center gap-3 rounded-2xl px-6 py-3.5 shadow-xl" style={{ background: 'white' }}>
          <svg width="32" height="32" viewBox="0 0 24 24"><path d="M3 2v20l11-10L3 2Z" fill="#34A853" /><path d="M3 2l11 10 4-3.6L5.5 1A2 2 0 0 0 3 2Z" fill="#FBBC04" /><path d="M3 22l11-10 4 3.6-12.5 7.5A2 2 0 0 1 3 22Z" fill="#EA4335" /><path d="M14 12l4-3.6 4.5 2.7c.8.5.8 1.7 0 2.2L18 15.6 14 12Z" fill="#4285F4" /></svg>
          <div className="leading-tight"><p className="text-xs font-medium" style={{ color: '#64748B' }}>{t.getOn}</p><p className="text-xl font-bold" style={{ color: '#0F172A' }}>{t.store2}</p></div>
        </div>
      </div>
      <p className="absolute z-30 text-sm font-bold uppercase" style={{ right: '60px', bottom: '60px', color: '#94A3B8', letterSpacing: '0.16em' }}>{t.cta} · {t.chip}</p>
    </div>
  )
}
