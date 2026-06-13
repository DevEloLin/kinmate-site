// Poster 10 — CTA 下载（组 C：杂志封面大字 + 商店徽章 + 用户头像）。
// 极简强对比：黑/白/绿 三色，巨型 "60" 大数字 + 商店徽章 + 头像横排 + 评分。
import { Star, Heart, Download, CheckCircle2 } from 'lucide-react'

type Locale = 'en' | 'zh'

export function Poster10Cta({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh
    ? {
        topNote: '加入 1,200+ 家庭',
        bigNum: '60',
        bigUnit: '天',
        bigSub: '免费试用',
        title: 'KinMate 替你装下整个家。',
        sub: '一处归档 · 双语 AI · 自带网盘',
        avatars: ['👩', '👨', '👵', '👴', '👧', '👦', '🐈', '🐕'],
        avatarLabel: '已在使用',
        chips: ['App Store 4.9 ★', 'Play 4.8 ★', '60 天试用', '可随时取消'],
        downloadOn: '下载于', getOn: '获取',
        store1: 'App Store', store2: 'Google Play',
        privacyLine: '本地优先 · 隐私第一 · 端到端加密',
      }
    : {
        topNote: 'JOIN 1,200+ FAMILIES',
        bigNum: '60',
        bigUnit: 'DAYS',
        bigSub: 'FREE TRIAL',
        title: 'KinMate holds the whole family.',
        sub: 'One vault · Bilingual AI · Your own cloud',
        avatars: ['👩', '👨', '👵', '👴', '👧', '👦', '🐈', '🐕'],
        avatarLabel: 'using now',
        chips: ['App Store 4.9 ★', 'Play 4.8 ★', '60-day trial', 'Cancel anytime'],
        downloadOn: 'Download on the', getOn: 'Get it on',
        store1: 'App Store', store2: 'Google Play',
        privacyLine: 'Local-first · Private by design · End-to-end encrypted',
      }

  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: '#0F172A', fontFamily: 'ui-sans-serif, -apple-system, "SF Pro Display", system-ui' }}>
      {/* 装饰：左上绿色色块、右下橙色色块（杂志拼贴风） */}
      <div className="pointer-events-none absolute" style={{ top: '0', left: '0', width: '60%', height: '420px', background: 'linear-gradient(135deg, #15803D 0%, #059669 100%)' }} />
      <div className="pointer-events-none absolute" style={{ bottom: '0', right: '0', width: '50%', height: '480px', background: 'linear-gradient(45deg, #F59E0B 0%, #FCD34D 100%)' }} />
      {/* 对角线 */}
      <div className="pointer-events-none absolute" style={{ top: '0', left: '60%', width: '4px', height: '420px', background: 'white', transform: 'skewX(-15deg)' }} />

      {/* 顶部 top note + brand */}
      <div className="absolute left-12 top-12 z-30 flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg">
          <Heart className="h-8 w-8" style={{ color: '#15803D' }} fill="#15803D" />
        </div>
        <p className="text-3xl font-extrabold text-white tracking-tight">KinMate</p>
      </div>
      <span className="absolute right-12 top-14 z-30 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase shadow-sm" style={{ background: 'white', color: '#0F172A', letterSpacing: '0.18em' }}>
        ★ {t.topNote}
      </span>

      {/* 巨型 "60 / DAYS / FREE TRIAL" — 杂志封面大字 */}
      <div className="absolute z-20" style={{ left: '60px', top: '170px' }}>
        <p className="text-[280px] leading-[0.8] font-black text-white" style={{ letterSpacing: '-12px', fontFamily: 'ui-sans-serif, "SF Pro Display", system-ui', textShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
          {t.bigNum}
        </p>
      </div>
      <div className="absolute z-20" style={{ right: '60px', top: '280px', textAlign: 'right' }}>
        <p className="text-7xl font-black" style={{ color: '#FCD34D', letterSpacing: '-2px', lineHeight: 0.9 }}>{t.bigUnit}</p>
        <p className="text-4xl font-black mt-2" style={{ color: 'white', letterSpacing: '-1px' }}>{t.bigSub}</p>
      </div>

      {/* 标题 (杂志报头 style) */}
      <div className="absolute z-20" style={{ left: '60px', top: '580px', maxWidth: '880px' }}>
        <h2 className="font-extrabold" style={{ fontSize: '64px', lineHeight: 1.0, letterSpacing: '-1.5px', color: 'white' }}>
          {t.title}
        </h2>
        <p className="mt-4 text-2xl font-semibold" style={{ color: '#5EEAD4' }}>{t.sub}</p>
      </div>

      {/* 用户头像横排（emoji avatars 拼贴） */}
      <div className="absolute z-20" style={{ left: '60px', top: '850px' }}>
        <div className="flex items-center gap-3">
          {t.avatars.map((a, i) => (
            <div key={i} className="flex h-20 w-20 items-center justify-center rounded-full shadow-xl" style={{ background: ['#15803D', '#0EA5E9', '#F59E0B', '#7C3AED', '#DC2626', '#F97316', '#5EEAD4', '#0F172A'][i], border: '4px solid white', fontSize: '40px', marginLeft: i > 0 ? '-12px' : 0 }}>
              {a}
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-5 w-5" fill="#FCD34D" stroke="#FCD34D" />)}
          </div>
          <p className="text-lg font-bold text-white">4.9 · 1,200+ {t.avatarLabel}</p>
        </div>
      </div>

      {/* 商店徽章 (大版本) */}
      <div className="absolute z-30 flex items-center gap-5" style={{ left: '60px', bottom: '320px' }}>
        <a className="flex items-center gap-4 rounded-2xl px-7 py-5 shadow-2xl" style={{ background: 'white' }}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="#0F172A">
            <path d="M16.5 1.2c0 1.4-.6 2.7-1.5 3.6-1 1-2.3 1.7-3.6 1.6-.2-1.3.4-2.7 1.4-3.6 1-.9 2.4-1.5 3.7-1.6Zm4.4 16.5c-.7 1.6-1 2.3-1.9 3.7-1.2 1.9-2.9 4.3-5 4.3-1.9 0-2.4-1.2-4.9-1.2s-3.1 1.3-5 1.2c-2.1 0-3.7-2.1-4.9-4-3.4-5.3-3.7-11.6-1.6-14.9 1.5-2.4 3.8-3.7 6-3.7 2.2 0 3.6 1.2 5.4 1.2 1.8 0 2.8-1.2 5.4-1.2 2 0 4 1.1 5.5 3-4.8 2.6-4 9.4 0 11.6Z" />
          </svg>
          <div className="leading-tight">
            <p className="text-sm font-medium" style={{ color: '#64748B' }}>{t.downloadOn}</p>
            <p className="text-2xl font-black" style={{ color: '#0F172A' }}>{t.store1}</p>
          </div>
        </a>
        <a className="flex items-center gap-4 rounded-2xl px-7 py-5 shadow-2xl" style={{ background: 'white' }}>
          <svg width="44" height="44" viewBox="0 0 24 24"><path d="M3 2v20l11-10L3 2Z" fill="#34A853" /><path d="M3 2l11 10 4-3.6L5.5 1A2 2 0 0 0 3 2Z" fill="#FBBC04" /><path d="M3 22l11-10 4 3.6-12.5 7.5A2 2 0 0 1 3 22Z" fill="#EA4335" /><path d="M14 12l4-3.6 4.5 2.7c.8.5.8 1.7 0 2.2L18 15.6 14 12Z" fill="#4285F4" /></svg>
          <div className="leading-tight">
            <p className="text-sm font-medium" style={{ color: '#64748B' }}>{t.getOn}</p>
            <p className="text-2xl font-black" style={{ color: '#0F172A' }}>{t.store2}</p>
          </div>
        </a>
      </div>

      {/* trust chips */}
      <div className="absolute z-30 flex flex-wrap gap-3" style={{ left: '60px', bottom: '210px', maxWidth: '900px' }}>
        {t.chips.map((c, i) => (
          <span key={i} className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold" style={{ background: 'rgba(255,255,255,0.16)', color: 'white', border: '1.5px solid rgba(255,255,255,0.3)' }}>
            <CheckCircle2 className="h-4 w-4" />{c}
          </span>
        ))}
      </div>

      {/* 底部 privacy line */}
      <div className="absolute inset-x-0 z-30 px-12" style={{ bottom: '60px' }}>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold uppercase" style={{ color: '#94A3B8', letterSpacing: '0.16em' }}>{t.privacyLine}</span>
          <Download className="h-7 w-7" style={{ color: '#FCD34D' }} />
        </div>
      </div>
    </div>
  )
}
