// Poster 19 — 中文 hero typography（组 F）。Locale 强制 zh 文案展示但 EN 版仍可访问。
// 大字毛笔感（粗体 + 衬线），暖米色 + 墨色，纯文字海报。
import { Heart, Star, Sparkles } from 'lucide-react'
type Locale = 'en' | 'zh'

export function Poster19ZhHero({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh ? {
    chip: 'BETA · 公开测试',
    line1: '把一家人',
    line2: '装进',
    line3: '一个安静',
    line4: '的口袋。',
    sub: '父母、孩子、宠物、文件、提醒 —— 都在你掌心。',
    sub2: '本地优先 · 隐私第一 · 双语 AI',
    pills: ['📄 文件归档', '⏰ 日常提醒', '🐾 宠物档案', '🔒 隐私第一'],
    rating: '4.9 · 1,200+ 评价', cta: '60 天免费试用',
  } : {
    chip: 'BETA · OPEN TESTING',
    line1: 'Put a family',
    line2: 'into',
    line3: 'one quiet',
    line4: 'pocket.',
    sub: 'Parents, kids, pets, documents, reminders — all in your hand.',
    sub2: 'Local-first · Private by design · Bilingual AI',
    pills: ['📄 Documents', '⏰ Reminders', '🐾 Pets', '🔒 Privacy-first'],
    rating: '4.9 · 1,200+ reviews', cta: '60-day free trial',
  }
  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: 'linear-gradient(160deg, #FFFBEB 0%, #FEF3C7 50%, #FDE68A 100%)', fontFamily: '"PingFang SC", "Microsoft YaHei", ui-serif, Georgia, serif' }}>
      {/* 装饰：墨点 + 几条手绘曲线 */}
      <svg className="pointer-events-none absolute" style={{ top: '40px', right: '60px' }} width="180" height="180" viewBox="0 0 180 180">
        <path d="M 30 90 Q 90 20 150 60 T 170 130" stroke="#7C2D12" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.35" />
      </svg>
      <svg className="pointer-events-none absolute" style={{ bottom: '300px', left: '40px' }} width="220" height="120" viewBox="0 0 220 120">
        <path d="M 10 60 Q 70 10 130 70 T 210 50" stroke="#92400E" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.3" />
      </svg>
      {[
        { top: '180px', left: '60px',  size: 12, opacity: 0.4 },
        { top: '900px',  right: '90px', size: 14, opacity: 0.5 },
        { top: '1400px', left: '120px', size: 10, opacity: 0.4 },
      ].map((p, i) => (
        <div key={i} className="pointer-events-none absolute rounded-full" style={{ ...p, width: p.size, height: p.size, background: '#7C2D12' }} />
      ))}

      <div className="absolute left-12 top-12 z-30 flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg" style={{ background: 'linear-gradient(135deg, #7C2D12, #451A03)' }}><Heart className="h-8 w-8 text-white" fill="white" /></div>
        <p className="text-2xl font-extrabold tracking-tight" style={{ color: '#451A03' }}>KinMate</p>
      </div>
      <div className="absolute right-12 top-12 z-30 flex flex-col items-end gap-2.5">
        <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold uppercase shadow-md" style={{ background: 'linear-gradient(90deg, #FF4D4D, #FF7A18)', color: 'white', letterSpacing: '0.14em' }}>{t.chip}</span>
        <div className="flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 shadow-sm">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4" fill="#92400E" stroke="#92400E" />)}<span className="ml-2 text-sm font-bold" style={{ color: '#451A03' }}>{t.rating}</span></div>
      </div>

      {/* 4 行大字纵向排列 */}
      <div className="absolute z-20" style={{ left: '60px', top: '220px' }}>
        <p className="font-black" style={{ fontSize: '180px', lineHeight: 0.86, letterSpacing: '-4px', color: '#0F172A' }}>{t.line1}</p>
        <p className="font-black mt-2" style={{ fontSize: '160px', lineHeight: 0.86, letterSpacing: '-4px', color: '#92400E', fontStyle: 'italic' }}>{t.line2}</p>
        <p className="font-black mt-2" style={{ fontSize: '180px', lineHeight: 0.86, letterSpacing: '-4px', color: '#0F172A' }}>{t.line3}</p>
        <p className="font-black mt-2" style={{ fontSize: '180px', lineHeight: 0.86, letterSpacing: '-4px', color: '#7C2D12' }}>{t.line4}</p>
      </div>

      <div className="absolute inset-x-0 z-30 px-12" style={{ bottom: '60px' }}>
        <p className="text-2xl font-bold mb-3" style={{ color: '#451A03' }}>{t.sub}</p>
        <p className="text-lg font-medium mb-5" style={{ color: '#7C2D12' }}>{t.sub2}</p>
        <div className="flex flex-wrap gap-2.5">
          {t.pills.map((p, i) => {
            const colors = ['#92400E', '#7C2D12', '#451A03', '#0F172A']
            return <span key={i} className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold shadow-md" style={{ background: colors[i % 4], color: 'white', transform: `rotate(${[-2, 1, -1, 2][i]}deg)` }}>{p}</span>
          })}
        </div>
        <p className="mt-5 text-base font-extrabold" style={{ color: '#451A03' }}><Sparkles className="inline h-4 w-4 mr-1.5" />{t.cta}</p>
      </div>
    </div>
  )
}
