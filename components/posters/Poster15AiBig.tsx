// Poster 15 v2 — 异形 bento 7-cell（不规则拼图：1 大 + 2 中 + 4 小）。
import { Heart, Star, FileText, Users, PawPrint, Sparkles, ShieldCheck, Calendar, Cloud } from 'lucide-react'
type Locale = 'en' | 'zh'

export function Poster15AiBig({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh ? {
    chip: 'BETA · 公开测试',
    title1: '七张图，', title2: '一个家。',
    sub: '不论是谁、不论几只、不论几份文件 —— 都能装进同一处。',
    rating: '4.9 · 1,200+',
    cells: [
      { icon: Users, label: '一家人', big: 1, color: '#DC2626', sub: '父母 · 孩子 · 自己' },
      { icon: FileText, label: '47 份归档', big: 2, color: '#0EA5E9', sub: '自动按日期' },
      { icon: Sparkles, label: 'AI 帮你读', big: 2, color: '#15803D', sub: '双语 · 几秒' },
      { icon: PawPrint, label: '宠物', big: 0, color: '#F97316' },
      { icon: ShieldCheck, label: '加密', big: 0, color: '#7C3AED' },
      { icon: Calendar, label: '提醒', big: 0, color: '#F59E0B' },
      { icon: Cloud, label: '你的网盘', big: 0, color: '#0F172A' },
    ],
    cta: '60 天免费试用 · KinMate',
  } : {
    chip: 'BETA · OPEN TESTING',
    title1: 'Seven tiles,', title2: 'one family.',
    sub: 'No matter who, how many, how much — it all fits in one place.',
    rating: '4.9 · 1,200+',
    cells: [
      { icon: Users, label: 'Family', big: 1, color: '#DC2626', sub: 'Parents · kids · you' },
      { icon: FileText, label: '47 filed', big: 2, color: '#0EA5E9', sub: 'Auto by date' },
      { icon: Sparkles, label: 'AI reads', big: 2, color: '#15803D', sub: 'Bilingual · sec' },
      { icon: PawPrint, label: 'Pets', big: 0, color: '#F97316' },
      { icon: ShieldCheck, label: 'Encrypted', big: 0, color: '#7C3AED' },
      { icon: Calendar, label: 'Reminders', big: 0, color: '#F59E0B' },
      { icon: Cloud, label: 'Your cloud', big: 0, color: '#0F172A' },
    ],
    cta: '60-day free trial · KinMate',
  }
  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: 'linear-gradient(160deg, #FDF4FF 0%, #FAE8FF 50%, #F5D0FE 100%)', fontFamily: 'ui-sans-serif, -apple-system, system-ui' }}>
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[480px] w-[480px] rounded-full opacity-30 blur-3xl" style={{ background: '#7C3AED' }} />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[480px] w-[480px] rounded-full opacity-30 blur-3xl" style={{ background: '#DC2626' }} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #0F172A 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />

      <div className="absolute left-12 top-12 z-30 flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg" style={{ background: 'linear-gradient(135deg, #7C3AED, #5B21B6)' }}><Heart className="h-8 w-8 text-white" fill="white" /></div>
        <p className="text-3xl font-extrabold tracking-tight" style={{ color: '#4C1D95' }}>KinMate</p>
      </div>
      <div className="absolute right-12 top-14 z-30 flex flex-col items-end gap-2.5">
        <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase shadow-md" style={{ background: 'linear-gradient(90deg, #FF4D4D, #FF7A18)', color: 'white', letterSpacing: '0.14em' }}>{t.chip}</span>
        <div className="flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 shadow-sm">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4" fill="#F59E0B" stroke="#F59E0B" />)}<span className="ml-2 text-sm font-bold" style={{ color: '#0F172A' }}>{t.rating}</span></div>
      </div>

      <div className="absolute left-1/2 z-20 -translate-x-1/2 text-center" style={{ top: '150px', maxWidth: '900px' }}>
        <h1 className="font-extrabold" style={{ fontSize: '92px', lineHeight: 0.96, letterSpacing: '-2.5px', color: '#0F172A' }}>{t.title1}<br /><span style={{ color: '#7C3AED' }}>{t.title2}</span></h1>
        <p className="mx-auto mt-5 font-semibold" style={{ fontSize: '22px', lineHeight: 1.4, color: '#4C1D95', maxWidth: '760px' }}>{t.sub}</p>
      </div>

      {/* 异形 bento: 6×6 grid, 1 huge (4×4) + 2 medium (2×2) + 4 small (2×2 or 1×2) */}
      <div className="absolute z-10 grid" style={{ left: '60px', right: '60px', top: '620px', gridTemplateColumns: 'repeat(6, 1fr)', gridTemplateRows: 'repeat(6, 130px)', gap: '20px' }}>
        {t.cells.map((c, i) => {
          const Icon = c.icon
          // big=1: 4 cols × 4 rows; big=2: 2 cols × 3 rows; big=0: 2×2 small
          const span = c.big === 1 ? { gridColumn: 'span 4', gridRow: 'span 4' }
                     : c.big === 2 ? { gridColumn: 'span 2', gridRow: 'span 3' }
                     : { gridColumn: 'span 2', gridRow: 'span 2' }
          return (
            <div key={i} className="relative overflow-hidden rounded-3xl shadow-xl" style={{ ...span, background: 'white', border: '2px solid rgba(255,255,255,0.95)' }}>
              <div className="absolute -bottom-12 -right-12 rounded-full opacity-25 blur-2xl" style={{ background: c.color, width: c.big === 1 ? '240px' : '120px', height: c.big === 1 ? '240px' : '120px' }} />
              <div className="relative flex h-full flex-col justify-between p-5">
                <span className="flex items-center justify-center rounded-2xl" style={{ background: `${c.color}1A`, width: c.big === 1 ? '80px' : '56px', height: c.big === 1 ? '80px' : '56px' }}>
                  <Icon style={{ color: c.color, width: c.big === 1 ? '40px' : '28px', height: c.big === 1 ? '40px' : '28px' }} />
                </span>
                <div>
                  <p className="font-extrabold" style={{ color: '#0F172A', fontSize: c.big === 1 ? '40px' : c.big === 2 ? '24px' : '20px' }}>{c.label}</p>
                  {c.sub && <p className="text-sm font-medium mt-1" style={{ color: c.color }}>{c.sub}</p>}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="absolute inset-x-0 z-30 px-12 text-center" style={{ bottom: '40px' }}>
        <p className="text-xl font-extrabold" style={{ color: '#4C1D95' }}>★ {t.cta}</p>
      </div>
    </div>
  )
}
