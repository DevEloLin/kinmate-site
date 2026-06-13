// Poster 18 v2 — iPhone Lock Screen 真实锁屏（黑色 + 时钟 + 多通知卡片）。
import { Bell, Sparkles, Calendar, Heart, ShieldCheck, Star } from 'lucide-react'
type Locale = 'en' | 'zh'

export function Poster18LocalFirst({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh'
  const t = isZh ? {
    chip: 'BETA · 公开测试',
    time: '9:41', day: '六月十三日 · 星期五',
    notifs: [
      { icon: Bell,        appName: 'KinMate', label: '提醒 · 9:00',    text: '日常物品 · 妈妈 1 / 你 2',          time: '现在'   },
      { icon: Sparkles,    appName: 'KinMate', label: 'AI 解读完成',     text: '12 项关键值已提取到本文件',          time: '5 分钟前' },
      { icon: Calendar,    appName: 'KinMate', label: '本周提醒 6/7',    text: '继续保持 · streak 28 天',           time: '8:00'   },
      { icon: ShieldCheck, appName: 'KinMate', label: '加密备份完成',     text: '已存到你的 iCloud Drive',           time: '昨晚'   },
    ],
    bottomText: 'KinMate · 本地优先 · 端到端加密',
    rating: '4.9 · 1,200+',
    cta: '60 天免费试用',
  } : {
    chip: 'BETA · OPEN TESTING',
    time: '9:41', day: 'Friday, June 13',
    notifs: [
      { icon: Bell,        appName: 'KinMate', label: 'Reminder · 9:00',  text: 'Daily items · Mom 1 / You 2',         time: 'now'    },
      { icon: Sparkles,    appName: 'KinMate', label: 'AI summary ready', text: '12 key values pulled from your file', time: '5m ago' },
      { icon: Calendar,    appName: 'KinMate', label: '6 / 7 this week',  text: 'Keep it up · 28-day streak',          time: '8:00'   },
      { icon: ShieldCheck, appName: 'KinMate', label: 'Backup encrypted', text: 'Saved to your iCloud Drive',          time: 'last night' },
    ],
    bottomText: 'KinMate · Local-first · End-to-end encrypted',
    rating: '4.9 · 1,200+',
    cta: '60-day free trial',
  }
  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: 'radial-gradient(ellipse at center, #1E1B4B 0%, #0F172A 50%, #020617 100%)', fontFamily: '-apple-system, "SF Pro Display", system-ui' }}>
      {/* 模糊光斑模仿壁纸景深 */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl" style={{ background: '#7C3AED' }} />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[420px] w-[420px] rounded-full opacity-25 blur-3xl" style={{ background: '#0EA5E9' }} />

      {/* 顶部状态栏（模拟 iOS） */}
      <div className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-12 pt-10 text-white font-semibold" style={{ fontSize: '17px' }}>
        <span>{t.time}</span>
        <div className="flex items-center gap-2">
          <span className="text-base">●●●●●</span>
        </div>
      </div>

      {/* Top label (BETA) */}
      <span className="absolute right-12 top-20 z-30 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-bold uppercase" style={{ background: 'rgba(255,255,255,0.12)', color: 'white', letterSpacing: '0.14em' }}>{t.chip}</span>

      {/* 大时钟 9:41 */}
      <div className="absolute left-1/2 z-20 -translate-x-1/2 text-center" style={{ top: '160px' }}>
        <p className="font-thin text-white" style={{ fontSize: '240px', lineHeight: 0.86, letterSpacing: '-12px' }}>{t.time}</p>
        <p className="text-2xl font-medium mt-1 text-white/85">{t.day}</p>
      </div>

      {/* 4 个 push notification 卡片堆叠 */}
      <div className="absolute inset-x-0 z-10 flex flex-col items-center gap-3" style={{ top: '740px', padding: '0 60px' }}>
        {t.notifs.map((n, i) => {
          const Icon = n.icon
          return (
            <div key={i} className="w-full rounded-3xl px-5 py-4 backdrop-blur-2xl" style={{ background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.18)', maxWidth: '900px' }}>
              <div className="flex items-start gap-3">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl" style={{ background: 'linear-gradient(135deg, #15803D, #059669)' }}>
                  <Icon className="h-6 w-6 text-white" />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-base font-bold text-white">{n.appName} · {n.label}</p>
                    <p className="text-sm text-white/60">{n.time}</p>
                  </div>
                  <p className="text-base text-white/90 mt-1">{n.text}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* 底部：rating + cta */}
      <div className="absolute inset-x-0 z-30 px-12" style={{ bottom: '70px' }}>
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            {[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5" fill="#FCD34D" stroke="#FCD34D" />)}
            <span className="ml-1 text-base font-bold text-white">{t.rating}</span>
          </div>
          <p className="text-base font-bold text-white/80">{t.bottomText}</p>
          <p className="text-xl font-extrabold" style={{ color: '#FCD34D' }}>★ {t.cta}</p>
        </div>
      </div>
    </div>
  )
}
