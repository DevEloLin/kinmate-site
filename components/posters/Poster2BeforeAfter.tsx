// Poster 2 — AI 文档解读（Before/After 左右分屏风格）。
//
// 1080×1920 portrait。强反差，左暗右明，emoji 噪声 vs 干净 UI。
//
// 风格差异 vs Poster 1：
//   · 不是 hero 多 phone — 单 phone 在右半屏
//   · 左右对角分屏，对比强烈（暗灰 ←→ 亮米黄）
//   · 大量 emoji 拼贴在左侧（📄📊💊📋📈🔬 等）
//   · 中央"AI →" 箭头连接两个世界
//   · 顶部大字"BEFORE" / "AFTER" label

import { MktAIReportScreen } from '@/components/app-mockup/marketing-screens'
import { PhoneFrame } from '@/components/app-mockup/phone-frame'
import { Sparkles, Heart, ArrowRight, FileText, CheckCircle2 } from 'lucide-react'

type Locale = 'en' | 'zh'

export function Poster2BeforeAfter({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh
    ? {
        beforeLabel: '上传之前',
        afterLabel: '上传之后',
        title1: '看不懂',
        title2: '的文件，',
        title3: '让 AI 读给你听。',
        sub: '拍一下 / 上传 PDF。KinMate 用通俗的中英文，几秒钟给你一份摘要。',
        beforeDesc: '一堆术语 · 看不懂',
        afterDesc: '一段话 · 全明白',
        chips: ['⚡ 几秒完成', '🌐 双语', '🔒 本地优先', '✓ 仅供参考'],
        cta: '60 天免费试用',
        brand: 'KinMate',
        brandSub: '家庭记录工具',
      }
    : {
        beforeLabel: 'BEFORE',
        afterLabel: 'AFTER',
        title1: 'A document',
        title2: 'you can read.',
        title3: 'AI does the rest.',
        sub: 'Snap a photo / upload a PDF. KinMate gives you a plain bilingual summary in seconds.',
        beforeDesc: 'Jargon · Unclear',
        afterDesc: 'Plain · Clear',
        chips: ['⚡ Seconds', '🌐 Bilingual', '🔒 Local-first', '✓ For reference'],
        cta: '60-day free trial',
        brand: 'KinMate',
        brandSub: 'Family record organizer',
      }

  // emoji 噪声（左半屏散落）
  const emojis = ['📄', '📊', '💊', '📋', '📈', '🔬', '📃', '🧾', '💉', '🩺', '📑', '🗂️']

  return (
    <div
      className="relative h-screen w-screen overflow-hidden"
      style={{
        fontFamily: 'ui-sans-serif, -apple-system, "SF Pro Display", system-ui',
      }}
    >
      {/* ─── 整屏分两半：左暗灰，右明亮 ─── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(115deg, #1E293B 0%, #334155 45%, #FFF8E7 55%, #FFE8D6 100%)',
        }}
      />

      {/* 左半屏纹理：dot grid 隐约（暗色） */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1/2 opacity-[0.08]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* 右半屏装饰：暖光斑 */}
      <div className="pointer-events-none absolute -right-32 top-1/4 h-[520px] w-[520px] rounded-full opacity-50 blur-3xl" style={{ background: '#F59E0B44' }} />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-[480px] w-[480px] rounded-full opacity-40 blur-3xl" style={{ background: '#15803D55' }} />

      {/* ─── 顶部 nav：左 brand / 右 BETA chip ─── */}
      <div className="absolute left-12 top-12 z-30 flex items-center gap-3">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg"
          style={{ background: 'linear-gradient(135deg, #15803D, #059669)' }}
        >
          <Heart className="h-9 w-9 text-white" fill="white" />
        </div>
        <div>
          <p className="text-3xl font-extrabold tracking-tight text-white">
            {t.brand}
          </p>
          <p className="text-sm font-medium text-white/70">{t.brandSub}</p>
        </div>
      </div>
      <span
        className="absolute right-12 top-14 z-30 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold uppercase shadow-md"
        style={{
          background: 'linear-gradient(90deg, #FF4D4D, #FF7A18)',
          color: 'white',
          letterSpacing: '0.14em',
        }}
      >
        BETA · OPEN TESTING
      </span>

      {/* ────────────── 大标题（顶部居中，横跨明暗） ────────────── */}
      <div
        className="absolute left-1/2 z-30 -translate-x-1/2 text-center"
        style={{ top: '170px', maxWidth: '960px' }}
      >
        <h1
          className="font-extrabold"
          style={{
            fontSize: '96px',
            lineHeight: 0.96,
            letterSpacing: '-2.8px',
          }}
        >
          <span style={{ color: 'white' }}>{t.title1}</span>{' '}
          <span style={{ color: '#15803D' }}>{t.title2}</span>
          <br />
          <span style={{ color: '#92400E' }}>{t.title3}</span>
        </h1>
      </div>

      {/* ─────── 左侧 BEFORE 区 (emoji 噪声) ─────── */}
      <div className="absolute z-10" style={{ left: '0', top: '460px', width: '50%', height: '1100px' }}>
        {/* BEFORE label */}
        <div
          className="absolute z-20"
          style={{
            left: '50px',
            top: '20px',
            transform: 'rotate(-4deg)',
          }}
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-base font-extrabold uppercase shadow-xl"
            style={{
              background: '#0F172A',
              color: '#FCD34D',
              letterSpacing: '0.2em',
              border: '2px solid #FCD34D',
            }}
          >
            ⚠ {t.beforeLabel}
          </span>
        </div>

        {/* emoji 拼贴（散落，多种角度 + 阴影） */}
        {emojis.map((e, i) => {
          const positions = [
            { top: '120px', left: '60px',  size: '90px',  rot: -8  },
            { top: '180px', left: '220px', size: '70px',  rot: 12  },
            { top: '290px', left: '90px',  size: '110px', rot: -4  },
            { top: '400px', left: '260px', size: '80px',  rot: 8   },
            { top: '500px', left: '40px',  size: '95px',  rot: -12 },
            { top: '600px', left: '180px', size: '70px',  rot: 6   },
            { top: '690px', left: '60px',  size: '85px',  rot: -6  },
            { top: '780px', left: '250px', size: '75px',  rot: 14  },
            { top: '870px', left: '110px', size: '90px',  rot: -10 },
            { top: '960px', left: '270px', size: '65px',  rot: 8   },
            { top: '380px', left: '380px', size: '60px',  rot: -14 },
            { top: '880px', left: '380px', size: '55px',  rot: 16  },
          ][i] as any
          return (
            <span
              key={i}
              className="absolute"
              style={{
                ...positions,
                fontSize: positions.size,
                transform: `rotate(${positions.rot}deg)`,
                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4)) grayscale(0.3)',
                opacity: 0.85,
              }}
            >
              {e}
            </span>
          )
        })}

        {/* 左下角说明 */}
        <div
          className="absolute"
          style={{ bottom: '40px', left: '40px', maxWidth: '380px' }}
        >
          <p className="text-2xl font-bold text-white/90" style={{ lineHeight: 1.3 }}>
            {t.beforeDesc}
          </p>
        </div>
      </div>

      {/* ─────── 中央过渡：箭头 + AI sparkle ─────── */}
      <div
        className="absolute z-30 flex items-center justify-center"
        style={{
          left: '50%',
          top: '1000px',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className="flex h-32 w-32 items-center justify-center rounded-full shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #15803D, #059669)',
            border: '6px solid white',
          }}
        >
          <Sparkles className="h-16 w-16 text-white" />
        </div>
      </div>
      <div
        className="absolute z-20"
        style={{
          left: '50%',
          top: '1080px',
          transform: 'translateX(-50%)',
        }}
      >
        <span
          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-base font-extrabold shadow-lg"
          style={{ color: '#15803D' }}
        >
          KinMate AI
        </span>
      </div>

      {/* ─────── 右侧 AFTER 区 (干净 phone + AI popup) ─────── */}
      <div className="absolute z-10" style={{ right: '0', top: '460px', width: '50%', height: '1100px' }}>
        {/* AFTER label */}
        <div
          className="absolute z-20"
          style={{
            right: '50px',
            top: '20px',
            transform: 'rotate(4deg)',
          }}
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-base font-extrabold uppercase shadow-xl"
            style={{
              background: '#15803D',
              color: 'white',
              letterSpacing: '0.2em',
            }}
          >
            ✓ {t.afterLabel}
          </span>
        </div>

        {/* phone（右侧，正立） */}
        <div
          className="absolute"
          style={{
            right: '60px',
            top: '120px',
            filter: 'drop-shadow(0 35px 60px rgba(15,23,42,0.35))',
          }}
        >
          <PhoneFrame width={400}>
            <MktAIReportScreen locale={locale} />
          </PhoneFrame>
        </div>

        {/* AI popup overlay 卡片（覆盖在 phone 上方） */}
        <div
          className="absolute z-30 rounded-2xl bg-white px-5 py-4 shadow-2xl"
          style={{
            right: '110px',
            top: '380px',
            transform: 'rotate(-2deg)',
            border: '2px solid #15803D',
            maxWidth: '320px',
          }}
        >
          <div className="mb-2 flex items-center gap-2">
            <Sparkles className="h-5 w-5" style={{ color: '#15803D' }} />
            <p className="text-sm font-extrabold uppercase" style={{ color: '#15803D', letterSpacing: '0.14em' }}>
              {isZh ? 'AI 摘要' : 'AI Summary'}
            </p>
          </div>
          <p className="text-base font-semibold leading-snug" style={{ color: '#0F172A' }}>
            {isZh
              ? '主要指标在正常范围内。LDL 偏高，建议关注饮食。'
              : 'Most values are in normal range. LDL slightly elevated — consider diet review.'}
          </p>
        </div>

        {/* extracted metrics 浮卡 */}
        <div
          className="absolute z-30 rounded-2xl bg-white px-4 py-3 shadow-xl"
          style={{
            right: '40px',
            top: '700px',
            transform: 'rotate(3deg)',
            border: '1.5px solid #15803D33',
            maxWidth: '240px',
          }}
        >
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5" style={{ color: '#15803D' }} />
            <p className="text-sm font-bold" style={{ color: '#0F172A' }}>
              {isZh ? '已识别 12 项' : '12 items extracted'}
            </p>
          </div>
          <p className="text-xs mt-1" style={{ color: '#64748B' }}>
            {isZh ? '自动归档 · 双语注释' : 'Auto-filed · bilingual notes'}
          </p>
        </div>

        <div
          className="absolute z-30 rounded-2xl bg-white px-4 py-3 shadow-xl"
          style={{
            right: '220px',
            top: '880px',
            transform: 'rotate(-3deg)',
            border: '1.5px solid #F59E0B33',
            maxWidth: '240px',
          }}
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5" style={{ color: '#F59E0B' }} fill="#F59E0B" stroke="white" strokeWidth={1.5} />
            <p className="text-sm font-bold" style={{ color: '#0F172A' }}>
              {isZh ? '一键加提醒' : 'Add reminder · 1 tap'}
            </p>
          </div>
          <p className="text-xs mt-1" style={{ color: '#64748B' }}>
            {isZh ? '关联到具体家人' : 'Linked to family member'}
          </p>
        </div>

        {/* 右下角说明 */}
        <div
          className="absolute"
          style={{ bottom: '40px', right: '40px', maxWidth: '380px', textAlign: 'right' }}
        >
          <p className="text-2xl font-bold" style={{ color: '#92400E', lineHeight: 1.3 }}>
            {t.afterDesc}
          </p>
        </div>
      </div>

      {/* ─── 副标题（底部，跨两半） ─── */}
      <div
        className="absolute inset-x-0 z-30 px-12 text-center"
        style={{ bottom: '180px' }}
      >
        <p
          className="mx-auto font-semibold"
          style={{
            fontSize: '22px',
            lineHeight: 1.45,
            color: '#0F172A',
            maxWidth: '760px',
            background: 'rgba(255,255,255,0.92)',
            padding: '14px 28px',
            borderRadius: '999px',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
          }}
        >
          {t.sub}
        </p>
      </div>

      {/* ─── 底部 chips + CTA ─── */}
      <div className="absolute inset-x-0 z-30 px-12" style={{ bottom: '60px' }}>
        <div className="mb-5 flex flex-wrap justify-center gap-2.5">
          {t.chips.map((c, i) => {
            const colors = ['#15803D', '#0EA5E9', '#7C3AED', '#92400E']
            return (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] font-bold shadow-md"
                style={{
                  background: colors[i % 4],
                  color: 'white',
                  transform: `rotate(${[-2, 1, -1, 2][i] || 0}deg)`,
                }}
              >
                {c}
              </span>
            )
          })}
        </div>
        <div className="flex items-center justify-center gap-3">
          <ArrowRight className="h-6 w-6" style={{ color: '#15803D' }} />
          <span className="text-xl font-extrabold" style={{ color: '#15803D' }}>
            {t.cta}
          </span>
        </div>
      </div>
    </div>
  )
}
