// Poster 16 — 全屏巨型 phone (Trends)（组 E）。青绿渐变。
import { MktTrendsScreen } from '@/components/app-mockup/marketing-screens'
import { PhoneFrame } from '@/components/app-mockup/phone-frame'
import { Heart, Star, TrendingUp } from 'lucide-react'
type Locale = 'en' | 'zh'

export function Poster16TrendsBig({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh ? {
    title1: '看见的是数字。', title2: '理解的是方向。',
    sub: '30 / 90 / 180 天 —— 你的轨迹一目了然。',
    cta: '60 天免费试用', rating: '4.9 · 1,200+', chip: 'BETA · 公开测试',
    chips: ['📈 趋势线', '🎯 异常标注', '⏱️ 多窗口'],
  } : {
    title1: 'See the numbers.', title2: 'Feel the direction.',
    sub: '30 / 90 / 180 days — your trajectory at a glance.',
    cta: '60-day free trial', rating: '4.9 · 1,200+', chip: 'BETA · OPEN TESTING',
    chips: ['📈 Trend lines', '🎯 Outliers flagged', '⏱️ Multi-window'],
  }
  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: 'linear-gradient(160deg, #F0FDFA 0%, #99F6E4 60%, #5EEAD4 100%)', fontFamily: 'ui-sans-serif, -apple-system, system-ui' }}>
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[520px] w-[520px] rounded-full opacity-50 blur-3xl" style={{ background: '#0D9488' }} />
      <div className="pointer-events-none absolute -right-32 bottom-1/3 h-[480px] w-[480px] rounded-full opacity-40 blur-3xl" style={{ background: '#0EA5E9' }} />
      <div className="absolute left-12 top-12 z-30 flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg" style={{ background: 'linear-gradient(135deg, #0D9488, #0F766E)' }}><TrendingUp className="h-8 w-8 text-white" /></div>
        <p className="text-2xl font-extrabold tracking-tight" style={{ color: '#134E4A' }}>KinMate</p>
      </div>
      <div className="absolute right-12 top-12 z-30 flex flex-col items-end gap-2.5">
        <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold uppercase shadow-md" style={{ background: 'linear-gradient(90deg, #FF4D4D, #FF7A18)', color: 'white', letterSpacing: '0.14em' }}>{t.chip}</span>
        <div className="flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 shadow-sm">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4" fill="#F59E0B" stroke="#F59E0B" />)}<span className="ml-2 text-sm font-bold" style={{ color: '#0F172A' }}>{t.rating}</span></div>
      </div>
      <div className="absolute left-1/2 z-20 -translate-x-1/2 text-center" style={{ top: '140px', maxWidth: '900px' }}>
        <h1 className="font-extrabold" style={{ fontSize: '92px', lineHeight: 0.96, letterSpacing: '-2.5px', color: '#0F172A' }}>{t.title1}<br /><span style={{ color: '#0D9488' }}>{t.title2}</span></h1>
        <p className="mx-auto mt-4 font-semibold" style={{ fontSize: '24px', lineHeight: 1.4, color: '#134E4A', maxWidth: '720px' }}>{t.sub}</p>
      </div>
      <div className="absolute left-1/2 z-10 -translate-x-1/2" style={{ top: '450px', filter: 'drop-shadow(0 50px 80px rgba(19,78,74,0.4)) drop-shadow(0 25px 50px rgba(0,0,0,0.25))' }}>
        <PhoneFrame width={620}><MktTrendsScreen locale={locale} /></PhoneFrame>
      </div>
      <div className="absolute inset-x-0 z-30 px-12 text-center" style={{ bottom: '60px' }}>
        <div className="mb-4 flex flex-wrap justify-center gap-2.5">
          {t.chips.map((c, i) => {
            const colors = ['#0D9488', '#0EA5E9', '#5EEAD4']
            return <span key={i} className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] font-bold shadow-md" style={{ background: colors[i], color: 'white', transform: `rotate(${[-2, 1, -1][i]}deg)` }}>{c}</span>
          })}
        </div>
        <p className="text-xl font-extrabold" style={{ color: '#134E4A' }}><TrendingUp className="inline h-5 w-5 mr-1.5" />{t.cta}</p>
      </div>
    </div>
  )
}
