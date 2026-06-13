// Poster 14 v2 — Time chronicle（时间线视觉）。一年时间线 + 关键节点卡片。
import { Heart, Star, Calendar, FileText, Users, PawPrint, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react'
type Locale = 'en' | 'zh'

export function Poster14HomeBig({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh ? {
    chip: 'BETA · 公开测试',
    title1: '一年的故事，', title2: '一条时间线。',
    sub: '每张文件、每次提醒、每个家人 —— 自动按时间归档。下次需要时，一划就到。',
    rating: '4.9 · 1,200+',
    nodes: [
      { mon: '一月', icon: FileText, label: '上传第 1 份',  color: '#0EA5E9' },
      { mon: '三月', icon: Users,    label: '邀请家人',     color: '#15803D' },
      { mon: '五月', icon: PawPrint, label: '加入宠物',     color: '#F97316' },
      { mon: '八月', icon: Sparkles, label: 'AI 解读 12 份', color: '#7C3AED' },
      { mon: '十月', icon: ShieldCheck, label: '开启云盘加密', color: '#DC2626' },
      { mon: '十二月', icon: Calendar, label: '本年共 47 份',  color: '#F59E0B' },
    ],
    cta: '60 天免费试用 · KinMate',
  } : {
    chip: 'BETA · OPEN TESTING',
    title1: 'A year of you,', title2: 'one timeline.',
    sub: 'Every file, every reminder, every family member — auto-filed by date. Next time you need it, one swipe.',
    rating: '4.9 · 1,200+',
    nodes: [
      { mon: 'Jan', icon: FileText,    label: 'First upload',  color: '#0EA5E9' },
      { mon: 'Mar', icon: Users,       label: 'Family added',  color: '#15803D' },
      { mon: 'May', icon: PawPrint,    label: 'Pet joined',    color: '#F97316' },
      { mon: 'Aug', icon: Sparkles,    label: '12 AI summaries', color: '#7C3AED' },
      { mon: 'Oct', icon: ShieldCheck, label: 'Cloud backup on', color: '#DC2626' },
      { mon: 'Dec', icon: Calendar,    label: '47 filed total', color: '#F59E0B' },
    ],
    cta: '60-day free trial · KinMate',
  }
  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: 'linear-gradient(160deg, #FFFBEB 0%, #FEF3C7 50%, #FDE68A 100%)', fontFamily: 'ui-sans-serif, -apple-system, system-ui' }}>
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[480px] w-[480px] rounded-full opacity-40 blur-3xl" style={{ background: '#F59E0B' }} />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[480px] w-[480px] rounded-full opacity-30 blur-3xl" style={{ background: '#DC2626' }} />

      <div className="absolute left-12 top-12 z-30 flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg" style={{ background: 'linear-gradient(135deg, #92400E, #78350F)' }}><Calendar className="h-8 w-8 text-white" /></div>
        <p className="text-3xl font-extrabold tracking-tight" style={{ color: '#451A03' }}>KinMate</p>
      </div>
      <div className="absolute right-12 top-14 z-30 flex flex-col items-end gap-2.5">
        <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase shadow-md" style={{ background: '#451A03', color: '#FCD34D', letterSpacing: '0.14em' }}>{t.chip}</span>
        <div className="flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 shadow-sm">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4" fill="#F59E0B" stroke="#F59E0B" />)}<span className="ml-2 text-sm font-bold" style={{ color: '#0F172A' }}>{t.rating}</span></div>
      </div>

      <div className="absolute left-1/2 z-20 -translate-x-1/2 text-center" style={{ top: '150px', maxWidth: '900px' }}>
        <h1 className="font-extrabold" style={{ fontFamily: 'ui-serif, Georgia, serif', fontSize: '92px', lineHeight: 0.96, letterSpacing: '-2.2px', color: '#451A03' }}>{t.title1}<br /><span style={{ color: '#92400E', fontStyle: 'italic' }}>{t.title2}</span></h1>
        <p className="mx-auto mt-5 font-semibold" style={{ fontSize: '22px', lineHeight: 1.4, color: '#7C2D12', maxWidth: '760px' }}>{t.sub}</p>
      </div>

      {/* 竖向时间线：左侧竖线 + 6 个节点 cards 沿线分布 */}
      <div className="absolute z-10" style={{ left: '50%', top: '600px', transform: 'translateX(-50%)' }}>
        <div className="relative" style={{ width: '6px', height: '880px', background: 'linear-gradient(180deg, #FCD34D 0%, #F59E0B 50%, #DC2626 100%)', borderRadius: '999px' }} />
      </div>
      {t.nodes.map((n, i) => {
        const side = i % 2 === 0 ? 'left' : 'right'
        const top = 580 + i * 145
        const Icon = n.icon
        return (
          <div key={i} className="absolute z-20" style={{ top: `${top}px`, [side]: '180px', [side === 'left' ? 'right' : 'left']: 'auto' }}>
            <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-2xl" style={{ border: `2.5px solid ${n.color}`, transform: side === 'left' ? 'rotate(-2deg)' : 'rotate(2deg)', maxWidth: '320px' }}>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: `${n.color}1A` }}><Icon className="h-6 w-6" style={{ color: n.color }} /></span>
              <div className="leading-tight">
                <p className="text-xs font-bold uppercase" style={{ color: n.color, letterSpacing: '0.14em' }}>{n.mon}</p>
                <p className="text-base font-extrabold" style={{ color: '#0F172A' }}>{n.label}</p>
              </div>
            </div>
          </div>
        )
      })}

      <div className="absolute inset-x-0 z-30 px-12 text-center" style={{ bottom: '50px' }}>
        <p className="text-xl font-extrabold" style={{ color: '#451A03' }}>★ {t.cta}</p>
      </div>
    </div>
  )
}
