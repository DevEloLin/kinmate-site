// Poster 8 — BYOC 隐私大锁（组 C：深色 / 极简焦点）。
// 极简白米色背景 + 中央巨型 lock + 3 cloud logo 围绕 + 小 phone 角落。
import { MktBYOCScreen } from '@/components/app-mockup/marketing-screens'
import { PhoneFrame } from '@/components/app-mockup/phone-frame'
import { Lock, ShieldCheck, KeyRound } from 'lucide-react'

type Locale = 'en' | 'zh'

export function Poster8ByocLock({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh
    ? {
        eyebrow: '私密 · 自带网盘',
        title1: '你的数据。',
        title2: '你的网盘。',
        title3: '只你能读。',
        sub: 'AES-256-GCM 端到端加密。备份存进你自己的 iCloud / Google Drive / OneDrive，密钥只在你手里。',
        bullets: ['端到端加密 (AES-256-GCM)', '密钥只在你设备', '随时切换网盘', '我们读不到任何内容'],
        cta: '我们看不到一行',
        store: '60 天免费试用',
      }
    : {
        eyebrow: 'PRIVATE · BYOC',
        title1: 'Your data.',
        title2: 'Your cloud.',
        title3: 'Only you read it.',
        sub: 'AES-256-GCM end-to-end encrypted. Backups land in your own iCloud / Google Drive / OneDrive — keys only on your device.',
        bullets: ['End-to-end encrypted (AES-256-GCM)', 'Keys stay on your device', 'Switch clouds anytime', 'We cannot read a byte'],
        cta: 'We see zero',
        store: '60-day free trial',
      }

  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: 'linear-gradient(165deg, #FFFBEB 0%, #FEF3C7 60%, #FDE68A 100%)', fontFamily: 'ui-sans-serif, -apple-system, "SF Pro Display", system-ui' }}>
      {/* 极简装饰：仅 2 条细线 + 几何形 */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <div className="absolute left-12 top-12 z-30">
        <p className="text-2xl font-extrabold tracking-tight" style={{ color: '#78350F' }}>KinMate</p>
        <p className="text-sm font-bold mt-1" style={{ color: '#92400E', letterSpacing: '0.14em' }}>{t.eyebrow}</p>
      </div>
      <span className="absolute right-12 top-14 z-30 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase shadow-sm" style={{ background: '#0F172A', color: 'white', letterSpacing: '0.16em' }}>BETA</span>

      {/* 大标题（极简、衬线） */}
      <div className="absolute left-1/2 z-20 -translate-x-1/2 text-center" style={{ top: '140px', maxWidth: '900px', paddingLeft: '40px', paddingRight: '40px' }}>
        <h1 className="font-extrabold" style={{ fontFamily: 'ui-serif, Georgia, "Times New Roman", serif', fontSize: '88px', lineHeight: 0.98, letterSpacing: '-1.8px', color: '#0F172A' }}>
          {t.title1}<br />
          <span style={{ color: '#78350F', fontStyle: 'italic' }}>{t.title2}</span><br />
          <span style={{ color: '#92400E' }}>{t.title3}</span>
        </h1>
      </div>

      {/* 中央巨型 Lock + 周围 cloud icons */}
      <div className="absolute z-10 flex items-center justify-center" style={{ left: '50%', top: '54%', transform: 'translate(-50%, -50%)' }}>
        {/* 锁外圈光晕 */}
        <div className="absolute h-[520px] w-[520px] rounded-full opacity-30 blur-3xl" style={{ background: '#78350F' }} />
        <div className="absolute h-[400px] w-[400px] rounded-full" style={{ background: 'radial-gradient(circle, #FCD34D33 0%, transparent 70%)' }} />
        {/* 主 lock icon */}
        <div className="relative flex h-[280px] w-[280px] items-center justify-center rounded-[60px] shadow-2xl" style={{ background: 'linear-gradient(145deg, #0F172A, #1E293B)', border: '3px solid #FCD34D' }}>
          <Lock className="h-44 w-44" style={{ color: '#FCD34D' }} strokeWidth={1.8} />
        </div>
        {/* 3 个 cloud logo 围绕（上、左、右）*/}
        {/* Apple iCloud (top) */}
        <div className="absolute flex h-[100px] w-[100px] items-center justify-center rounded-3xl bg-white shadow-xl" style={{ top: '-180px', border: '2px solid #0F172A22' }}>
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#007AFF">
            <path d="M16.5 1.2c0 1.4-.6 2.7-1.5 3.6-1 1-2.3 1.7-3.6 1.6-.2-1.3.4-2.7 1.4-3.6 1-.9 2.4-1.5 3.7-1.6Zm4.4 16.5c-.7 1.6-1 2.3-1.9 3.7-1.2 1.9-2.9 4.3-5 4.3-1.9 0-2.4-1.2-4.9-1.2s-3.1 1.3-5 1.2c-2.1 0-3.7-2.1-4.9-4-3.4-5.3-3.7-11.6-1.6-14.9 1.5-2.4 3.8-3.7 6-3.7 2.2 0 3.6 1.2 5.4 1.2 1.8 0 2.8-1.2 5.4-1.2 2 0 4 1.1 5.5 3-4.8 2.6-4 9.4 0 11.6Z" />
          </svg>
        </div>
        {/* Google Drive (bottom-left) */}
        <div className="absolute flex h-[100px] w-[100px] items-center justify-center rounded-3xl bg-white shadow-xl" style={{ bottom: '-100px', left: '-220px', border: '2px solid #0F172A22' }}>
          <svg width="56" height="56" viewBox="0 0 24 24"><path d="M9 2 L15 2 L23 16 L17 22 L7 22 L1 16 Z" fill="#FBBC04" /><path d="M9 2 L15 2 L18 8 L6 8 Z" fill="#34A853" /><path d="M7 22 L17 22 L23 16 L13 16 Z" fill="#4285F4" /></svg>
        </div>
        {/* OneDrive (bottom-right) */}
        <div className="absolute flex h-[100px] w-[100px] items-center justify-center rounded-3xl bg-white shadow-xl" style={{ bottom: '-100px', right: '-220px', border: '2px solid #0F172A22' }}>
          <svg width="60" height="60" viewBox="0 0 24 24" fill="#0078D4">
            <path d="M14 7c-2.5 0-4.5 1.6-5.2 3.8C7.4 11 6 12.4 6 14c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3 0-1.5-1.1-2.7-2.5-2.9 0-2.3-1.9-4.1-4.5-4.1z" />
          </svg>
        </div>
      </div>

      {/* 4 个 bullet 卡片（错落左右） */}
      {t.bullets.map((b, i) => {
        const positions: any = [
          { top: '1240px', left: '60px',  rotate: '-3deg' },
          { top: '1240px', right: '60px', rotate: '3deg' },
          { top: '1360px', left: '120px', rotate: '2deg' },
          { top: '1360px', right: '120px', rotate: '-2deg' },
        ][i]
        return (
          <div key={i} className="absolute z-20 flex items-center gap-2.5 rounded-full bg-white/95 px-4 py-2.5 shadow-lg" style={{ ...positions, transform: `rotate(${positions.rotate})`, border: '1.5px solid #92400E22' }}>
            <ShieldCheck className="h-5 w-5" style={{ color: '#15803D' }} />
            <p className="text-sm font-bold whitespace-nowrap" style={{ color: '#0F172A' }}>{b}</p>
          </div>
        )
      })}

      {/* 右下角小 phone */}
      <div className="absolute z-10" style={{ right: '60px', bottom: '180px', transform: 'rotate(-6deg) scale(0.75)', filter: 'drop-shadow(0 20px 40px rgba(120,53,15,0.35))' }}>
        <PhoneFrame width={280}><MktBYOCScreen locale={locale} /></PhoneFrame>
      </div>

      {/* 底部 副标题 + CTA */}
      <div className="absolute inset-x-0 z-30 px-12 text-center" style={{ bottom: '60px' }}>
        <p className="mx-auto mb-4 font-medium" style={{ fontSize: '20px', lineHeight: 1.45, color: '#451A03', maxWidth: '720px' }}>{t.sub}</p>
        <div className="flex items-center justify-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-base font-extrabold shadow-md" style={{ background: '#0F172A', color: '#FCD34D' }}>
            <KeyRound className="h-5 w-5" />{t.cta}
          </span>
          <span className="inline-flex items-center gap-2 text-base font-bold" style={{ color: '#78350F' }}>· {t.store}</span>
        </div>
      </div>
    </div>
  )
}
