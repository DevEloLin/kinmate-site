// Poster 13 v2 — 3-Step AI Flow（流程图：Upload → AI → Read）。
import { Heart, Star, Upload, Sparkles, BookOpen, ArrowRight } from 'lucide-react'
type Locale = 'en' | 'zh'

export function Poster13AiBento({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh ? {
    chip: 'BETA · 公开测试',
    title1: '三步，', title2: '看懂全文。',
    sub: '不替你做主，只把术语翻译成你能懂的那一段话。仅供参考，不替代专业。',
    rating: '4.9 · 1,200+',
    steps: [
      { icon: Upload,   label: '上传', sub: '拍照 · PDF · 任意文档', color: '#0EA5E9' },
      { icon: Sparkles, label: 'AI 处理', sub: '几秒提取 · 双语解释', color: '#15803D' },
      { icon: BookOpen, label: '读懂', sub: '一段话 · 关键值齐全', color: '#F59E0B' },
    ],
    cta: '60 天免费试用 · KinMate',
  } : {
    chip: 'BETA · OPEN TESTING',
    title1: 'Three steps,', title2: 'one paragraph.',
    sub: 'Doesn\'t decide for you — translates jargon into one paragraph you can read. For reference only.',
    rating: '4.9 · 1,200+',
    steps: [
      { icon: Upload,   label: 'Upload', sub: 'Photo · PDF · any doc', color: '#0EA5E9' },
      { icon: Sparkles, label: 'AI', sub: 'Seconds · bilingual', color: '#15803D' },
      { icon: BookOpen, label: 'Read', sub: 'A paragraph · key values', color: '#F59E0B' },
    ],
    cta: '60-day free trial · KinMate',
  }
  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: 'linear-gradient(160deg, #FAFAF9 0%, #E0F2FE 50%, #ECFDF5 100%)', fontFamily: 'ui-sans-serif, -apple-system, system-ui' }}>
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[480px] w-[480px] rounded-full opacity-40 blur-3xl" style={{ background: '#0EA5E9' }} />
      <div className="pointer-events-none absolute -right-32 bottom-1/3 h-[480px] w-[480px] rounded-full opacity-40 blur-3xl" style={{ background: '#15803D' }} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #0F172A 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />

      <div className="absolute left-12 top-12 z-30 flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg" style={{ background: 'linear-gradient(135deg, #15803D, #059669)' }}><Sparkles className="h-8 w-8 text-white" /></div>
        <p className="text-3xl font-extrabold tracking-tight" style={{ color: '#0F172A' }}>KinMate AI</p>
      </div>
      <div className="absolute right-12 top-14 z-30 flex flex-col items-end gap-2.5">
        <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase shadow-md" style={{ background: 'linear-gradient(90deg, #FF4D4D, #FF7A18)', color: 'white', letterSpacing: '0.14em' }}>{t.chip}</span>
        <div className="flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 shadow-sm">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4" fill="#F59E0B" stroke="#F59E0B" />)}<span className="ml-2 text-sm font-bold" style={{ color: '#0F172A' }}>{t.rating}</span></div>
      </div>

      <div className="absolute left-1/2 z-20 -translate-x-1/2 text-center" style={{ top: '150px', maxWidth: '960px' }}>
        <h1 className="font-extrabold" style={{ fontSize: '96px', lineHeight: 0.96, letterSpacing: '-2.5px', color: '#0F172A' }}>{t.title1}<br /><span style={{ color: '#15803D' }}>{t.title2}</span></h1>
        <p className="mx-auto mt-5 font-semibold" style={{ fontSize: '22px', lineHeight: 1.4, color: '#1E293B', maxWidth: '780px' }}>{t.sub}</p>
      </div>

      {/* 3 个大圆 step + 箭头连接 */}
      <div className="absolute inset-x-0 z-10 flex items-center justify-center gap-6" style={{ top: '660px' }}>
        {t.steps.map((s, i) => {
          const Icon = s.icon
          return (
            <div key={i} className="flex flex-col items-center" style={{ width: '280px' }}>
              <div className="flex h-44 w-44 items-center justify-center rounded-full shadow-2xl" style={{ background: 'white', border: `8px solid ${s.color}` }}>
                <Icon className="h-20 w-20" style={{ color: s.color }} strokeWidth={1.8} />
              </div>
              <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-full text-2xl font-black text-white shadow-lg" style={{ background: s.color }}>{i + 1}</div>
              <p className="mt-4 text-3xl font-extrabold" style={{ color: '#0F172A' }}>{s.label}</p>
              <p className="mt-2 text-base font-semibold text-center" style={{ color: s.color, maxWidth: '220px' }}>{s.sub}</p>
            </div>
          )
        })}
      </div>

      {/* 箭头 connector */}
      <ArrowRight className="absolute z-10 h-12 w-12" style={{ left: '34%', top: '740px', color: '#94A3B8' }} strokeWidth={2.5} />
      <ArrowRight className="absolute z-10 h-12 w-12" style={{ right: '34%', top: '740px', color: '#94A3B8' }} strokeWidth={2.5} />

      <div className="absolute inset-x-0 z-30 px-12 text-center" style={{ bottom: '60px' }}>
        <p className="text-xl font-extrabold" style={{ color: '#15803D' }}>★ {t.cta}</p>
      </div>
    </div>
  )
}
