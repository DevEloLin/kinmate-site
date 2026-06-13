// Poster 9 — 宠物档案（组 C：深色 / 极简焦点 变体）。
// 暖橙手绘 doodle 风：大 emoji 宠物头 + 单 phone + 浮卡 + 衬线斜体大字。
// 区别于其它组 C：暖色不深色（组 C 内的"亮极简"变体）。
import { MktPetScreen } from '@/components/app-mockup/marketing-screens'
import { PhoneFrame } from '@/components/app-mockup/phone-frame'
import { Syringe, Scale, Calendar, PawPrint } from 'lucide-react'

type Locale = 'en' | 'zh'

export function Poster9PetRecords({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh
    ? {
        eyebrow: '宠物 · 也是家人',
        title1: '猫也好，狗也好。',
        title2: '一份档案，',
        title3: '陪它一生。',
        sub: '疫苗记录、体重变化、就诊摘要 —— 下次看兽医前一秒，全在你手里。',
        floaters: [
          { icon: Syringe,  label: isZh ? '疫苗已就绪' : 'Vaccines current',  sub: isZh ? '下次：8月12' : 'Next: Aug 12'  },
          { icon: Scale,    label: isZh ? '体重稳定' : 'Weight steady',       sub: isZh ? '6 个月趋势' : '6-month trend' },
          { icon: Calendar, label: isZh ? '驱虫记录' : 'Deworming log',       sub: isZh ? '每月 / 每季' : 'Monthly · quarterly' },
        ],
        cta: '宠物的故事，从此有归处',
        trial: '60 天免费试用',
      }
    : {
        eyebrow: 'PETS · ALSO FAMILY',
        title1: 'Cat or dog.',
        title2: 'One profile,',
        title3: 'their whole life.',
        sub: 'Vaccines, weight, vet visit notes — all in your pocket the second before the next appointment.',
        floaters: [
          { icon: Syringe,  label: 'Vaccines current', sub: 'Next: Aug 12' },
          { icon: Scale,    label: 'Weight steady',    sub: '6-month trend' },
          { icon: Calendar, label: 'Deworming log',    sub: 'Monthly · quarterly' },
        ],
        cta: 'A home for their story',
        trial: '60-day free trial',
      }

  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: 'linear-gradient(165deg, #FFF7ED 0%, #FED7AA 40%, #FDBA74 100%)', fontFamily: 'ui-sans-serif, -apple-system, "SF Pro Display", system-ui' }}>
      {/* 装饰：手绘 doodle 风曲线（SVG）+ 几个小爪印 emoji */}
      <svg className="pointer-events-none absolute" style={{ top: '60px', right: '120px' }} width="240" height="180" viewBox="0 0 240 180">
        <path d="M 20 100 Q 60 30 120 80 T 220 60" stroke="#9A3412" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.4" strokeDasharray="6,8" />
      </svg>
      <svg className="pointer-events-none absolute" style={{ bottom: '300px', left: '80px' }} width="200" height="200" viewBox="0 0 200 200">
        <path d="M 20 100 Q 80 20 140 100 T 180 160" stroke="#7C2D12" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.35" strokeDasharray="8,10" />
      </svg>
      {[
        { top: '300px', left: '60px',  rot: -20, size: '60px' },
        { top: '1500px', right: '120px', rot: 15, size: '50px' },
        { top: '800px',  right: '50px',  rot: 30, size: '55px' },
        { top: '1200px', left: '50px',   rot: -10, size: '50px' },
      ].map((p, i) => (
        <span key={i} className="pointer-events-none absolute" style={{ ...p, fontSize: p.size, transform: `rotate(${p.rot}deg)`, opacity: 0.5 }}>🐾</span>
      ))}

      <div className="absolute left-12 top-12 z-30">
        <p className="text-2xl font-extrabold tracking-tight" style={{ color: '#7C2D12' }}>KinMate</p>
        <p className="text-sm font-bold mt-1" style={{ color: '#9A3412', letterSpacing: '0.14em' }}>{t.eyebrow}</p>
      </div>
      <span className="absolute right-12 top-14 z-30 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase shadow-sm" style={{ background: '#7C2D12', color: 'white', letterSpacing: '0.16em' }}>BETA</span>

      {/* 大标题（衬线斜体） */}
      <div className="absolute left-12 z-20" style={{ top: '170px', maxWidth: '720px' }}>
        <h1 className="font-extrabold" style={{ fontFamily: 'ui-serif, Georgia, "Times New Roman", serif', fontSize: '88px', lineHeight: 0.98, letterSpacing: '-1.8px', color: '#0F172A' }}>
          {t.title1}<br />
          <span style={{ color: '#9A3412', fontStyle: 'italic' }}>{t.title2}</span><br />
          <span style={{ color: '#7C2D12' }}>{t.title3}</span>
        </h1>
      </div>

      {/* 大宠物 emoji（右上 dominant） */}
      <div className="pointer-events-none absolute z-10" style={{ right: '40px', top: '480px' }}>
        <span style={{ fontSize: '320px', filter: 'drop-shadow(0 25px 50px rgba(124,45,18,0.35))' }}>🐈</span>
      </div>

      {/* 单 phone（左下，倾斜） */}
      <div className="absolute z-10" style={{ left: '80px', top: '780px', transform: 'rotate(-6deg)', filter: 'drop-shadow(0 35px 60px rgba(124,45,18,0.35))' }}>
        <PhoneFrame width={420}><MktPetScreen locale={locale} /></PhoneFrame>
      </div>

      {/* 3 个浮卡（右侧错落） */}
      {t.floaters.map((f, i) => {
        const positions: any = [
          { top: '880px',  right: '80px',  rotate: '5deg'  },
          { top: '1100px', right: '60px',  rotate: '-3deg' },
          { top: '1320px', right: '100px', rotate: '4deg'  },
        ][i]
        const Icon = f.icon
        return (
          <div key={i} className="absolute z-20 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur" style={{ ...positions, border: '1.5px solid #FED7AA', transform: `rotate(${positions.rotate})`, maxWidth: '260px' }}>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: '#F973161A' }}><Icon className="h-5 w-5" style={{ color: '#F97316' }} /></span>
              <div className="leading-tight">
                <p className="text-[15px] font-bold" style={{ color: '#0F172A' }}>{f.label}</p>
                <p className="text-xs font-medium" style={{ color: '#92400E' }}>{f.sub}</p>
              </div>
            </div>
          </div>
        )
      })}

      {/* 副标题 + CTA */}
      <div className="absolute inset-x-0 z-30 px-12 text-center" style={{ bottom: '60px' }}>
        <p className="mx-auto mb-5 font-medium" style={{ fontSize: '20px', lineHeight: 1.45, color: '#451A03', maxWidth: '720px' }}>{t.sub}</p>
        <div className="flex items-center justify-center gap-4">
          <PawPrint className="h-7 w-7" style={{ color: '#9A3412' }} />
          <span className="text-2xl font-extrabold" style={{ color: '#9A3412', fontFamily: 'ui-serif, Georgia, serif', fontStyle: 'italic' }}>{t.cta}</span>
          <span className="text-base font-bold" style={{ color: '#7C2D12' }}>· {t.trial}</span>
        </div>
      </div>
    </div>
  )
}
