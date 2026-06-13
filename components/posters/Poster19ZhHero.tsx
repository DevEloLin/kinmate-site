// Poster 19 v2 — Family portrait + connection web（人物关系网，无 phone）。
import { Heart, Star, Sparkles } from 'lucide-react'
type Locale = 'en' | 'zh'

export function Poster19ZhHero({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh ? {
    chip: 'BETA · 公开测试',
    title1: '一条线，', title2: '一家人。',
    sub: '不论住在哪、用什么设备 —— 每个人有自己的一页，互相之间一根线连着。',
    rating: '4.9 · 1,200+',
    members: [
      { emoji: '👵', role: '外婆',   relation: 'top' },
      { emoji: '👴', role: '外公',   relation: 'top' },
      { emoji: '👩', role: '妈妈',   relation: 'mid' },
      { emoji: '👨', role: '爸爸',   relation: 'mid' },
      { emoji: '👧', role: '女儿',   relation: 'bot' },
      { emoji: '🐈', role: '咪咪',   relation: 'bot' },
    ],
    cta: '60 天免费试用 · KinMate',
  } : {
    chip: 'BETA · OPEN TESTING',
    title1: 'One thread,', title2: 'one family.',
    sub: 'Wherever you live, whatever device — everyone has a page, all connected by one thread.',
    rating: '4.9 · 1,200+',
    members: [
      { emoji: '👵', role: 'Grandma', relation: 'top' },
      { emoji: '👴', role: 'Grandpa', relation: 'top' },
      { emoji: '👩', role: 'Mom',     relation: 'mid' },
      { emoji: '👨', role: 'Dad',     relation: 'mid' },
      { emoji: '👧', role: 'Daughter',relation: 'bot' },
      { emoji: '🐈', role: 'Mimi',    relation: 'bot' },
    ],
    cta: '60-day free trial · KinMate',
  }
  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: 'linear-gradient(160deg, #FFFBEB 0%, #FEE2E2 50%, #FECDD3 100%)', fontFamily: 'ui-sans-serif, -apple-system, system-ui' }}>
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full opacity-40 blur-3xl" style={{ background: '#F43F5E' }} />
      <div className="pointer-events-none absolute -right-40 bottom-1/3 h-[480px] w-[480px] rounded-full opacity-30 blur-3xl" style={{ background: '#F59E0B' }} />

      <div className="absolute left-12 top-12 z-30 flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg" style={{ background: 'linear-gradient(135deg, #DC2626, #991B1B)' }}><Heart className="h-8 w-8 text-white" fill="white" /></div>
        <p className="text-3xl font-extrabold tracking-tight" style={{ color: '#7F1D1D' }}>KinMate</p>
      </div>
      <div className="absolute right-12 top-14 z-30 flex flex-col items-end gap-2.5">
        <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase shadow-md" style={{ background: 'linear-gradient(90deg, #FF4D4D, #FF7A18)', color: 'white', letterSpacing: '0.14em' }}>{t.chip}</span>
        <div className="flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 shadow-sm">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4" fill="#F59E0B" stroke="#F59E0B" />)}<span className="ml-2 text-sm font-bold" style={{ color: '#0F172A' }}>{t.rating}</span></div>
      </div>

      <div className="absolute left-1/2 z-20 -translate-x-1/2 text-center" style={{ top: '150px', maxWidth: '900px' }}>
        <h1 className="font-extrabold" style={{ fontSize: '92px', lineHeight: 0.96, letterSpacing: '-2.5px', color: '#7F1D1D' }}>{t.title1}<br /><span style={{ color: '#DC2626' }}>{t.title2}</span></h1>
        <p className="mx-auto mt-5 font-semibold" style={{ fontSize: '22px', lineHeight: 1.4, color: '#0F172A', maxWidth: '760px' }}>{t.sub}</p>
      </div>

      {/* 关系网 SVG (连线) */}
      <svg className="pointer-events-none absolute z-5" style={{ left: '0', top: '550px', width: '100%', height: '900px' }}>
        {/* 中央 KinMate logo 圆位置 */}
        {/* top row 2 nodes → center; mid 2 → center; bot 2 → center */}
        {[
          { x1: 270, y1: 220, x2: 540, y2: 540 },  // top-left → center
          { x1: 810, y1: 220, x2: 540, y2: 540 },  // top-right → center
          { x1: 170, y1: 540, x2: 540, y2: 540 },  // mid-left → center
          { x1: 910, y1: 540, x2: 540, y2: 540 },  // mid-right → center
          { x1: 270, y1: 860, x2: 540, y2: 540 },  // bot-left → center
          { x1: 810, y1: 860, x2: 540, y2: 540 },  // bot-right → center
        ].map((p, i) => (
          <line key={i} x1={p.x1} y1={p.y1} x2={p.x2} y2={p.y2} stroke="#DC2626" strokeWidth="3" strokeOpacity="0.35" strokeDasharray="8 6" />
        ))}
      </svg>

      {/* 中央 KinMate logo 圆（关系核心） */}
      <div className="absolute z-20 flex items-center justify-center" style={{ left: '50%', top: '1090px', transform: 'translate(-50%, -50%)' }}>
        <div className="flex h-32 w-32 items-center justify-center rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #DC2626, #991B1B)', border: '6px solid white' }}>
          <Heart className="h-16 w-16 text-white" fill="white" />
        </div>
      </div>

      {/* 6 个 family member 圆（围绕中央） */}
      {t.members.map((m, i) => {
        const positions = [
          { left: '270px',  top: '770px',  bg: '#F59E0B' },  // top-left grandma
          { right: '270px', top: '770px',  bg: '#92400E' },  // top-right grandpa
          { left: '170px',  top: '1090px', bg: '#DC2626' },  // mid-left mom
          { right: '170px', top: '1090px', bg: '#0EA5E9' },  // mid-right dad
          { left: '270px',  top: '1410px', bg: '#F43F5E' },  // bot-left daughter
          { right: '270px', top: '1410px', bg: '#F97316' },  // bot-right pet
        ][i] as any
        return (
          <div key={i} className="absolute z-20 flex flex-col items-center" style={{ ...positions, transform: 'translate(-50%, -50%)' }}>
            <div className="flex h-24 w-24 items-center justify-center rounded-full shadow-xl" style={{ background: positions.bg, border: '5px solid white', fontSize: '48px' }}>{m.emoji}</div>
            <p className="mt-3 px-3 py-1 rounded-full text-sm font-bold bg-white shadow-md" style={{ color: '#0F172A' }}>{m.role}</p>
          </div>
        )
      })}

      <div className="absolute inset-x-0 z-30 px-12 text-center" style={{ bottom: '50px' }}>
        <p className="text-xl font-extrabold" style={{ color: '#7F1D1D' }}>★ {t.cta}</p>
      </div>
    </div>
  )
}
