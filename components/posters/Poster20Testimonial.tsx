// Poster 20 — Quote / Testimonial 风（组 F：纯文字海报）。
// 大引号 + 用户证言 + 评分 + 小 emoji 头像。
import { Heart, Star, Quote } from 'lucide-react'
type Locale = 'en' | 'zh'

export function Poster20Testimonial({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh ? {
    chip: 'BETA · 公开测试',
    quote: '换手机的时候本来挺紧张，怕几年文件都要重新整理。一登录全自动回来了。',
    author: '林女士', role: '上海 · 两个孩子的妈妈',
    quote2: '爸妈的提醒、孩子的疫苗记录、家里宠物的就诊 —— 都在一个 app 里。我终于不慌了。',
    author2: '张先生', role2: '深圳 · 三代同堂',
    rating: '4.9', reviews: '1,200+', star: '颗 5 星好评',
    cta: '加入 1,200+ 家庭', sub: '60 天免费试用 · 本地优先 · 隐私第一',
  } : {
    chip: 'BETA · OPEN TESTING',
    quote: 'I was nervous about switching phones — years of files. Logged in, and everything was just there.',
    author: 'Sarah K.', role: 'NYC · Mom of two',
    quote2: 'Mom\'s reminders, the kids\' vaccine records, our cat\'s vet visits — all in one app. I finally stopped panicking.',
    author2: 'David L.', role2: 'SF · Three-gen household',
    rating: '4.9', reviews: '1,200+', star: 'five-star reviews',
    cta: 'Join 1,200+ families', sub: '60-day free trial · Local-first · Private by design',
  }
  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: 'linear-gradient(160deg, #FFFFFF 0%, #F1F5F9 100%)', fontFamily: 'ui-sans-serif, -apple-system, system-ui' }}>
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #0F172A 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full opacity-30 blur-3xl" style={{ background: '#15803D' }} />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[480px] w-[480px] rounded-full opacity-30 blur-3xl" style={{ background: '#0EA5E9' }} />

      <div className="absolute left-12 top-12 z-30 flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg" style={{ background: 'linear-gradient(135deg, #15803D, #059669)' }}><Heart className="h-8 w-8 text-white" fill="white" /></div>
        <p className="text-2xl font-extrabold tracking-tight" style={{ color: '#0F172A' }}>KinMate</p>
      </div>
      <span className="absolute right-12 top-14 z-30 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold uppercase shadow-md" style={{ background: 'linear-gradient(90deg, #FF4D4D, #FF7A18)', color: 'white', letterSpacing: '0.14em' }}>{t.chip}</span>

      {/* 大评分块 */}
      <div className="absolute left-1/2 z-20 -translate-x-1/2 text-center" style={{ top: '150px' }}>
        <p className="text-[200px] font-black leading-none" style={{ color: '#15803D', letterSpacing: '-8px' }}>{t.rating}</p>
        <div className="mt-3 flex items-center justify-center gap-1">{[1,2,3,4,5].map(i => <Star key={i} className="h-8 w-8" fill="#F59E0B" stroke="#F59E0B" />)}</div>
        <p className="mt-3 text-xl font-bold" style={{ color: '#0F172A' }}>{t.reviews} {t.star}</p>
      </div>

      {/* Quote card 1 */}
      <div className="absolute z-10 rounded-3xl bg-white shadow-2xl" style={{ left: '60px', top: '720px', width: '440px', padding: '40px 32px', transform: 'rotate(-3deg)', border: '2px solid rgba(255,255,255,0.95)' }}>
        <Quote className="h-12 w-12 mb-3" style={{ color: '#15803D' }} fill="#15803D33" />
        <p className="text-xl font-semibold leading-snug mb-4" style={{ color: '#0F172A' }}>"{t.quote}"</p>
        <div className="flex items-center gap-3 mt-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full text-2xl" style={{ background: '#15803D' }}>👩</div>
          <div>
            <p className="text-base font-bold" style={{ color: '#0F172A' }}>{t.author}</p>
            <p className="text-sm" style={{ color: '#64748B' }}>{t.role}</p>
          </div>
        </div>
      </div>

      {/* Quote card 2 */}
      <div className="absolute z-10 rounded-3xl bg-white shadow-2xl" style={{ right: '60px', top: '900px', width: '440px', padding: '40px 32px', transform: 'rotate(3deg)', border: '2px solid rgba(255,255,255,0.95)' }}>
        <Quote className="h-12 w-12 mb-3" style={{ color: '#0EA5E9' }} fill="#0EA5E933" />
        <p className="text-xl font-semibold leading-snug mb-4" style={{ color: '#0F172A' }}>"{t.quote2}"</p>
        <div className="flex items-center gap-3 mt-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full text-2xl" style={{ background: '#0EA5E9' }}>👨</div>
          <div>
            <p className="text-base font-bold" style={{ color: '#0F172A' }}>{t.author2}</p>
            <p className="text-sm" style={{ color: '#64748B' }}>{t.role2}</p>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 z-30 text-center" style={{ bottom: '110px' }}>
        <p className="text-4xl font-extrabold" style={{ color: '#15803D' }}>★ {t.cta}</p>
        <p className="mt-3 text-lg font-medium" style={{ color: '#475569' }}>{t.sub}</p>
      </div>
    </div>
  )
}
