// Poster 13 — AI bento grid（组 D 同风格）。AI 多面。
import { Heart, Sparkles, Languages, FileSearch, Bot, Zap, BookOpen, Star } from 'lucide-react'
type Locale = 'en' | 'zh'

export function Poster13AiBento({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh ? {
    chip: 'BETA · 公开测试', title1: 'AI 不替你做决定，', title2: '帮你读懂。',
    sub: '上传任意文件 —— 中英双语解释 · 关键值提取 · 趋势对比 · 一段话懂全文。',
    cta: '60 天免费试用', rating: '4.9 · 1,200+',
    cells: [
      { icon: Sparkles,  label: '一段话懂全文', sub: 'AI 摘要 · 几秒完成', color: '#15803D', big: true },
      { icon: Languages, label: '双语解释',   sub: 'EN · 中文',          color: '#0EA5E9', big: false },
      { icon: FileSearch, label: '关键值提取', sub: '自动结构化',         color: '#F59E0B', big: false },
      { icon: Zap,       label: '几秒完成',   sub: '本地缓存',           color: '#7C3AED', big: false },
      { icon: BookOpen,  label: '仅供参考',   sub: '不替代医生',         color: '#64748B', big: false },
      { icon: Bot,       label: '只读不存',   sub: '过完就丢',           color: '#DC2626', big: true },
    ],
  } : {
    chip: 'BETA · OPEN TESTING', title1: 'AI doesn\'t decide.', title2: 'It helps you read.',
    sub: 'Upload any document — bilingual explanation · key value extraction · trend comparison · one paragraph for everything.',
    cta: '60-day free trial', rating: '4.9 · 1,200+',
    cells: [
      { icon: Sparkles,  label: 'One paragraph', sub: 'AI summary in seconds', color: '#15803D', big: true },
      { icon: Languages, label: 'Bilingual',     sub: 'EN · 中文',             color: '#0EA5E9', big: false },
      { icon: FileSearch, label: 'Key values',  sub: 'Auto-structured',       color: '#F59E0B', big: false },
      { icon: Zap,       label: 'Seconds',      sub: 'Local cache',           color: '#7C3AED', big: false },
      { icon: BookOpen,  label: 'For reference', sub: 'Not a replacement',    color: '#64748B', big: false },
      { icon: Bot,       label: 'Read-only',    sub: 'Forgotten right after', color: '#DC2626', big: true },
    ],
  }
  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)', fontFamily: 'ui-sans-serif, -apple-system, system-ui' }}>
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #0F172A 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
      <div className="absolute left-12 top-12 z-30 flex items-center gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg" style={{ background: 'linear-gradient(135deg, #15803D, #059669)' }}><Sparkles className="h-9 w-9 text-white" /></div>
        <div><p className="text-3xl font-extrabold tracking-tight" style={{ color: '#0F172A' }}>KinMate AI</p><p className="text-sm font-medium" style={{ color: '#475569' }}>{isZh ? '帮你读懂上传的文件' : 'Helps you read what you upload'}</p></div>
      </div>
      <div className="absolute right-12 top-12 z-30 flex flex-col items-end gap-2.5">
        <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold uppercase shadow-md" style={{ background: 'linear-gradient(90deg, #FF4D4D, #FF7A18)', color: 'white', letterSpacing: '0.14em' }}>{t.chip}</span>
        <div className="flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 shadow-sm">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4" fill="#F59E0B" stroke="#F59E0B" />)}<span className="ml-2 text-sm font-bold" style={{ color: '#0F172A' }}>{t.rating}</span></div>
      </div>
      <div className="absolute left-1/2 z-20 -translate-x-1/2 text-center" style={{ top: '180px', maxWidth: '900px', paddingLeft: '40px', paddingRight: '40px' }}>
        <h1 className="font-extrabold" style={{ fontSize: '84px', lineHeight: 0.98, letterSpacing: '-2.2px', color: '#0F172A' }}>{t.title1}<br /><span style={{ color: '#15803D' }}>{t.title2}</span></h1>
        <p className="mx-auto mt-5 font-semibold" style={{ fontSize: '22px', lineHeight: 1.4, color: '#1E293B', maxWidth: '820px' }}>{t.sub}</p>
      </div>
      <div className="absolute z-10 grid" style={{ left: '60px', right: '60px', top: '600px', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(3, 280px)', gap: '24px' }}>
        {t.cells.map((c, i) => {
          const Icon = c.icon
          const span = c.big ? { gridColumn: 'span 2' } : {}
          return (
            <div key={i} className="relative overflow-hidden rounded-3xl shadow-xl" style={{ ...span, background: 'white', border: '2px solid rgba(255,255,255,0.95)' }}>
              <div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full opacity-25 blur-2xl" style={{ background: c.color }} />
              <div className="relative flex h-full flex-col justify-between p-7">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl" style={{ background: `${c.color}1A` }}><Icon className="h-9 w-9" style={{ color: c.color }} /></span>
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
        <p className="text-xl font-extrabold" style={{ color: '#059669' }}>★ {t.cta} · KinMate</p>
      </div>
    </div>
  )
}
