// Poster 7 — 急救卡反差（组 B：分屏反差 emoji）。
// 同 Poster 2 结构：左暗(慌乱 emoji) / 右明(急救卡 phone + QR/contact 浮卡)。
import { MktEmergencyScreen } from '@/components/app-mockup/marketing-screens'
import { PhoneFrame } from '@/components/app-mockup/phone-frame'
import { Heart, ArrowRight, ShieldAlert, QrCode, Phone, AlertTriangle } from 'lucide-react'

type Locale = 'en' | 'zh'

export function Poster7EmergencyContrast({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh
    ? {
        beforeLabel: '慌成一团',
        afterLabel: '锁屏即见',
        title1: '紧急时刻',
        title2: '让卡片',
        title3: '替你发声。',
        sub: '血型、过敏、紧急联系人 —— 锁屏可见，急救人员二维码即扫即得。',
        beforeDesc: '说不清 · 找不到',
        afterDesc: '一目了然 · 立即可用',
        chips: ['🔒 锁屏可见', '📱 二维码', '👥 紧急联系人', '✓ 个人档案'],
        cta: '60 天免费试用',
        brand: 'KinMate', brandSub: '家庭记录工具',
      }
    : {
        beforeLabel: 'PANIC',
        afterLabel: 'READY',
        title1: 'When seconds',
        title2: 'matter, your card',
        title3: 'speaks for you.',
        sub: 'Blood type, allergies, emergency contacts — visible on the lock screen, scannable as QR.',
        beforeDesc: 'Lost · Frantic',
        afterDesc: 'Visible · Instant',
        chips: ['🔒 Lock-screen', '📱 QR scan', '👥 ICE contacts', '✓ Personal card'],
        cta: '60-day free trial',
        brand: 'KinMate', brandSub: 'Family record organizer',
      }

  const emojis = ['🆘', '⚠️', '😰', '❓', '🚨', '📞', '🏥', '⏱️', '💔', '😱', '🔴', '⚡']

  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ fontFamily: 'ui-sans-serif, -apple-system, "SF Pro Display", system-ui' }}>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(115deg, #450A0A 0%, #7F1D1D 45%, #F1F5F9 55%, #E2E8F0 100%)' }} />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-[520px] w-[520px] rounded-full opacity-50 blur-3xl" style={{ background: '#DC262644' }} />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-[480px] w-[480px] rounded-full opacity-40 blur-3xl" style={{ background: '#0F172A33' }} />

      <div className="absolute left-12 top-12 z-30 flex items-center gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg" style={{ background: 'linear-gradient(135deg, #DC2626, #991B1B)' }}>
          <Heart className="h-9 w-9 text-white" fill="white" />
        </div>
        <div>
          <p className="text-3xl font-extrabold tracking-tight text-white">{t.brand}</p>
          <p className="text-sm font-medium text-white/70">{t.brandSub}</p>
        </div>
      </div>
      <span className="absolute right-12 top-14 z-30 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold uppercase shadow-md" style={{ background: 'linear-gradient(90deg, #FF4D4D, #FF7A18)', color: 'white', letterSpacing: '0.14em' }}>BETA · OPEN TESTING</span>

      <div className="absolute left-1/2 z-30 -translate-x-1/2 text-center" style={{ top: '170px', maxWidth: '960px' }}>
        <h1 className="font-extrabold" style={{ fontSize: '92px', lineHeight: 0.96, letterSpacing: '-2.6px' }}>
          <span style={{ color: 'white' }}>{t.title1}</span>
          <br />
          <span style={{ color: '#FCA5A5' }}>{t.title2}</span>
          <br />
          <span style={{ color: '#0F172A' }}>{t.title3}</span>
        </h1>
      </div>

      <div className="absolute z-10" style={{ left: '0', top: '460px', width: '50%', height: '1100px' }}>
        <div className="absolute z-20" style={{ left: '50px', top: '20px', transform: 'rotate(-4deg)' }}>
          <span className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-base font-extrabold uppercase shadow-xl" style={{ background: '#0F172A', color: '#FCA5A5', letterSpacing: '0.2em', border: '2px solid #FCA5A5' }}>⚠ {t.beforeLabel}</span>
        </div>
        {emojis.map((e, i) => {
          const positions = [
            { top: '120px', left: '60px',  size: '90px',  rot: -8  },
            { top: '180px', left: '220px', size: '70px',  rot: 12  },
            { top: '290px', left: '90px',  size: '110px', rot: -4  },
            { top: '400px', left: '260px', size: '80px',  rot: 8   },
            { top: '500px', left: '40px',  size: '95px',  rot: -12 },
            { top: '600px', left: '180px', size: '70px',  rot: 6   },
            { top: '690px', left: '60px',  size: '85px',  rot: -6  },
            { top: '780px', left: '250px', size: '75px',  rot: 14  },
            { top: '870px', left: '110px', size: '90px',  rot: -10 },
            { top: '960px', left: '270px', size: '65px',  rot: 8   },
            { top: '380px', left: '380px', size: '60px',  rot: -14 },
            { top: '880px', left: '380px', size: '55px',  rot: 16  },
          ][i] as any
          return <span key={i} className="absolute" style={{ ...positions, fontSize: positions.size, transform: `rotate(${positions.rot}deg)`, filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))', opacity: 0.85 }}>{e}</span>
        })}
        <div className="absolute" style={{ bottom: '40px', left: '40px', maxWidth: '380px' }}>
          <p className="text-2xl font-bold text-white/90" style={{ lineHeight: 1.3 }}>{t.beforeDesc}</p>
        </div>
      </div>

      <div className="absolute z-30 flex items-center justify-center" style={{ left: '50%', top: '1000px', transform: 'translate(-50%, -50%)' }}>
        <div className="flex h-32 w-32 items-center justify-center rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #DC2626, #991B1B)', border: '6px solid white' }}>
          <ShieldAlert className="h-16 w-16 text-white" />
        </div>
      </div>
      <div className="absolute z-20" style={{ left: '50%', top: '1080px', transform: 'translateX(-50%)' }}>
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-base font-extrabold shadow-lg" style={{ color: '#DC2626' }}>Emergency Ready</span>
      </div>

      <div className="absolute z-10" style={{ right: '0', top: '460px', width: '50%', height: '1100px' }}>
        <div className="absolute z-20" style={{ right: '50px', top: '20px', transform: 'rotate(4deg)' }}>
          <span className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-base font-extrabold uppercase shadow-xl" style={{ background: '#DC2626', color: 'white', letterSpacing: '0.2em' }}>✓ {t.afterLabel}</span>
        </div>
        <div className="absolute" style={{ right: '60px', top: '120px', filter: 'drop-shadow(0 35px 60px rgba(15,23,42,0.35))' }}>
          <PhoneFrame width={400}><MktEmergencyScreen locale={locale} /></PhoneFrame>
        </div>
        <div className="absolute z-30 rounded-2xl bg-white px-5 py-4 shadow-2xl" style={{ right: '110px', top: '380px', transform: 'rotate(-2deg)', border: '2px solid #DC2626', maxWidth: '320px' }}>
          <div className="mb-2 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" style={{ color: '#DC2626' }} fill="#DC2626" />
            <p className="text-sm font-extrabold uppercase" style={{ color: '#DC2626', letterSpacing: '0.14em' }}>{isZh ? '关键信息' : 'Critical Info'}</p>
          </div>
          <p className="text-base font-semibold leading-snug" style={{ color: '#0F172A' }}>
            {isZh ? '血型 O+ · 过敏：青霉素 · 长期物品 2 项' : 'Blood O+ · Allergy: Penicillin · 2 items'}
          </p>
        </div>
        <div className="absolute z-30 rounded-2xl bg-white px-4 py-3 shadow-xl" style={{ right: '40px', top: '700px', transform: 'rotate(3deg)', border: '1.5px solid #DC262633', maxWidth: '240px' }}>
          <div className="flex items-center gap-2">
            <QrCode className="h-5 w-5" style={{ color: '#DC2626' }} />
            <p className="text-sm font-bold" style={{ color: '#0F172A' }}>{isZh ? '二维码可扫' : 'QR scannable'}</p>
          </div>
          <p className="text-xs mt-1" style={{ color: '#64748B' }}>{isZh ? '急救人员秒识' : 'For first-responders'}</p>
        </div>
        <div className="absolute z-30 rounded-2xl bg-white px-4 py-3 shadow-xl" style={{ right: '220px', top: '880px', transform: 'rotate(-3deg)', border: '1.5px solid #F59E0B33', maxWidth: '240px' }}>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5" style={{ color: '#F59E0B' }} />
            <p className="text-sm font-bold" style={{ color: '#0F172A' }}>{isZh ? '紧急联系人' : 'ICE contacts'}</p>
          </div>
          <p className="text-xs mt-1" style={{ color: '#64748B' }}>{isZh ? '3 位 · 一键拨' : '3 listed · 1-tap'}</p>
        </div>
        <div className="absolute" style={{ bottom: '40px', right: '40px', maxWidth: '380px', textAlign: 'right' }}>
          <p className="text-2xl font-bold" style={{ color: '#7F1D1D', lineHeight: 1.3 }}>{t.afterDesc}</p>
        </div>
      </div>

      <div className="absolute inset-x-0 z-30 px-12 text-center" style={{ bottom: '180px' }}>
        <p className="mx-auto font-semibold" style={{ fontSize: '22px', lineHeight: 1.45, color: '#0F172A', maxWidth: '760px', background: 'rgba(255,255,255,0.92)', padding: '14px 28px', borderRadius: '999px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>{t.sub}</p>
      </div>
      <div className="absolute inset-x-0 z-30 px-12" style={{ bottom: '60px' }}>
        <div className="mb-5 flex flex-wrap justify-center gap-2.5">
          {t.chips.map((c, i) => {
            const colors = ['#DC2626', '#0EA5E9', '#F59E0B', '#15803D']
            return <span key={i} className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] font-bold shadow-md" style={{ background: colors[i%4], color: 'white', transform: `rotate(${[-2,1,-1,2][i]||0}deg)` }}>{c}</span>
          })}
        </div>
        <div className="flex items-center justify-center gap-3">
          <ArrowRight className="h-6 w-6" style={{ color: '#DC2626' }} />
          <span className="text-xl font-extrabold" style={{ color: '#DC2626' }}>{t.cta}</span>
        </div>
      </div>
    </div>
  )
}
