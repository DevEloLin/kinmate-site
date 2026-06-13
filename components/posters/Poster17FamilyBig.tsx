// Poster 17 v2 — Color Stripe Feature Tour（5 横色带分屏，每条 1 feature）。
import { Heart, Star, FileText, Calendar, Users, PawPrint, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react'
type Locale = 'en' | 'zh'

export function Poster17FamilyBig({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh ? {
    chip: 'BETA · 公开测试',
    title1: '五件事，', title2: '一个 app。',
    rating: '4.9 · 1,200+',
    stripes: [
      { color: '#15803D', icon: FileText,    big: '文件归档', sub: '47 份 · 自动按日期 · AI 双语摘要' },
      { color: '#0EA5E9', icon: Calendar,    big: '日常提醒', sub: '温柔通知 · 28 天 streak · 共享给家人' },
      { color: '#F59E0B', icon: Users,       big: '家庭', sub: '父母 · 孩子 · 邀请家人 · 受控共享' },
      { color: '#F97316', icon: PawPrint,    big: '宠物', sub: '档案 · 日常护理 · 看兽医前一秒就绪' },
      { color: '#7C3AED', icon: ShieldCheck, big: '隐私', sub: '本地优先 · 端到端加密 · 你的网盘' },
    ],
    cta: '60 天免费试用 · KinMate',
  } : {
    chip: 'BETA · OPEN TESTING',
    title1: 'Five things,', title2: 'one app.',
    rating: '4.9 · 1,200+',
    stripes: [
      { color: '#15803D', icon: FileText,    big: 'Documents', sub: '47 filed · Auto by date · AI bilingual summary' },
      { color: '#0EA5E9', icon: Calendar,    big: 'Reminders', sub: 'Gentle nudges · 28-day streak · shared' },
      { color: '#F59E0B', icon: Users,       big: 'Family',    sub: 'Parents · kids · invite · selective share' },
      { color: '#F97316', icon: PawPrint,    big: 'Pets',      sub: 'Profiles · daily care · vet-ready' },
      { color: '#7C3AED', icon: ShieldCheck, big: 'Privacy',   sub: 'Local-first · end-to-end · your cloud' },
    ],
    cta: '60-day free trial · KinMate',
  }
  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: '#FAFAF9', fontFamily: 'ui-sans-serif, -apple-system, system-ui' }}>
      <div className="absolute left-12 top-12 z-30 flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg" style={{ background: 'linear-gradient(135deg, #15803D, #059669)' }}><Heart className="h-8 w-8 text-white" fill="white" /></div>
        <p className="text-3xl font-extrabold tracking-tight" style={{ color: '#0F172A' }}>KinMate</p>
      </div>
      <div className="absolute right-12 top-14 z-30 flex flex-col items-end gap-2.5">
        <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase shadow-md" style={{ background: 'linear-gradient(90deg, #FF4D4D, #FF7A18)', color: 'white', letterSpacing: '0.14em' }}>{t.chip}</span>
        <div className="flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 shadow-sm border border-black/10">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4" fill="#F59E0B" stroke="#F59E0B" />)}<span className="ml-2 text-sm font-bold" style={{ color: '#0F172A' }}>{t.rating}</span></div>
      </div>

      <div className="absolute left-12 z-20" style={{ top: '170px' }}>
        <h1 className="font-extrabold" style={{ fontSize: '96px', lineHeight: 0.96, letterSpacing: '-2.6px', color: '#0F172A' }}>{t.title1}<br /><span style={{ color: '#15803D' }}>{t.title2}</span></h1>
      </div>

      {/* 5 条色带 横排（占 1080w × 各 ~220h） */}
      <div className="absolute inset-x-0 z-10" style={{ top: '480px' }}>
        {t.stripes.map((s, i) => {
          const Icon = s.icon
          return (
            <div key={i} className="relative flex items-center px-12" style={{ height: '230px', background: `linear-gradient(90deg, ${s.color} 0%, ${s.color}DD 60%, ${s.color}99 100%)` }}>
              <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-30">
                <Icon className="h-40 w-40 text-white" strokeWidth={1.5} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/30 backdrop-blur"><Icon className="h-7 w-7 text-white" strokeWidth={2.2} /></span>
                  <p className="font-extrabold text-white" style={{ fontSize: '60px', lineHeight: 1, letterSpacing: '-1.5px' }}>{s.big}</p>
                </div>
                <p className="mt-2 text-lg font-semibold text-white/90" style={{ maxWidth: '720px' }}>{s.sub}</p>
              </div>
              <ArrowRight className="absolute right-12 top-1/2 -translate-y-1/2 h-10 w-10 text-white/80 opacity-90" />
            </div>
          )
        })}
      </div>

      <div className="absolute inset-x-0 z-30 px-12 text-center" style={{ bottom: '40px' }}>
        <p className="text-xl font-extrabold" style={{ color: '#0F172A' }}>★ {t.cta}</p>
      </div>
    </div>
  )
}
