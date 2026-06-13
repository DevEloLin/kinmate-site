// Poster 11 — Family bento grid（组 D：bento 网格拼图）。
// 多个小卡片拼成大格子（mood board / dashboard 风），无 phone 主体。
import { Heart, Users, FileText, ShieldCheck, Calendar, Sparkles, Pill, PawPrint, Star } from 'lucide-react'

type Locale = 'en' | 'zh'

export function Poster11FamilyBento({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh ? {
    chip: 'BETA · 公开测试', title1: '家的样子，', title2: '装得下。',
    sub: '父母、孩子、宠物、文件、提醒、急救卡 —— 每一格都对位每一种关怀。',
    cta: '60 天免费试用', rating: '4.9 · 1,200+',
    cells: [
      { icon: Users,    label: '6 个成员', sub: '4 人 + 2 宠物', color: '#15803D', big: true },
      { icon: FileText, label: '已归档 47 份', sub: 'AI 双语', color: '#0EA5E9', big: false },
      { icon: ShieldCheck, label: 'E2E 加密', sub: '只在你网盘', color: '#7C3AED', big: false },
      { icon: Calendar, label: '本周提醒', sub: '6/7 完成', color: '#F59E0B', big: false },
      { icon: PawPrint, label: '宠物 2 只', sub: '疫苗就绪', color: '#F97316', big: false },
      { icon: Sparkles, label: 'AI 已就绪', sub: '帮你读', color: '#DC2626', big: true },
    ],
  } : {
    chip: 'BETA · OPEN TESTING', title1: 'A home', title2: 'in one pocket.',
    sub: 'Parents, kids, pets, documents, reminders, ICE card — every cell maps to one kind of care.',
    cta: '60-day free trial', rating: '4.9 · 1,200+',
    cells: [
      { icon: Users,    label: '6 members', sub: '4 people + 2 pets', color: '#15803D', big: true },
      { icon: FileText, label: '47 filed',  sub: 'AI bilingual',      color: '#0EA5E9', big: false },
      { icon: ShieldCheck, label: 'E2E encrypted', sub: 'In your cloud', color: '#7C3AED', big: false },
      { icon: Calendar, label: 'This week', sub: '6/7 reminders done', color: '#F59E0B', big: false },
      { icon: PawPrint, label: '2 pets',    sub: 'Vaccines current',   color: '#F97316', big: false },
      { icon: Sparkles, label: 'AI ready',  sub: 'Reads your uploads', color: '#DC2626', big: true },
    ],
  }
  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFFBEB 0%, #FED7AA 100%)', fontFamily: 'ui-sans-serif, -apple-system, system-ui' }}>
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #0F172A 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
      <div className="absolute left-12 top-12 z-30 flex items-center gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg" style={{ background: 'linear-gradient(135deg, #15803D, #059669)' }}><Heart className="h-9 w-9 text-white" fill="white" /></div>
        <div><p className="text-3xl font-extrabold tracking-tight" style={{ color: '#0F172A' }}>KinMate</p><p className="text-sm font-medium" style={{ color: '#475569' }}>{isZh ? '家庭记录工具' : 'Family record organizer'}</p></div>
      </div>
      <div className="absolute right-12 top-12 z-30 flex flex-col items-end gap-2.5">
        <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold uppercase shadow-md" style={{ background: 'linear-gradient(90deg, #FF4D4D, #FF7A18)', color: 'white', letterSpacing: '0.14em' }}>{t.chip}</span>
        <div className="flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 shadow-sm">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4" fill="#F59E0B" stroke="#F59E0B" />)}<span className="ml-2 text-sm font-bold" style={{ color: '#0F172A' }}>{t.rating}</span></div>
      </div>
      <div className="absolute left-1/2 z-20 -translate-x-1/2 text-center" style={{ top: '180px', maxWidth: '900px', paddingLeft: '40px', paddingRight: '40px' }}>
        <h1 className="font-extrabold" style={{ fontSize: '92px', lineHeight: 0.98, letterSpacing: '-2.5px', color: '#0F172A' }}>{t.title1}<br /><span style={{ color: '#F97316' }}>{t.title2}</span></h1>
        <p className="mx-auto mt-5 font-semibold" style={{ fontSize: '22px', lineHeight: 1.4, color: '#1E293B', maxWidth: '760px' }}>{t.sub}</p>
      </div>
      {/* Bento grid 6 cells: 2 big (col-span-2) + 4 normal */}
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
        <p className="text-xl font-extrabold" style={{ color: '#7C2D12' }}>★ {t.cta} · KinMate</p>
      </div>
    </div>
  )
}
