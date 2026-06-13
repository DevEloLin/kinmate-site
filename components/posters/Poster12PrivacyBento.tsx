// Poster 12 v2 — Privacy Promise（极简白 + 中央大锁 + 6 trust stamps）。
import { Heart, Star, Lock, KeyRound, Cloud, EyeOff, ShieldCheck, Server } from 'lucide-react'
type Locale = 'en' | 'zh'

export function Poster12PrivacyBento({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh ? {
    chip: 'BETA · 公开测试',
    title1: '你的数据。', title2: '你的钥匙。',
    sub: '不是我们说的，是密码学说的 —— AES-256-GCM 端到端加密，密钥只在你设备。',
    rating: '4.9 · 1,200+',
    stamps: [
      { icon: Lock,        label: 'AES-256-GCM' },
      { icon: KeyRound,    label: '密钥只在你' },
      { icon: Cloud,       label: '你的网盘' },
      { icon: EyeOff,      label: '我们读不到' },
      { icon: ShieldCheck, label: '零第三方 SDK' },
      { icon: Server,      label: '本地优先' },
    ],
    cta: '60 天免费试用 · KinMate',
  } : {
    chip: 'BETA · OPEN TESTING',
    title1: 'Your data.', title2: 'Your keys.',
    sub: 'Not our promise — cryptography\'s. AES-256-GCM end-to-end, keys only on your device.',
    rating: '4.9 · 1,200+',
    stamps: [
      { icon: Lock,        label: 'AES-256-GCM' },
      { icon: KeyRound,    label: 'Keys stay yours' },
      { icon: Cloud,       label: 'Your own cloud' },
      { icon: EyeOff,      label: 'We see zero' },
      { icon: ShieldCheck, label: 'No 3rd-party SDKs' },
      { icon: Server,      label: 'Local-first' },
    ],
    cta: '60-day free trial · KinMate',
  }
  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: 'linear-gradient(165deg, #FFFFFF 0%, #F5F5F4 100%)', fontFamily: 'ui-sans-serif, -apple-system, system-ui' }}>
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      <div className="absolute left-12 top-12 z-30 flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black shadow-lg"><Heart className="h-8 w-8" style={{ color: '#FCD34D' }} fill="#FCD34D" /></div>
        <p className="text-3xl font-extrabold tracking-tight" style={{ color: '#0F172A' }}>KinMate</p>
      </div>
      <div className="absolute right-12 top-14 z-30 flex flex-col items-end gap-2.5">
        <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase shadow-md" style={{ background: '#0F172A', color: 'white', letterSpacing: '0.14em' }}>{t.chip}</span>
        <div className="flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 shadow-sm border border-black/10">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4" fill="#F59E0B" stroke="#F59E0B" />)}<span className="ml-2 text-sm font-bold" style={{ color: '#0F172A' }}>{t.rating}</span></div>
      </div>

      <div className="absolute left-1/2 z-20 -translate-x-1/2 text-center" style={{ top: '150px', maxWidth: '900px' }}>
        <h1 className="font-extrabold" style={{ fontFamily: 'ui-serif, Georgia, serif', fontSize: '100px', lineHeight: 0.96, letterSpacing: '-2.5px', color: '#0F172A' }}>{t.title1}<br /><span style={{ color: '#0F172A', fontStyle: 'italic' }}>{t.title2}</span></h1>
        <p className="mx-auto mt-5 font-medium" style={{ fontSize: '22px', lineHeight: 1.45, color: '#475569', maxWidth: '720px' }}>{t.sub}</p>
      </div>

      {/* 中央巨型 lock + glow */}
      <div className="absolute z-10 flex items-center justify-center" style={{ left: '50%', top: '60%', transform: 'translate(-50%, -50%)' }}>
        <div className="absolute h-[500px] w-[500px] rounded-full opacity-15 blur-3xl" style={{ background: '#0F172A' }} />
        <div className="relative flex h-[300px] w-[300px] items-center justify-center rounded-[64px] shadow-2xl" style={{ background: '#0F172A', border: '4px solid #FCD34D' }}>
          <Lock className="h-48 w-48" style={{ color: '#FCD34D' }} strokeWidth={1.6} />
        </div>
      </div>

      {/* 6 个 trust stamp 围绕（环形排布） */}
      {t.stamps.map((s, i) => {
        const angles = [-90, -30, 30, 90, 150, 210] // 6 个位置 (degrees from center, top = -90)
        const angle = angles[i] * Math.PI / 180
        const r = 360
        const cx = 50  // % from left
        const cy = 60  // % from top
        const offsetX = Math.cos(angle) * r
        const offsetY = Math.sin(angle) * r
        const Icon = s.icon
        return (
          <div key={i} className="absolute z-20 flex items-center gap-2.5 rounded-full bg-white px-5 py-3 shadow-2xl" style={{ left: `calc(${cx}% + ${offsetX}px)`, top: `calc(${cy}% + ${offsetY}px)`, transform: 'translate(-50%, -50%)', border: '2px solid #0F172A22' }}>
            <Icon className="h-5 w-5" style={{ color: '#0F172A' }} strokeWidth={2.2} />
            <p className="text-sm font-extrabold whitespace-nowrap" style={{ color: '#0F172A' }}>{s.label}</p>
          </div>
        )
      })}

      <div className="absolute inset-x-0 z-30 px-12 text-center" style={{ bottom: '60px' }}>
        <p className="text-xl font-extrabold" style={{ color: '#0F172A' }}>★ {t.cta}</p>
      </div>
    </div>
  )
}
