// Poster 12 — Privacy bento grid（组 D 同风格）。
// 复用 Poster 11 结构，主题切换 privacy 多面。
import { Heart, Lock, Cloud, Eye, Server, KeyRound, ShieldX, Star } from 'lucide-react'

type Locale = 'en' | 'zh'

export function Poster12PrivacyBento({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh ? {
    chip: 'BETA · 公开测试', title1: '隐私不是承诺，', title2: '是设计。',
    sub: '六个不能被忽略的事实 —— 关于你的数据归谁所有、存在哪里、谁能读到。',
    cta: '60 天免费试用', rating: '4.9 · 1,200+',
    cells: [
      { icon: Lock,      label: 'AES-256-GCM', sub: '端到端加密', color: '#7C3AED', big: true },
      { icon: KeyRound,  label: '密钥只在你', sub: '设备 / 助记词', color: '#15803D', big: false },
      { icon: Cloud,     label: '你的网盘',   sub: '可随时切换',   color: '#0EA5E9', big: false },
      { icon: ShieldX,   label: '零三方 SDK', sub: '无分析无崩溃',  color: '#DC2626', big: false },
      { icon: Eye,       label: '我们读不到', sub: '一行也不行',   color: '#F59E0B', big: false },
      { icon: Server,    label: '本地优先',   sub: '默认离线工作', color: '#0F172A', big: true },
    ],
  } : {
    chip: 'BETA · OPEN TESTING', title1: 'Privacy isn\'t', title2: 'a promise. A design.',
    sub: 'Six facts that cannot be hidden — about who owns your data, where it lives, who can read it.',
    cta: '60-day free trial', rating: '4.9 · 1,200+',
    cells: [
      { icon: Lock,     label: 'AES-256-GCM', sub: 'End-to-end',         color: '#7C3AED', big: true },
      { icon: KeyRound, label: 'Keys stay',   sub: 'On your device only', color: '#15803D', big: false },
      { icon: Cloud,    label: 'Your cloud',  sub: 'Switch anytime',     color: '#0EA5E9', big: false },
      { icon: ShieldX,  label: 'Zero 3rd-party', sub: 'No analytics SDKs', color: '#DC2626', big: false },
      { icon: Eye,      label: 'We see zero', sub: 'Not a byte',         color: '#F59E0B', big: false },
      { icon: Server,   label: 'Local-first', sub: 'Works offline',      color: '#0F172A', big: true },
    ],
  }
  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: 'linear-gradient(135deg, #F3F4F6 0%, #E0E7FF 100%)', fontFamily: 'ui-sans-serif, -apple-system, system-ui' }}>
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #0F172A 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
      <div className="absolute left-12 top-12 z-30 flex items-center gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg" style={{ background: 'linear-gradient(135deg, #7C3AED, #5B21B6)' }}><Heart className="h-9 w-9 text-white" fill="white" /></div>
        <div><p className="text-3xl font-extrabold tracking-tight" style={{ color: '#0F172A' }}>KinMate</p><p className="text-sm font-medium" style={{ color: '#475569' }}>{isZh ? '隐私优先' : 'Private by design'}</p></div>
      </div>
      <div className="absolute right-12 top-12 z-30 flex flex-col items-end gap-2.5">
        <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold uppercase shadow-md" style={{ background: 'linear-gradient(90deg, #FF4D4D, #FF7A18)', color: 'white', letterSpacing: '0.14em' }}>{t.chip}</span>
        <div className="flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 shadow-sm">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4" fill="#F59E0B" stroke="#F59E0B" />)}<span className="ml-2 text-sm font-bold" style={{ color: '#0F172A' }}>{t.rating}</span></div>
      </div>
      <div className="absolute left-1/2 z-20 -translate-x-1/2 text-center" style={{ top: '180px', maxWidth: '900px', paddingLeft: '40px', paddingRight: '40px' }}>
        <h1 className="font-extrabold" style={{ fontSize: '88px', lineHeight: 0.98, letterSpacing: '-2.5px', color: '#0F172A' }}>{t.title1}<br /><span style={{ color: '#7C3AED' }}>{t.title2}</span></h1>
        <p className="mx-auto mt-5 font-semibold" style={{ fontSize: '22px', lineHeight: 1.4, color: '#1E293B', maxWidth: '780px' }}>{t.sub}</p>
      </div>
      <div className="absolute z-10 grid" style={{ left: '60px', right: '60px', top: '600px', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(3, 280px)', gap: '24px' }}>
        {t.cells.map((c, i) => {
          const Icon = c.icon
          const span = c.big ? { gridColumn: 'span 2' } : {}
          return (
            <div key={i} className="relative overflow-hidden rounded-3xl shadow-xl" style={{ ...span, background: 'white', border: '2px solid rgba(255,255,255,0.95)' }}>
              <div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full opacity-25 blur-2xl" style={{ background: c.color }} />
              <div className="relative flex h-full flex-col justify-between p-7">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl" style={{ background: `${c.color}1A` }}>
                  <Icon className="h-9 w-9" style={{ color: c.color }} />
                </span>
                <div>
                  <p className="text-3xl font-extrabold" style={{ color: '#0F172A' }}>{c.label}</p>
                  <p className="text-base font-medium mt-1" style={{ color: c.color }}>{c.sub}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="absolute inset-x-0 z-30 px-12 text-center" style={{ bottom: '50px' }}>
        <p className="text-xl font-extrabold" style={{ color: '#5B21B6' }}>★ {t.cta} · KinMate</p>
      </div>
    </div>
  )
}
