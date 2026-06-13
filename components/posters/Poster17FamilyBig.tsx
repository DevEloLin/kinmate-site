// Poster 17 — 全屏巨型 phone (Family)（组 E）。粉红渐变。
import { MktFamilyDetailScreen } from '@/components/app-mockup/marketing-screens'
import { PhoneFrame } from '@/components/app-mockup/phone-frame'
import { Heart, Star, Users } from 'lucide-react'
type Locale = 'en' | 'zh'

export function Poster17FamilyBig({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh ? {
    title1: '关心一家人，', title2: '从一张档案开始。',
    sub: '父母、孩子、宠物 —— 每个人都有自己的一页，按你的方式共享。',
    cta: '60 天免费试用', rating: '4.9 · 1,200+', chip: 'BETA · 公开测试',
    chips: ['👤 个人档案', '👥 受控共享', '🐾 含宠物'],
  } : {
    title1: 'Care for family,', title2: 'one profile at a time.',
    sub: 'Parents, kids, pets — each gets a page, shared on your terms.',
    cta: '60-day free trial', rating: '4.9 · 1,200+', chip: 'BETA · OPEN TESTING',
    chips: ['👤 Profiles', '👥 Shared with care', '🐾 Pets included'],
  }
  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: 'linear-gradient(160deg, #FFF1F2 0%, #FECDD3 60%, #FDA4AF 100%)', fontFamily: 'ui-sans-serif, -apple-system, system-ui' }}>
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[520px] w-[520px] rounded-full opacity-50 blur-3xl" style={{ background: '#DC2626' }} />
      <div className="pointer-events-none absolute -right-32 bottom-1/3 h-[480px] w-[480px] rounded-full opacity-40 blur-3xl" style={{ background: '#F43F5E' }} />
      <div className="absolute left-12 top-12 z-30 flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg" style={{ background: 'linear-gradient(135deg, #DC2626, #991B1B)' }}><Heart className="h-8 w-8 text-white" fill="white" /></div>
        <p className="text-2xl font-extrabold tracking-tight" style={{ color: '#7F1D1D' }}>KinMate</p>
      </div>
      <div className="absolute right-12 top-12 z-30 flex flex-col items-end gap-2.5">
        <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold uppercase shadow-md" style={{ background: 'linear-gradient(90deg, #FF4D4D, #FF7A18)', color: 'white', letterSpacing: '0.14em' }}>{t.chip}</span>
        <div className="flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 shadow-sm">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4" fill="#F59E0B" stroke="#F59E0B" />)}<span className="ml-2 text-sm font-bold" style={{ color: '#0F172A' }}>{t.rating}</span></div>
      </div>
      <div className="absolute left-1/2 z-20 -translate-x-1/2 text-center" style={{ top: '140px', maxWidth: '900px' }}>
        <h1 className="font-extrabold" style={{ fontSize: '88px', lineHeight: 0.96, letterSpacing: '-2.5px', color: '#0F172A' }}>{t.title1}<br /><span style={{ color: '#DC2626' }}>{t.title2}</span></h1>
        <p className="mx-auto mt-4 font-semibold" style={{ fontSize: '24px', lineHeight: 1.4, color: '#7F1D1D', maxWidth: '740px' }}>{t.sub}</p>
      </div>
      <div className="absolute left-1/2 z-10 -translate-x-1/2" style={{ top: '450px', filter: 'drop-shadow(0 50px 80px rgba(127,29,29,0.4)) drop-shadow(0 25px 50px rgba(0,0,0,0.25))' }}>
        <PhoneFrame width={620}><MktFamilyDetailScreen locale={locale} /></PhoneFrame>
      </div>
      <div className="absolute inset-x-0 z-30 px-12 text-center" style={{ bottom: '60px' }}>
        <div className="mb-4 flex flex-wrap justify-center gap-2.5">
          {t.chips.map((c, i) => {
            const colors = ['#DC2626', '#F43F5E', '#F97316']
            return <span key={i} className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] font-bold shadow-md" style={{ background: colors[i], color: 'white', transform: `rotate(${[-2, 1, -1][i]}deg)` }}>{c}</span>
          })}
        </div>
        <p className="text-xl font-extrabold" style={{ color: '#7F1D1D' }}><Users className="inline h-5 w-5 mr-1.5" />{t.cta}</p>
      </div>
    </div>
  )
}
