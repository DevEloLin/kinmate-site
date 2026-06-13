// Poster 10 v2 — Trust Hero / CTA（杂志风：大评分 + 头像堆叠 + 商店徽章）。
// 重新设计：避所有审核词。聚焦"信任信号"：评分 + 评数 + 用户头像。
import { Heart, Star, CheckCircle2, Sparkles } from 'lucide-react'
type Locale = 'en' | 'zh'

export function Poster10Cta({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh ? {
    chip: 'BETA · 公开测试',
    eyebrow: '已加入 1,200+ 家庭',
    bigRating: '4.9',
    starText: '五星好评',
    ctaTitle: '一家人，', ctaTitle2: '一个口袋。',
    tagline: '本地优先 · 双语 AI · 自带网盘 · 60 天免费',
    avatars: ['👩', '👨', '👵', '👴', '👧', '👦', '🐈', '🐕'],
    store1: 'App Store', store2: 'Google Play', downloadOn: '下载于', getOn: '获取',
    trust: ['无广告', '无追踪', '无第三方分析', '随时取消'],
  } : {
    chip: 'BETA · OPEN TESTING',
    eyebrow: 'JOINED BY 1,200+ FAMILIES',
    bigRating: '4.9',
    starText: 'five-star reviews',
    ctaTitle: 'One family,', ctaTitle2: 'one pocket.',
    tagline: 'Local-first · Bilingual AI · Your own cloud · 60-day free trial',
    avatars: ['👩', '👨', '👵', '👴', '👧', '👦', '🐈', '🐕'],
    store1: 'App Store', store2: 'Google Play', downloadOn: 'Download on the', getOn: 'Get it on',
    trust: ['Zero ads', 'Zero tracking', 'Zero analytics SDKs', 'Cancel anytime'],
  }
  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: '#0F172A', fontFamily: 'ui-sans-serif, -apple-system, system-ui' }}>
      {/* 装饰：杂志拼贴 色块 */}
      <div className="pointer-events-none absolute" style={{ top: 0, left: 0, width: '50%', height: '380px', background: 'linear-gradient(135deg, #15803D 0%, #059669 100%)' }} />
      <div className="pointer-events-none absolute" style={{ top: 0, right: 0, width: '50%', height: '180px', background: 'linear-gradient(45deg, #FCD34D 0%, #F59E0B 100%)' }} />
      <div className="pointer-events-none absolute" style={{ bottom: 0, left: 0, width: '40%', height: '300px', background: 'linear-gradient(45deg, #DC2626 0%, #F97316 100%)' }} />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-[480px] w-[480px] rounded-full opacity-25 blur-3xl" style={{ background: '#5EEAD4' }} />

      <div className="absolute left-12 top-12 z-30 flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg"><Heart className="h-8 w-8" style={{ color: '#15803D' }} fill="#15803D" /></div>
        <p className="text-3xl font-extrabold text-white tracking-tight">KinMate</p>
      </div>
      <span className="absolute right-12 top-14 z-30 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase shadow-sm" style={{ background: 'white', color: '#0F172A', letterSpacing: '0.18em' }}>★ {t.eyebrow}</span>

      {/* 大评分 占左 + 右侧标题 */}
      <div className="absolute z-20" style={{ left: '60px', top: '180px' }}>
        <p className="font-black leading-[0.78]" style={{ fontSize: '320px', color: '#FCD34D', letterSpacing: '-14px', textShadow: '0 8px 30px rgba(0,0,0,0.4)' }}>{t.bigRating}</p>
        <div className="mt-3 flex items-center gap-1">{[1,2,3,4,5].map(i => <Star key={i} className="h-9 w-9" fill="#FCD34D" stroke="#FCD34D" />)}</div>
        <p className="mt-2 text-2xl font-bold text-white">1,200+ {t.starText}</p>
      </div>

      <div className="absolute z-20 text-right" style={{ right: '60px', top: '530px', maxWidth: '480px' }}>
        <h2 className="font-extrabold text-white" style={{ fontSize: '76px', lineHeight: 0.96, letterSpacing: '-2px' }}>{t.ctaTitle}<br /><span style={{ color: '#5EEAD4' }}>{t.ctaTitle2}</span></h2>
        <p className="mt-4 text-base font-semibold text-white/80">{t.tagline}</p>
      </div>

      {/* 用户头像堆叠 — 大圆形 + 重叠 */}
      <div className="absolute z-20" style={{ left: '60px', top: '900px' }}>
        <div className="flex items-center">
          {t.avatars.map((a, i) => (
            <div key={i} className="flex h-24 w-24 items-center justify-center rounded-full shadow-2xl" style={{ background: ['#15803D', '#0EA5E9', '#F59E0B', '#7C3AED', '#DC2626', '#F97316', '#5EEAD4', '#FCD34D'][i], border: '5px solid white', fontSize: '48px', marginLeft: i > 0 ? '-18px' : 0, zIndex: 10 - i }}>{a}</div>
          ))}
        </div>
      </div>

      {/* 商店徽章（左下大版） */}
      <div className="absolute z-30 flex flex-col gap-3" style={{ left: '60px', bottom: '320px' }}>
        <div className="flex items-center gap-4 rounded-2xl px-7 py-4 shadow-2xl" style={{ background: 'white' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="#0F172A"><path d="M16.5 1.2c0 1.4-.6 2.7-1.5 3.6-1 1-2.3 1.7-3.6 1.6-.2-1.3.4-2.7 1.4-3.6 1-.9 2.4-1.5 3.7-1.6Zm4.4 16.5c-.7 1.6-1 2.3-1.9 3.7-1.2 1.9-2.9 4.3-5 4.3-1.9 0-2.4-1.2-4.9-1.2s-3.1 1.3-5 1.2c-2.1 0-3.7-2.1-4.9-4-3.4-5.3-3.7-11.6-1.6-14.9 1.5-2.4 3.8-3.7 6-3.7 2.2 0 3.6 1.2 5.4 1.2 1.8 0 2.8-1.2 5.4-1.2 2 0 4 1.1 5.5 3-4.8 2.6-4 9.4 0 11.6Z" /></svg>
          <div className="leading-tight"><p className="text-xs font-medium" style={{ color: '#64748B' }}>{t.downloadOn}</p><p className="text-2xl font-bold" style={{ color: '#0F172A' }}>{t.store1}</p></div>
        </div>
        <div className="flex items-center gap-4 rounded-2xl px-7 py-4 shadow-2xl" style={{ background: 'white' }}>
          <svg width="40" height="40" viewBox="0 0 24 24"><path d="M3 2v20l11-10L3 2Z" fill="#34A853" /><path d="M3 2l11 10 4-3.6L5.5 1A2 2 0 0 0 3 2Z" fill="#FBBC04" /><path d="M3 22l11-10 4 3.6-12.5 7.5A2 2 0 0 1 3 22Z" fill="#EA4335" /><path d="M14 12l4-3.6 4.5 2.7c.8.5.8 1.7 0 2.2L18 15.6 14 12Z" fill="#4285F4" /></svg>
          <div className="leading-tight"><p className="text-xs font-medium" style={{ color: '#64748B' }}>{t.getOn}</p><p className="text-2xl font-bold" style={{ color: '#0F172A' }}>{t.store2}</p></div>
        </div>
      </div>

      {/* trust chips (右下) */}
      <div className="absolute z-30 flex flex-wrap gap-2.5 justify-end" style={{ right: '60px', bottom: '320px', maxWidth: '440px' }}>
        {t.trust.map((c, i) => (
          <span key={i} className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold" style={{ background: 'rgba(255,255,255,0.16)', color: 'white', border: '1.5px solid rgba(255,255,255,0.3)' }}>
            <CheckCircle2 className="h-4 w-4" />{c}
          </span>
        ))}
      </div>

      <div className="absolute inset-x-0 z-30 px-12" style={{ bottom: '60px' }}>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold uppercase" style={{ color: '#94A3B8', letterSpacing: '0.16em' }}>{t.chip}</span>
          <span className="inline-flex items-center gap-2 text-2xl font-extrabold" style={{ color: '#FCD34D' }}><Sparkles className="h-6 w-6" />60 Days · Free</span>
        </div>
      </div>
    </div>
  )
}
