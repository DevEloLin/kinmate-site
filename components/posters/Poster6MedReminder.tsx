// Poster 6 — 用药 / 日常提醒（组 B：分屏反差 emoji）。
// 同 Poster 2 结构：左暗（凌乱 emoji） / 右明（清爽 phone + AI popup），主题切换。
import { MktMedicationScreen } from '@/components/app-mockup/marketing-screens'
import { PhoneFrame } from '@/components/app-mockup/phone-frame'
import { Sparkles, Heart, ArrowRight, Bell, CheckCircle2 } from 'lucide-react'

type Locale = 'en' | 'zh'

export function Poster6MedReminder({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh
    ? {
        beforeLabel: '老忘了',
        afterLabel: '每次都准',
        title1: '该吃药了？',
        title2: '让 KinMate 提醒。',
        title3: '温柔不打扰。',
        sub: '设好提醒，时间到温柔通知。整周完成率一目了然，连续记录变成 streak。',
        beforeDesc: '健忘 · 紊乱',
        afterDesc: '准时 · 连续',
        chips: ['⏰ 温柔提醒', '🔥 28 天 streak', '👨‍👩‍👧 多人共享', '✓ 仅供参考'],
        cta: '60 天免费试用',
        brand: 'KinMate', brandSub: '家庭记录工具',
      }
    : {
        beforeLabel: 'FORGOT AGAIN',
        afterLabel: 'ON TIME',
        title1: 'Reminder time?',
        title2: 'KinMate nudges,',
        title3: 'gently.',
        sub: 'Set it, get a quiet nudge. The week\'s done-rate at a glance, your streak builds.',
        beforeDesc: 'Forgetful · Chaotic',
        afterDesc: 'Steady · Streak',
        chips: ['⏰ Gentle nudges', '🔥 28-day streak', '👨‍👩‍👧 Shared', '✓ For reference'],
        cta: '60-day free trial',
        brand: 'KinMate', brandSub: 'Family record organizer',
      }

  const emojis = ['⏰', '💊', '📅', '❓', '😵‍💫', '⏳', '🔔', '🗓️', '💭', '📋', '⏱️', '😩']

  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ fontFamily: 'ui-sans-serif, -apple-system, "SF Pro Display", system-ui' }}>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(115deg, #1E1B4B 0%, #312E81 45%, #EFF6FF 55%, #DBEAFE 100%)' }} />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-[520px] w-[520px] rounded-full opacity-50 blur-3xl" style={{ background: '#0EA5E944' }} />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-[480px] w-[480px] rounded-full opacity-40 blur-3xl" style={{ background: '#15803D55' }} />

      <div className="absolute left-12 top-12 z-30 flex items-center gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg" style={{ background: 'linear-gradient(135deg, #0EA5E9, #0284C7)' }}>
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
          <span style={{ color: 'white' }}>{t.title1}</span>{' '}
          <span style={{ color: '#0EA5E9' }}>{t.title2}</span>
          <br />
          <span style={{ color: '#1E3A8A' }}>{t.title3}</span>
        </h1>
      </div>

      <div className="absolute z-10" style={{ left: '0', top: '460px', width: '50%', height: '1100px' }}>
        <div className="absolute z-20" style={{ left: '50px', top: '20px', transform: 'rotate(-4deg)' }}>
          <span className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-base font-extrabold uppercase shadow-xl" style={{ background: '#0F172A', color: '#FCD34D', letterSpacing: '0.2em', border: '2px solid #FCD34D' }}>⚠ {t.beforeLabel}</span>
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
        <div className="flex h-32 w-32 items-center justify-center rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #0EA5E9, #0284C7)', border: '6px solid white' }}>
          <Bell className="h-16 w-16 text-white" fill="white" />
        </div>
      </div>
      <div className="absolute z-20" style={{ left: '50%', top: '1080px', transform: 'translateX(-50%)' }}>
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-base font-extrabold shadow-lg" style={{ color: '#0EA5E9' }}>KinMate Nudge</span>
      </div>

      <div className="absolute z-10" style={{ right: '0', top: '460px', width: '50%', height: '1100px' }}>
        <div className="absolute z-20" style={{ right: '50px', top: '20px', transform: 'rotate(4deg)' }}>
          <span className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-base font-extrabold uppercase shadow-xl" style={{ background: '#0EA5E9', color: 'white', letterSpacing: '0.2em' }}>✓ {t.afterLabel}</span>
        </div>
        <div className="absolute" style={{ right: '60px', top: '120px', filter: 'drop-shadow(0 35px 60px rgba(15,23,42,0.35))' }}>
          <PhoneFrame width={400}><MktMedicationScreen locale={locale} /></PhoneFrame>
        </div>
        <div className="absolute z-30 rounded-2xl bg-white px-5 py-4 shadow-2xl" style={{ right: '110px', top: '380px', transform: 'rotate(-2deg)', border: '2px solid #0EA5E9', maxWidth: '320px' }}>
          <div className="mb-2 flex items-center gap-2">
            <Bell className="h-5 w-5" style={{ color: '#0EA5E9' }} fill="#0EA5E9" />
            <p className="text-sm font-extrabold uppercase" style={{ color: '#0EA5E9', letterSpacing: '0.14em' }}>{isZh ? '9:00 提醒' : 'Reminder · 9:00'}</p>
          </div>
          <p className="text-base font-semibold leading-snug" style={{ color: '#0F172A' }}>
            {isZh ? '该吃日常物品了 · 妈妈 1 个 / 自己 2 个' : 'Daily items · Mom 1 / You 2'}
          </p>
        </div>
        <div className="absolute z-30 rounded-2xl bg-white px-4 py-3 shadow-xl" style={{ right: '40px', top: '700px', transform: 'rotate(3deg)', border: '1.5px solid #15803D33', maxWidth: '240px' }}>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <p className="text-sm font-bold" style={{ color: '#0F172A' }}>{isZh ? '28 天 streak' : '28-day streak'}</p>
          </div>
          <p className="text-xs mt-1" style={{ color: '#64748B' }}>{isZh ? '连续完成' : 'No misses'}</p>
        </div>
        <div className="absolute z-30 rounded-2xl bg-white px-4 py-3 shadow-xl" style={{ right: '220px', top: '880px', transform: 'rotate(-3deg)', border: '1.5px solid #F59E0B33', maxWidth: '240px' }}>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5" style={{ color: '#F59E0B' }} fill="#F59E0B" stroke="white" strokeWidth={1.5} />
            <p className="text-sm font-bold" style={{ color: '#0F172A' }}>{isZh ? '本周 6 / 7' : 'This week 6 / 7'}</p>
          </div>
          <p className="text-xs mt-1" style={{ color: '#64748B' }}>{isZh ? '完成率 86%' : '86% done-rate'}</p>
        </div>
        <div className="absolute" style={{ bottom: '40px', right: '40px', maxWidth: '380px', textAlign: 'right' }}>
          <p className="text-2xl font-bold" style={{ color: '#1E3A8A', lineHeight: 1.3 }}>{t.afterDesc}</p>
        </div>
      </div>

      <div className="absolute inset-x-0 z-30 px-12 text-center" style={{ bottom: '180px' }}>
        <p className="mx-auto font-semibold" style={{ fontSize: '22px', lineHeight: 1.45, color: '#0F172A', maxWidth: '760px', background: 'rgba(255,255,255,0.92)', padding: '14px 28px', borderRadius: '999px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>{t.sub}</p>
      </div>
      <div className="absolute inset-x-0 z-30 px-12" style={{ bottom: '60px' }}>
        <div className="mb-5 flex flex-wrap justify-center gap-2.5">
          {t.chips.map((c, i) => {
            const colors = ['#0EA5E9', '#F59E0B', '#7C3AED', '#15803D']
            return <span key={i} className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] font-bold shadow-md" style={{ background: colors[i%4], color: 'white', transform: `rotate(${[-2,1,-1,2][i]||0}deg)` }}>{c}</span>
          })}
        </div>
        <div className="flex items-center justify-center gap-3">
          <ArrowRight className="h-6 w-6" style={{ color: '#0EA5E9' }} />
          <span className="text-xl font-extrabold" style={{ color: '#0EA5E9' }}>{t.cta}</span>
        </div>
      </div>
    </div>
  )
}
