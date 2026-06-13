// Poster 5 — 全功能拼贴（组 A：多 phone 高密度）。
// 同 Poster 1 结构，但用 medication + emergency phone（不同 UI screens），换主题。
import { MktMedicationScreen, MktEmergencyScreen } from '@/components/app-mockup/marketing-screens'
import { PhoneFrame } from '@/components/app-mockup/phone-frame'
import { Star, Heart, Bell, Pill, FileText, Sparkles, ShieldAlert, CheckCircle2, Lock } from 'lucide-react'

type Locale = 'en' | 'zh'

export function Poster5Features({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh
    ? {
        chip: 'BETA · 公开测试',
        title1: '提醒、急救、',
        title2: '都在掌中。',
        sub: '每日提醒不打扰，紧急时锁屏可见。一个 app 装下日常和万一。',
        cta1: '60 天免费试用',
        cta2: '日常 + 万一 · 一处',
        rating: '4.9 · 1,200+ 评价',
        pills: ['⏰ 日常提醒', '🆘 急救卡', '📄 文件归档', '🌐 双语 AI'],
        store1: 'App Store', store2: 'Google Play',
        downloadOn: '下载于', getOn: '获取',
        floaters: [
          { icon: Pill,       label: '今日 6/7 已完成', sub: '日常物品提醒',     color: '#0EA5E9' },
          { icon: ShieldAlert, label: '急救卡就绪',      sub: '锁屏可见',         color: '#DC2626' },
          { icon: FileText,   label: '文件已归档',      sub: 'AI 双语摘要',      color: '#15803D' },
          { icon: Sparkles,   label: '本周亮点',        sub: '指标稳定',         color: '#F59E0B' },
        ],
      }
    : {
        chip: 'BETA · OPEN TESTING',
        title1: 'Reminders, ICE,',
        title2: 'in your pocket.',
        sub: 'Daily reminders that respect you, and an emergency card visible on the lock screen.',
        cta1: '60-day free trial',
        cta2: 'Daily · Emergency · One app',
        rating: '4.9 · 1,200+ reviews',
        pills: ['⏰ Daily reminders', '🆘 Emergency card', '📄 Document vault', '🌐 Bilingual AI'],
        store1: 'App Store', store2: 'Google Play',
        downloadOn: 'Download on the', getOn: 'Get it on',
        floaters: [
          { icon: Pill,       label: '6 / 7 today', sub: 'Routine reminders done', color: '#0EA5E9' },
          { icon: ShieldAlert, label: 'ICE ready',  sub: 'On lock screen',         color: '#DC2626' },
          { icon: FileText,   label: 'Filed',       sub: 'AI bilingual summary',   color: '#15803D' },
          { icon: Sparkles,   label: 'This week',   sub: 'All steady',             color: '#F59E0B' },
        ],
      }

  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: 'linear-gradient(165deg, #EFF6FF 0%, #BFDBFE 35%, #FED7AA 100%)', fontFamily: 'ui-sans-serif, -apple-system, "SF Pro Display", system-ui' }}>
      <div className="pointer-events-none absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl" style={{ background: '#0EA5E944' }} />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[680px] w-[680px] rounded-full opacity-50 blur-3xl" style={{ background: '#F59E0B44' }} />
      <div className="pointer-events-none absolute -bottom-48 left-1/4 h-[560px] w-[560px] rounded-full opacity-40 blur-3xl" style={{ background: '#DC262633' }} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #0F172A 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />

      <div className="absolute left-12 top-12 z-30 flex items-center gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg" style={{ background: 'linear-gradient(135deg, #0EA5E9, #0284C7)' }}>
          <Heart className="h-9 w-9 text-white" fill="white" />
        </div>
        <div>
          <p className="text-3xl font-extrabold tracking-tight" style={{ color: '#0F172A' }}>KinMate</p>
          <p className="text-sm font-medium" style={{ color: '#475569' }}>{isZh ? '家庭记录工具' : 'Family record organizer'}</p>
        </div>
      </div>
      <div className="absolute right-12 top-12 z-30 flex flex-col items-end gap-2.5">
        <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold uppercase shadow-md" style={{ background: 'linear-gradient(90deg, #FF4D4D, #FF7A18)', color: 'white', letterSpacing: '0.14em' }}>{t.chip}</span>
        <div className="flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 shadow-sm" style={{ border: '1px solid rgba(255,255,255,0.95)' }}>
          {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4" fill="#F59E0B" stroke="#F59E0B" />)}
          <span className="ml-2 text-sm font-bold" style={{ color: '#0F172A' }}>{t.rating}</span>
        </div>
      </div>

      <div className="absolute left-1/2 z-20 -translate-x-1/2 text-center" style={{ top: '150px', maxWidth: '1000px', paddingLeft: '40px', paddingRight: '40px' }}>
        <h1 className="font-extrabold" style={{ fontSize: '88px', lineHeight: 0.98, letterSpacing: '-2.5px', color: '#0F172A' }}>
          {t.title1}<br />
          <span style={{ color: '#0EA5E9' }}>{t.title2}</span>
        </h1>
        <p className="mx-auto mt-5 font-semibold" style={{ fontSize: '24px', lineHeight: 1.4, color: '#1E293B', maxWidth: '820px' }}>{t.sub}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2.5">
          {t.pills.map((p, i) => {
            const colors = ['#0EA5E9', '#DC2626', '#15803D', '#F59E0B']
            return <span key={i} className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] font-bold shadow-md" style={{ background: colors[i%4], color: 'white', transform: `rotate(${[-2,1,-1,2][i]||0}deg)` }}>{p}</span>
          })}
        </div>
      </div>

      <div className="absolute z-10" style={{ left: '70px', top: '760px', transform: 'rotate(-8deg)', filter: 'drop-shadow(0 30px 50px rgba(15,23,42,0.30))' }}>
        <PhoneFrame width={380}><MktMedicationScreen locale={locale} /></PhoneFrame>
      </div>
      <div className="absolute z-10" style={{ right: '60px', top: '940px', transform: 'rotate(6deg)', filter: 'drop-shadow(0 35px 55px rgba(15,23,42,0.32))' }}>
        <PhoneFrame width={350}><MktEmergencyScreen locale={locale} /></PhoneFrame>
      </div>

      {t.floaters.map((f, i) => {
        const positions: any = [
          { top: '780px',  right: '60px',  rotate: '5deg'  },
          { top: '1380px', left: '60px',   rotate: '-5deg' },
          { top: '1480px', right: '80px',  rotate: '4deg'  },
          { top: '1140px', left: '440px',  rotate: '-3deg' },
        ][i]
        const Icon = f.icon
        return (
          <div key={i} className="absolute z-20 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur" style={{ ...positions, border: '1.5px solid rgba(255,255,255,0.98)', transform: `rotate(${positions.rotate})`, maxWidth: '260px' }}>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: `${f.color}1A` }}><Icon className="h-5 w-5" style={{ color: f.color }} /></span>
              <div className="leading-tight">
                <p className="text-[15px] font-bold" style={{ color: '#0F172A' }}>{f.label}</p>
                <p className="text-xs font-medium" style={{ color: '#64748B' }}>{f.sub}</p>
              </div>
            </div>
          </div>
        )
      })}

      <div className="absolute inset-x-0 z-30 px-12" style={{ bottom: '60px' }}>
        <div className="mb-6 flex items-center justify-center gap-4">
          <div className="flex items-center gap-3 rounded-2xl px-6 py-3.5 shadow-xl" style={{ background: '#0F172A' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M16.5 1.2c0 1.4-.6 2.7-1.5 3.6-1 1-2.3 1.7-3.6 1.6-.2-1.3.4-2.7 1.4-3.6 1-.9 2.4-1.5 3.7-1.6Zm4.4 16.5c-.7 1.6-1 2.3-1.9 3.7-1.2 1.9-2.9 4.3-5 4.3-1.9 0-2.4-1.2-4.9-1.2s-3.1 1.3-5 1.2c-2.1 0-3.7-2.1-4.9-4-3.4-5.3-3.7-11.6-1.6-14.9 1.5-2.4 3.8-3.7 6-3.7 2.2 0 3.6 1.2 5.4 1.2 1.8 0 2.8-1.2 5.4-1.2 2 0 4 1.1 5.5 3-4.8 2.6-4 9.4 0 11.6Z" /></svg>
            <div className="leading-tight"><p className="text-xs font-medium text-white/70">{t.downloadOn}</p><p className="text-xl font-bold text-white">{t.store1}</p></div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl px-6 py-3.5 shadow-xl" style={{ background: '#0F172A' }}>
            <svg width="32" height="32" viewBox="0 0 24 24"><path d="M3 2v20l11-10L3 2Z" fill="#34A853" /><path d="M3 2l11 10 4-3.6L5.5 1A2 2 0 0 0 3 2Z" fill="#FBBC04" /><path d="M3 22l11-10 4 3.6-12.5 7.5A2 2 0 0 1 3 22Z" fill="#EA4335" /><path d="M14 12l4-3.6 4.5 2.7c.8.5.8 1.7 0 2.2L18 15.6 14 12Z" fill="#4285F4" /></svg>
            <div className="leading-tight"><p className="text-xs font-medium text-white/70">{t.getOn}</p><p className="text-xl font-bold text-white">{t.store2}</p></div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-8">
          <span className="inline-flex items-center gap-2 text-base font-bold" style={{ color: '#0EA5E9' }}><CheckCircle2 className="h-5 w-5" fill="#0EA5E9" stroke="white" strokeWidth={1.5} />{t.cta1}</span>
          <span className="text-base font-medium" style={{ color: '#94A3B8' }}>·</span>
          <span className="inline-flex items-center gap-2 text-base font-bold" style={{ color: '#DC2626' }}><Lock className="h-5 w-5" />{t.cta2}</span>
        </div>
      </div>
    </div>
  )
}
