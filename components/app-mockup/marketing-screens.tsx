// 营销级 KinMate 屏幕组件 —— 严格按真实 Flutter UI 代码结构还原。
// 比 screens.tsx 的落地页版更密、更真，专为 1080×1920 商店宣传图设计。
// 用关系称谓，不出现真实人名。
// 8 个 Screen：Home / AIReport / Trends / Medication / Family / Pet / Emergency / BYOC

import {
  Home, Users, PawPrint, Settings, Pill, Bell, Activity, Droplet,
  ChevronRight, ChevronLeft, Plus, HeartPulse, Heart, ClipboardList,
  CloudOff, Cloud, UserRound, FileText, Stethoscope, Sparkles,
  Camera, Calendar, AlertTriangle, ShieldCheck, Phone, QrCode,
  Eye, ArrowUp, ArrowDown, MoreHorizontal, Share2, Bookmark,
  CheckCircle2, Circle, Syringe, ScanLine, Lock, Hospital,
  HardDriveDownload, RefreshCw, FileImage, FlaskConical, MapPin,
} from 'lucide-react'
import clsx from 'clsx'

type Locale = 'en' | 'zh'

/* 配色（来自 app/app_theme.dart） */
const PRIMARY = '#15803D'
const SECONDARY = '#059669'
const ACCENT = '#D97706'
const BG = '#F0FDF4'
const MED = '#3B82F6'
const PET = '#F97316'
const HEALTH = '#22C55E'
const CARE = '#EAB308'
const INK = '#0F172A'
const MUTED = '#64748B'
const BORDER = '#E2EFE7'

/* ─────────────────── 通用：状态栏 + 底部 nav ─────────────────── */
function BottomNav({ active, locale }: { active: number; locale: Locale }) {
  const items = [Home, Users, PawPrint, Settings]
  const labels = locale === 'zh' ? ['首页', '家庭', '宠物', '设置'] : ['Home', 'Family', 'Pets', 'Settings']
  return (
    <div className="absolute inset-x-0 bottom-0 flex h-[64px] items-center justify-around border-t bg-white px-1" style={{ borderColor: BORDER }}>
      {items.map((Icon, i) => {
        const on = i === active
        return (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <span className={clsx('flex h-9 w-14 items-center justify-center rounded-full')} style={on ? { background: '#15803D1f' } : {}}>
              <Icon className="h-[20px] w-[20px]" style={{ color: on ? PRIMARY : MUTED }} />
            </span>
            <span className="text-[10px]" style={{ color: on ? PRIMARY : MUTED, fontWeight: on ? 600 : 400 }}>{labels[i]}</span>
          </div>
        )
      })}
    </div>
  )
}

function AppBar({ title, locale, actions }: { title: string; locale?: Locale; actions?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between px-4 py-3" style={{ background: BG }}>
      <ChevronLeft className="h-[22px] w-[22px]" style={{ color: INK }} />
      <p className="text-[15px] font-semibold" style={{ color: INK }}>{title}</p>
      <div className="flex items-center gap-2">{actions ?? <span className="h-[22px] w-[22px]" />}</div>
    </div>
  )
}

/* ═══════════════════ 1. HOME / Today's care ═══════════════════ */
export function MktHomeScreen({ locale = 'en' }: { locale?: Locale }) {
  const t = locale === 'zh' ? {
    greet: '早上好', date: '6 月 10 日 · 星期三',
    byoc: '把数据安全备份到你的云盘', byocSub: '连接 iCloud / Google Drive — 端到端加密',
    ai: '2 份 AI 解读等待确认', aiSub: '轻点查看 AI 从体检报告读出的内容',
    myHealth: '我的健康主页', myHealthSub: '170 cm · 65 kg · BMI 22.5',
    family: '家庭', familySub: '一眼了解全家健康',
    overview: '今日概览', safety: '平安打卡', pending: '2', med: '服药', pets: '宠物',
    remind: '待办提醒', viewAll: '全部', medName: '降压药', medTime: '08:00 · 早餐后',
    medFor: '妈妈', done: '已服', skip: '跳过',
    recent: '最新报告', addRecord: '添加记录',
    rep1: '血脂全套', rep1d: '5 月 28 日', rep2: '血常规', rep2d: '5 月 12 日',
    nav: ['首页', '家庭', '宠物', '设置'],
  } : {
    greet: 'Good morning', date: 'Wed · Jun 10',
    byoc: 'Back up to your own cloud', byocSub: 'iCloud / Google Drive — end-to-end encrypted',
    ai: '2 AI readings to review', aiSub: 'Tap to confirm what AI extracted',
    myHealth: 'My Health Profile', myHealthSub: '170 cm · 65 kg · BMI 22.5',
    family: 'Family', familySub: "Everyone's records at a glance",
    overview: "Today's Overview", safety: 'Safety check', pending: '2', med: 'Meds', pets: 'Pets',
    remind: 'Reminders', viewAll: 'View all', medName: 'Blood pressure pill', medTime: '08:00 · after breakfast',
    medFor: 'for Mom', done: 'Taken', skip: 'Skip',
    recent: 'Recent reports', addRecord: 'Add record',
    rep1: 'Lipid panel', rep1d: 'May 28', rep2: 'Blood count', rep2d: 'May 12',
    nav: ['Home', 'Family', 'Pets', 'Settings'],
  }
  const overview = [
    { Icon: Heart, label: t.safety, value: t.pending, color: CARE },
    { Icon: Pill, label: t.med, value: '2', color: MED },
    { Icon: PawPrint, label: t.pets, value: '1', color: PET },
  ]
  return (
    <div className="flex h-full flex-col" style={{ background: BG }}>
      <div className="flex-1 space-y-3 overflow-hidden px-4 pt-4">
        {/* greeting + bell */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-[26px] font-bold leading-tight" style={{ color: INK, fontFamily: 'ui-serif, Georgia, serif' }}>{t.greet}</h1>
            <p className="mt-1 text-[12px]" style={{ color: MUTED }}>{t.date}</p>
          </div>
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full" style={{ color: MUTED }}>
            <Bell className="h-[20px] w-[20px]" />
            <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full text-[8px] font-bold text-white" style={{ background: ACCENT }}>2</span>
          </span>
        </div>

        {/* AI followup banner */}
        <div className="flex items-center gap-3 rounded-2xl p-3" style={{ background: '#FEF3C7', border: '1px solid #FDE68A' }}>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: '#FDE68A' }}>
            <Sparkles className="h-[18px] w-[18px]" style={{ color: '#B45309' }} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[12.5px] font-semibold" style={{ color: '#92400E' }}>{t.ai}</p>
            <p className="mt-0.5 line-clamp-1 text-[10px]" style={{ color: '#B45309' }}>{t.aiSub}</p>
          </div>
          <ChevronRight className="h-4 w-4 shrink-0" style={{ color: '#B45309' }} />
        </div>

        {/* BYOC banner */}
        <div className="flex items-center gap-3 rounded-2xl p-3" style={{ background: '#15803D14' }}>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: '#15803D22' }}>
            <CloudOff className="h-[18px] w-[18px]" style={{ color: PRIMARY }} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[12.5px] font-semibold" style={{ color: INK }}>{t.byoc}</p>
            <p className="mt-0.5 line-clamp-1 text-[10px]" style={{ color: MUTED }}>{t.byocSub}</p>
          </div>
          <ChevronRight className="h-4 w-4 shrink-0" style={{ color: MUTED }} />
        </div>

        {/* shortcuts */}
        <div className="grid grid-cols-2 gap-2.5">
          <ShortcutTile icon={UserRound} title={t.myHealth} sub={t.myHealthSub} accent={PRIMARY} />
          <ShortcutTile icon={Users} title={t.family} sub={t.familySub} accent={PRIMARY} />
        </div>

        {/* today overview */}
        <div className="rounded-2xl border bg-white p-3 shadow-sm" style={{ borderColor: BORDER }}>
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg" style={{ background: '#15803D1a' }}>
              <ClipboardList className="h-3.5 w-3.5" style={{ color: PRIMARY }} />
            </span>
            <p className="text-[12.5px] font-semibold" style={{ color: INK }}>{t.overview}</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {overview.map((o) => (
              <div key={o.label} className="flex flex-col items-center rounded-xl py-3" style={{ background: `${o.color}1a` }}>
                <o.Icon className="h-[20px] w-[20px]" style={{ color: o.color }} />
                <span className="mt-1.5 text-[9.5px]" style={{ color: MUTED }}>{o.label}</span>
                <span className="text-[14px] font-bold" style={{ color: o.color }}>{o.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* reminders */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg" style={{ background: '#15803D1a' }}>
              <Stethoscope className="h-3.5 w-3.5" style={{ color: PRIMARY }} />
            </span>
            <p className="text-[12.5px] font-semibold" style={{ color: INK }}>{t.remind}</p>
          </div>
          <span className="text-[10.5px] font-medium" style={{ color: PRIMARY }}>{t.viewAll}</span>
        </div>
        <div className="rounded-2xl border bg-white p-3 shadow-sm" style={{ borderColor: BORDER }}>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: `${MED}1f` }}>
              <Pill className="h-[20px] w-[20px]" style={{ color: MED }} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-semibold" style={{ color: INK }}>{t.medName}</p>
              <p className="text-[10.5px]" style={{ color: MUTED }}>{t.medTime} · {t.medFor}</p>
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            <span className="flex flex-1 items-center justify-center gap-1 rounded-lg py-2 text-[11px] font-semibold text-white" style={{ background: HEALTH }}>
              <CheckCircle2 className="h-3.5 w-3.5" /> {t.done}
            </span>
            <span className="flex-1 rounded-lg border py-2 text-center text-[11px] font-medium" style={{ borderColor: BORDER, color: MUTED }}>{t.skip}</span>
          </div>
        </div>
      </div>

      {/* FAB */}
      <div className="absolute bottom-[80px] right-4 z-10 flex h-14 w-14 items-center justify-center rounded-2xl shadow-xl" style={{ background: PRIMARY }}>
        <Plus className="h-7 w-7 text-white" />
      </div>

      <BottomNav active={0} locale={locale} />
    </div>
  )
}

function ShortcutTile({ icon: Icon, title, sub, accent }: { icon: typeof UserRound; title: string; sub: string; accent: string }) {
  return (
    <div className="rounded-2xl border bg-white p-3 shadow-sm" style={{ borderColor: BORDER }}>
      <span className="flex h-11 w-11 items-center justify-center rounded-full" style={{ background: `${accent}1a` }}>
        <Icon className="h-5 w-5" style={{ color: accent }} />
      </span>
      <p className="mt-2.5 text-[12.5px] font-semibold leading-tight" style={{ color: INK }}>{title}</p>
      <p className="mt-1 text-[10px] leading-snug" style={{ color: MUTED }}>{sub}</p>
    </div>
  )
}

/* ═══════════════════ 2. AI Report Detail ═══════════════════ */
export function MktAIReportScreen({ locale = 'en' }: { locale?: Locale }) {
  const t = locale === 'zh' ? {
    title: '报告详情', reportName: '血脂全套体检', date: '5 月 28 日', for: '为 妈妈',
    aiBadge: 'AI 解读', aiSummary: '本次血脂四项中，总胆固醇与低密度脂蛋白处于临界偏高，其他指标正常。建议关注饮食，3 个月后复查。',
    indicators: '关键指标', normal: '正常', borderline: '临界', high: '偏高',
    name1: '总胆固醇', val1: '5.2', unit1: 'mmol/L', ref1: '< 5.0',
    name2: '低密度脂蛋白', val2: '3.6', unit2: 'mmol/L', ref2: '< 3.0',
    name3: '高密度脂蛋白', val3: '1.4', unit3: 'mmol/L', ref3: '> 1.0',
    name4: '甘油三酯', val4: '1.5', unit4: 'mmol/L', ref4: '< 1.7',
    advice: '下一步建议', a1: '加入「降胆固醇」用药提醒', a2: '安排 3 个月后复查日期',
    disclaimer: 'AI 解读仅供参考，不构成医疗建议。',
  } : {
    title: 'Report detail', reportName: 'Lipid Panel', date: 'May 28', for: 'for Mom',
    aiBadge: 'AI Reading', aiSummary: 'Total cholesterol and LDL are borderline high; other markers normal. Consider dietary attention and a recheck in 3 months.',
    indicators: 'Key indicators', normal: 'Normal', borderline: 'Borderline', high: 'High',
    name1: 'Total cholesterol', val1: '5.2', unit1: 'mmol/L', ref1: '< 5.0',
    name2: 'LDL', val2: '3.6', unit2: 'mmol/L', ref2: '< 3.0',
    name3: 'HDL', val3: '1.4', unit3: 'mmol/L', ref3: '> 1.0',
    name4: 'Triglycerides', val4: '1.5', unit4: 'mmol/L', ref4: '< 1.7',
    advice: 'Next steps', a1: 'Add reminder for cholesterol med', a2: 'Schedule recheck in 3 months',
    disclaimer: 'AI reading is a reference, not medical advice.',
  }
  const rows = [
    { label: t.name1, val: t.val1, unit: t.unit1, ref: t.ref1, status: 'borderline' },
    { label: t.name2, val: t.val2, unit: t.unit2, ref: t.ref2, status: 'borderline' },
    { label: t.name3, val: t.val3, unit: t.unit3, ref: t.ref3, status: 'normal' },
    { label: t.name4, val: t.val4, unit: t.unit4, ref: t.ref4, status: 'normal' },
  ]
  return (
    <div className="flex h-full flex-col" style={{ background: BG }}>
      {/* faux report image header */}
      <div className="relative h-[180px] overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-xl bg-white/85 p-3 shadow-lg" style={{ width: '70%' }}>
            <div className="mb-1.5 flex items-center justify-between">
              <FlaskConical className="h-3.5 w-3.5" style={{ color: MED }} />
              <span className="text-[7px]" style={{ color: MUTED }}>2026-05-28</span>
            </div>
            <div className="space-y-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-1 rounded" style={{ background: '#CBD5E1', width: `${60 + (i * 6) % 30}%` }} />
              ))}
            </div>
          </div>
        </div>
        {/* top bar overlay */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/85 backdrop-blur">
            <ChevronLeft className="h-[18px] w-[18px]" style={{ color: INK }} />
          </span>
          <div className="flex gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/85 backdrop-blur">
              <Share2 className="h-[16px] w-[16px]" style={{ color: INK }} />
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/85 backdrop-blur">
              <MoreHorizontal className="h-[16px] w-[16px]" style={{ color: INK }} />
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-3 overflow-hidden px-4 pt-3">
        {/* metadata */}
        <div>
          <h2 className="text-[18px] font-bold leading-tight" style={{ color: INK }}>{t.reportName}</h2>
          <div className="mt-1 flex items-center gap-2 text-[11px]" style={{ color: MUTED }}>
            <Calendar className="h-3 w-3" /> {t.date}
            <span>·</span>
            <span>{t.for}</span>
            <span className="ml-auto flex items-center gap-1 rounded-full px-2 py-0.5" style={{ background: '#15803D14', color: PRIMARY }}>
              <ShieldCheck className="h-3 w-3" /> Synced
            </span>
          </div>
        </div>

        {/* AI summary card */}
        <div className="rounded-2xl border p-3 shadow-sm" style={{ background: 'linear-gradient(135deg, #ECFDF5, #FFFFFF)', borderColor: '#A7F3D0' }}>
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ background: PRIMARY }}>
                <Sparkles className="h-3.5 w-3.5 text-white" />
              </span>
              <p className="text-[12px] font-semibold" style={{ color: PRIMARY }}>{t.aiBadge}</p>
            </div>
            <span className="text-[9px] font-semibold uppercase tracking-wider" style={{ color: MUTED }}>GPT-4o</span>
          </div>
          <p className="text-[11.5px] leading-relaxed" style={{ color: INK }}>{t.aiSummary}</p>
        </div>

        {/* indicators */}
        <div className="rounded-2xl border bg-white p-3 shadow-sm" style={{ borderColor: BORDER }}>
          <div className="mb-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="h-3.5 w-3.5" style={{ color: PRIMARY }} />
              <p className="text-[12.5px] font-semibold" style={{ color: INK }}>{t.indicators}</p>
            </div>
            <span className="text-[10px] font-semibold" style={{ color: MUTED }}>4</span>
          </div>
          {rows.map((r, i) => {
            const isAlert = r.status === 'borderline'
            return (
              <div key={r.label} className={clsx('flex items-center gap-3 py-2', i < rows.length - 1 && 'border-b')} style={i < rows.length - 1 ? { borderColor: '#F1F5F9' } : {}}>
                <span className="h-2 w-2 rounded-full" style={{ background: isAlert ? ACCENT : HEALTH }} />
                <p className="flex-1 text-[11.5px] font-medium" style={{ color: INK }}>{r.label}</p>
                <div className="text-right">
                  <p className="text-[12.5px] font-bold" style={{ color: isAlert ? ACCENT : INK }}>
                    {r.val} <span className="text-[9px] font-normal" style={{ color: MUTED }}>{r.unit}</span>
                  </p>
                  <p className="text-[9px]" style={{ color: MUTED }}>ref {r.ref}</p>
                </div>
                <span className="ml-1 rounded-full px-2 py-0.5 text-[8.5px] font-bold" style={{
                  background: isAlert ? '#FEF3C7' : '#DCFCE7',
                  color: isAlert ? '#92400E' : '#166534',
                }}>{isAlert ? t.borderline : t.normal}</span>
              </div>
            )
          })}
        </div>

        {/* next steps */}
        <div className="rounded-2xl border bg-white p-3 shadow-sm" style={{ borderColor: BORDER }}>
          <div className="mb-2 flex items-center gap-2">
            <ClipboardList className="h-3.5 w-3.5" style={{ color: PRIMARY }} />
            <p className="text-[12.5px] font-semibold" style={{ color: INK }}>{t.advice}</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2.5 rounded-xl p-2.5" style={{ background: `${MED}10` }}>
              <span className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ background: `${MED}22` }}>
                <Pill className="h-3.5 w-3.5" style={{ color: MED }} />
              </span>
              <p className="flex-1 text-[11px] font-medium" style={{ color: INK }}>{t.a1}</p>
              <span className="rounded-full px-2 py-1 text-[9.5px] font-bold text-white" style={{ background: PRIMARY }}>+ Add</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl p-2.5" style={{ background: `${ACCENT}10` }}>
              <span className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ background: `${ACCENT}22` }}>
                <Calendar className="h-3.5 w-3.5" style={{ color: ACCENT }} />
              </span>
              <p className="flex-1 text-[11px] font-medium" style={{ color: INK }}>{t.a2}</p>
              <span className="rounded-full px-2 py-1 text-[9.5px] font-bold text-white" style={{ background: PRIMARY }}>+ Add</span>
            </div>
          </div>
        </div>
      </div>

      {/* disclaimer footer */}
      <div className="border-t px-4 py-2.5" style={{ borderColor: BORDER, background: '#FFFBEB' }}>
        <p className="text-[9.5px] leading-snug" style={{ color: '#92400E' }}>ⓘ {t.disclaimer}</p>
      </div>
    </div>
  )
}

/* ═══════════════════ 3. Trends (HealthScreen 升级版) ═══════════════════ */
export function MktTrendsScreen({ locale = 'en' }: { locale?: Locale }) {
  const t = locale === 'zh' ? {
    title: '健康趋势', period: '30 天 · 妈妈',
    metrics: ['血压', '血糖', '血脂', '肝功能'],
    windows: ['30 天', '90 天', '180 天', '1 年'],
    trend: '收缩压趋势', latest: '最新', avg: '平均', min: '最低', max: '最高', unit: 'mmHg',
    aiTitle: 'AI 趋势洞察', aiText: '过去 30 天血压总体平稳下降，平均值 121。建议继续保持当前服药节奏。',
    aiBy: '由 AI 提供 · 仅供参考',
    attention: '需要关注', attCount: '1', all: '全部指标',
    item1: '血压（收缩）', item1v: '132', item1d: '↓ 8% 自 3 月',
    item2: '空腹血糖', item2v: '5.8', item2d: '稳定',
    item2u: 'mmol/L',
  } : {
    title: 'Health trends', period: '30 days · Mom',
    metrics: ['BP', 'Glucose', 'Lipids', 'Liver'],
    windows: ['30d', '90d', '180d', '1y'],
    trend: 'Systolic BP', latest: 'Latest', avg: 'Average', min: 'Min', max: 'Max', unit: 'mmHg',
    aiTitle: 'AI Trend Insight', aiText: 'BP trending steadily down over the past 30 days, average 121. Keep up the current medication cadence.',
    aiBy: 'AI-generated · reference only',
    attention: 'Needs attention', attCount: '1', all: 'All metrics',
    item1: 'Systolic BP', item1v: '132', item1d: '↓ 8% since Mar',
    item2: 'Fasting glucose', item2v: '5.8', item2d: 'stable',
    item2u: 'mmol/L',
  }
  const pts = [138, 134, 132, 128, 126, 124, 121, 122, 119, 118]
  const max = 142, min = 110
  const w = 220, h = 90
  const path = pts.map((v, i) => {
    const x = 10 + (i * 200) / (pts.length - 1)
    const y = 80 - ((v - min) / (max - min)) * 60
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`
  }).join(' ')
  const summary = [
    { l: t.latest, v: '118', c: PRIMARY },
    { l: t.avg, v: '121', c: PRIMARY },
    { l: t.min, v: '110', c: HEALTH },
    { l: t.max, v: '132', c: CARE },
  ]
  return (
    <div className="flex h-full flex-col" style={{ background: BG }}>
      <AppBar title={t.title} actions={<Plus className="h-[20px] w-[20px]" style={{ color: PRIMARY }} />} />
      <div className="flex-1 space-y-3 overflow-hidden px-4 pt-1">
        {/* period selector */}
        <div className="flex items-center gap-2 rounded-xl bg-white p-2 border" style={{ borderColor: BORDER }}>
          <Calendar className="h-3.5 w-3.5" style={{ color: PRIMARY }} />
          <div className="flex flex-1 gap-1.5 overflow-hidden">
            {t.windows.map((w, i) => (
              <span key={w} className={clsx('rounded-lg px-2.5 py-1 text-[10px]')} style={{
                background: i === 0 ? '#15803D1a' : 'transparent',
                color: i === 0 ? PRIMARY : MUTED,
                fontWeight: i === 0 ? 600 : 400,
              }}>{w}</span>
            ))}
          </div>
        </div>

        {/* AI Trend Insight card */}
        <div className="rounded-2xl border p-3 shadow-sm" style={{ background: 'linear-gradient(135deg, #ECFDF5 0%, #FFFFFF 100%)', borderColor: '#A7F3D0' }}>
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg" style={{ background: PRIMARY }}>
                <Sparkles className="h-3 w-3 text-white" />
              </span>
              <p className="text-[12px] font-semibold" style={{ color: PRIMARY }}>{t.aiTitle}</p>
            </div>
            <span className="rounded-full px-2 py-0.5 text-[8.5px] font-bold" style={{ background: '#DCFCE7', color: '#166534' }}>LOW RISK</span>
          </div>
          <p className="mb-2 text-[11px] leading-relaxed" style={{ color: INK }}>{t.aiText}</p>
          <p className="text-[8.5px]" style={{ color: MUTED }}>{t.aiBy}</p>
        </div>

        {/* metric chips */}
        <div className="flex flex-wrap gap-1.5">
          {t.metrics.map((m, i) => (
            <span key={m} className="rounded-lg px-2.5 py-1 text-[10px]" style={{
              background: i === 0 ? '#15803D1a' : 'white',
              color: i === 0 ? PRIMARY : MUTED,
              border: i === 0 ? 'none' : `1px solid ${BORDER}`,
              fontWeight: i === 0 ? 600 : 400,
            }}>{m}</span>
          ))}
        </div>

        {/* trend chart card */}
        <div className="rounded-2xl border bg-white p-3 shadow-sm" style={{ borderColor: BORDER }}>
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[12px] font-semibold" style={{ color: INK }}>{t.trend}</p>
            <span className="text-[10px]" style={{ color: MUTED }}>{t.period}</span>
          </div>
          <svg viewBox={`0 0 ${w} ${h}`} className="h-24 w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="bpfill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={PRIMARY} stopOpacity="0.28" />
                <stop offset="100%" stopColor={PRIMARY} stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* horizontal gridlines */}
            {[20, 40, 60].map((y) => (
              <line key={y} x1={10} y1={y} x2={210} y2={y} stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="2 3" />
            ))}
            <path d={`${path} L210 ${h} L10 ${h} Z`} fill="url(#bpfill)" />
            <path d={path} fill="none" stroke={PRIMARY} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {pts.map((v, i) => {
              const x = 10 + (i * 200) / (pts.length - 1)
              const y = 80 - ((v - min) / (max - min)) * 60
              const last = i === pts.length - 1
              return <circle key={i} cx={x} cy={y} r={last ? 3.4 : 2.4} fill={PRIMARY} stroke={last ? 'white' : 'none'} strokeWidth={last ? 1.5 : 0} />
            })}
          </svg>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {summary.map((s) => (
              <div key={s.l} className="text-center">
                <p className="text-[9px]" style={{ color: MUTED }}>{s.l}</p>
                <p className="text-[13px] font-bold" style={{ color: s.c }}>{s.v}</p>
              </div>
            ))}
          </div>
        </div>

        {/* attention */}
        <div className="flex items-center gap-2 px-1">
          <AlertTriangle className="h-3.5 w-3.5" style={{ color: ACCENT }} />
          <p className="text-[12px] font-semibold" style={{ color: INK }}>{t.attention}</p>
          <span className="rounded-full px-1.5 py-0.5 text-[9px] font-bold text-white" style={{ background: ACCENT }}>{t.attCount}</span>
        </div>

        <div className="rounded-2xl border bg-white p-3 shadow-sm flex items-center gap-3" style={{ borderColor: BORDER }}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: `${PRIMARY}1a` }}>
            <HeartPulse className="h-[18px] w-[18px]" style={{ color: PRIMARY }} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[12px] font-semibold" style={{ color: INK }}>{t.item1}</p>
            <p className="text-[10px] flex items-center gap-1 mt-0.5" style={{ color: HEALTH }}>
              <ArrowDown className="h-3 w-3" /> {t.item1d}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[15px] font-bold" style={{ color: INK }}>{t.item1v}</p>
            <p className="text-[8.5px]" style={{ color: MUTED }}>{t.unit}</p>
          </div>
        </div>
      </div>

      <BottomNav active={0} locale={locale} />
    </div>
  )
}

/* ═══════════════════ 4. Medication today ═══════════════════ */
export function MktMedicationScreen({ locale = 'en' }: { locale?: Locale }) {
  const t = locale === 'zh' ? {
    title: '今日用药', streak: '连续 28 天 · 服药依从',
    profile: '当前查看：妈妈',
    morning: '上午', noon: '中午', evening: '晚上',
    meds: [
      { time: '08:00', name: '氨氯地平', dose: '5 mg · 早餐后', taken: true, who: '妈妈', accent: MED },
      { time: '08:00', name: '阿托伐他汀', dose: '20 mg · 餐后', taken: true, who: '妈妈', accent: MED },
      { time: '12:00', name: '二甲双胍', dose: '500 mg · 饭后', taken: false, who: '爸爸', accent: ACCENT },
      { time: '20:00', name: '降压药', dose: '5 mg · 睡前', taken: false, who: '妈妈', accent: MED },
    ],
    all: '所有在用药品 (5)', addMed: '添加药物',
  } : {
    title: "Today's medications", streak: '28-day streak · adherence',
    profile: 'Viewing: Mom',
    morning: 'Morning', noon: 'Noon', evening: 'Evening',
    meds: [
      { time: '08:00', name: 'Amlodipine', dose: '5 mg · after breakfast', taken: true, who: 'Mom', accent: MED },
      { time: '08:00', name: 'Atorvastatin', dose: '20 mg · with food', taken: true, who: 'Mom', accent: MED },
      { time: '12:00', name: 'Metformin', dose: '500 mg · with lunch', taken: false, who: 'Dad', accent: ACCENT },
      { time: '20:00', name: 'Lisinopril', dose: '5 mg · before bed', taken: false, who: 'Mom', accent: MED },
    ],
    all: 'All active meds (5)', addMed: 'Add medication',
  }
  return (
    <div className="flex h-full flex-col" style={{ background: BG }}>
      <AppBar title={t.title} actions={<MoreHorizontal className="h-[20px] w-[20px]" style={{ color: INK }} />} />
      <div className="flex-1 space-y-3 overflow-hidden px-4 pt-1">
        {/* profile selector */}
        <div className="flex items-center gap-2 rounded-2xl bg-white p-2 border" style={{ borderColor: BORDER }}>
          <div className="flex flex-1 gap-2 overflow-hidden">
            {[
              { name: locale === 'zh' ? '全部' : 'All', color: PRIMARY, active: false },
              { name: locale === 'zh' ? '妈妈' : 'Mom', color: PET, active: true },
              { name: locale === 'zh' ? '爸爸' : 'Dad', color: MED, active: false },
              { name: locale === 'zh' ? '我' : 'Me', color: PRIMARY, active: false },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-1.5 rounded-xl px-2 py-1" style={{
                background: p.active ? '#15803D1a' : 'transparent',
              }}>
                <span className="flex h-6 w-6 items-center justify-center rounded-full text-[9.5px] font-bold text-white" style={{ background: p.color }}>
                  {p.name[0]}
                </span>
                <span className="text-[11px]" style={{ color: p.active ? PRIMARY : MUTED, fontWeight: p.active ? 600 : 400 }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* streak card */}
        <div className="rounded-2xl p-3.5" style={{ background: 'linear-gradient(135deg, #15803D 0%, #059669 100%)' }}>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/22">
              <Activity className="h-5 w-5 text-white" />
            </span>
            <div className="flex-1">
              <p className="text-[13px] font-bold text-white">{t.streak}</p>
              <div className="mt-1.5 flex h-1.5 overflow-hidden rounded-full bg-white/22">
                <span className="block h-full rounded-full bg-white" style={{ width: '84%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* med list */}
        <p className="px-1 text-[10px] font-semibold uppercase tracking-wider" style={{ color: MUTED }}>{t.morning}</p>
        {t.meds.slice(0, 2).map((m, i) => <MedRow key={i} m={m} />)}
        <p className="px-1 text-[10px] font-semibold uppercase tracking-wider" style={{ color: MUTED }}>{t.noon}</p>
        {t.meds.slice(2, 3).map((m, i) => <MedRow key={i} m={m} />)}
        <p className="px-1 text-[10px] font-semibold uppercase tracking-wider" style={{ color: MUTED }}>{t.evening}</p>
        {t.meds.slice(3, 4).map((m, i) => <MedRow key={i} m={m} />)}
      </div>

      {/* FAB */}
      <div className="absolute bottom-[80px] right-4 z-10 flex h-14 items-center gap-2 rounded-2xl px-4 shadow-xl" style={{ background: PRIMARY }}>
        <Plus className="h-5 w-5 text-white" />
        <span className="text-[12px] font-semibold text-white">{t.addMed}</span>
      </div>
      <BottomNav active={0} locale={locale} />
    </div>
  )
}

function MedRow({ m }: { m: { time: string; name: string; dose: string; taken: boolean; who: string; accent: string } }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border bg-white p-3 shadow-sm" style={{
      borderColor: BORDER,
      borderLeft: `3px solid ${m.accent}`,
      opacity: m.taken ? 0.65 : 1,
    }}>
      <div className="text-center min-w-[42px]">
        <p className="text-[14px] font-bold" style={{ color: INK }}>{m.time}</p>
      </div>
      <span className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: `${m.accent}1f` }}>
        <Pill className="h-5 w-5" style={{ color: m.accent }} />
      </span>
      <div className="min-w-0 flex-1">
        <p className={clsx('text-[12.5px] font-semibold', m.taken && 'line-through')} style={{ color: INK }}>{m.name}</p>
        <p className="text-[10px]" style={{ color: MUTED }}>{m.dose} · {m.who}</p>
      </div>
      {m.taken ? (
        <CheckCircle2 className="h-7 w-7" style={{ color: HEALTH }} />
      ) : (
        <Circle className="h-7 w-7" style={{ color: '#CBD5E1' }} strokeWidth={2.4} />
      )}
    </div>
  )
}

/* ═══════════════════ 5. Family member detail ═══════════════════ */
export function MktFamilyDetailScreen({ locale = 'en' }: { locale?: Locale }) {
  const t = locale === 'zh' ? {
    title: '家庭成员', name: '妈妈', age: '1964 · 62 岁', role: '成员',
    quickStats: ['2 个用药', '12 份报告', '下次复查：周四'],
    healthSnapshot: '个人速览', blood: '血型', bloodVal: 'A+',
    allergy: '过敏', allergyVal: '青霉素',
    condition: '基础病史', conditionVal: '高血压 · 糖尿病',
    recent: '最近共享', share1: '血脂全套体检', share1d: '5 月 28 日',
    share2: '降压处方', share2d: '5 月 15 日', share3: '眼科复查', share3d: '4 月 14 日',
    careTask: '关怀任务', careDesc: '每天 09:00 平安打卡',
  } : {
    title: 'Family member', name: 'Mom', age: 'b. 1964 · 62 yrs', role: 'Member',
    quickStats: ['2 medications', '12 records', 'Recheck Thu'],
    healthSnapshot: 'Personal snapshot', blood: 'Blood', bloodVal: 'A+',
    allergy: 'Allergy', allergyVal: 'Penicillin',
    condition: 'Conditions', conditionVal: 'Hypertension · Type 2 diabetes',
    recent: 'Recently shared', share1: 'Lipid panel', share1d: 'May 28',
    share2: 'BP record', share2d: 'May 15', share3: 'Eye exam', share3d: 'Apr 14',
    careTask: 'Care reminder', careDesc: 'Daily safety check at 09:00',
  }
  return (
    <div className="flex h-full flex-col" style={{ background: BG }}>
      <AppBar title={t.title} actions={<MoreHorizontal className="h-[20px] w-[20px]" style={{ color: INK }} />} />
      <div className="flex-1 space-y-3 overflow-hidden px-4 pt-1">
        {/* hero card */}
        <div className="rounded-2xl p-4" style={{ background: 'linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%)' }}>
          <div className="flex items-center gap-3">
            <span className="flex h-16 w-16 items-center justify-center rounded-full text-[26px] font-bold text-white" style={{ background: '#DC2626' }}>
              <UserRound className="h-8 w-8" />
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="text-[18px] font-bold" style={{ color: '#7F1D1D' }}>{t.name}</p>
                <span className="rounded-full bg-white/65 px-2 py-0.5 text-[9px] font-semibold" style={{ color: '#991B1B' }}>{t.role}</span>
              </div>
              <p className="text-[10.5px]" style={{ color: '#991B1B' }}>{t.age}</p>
            </div>
          </div>
          <div className="mt-3 flex gap-1.5 flex-wrap">
            {t.quickStats.map((s) => (
              <span key={s} className="rounded-full bg-white/75 px-2 py-1 text-[9.5px] font-semibold" style={{ color: '#7F1D1D' }}>{s}</span>
            ))}
          </div>
        </div>

        {/* snapshot */}
        <div className="rounded-2xl border bg-white p-3 shadow-sm" style={{ borderColor: BORDER }}>
          <div className="mb-2.5 flex items-center gap-2">
            <Heart className="h-3.5 w-3.5" style={{ color: PRIMARY }} />
            <p className="text-[12px] font-semibold" style={{ color: INK }}>{t.healthSnapshot}</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <SnapTile label={t.blood} value={t.bloodVal} color="#DC2626" />
            <SnapTile label={t.allergy} value={t.allergyVal} color={ACCENT} />
            <SnapTile label={t.condition} value={t.conditionVal} color={PRIMARY} />
          </div>
        </div>

        {/* care reminder banner */}
        <div className="flex items-center gap-3 rounded-2xl p-3" style={{ background: `${CARE}18`, border: `1px solid ${CARE}45` }}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: `${CARE}33` }}>
            <Bell className="h-[18px] w-[18px]" style={{ color: '#854D0E' }} />
          </span>
          <div className="flex-1">
            <p className="text-[12px] font-semibold" style={{ color: '#713F12' }}>{t.careTask}</p>
            <p className="mt-0.5 text-[10px]" style={{ color: '#854D0E' }}>{t.careDesc}</p>
          </div>
          <ChevronRight className="h-4 w-4" style={{ color: '#854D0E' }} />
        </div>

        {/* recently shared */}
        <div className="rounded-2xl border bg-white p-3 shadow-sm" style={{ borderColor: BORDER }}>
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="h-3.5 w-3.5" style={{ color: PRIMARY }} />
              <p className="text-[12px] font-semibold" style={{ color: INK }}>{t.recent}</p>
            </div>
            <span className="text-[9.5px]" style={{ color: MUTED }}>3</span>
          </div>
          {[{ n: t.share1, d: t.share1d, c: MED }, { n: t.share2, d: t.share2d, c: ACCENT }, { n: t.share3, d: t.share3d, c: PRIMARY }].map((s, i, arr) => (
            <div key={i} className={clsx('flex items-center gap-2.5 py-2', i < arr.length - 1 && 'border-b')} style={i < arr.length - 1 ? { borderColor: '#F1F5F9' } : {}}>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: `${s.c}1f` }}>
                <FileImage className="h-3.5 w-3.5" style={{ color: s.c }} />
              </span>
              <p className="flex-1 text-[11.5px] font-medium" style={{ color: INK }}>{s.n}</p>
              <p className="text-[9.5px]" style={{ color: MUTED }}>{s.d}</p>
              <ChevronRight className="h-3.5 w-3.5" style={{ color: MUTED }} />
            </div>
          ))}
        </div>
      </div>

      <BottomNav active={1} locale={locale} />
    </div>
  )
}

function SnapTile({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="rounded-xl p-2.5" style={{ background: `${color}10` }}>
      <p className="text-[9px] font-semibold uppercase tracking-wider" style={{ color: MUTED }}>{label}</p>
      <p className="mt-1 text-[11px] font-bold leading-tight" style={{ color }}>{value}</p>
    </div>
  )
}

/* ═══════════════════ 6. Pet care ═══════════════════ */
export function MktPetScreen({ locale = 'en' }: { locale?: Locale }) {
  const t = locale === 'zh' ? {
    title: '宠物', usage: '1 / 3 只',
    petName: 'Mochi', petBreed: '英国短毛猫 · 公', petAge: '3 岁 · 4.6 kg',
    streak: '连续打理 42 天',
    todayTasks: '今日任务', t1: '早晨喂食', t1d: '已完成 · 08:10',
    t2: '梳毛 5 分钟', t2d: '12:00', t3: '驱虫', t3d: '今日',
    vaccines: '疫苗记录', v1: '狂犬疫苗', v1d: '3 月 15 日 · 一年期', v1s: '正常',
    v2: '猫三联 FVRCP', v2d: '1 月 8 日 · 三年期', v2s: '正常',
    v3: '支气管疫苗', v3d: '8 月（2025）', v3s: '即将到期',
    weight: '体重曲线 · 6 个月',
  } : {
    title: 'Pets', usage: '1 / 3',
    petName: 'Mochi', petBreed: 'British Shorthair · male', petAge: '3 yrs · 4.6 kg',
    streak: '42-day care streak',
    todayTasks: "Today's tasks", t1: 'Morning feed', t1d: 'Done · 08:10',
    t2: 'Brushing · 5 min', t2d: '12:00', t3: 'Deworming', t3d: 'Today',
    vaccines: 'Vaccine record', v1: 'Rabies', v1d: 'Mar 15 · annual', v1s: 'Up to date',
    v2: 'FVRCP 3-in-1', v2d: 'Jan 8 · every 3y', v2s: 'Up to date',
    v3: 'Bordetella', v3d: 'Aug 2025', v3s: 'Due soon',
    weight: 'Weight · 6 months',
  }
  const wpts = [4.2, 4.3, 4.3, 4.4, 4.5, 4.6, 4.6]
  const wpath = wpts.map((v, i) => {
    const x = 10 + (i * 200) / (wpts.length - 1)
    const y = 60 - ((v - 4.0) / 0.8) * 45
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`
  }).join(' ')

  return (
    <div className="flex h-full flex-col" style={{ background: BG }}>
      <div className="flex items-center justify-between px-4 pb-1 pt-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl" style={{ background: `${PET}1f` }}>
            <PawPrint className="h-5 w-5" style={{ color: PET }} />
          </span>
          <div>
            <h1 className="text-[18px] font-bold leading-none" style={{ color: INK, fontFamily: 'ui-serif, Georgia, serif' }}>{t.title}</h1>
            <p className="mt-0.5 text-[10px]" style={{ color: MUTED }}>{t.usage}</p>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-3 overflow-hidden px-4 pt-2">
        {/* pet hero card */}
        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm" style={{ borderColor: BORDER }}>
          <div className="relative h-[110px] overflow-hidden" style={{ background: 'linear-gradient(135deg, #FED7AA 0%, #FB923C 100%)' }}>
            <div className="absolute inset-0 flex items-center justify-center text-[88px]">🐈</div>
            <span className="absolute right-2.5 top-2.5 rounded-full bg-white/85 px-2 py-1 text-[9.5px] font-bold" style={{ color: '#C2410C' }}>3 yrs</span>
          </div>
          <div className="p-3">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[18px] font-bold leading-none" style={{ color: INK }}>{t.petName}</p>
                <p className="mt-1 text-[10.5px]" style={{ color: MUTED }}>{t.petBreed}</p>
                <p className="text-[10.5px]" style={{ color: MUTED }}>{t.petAge}</p>
              </div>
              <span className="flex items-center gap-1 rounded-full px-2.5 py-1 text-[9.5px] font-semibold" style={{ background: `${PET}1f`, color: '#C2410C' }}>
                <Activity className="h-3 w-3" /> {t.streak}
              </span>
            </div>
          </div>
        </div>

        {/* today's tasks */}
        <div className="rounded-2xl border bg-white p-3 shadow-sm" style={{ borderColor: BORDER }}>
          <p className="mb-2 text-[12px] font-semibold" style={{ color: INK }}>{t.todayTasks}</p>
          <div className="space-y-1.5">
            <PetTask name={t.t1} sub={t.t1d} done />
            <PetTask name={t.t2} sub={t.t2d} />
            <PetTask name={t.t3} sub={t.t3d} />
          </div>
        </div>

        {/* vaccines */}
        <div className="rounded-2xl border bg-white p-3 shadow-sm" style={{ borderColor: BORDER }}>
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Syringe className="h-3.5 w-3.5" style={{ color: PET }} />
              <p className="text-[12px] font-semibold" style={{ color: INK }}>{t.vaccines}</p>
            </div>
            <span className="text-[9.5px]" style={{ color: MUTED }}>3</span>
          </div>
          <VacRow name={t.v1} sub={t.v1d} status={t.v1s} ok />
          <VacRow name={t.v2} sub={t.v2d} status={t.v2s} ok />
          <VacRow name={t.v3} sub={t.v3d} status={t.v3s} ok={false} last />
        </div>

        {/* weight chart */}
        <div className="rounded-2xl border bg-white p-3 shadow-sm" style={{ borderColor: BORDER }}>
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[11.5px] font-semibold" style={{ color: INK }}>{t.weight}</p>
            <p className="text-[11px] font-bold" style={{ color: PET }}>4.6 <span className="text-[9px] font-normal" style={{ color: MUTED }}>kg</span></p>
          </div>
          <svg viewBox="0 0 220 70" className="h-14 w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="wfill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={PET} stopOpacity="0.28" />
                <stop offset="100%" stopColor={PET} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={`${wpath} L210 70 L10 70 Z`} fill="url(#wfill)" />
            <path d={wpath} fill="none" stroke={PET} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {wpts.map((v, i) => {
              const x = 10 + (i * 200) / (wpts.length - 1)
              const y = 60 - ((v - 4.0) / 0.8) * 45
              return <circle key={i} cx={x} cy={y} r="2" fill={PET} />
            })}
          </svg>
        </div>
      </div>

      <BottomNav active={2} locale={locale} />
    </div>
  )
}

function PetTask({ name, sub, done }: { name: string; sub: string; done?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl p-2" style={{ background: done ? '#F8FAFC' : '#FFFBEB' }}>
      {done
        ? <CheckCircle2 className="h-5 w-5" style={{ color: HEALTH }} />
        : <Circle className="h-5 w-5" style={{ color: '#CBD5E1' }} strokeWidth={2.4} />}
      <div className="flex-1">
        <p className={clsx('text-[11.5px] font-medium', done && 'line-through')} style={{ color: done ? MUTED : INK }}>{name}</p>
        <p className="text-[9.5px]" style={{ color: MUTED }}>{sub}</p>
      </div>
    </div>
  )
}
function VacRow({ name, sub, status, ok, last }: { name: string; sub: string; status: string; ok: boolean; last?: boolean }) {
  return (
    <div className={clsx('flex items-center gap-2.5 py-2', !last && 'border-b')} style={!last ? { borderColor: '#F1F5F9' } : {}}>
      <span className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ background: `${PET}1f` }}>
        <Syringe className="h-3.5 w-3.5" style={{ color: PET }} />
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-[11.5px] font-semibold truncate" style={{ color: INK }}>{name}</p>
        <p className="text-[9.5px]" style={{ color: MUTED }}>{sub}</p>
      </div>
      <span className="rounded-full px-2 py-0.5 text-[8.5px] font-bold" style={{
        background: ok ? '#DCFCE7' : '#FEF3C7',
        color: ok ? '#166534' : '#92400E',
      }}>{status}</span>
    </div>
  )
}

/* ═══════════════════ 7. Emergency lock-screen card ═══════════════════ */
export function MktEmergencyScreen({ locale = 'en' }: { locale?: Locale }) {
  const t = locale === 'zh' ? {
    title: '应急医疗卡', sub: '锁屏可见 · 医护可扫码',
    name: '本人 · 王女士', age: '1964 · 血型 A 阳性',
    blood: 'A+',
    allergyTitle: '过敏', allergy: '青霉素（严重皮疹）',
    condTitle: '基础病史', cond: '高血压 · 2 型糖尿病',
    medsTitle: '当前用药',
    m1: '氨氯地平 5 mg · 早 1 次',
    m2: '二甲双胍 500 mg · 日 2 次',
    m3: '阿托伐他汀 20 mg · 睡前',
    contactTitle: '应急联系人', c1: '女儿', c1r: '主要联系人', c2: '丈夫', c2r: '次要联系人',
    qrLabel: '医护扫码查看完整记录',
    updated: '更新于 6 月 7 日',
  } : {
    title: 'Emergency info card', sub: 'Lock-screen visible · paramedics can scan',
    name: 'You · Ms. Liu', age: 'b. 1964 · blood A+',
    blood: 'A+',
    allergyTitle: 'Allergies', allergy: 'Penicillin (severe rash)',
    condTitle: 'Conditions', cond: 'Hypertension · Type 2 diabetes',
    medsTitle: 'Current medications',
    m1: 'Amlodipine 5 mg · 1× morning',
    m2: 'Metformin 500 mg · 2× daily',
    m3: 'Atorvastatin 20 mg · bedtime',
    contactTitle: 'Emergency contacts', c1: 'Daughter', c1r: 'Primary', c2: 'Husband', c2r: 'Secondary',
    qrLabel: 'Scan to view full record',
    updated: 'Updated Jun 7',
  }
  return (
    <div className="flex h-full flex-col" style={{ background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)' }}>
      {/* lock-screen time */}
      <div className="pt-6 text-center text-white">
        <p className="text-[64px] font-thin leading-none tracking-tighter">9:41</p>
        <p className="mt-1 text-[12px] font-medium opacity-70">Wednesday, June 10</p>
      </div>

      {/* emergency badge */}
      <div className="mt-3 flex justify-center">
        <div className="flex items-center gap-2 rounded-full px-4 py-2" style={{ background: 'rgba(220,38,38,0.22)', border: '1px solid rgba(252,165,165,0.4)' }}>
          <span className="h-2 w-2 rounded-full" style={{ background: '#FCA5A5', boxShadow: '0 0 0 5px rgba(252,165,165,0.2)' }} />
          <p className="text-[11px] font-bold uppercase tracking-wider text-white">EMERGENCY MEDICAL ID</p>
        </div>
      </div>

      {/* card */}
      <div className="mx-4 mt-3 flex-1 overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* card header */}
        <div className="flex items-center gap-3 p-3.5" style={{ background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)' }}>
          <span className="flex h-12 w-12 items-center justify-center rounded-full text-[20px] font-bold text-white" style={{ background: 'rgba(255,255,255,0.22)', border: '2px solid rgba(255,255,255,0.4)' }}>
            <UserRound className="h-6 w-6" />
          </span>
          <div className="flex-1 text-white">
            <p className="text-[14px] font-bold leading-tight">{t.name}</p>
            <p className="text-[10px] opacity-90">{t.age}</p>
          </div>
          <div className="flex h-12 w-12 flex-col items-center justify-center rounded-xl bg-white" style={{ color: '#B91C1C' }}>
            <p className="text-[18px] font-black leading-none">{t.blood}</p>
            <p className="text-[7px] font-bold uppercase">Blood</p>
          </div>
        </div>

        <div className="p-3 space-y-2.5">
          {/* allergy + condition */}
          <div className="rounded-xl p-2.5" style={{ background: '#FEF2F2', border: '1px solid #FECACA' }}>
            <div className="flex items-center gap-1.5">
              <AlertTriangle className="h-3 w-3" style={{ color: '#B91C1C' }} />
              <p className="text-[9px] font-bold uppercase tracking-wider" style={{ color: '#991B1B' }}>{t.allergyTitle}</p>
            </div>
            <p className="mt-0.5 text-[11.5px] font-bold" style={{ color: '#7F1D1D' }}>{t.allergy}</p>
          </div>
          <div className="rounded-xl p-2.5" style={{ background: '#F8FAFC', border: `1px solid ${BORDER}` }}>
            <p className="text-[9px] font-bold uppercase tracking-wider" style={{ color: MUTED }}>{t.condTitle}</p>
            <p className="mt-0.5 text-[11px] font-semibold" style={{ color: INK }}>{t.cond}</p>
          </div>

          {/* meds */}
          <div>
            <p className="mb-1 text-[9px] font-bold uppercase tracking-wider" style={{ color: MUTED }}>{t.medsTitle}</p>
            <div className="space-y-1">
              {[t.m1, t.m2, t.m3].map((m, i) => (
                <div key={i} className="flex items-center gap-2 rounded-lg p-1.5" style={{ background: '#EFF6FF' }}>
                  <Pill className="h-3 w-3" style={{ color: MED }} />
                  <p className="text-[10px] font-medium" style={{ color: INK }}>{m}</p>
                </div>
              ))}
            </div>
          </div>

          {/* contacts */}
          <div>
            <p className="mb-1 text-[9px] font-bold uppercase tracking-wider" style={{ color: MUTED }}>{t.contactTitle}</p>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { name: t.c1, role: t.c1r },
                { name: t.c2, role: t.c2r },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-2 rounded-lg p-2" style={{ background: '#ECFDF5' }}>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full" style={{ background: PRIMARY }}>
                    <Phone className="h-3 w-3 text-white" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[10px] font-semibold" style={{ color: INK }}>{c.name}</p>
                    <p className="text-[8px]" style={{ color: MUTED }}>{c.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* QR */}
          <div className="flex items-center gap-2.5 rounded-xl p-2.5" style={{ background: '#F8FAFC' }}>
            <div className="h-12 w-12 shrink-0 rounded-lg p-1" style={{ background: 'white', border: `1px solid ${BORDER}` }}>
              {/* faux QR */}
              <svg viewBox="0 0 40 40" className="h-full w-full">
                {Array.from({ length: 64 }).map((_, i) => {
                  const r = Math.floor(i / 8), c = i % 8
                  const fill = (r + c) % 3 === 0 || (r * c) % 5 === 0
                  return fill ? <rect key={i} x={c * 5} y={r * 5} width="4" height="4" fill={INK} /> : null
                })}
                <rect x="0" y="0" width="14" height="14" fill="none" stroke={INK} strokeWidth="2" />
                <rect x="26" y="0" width="14" height="14" fill="none" stroke={INK} strokeWidth="2" />
                <rect x="0" y="26" width="14" height="14" fill="none" stroke={INK} strokeWidth="2" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-semibold" style={{ color: INK }}>{t.qrLabel}</p>
              <p className="mt-0.5 text-[8.5px]" style={{ color: MUTED }}>{t.updated}</p>
            </div>
            <ScanLine className="h-4 w-4" style={{ color: PRIMARY }} />
          </div>
        </div>
      </div>

      <p className="py-3 text-center text-[10px] text-white/55">{t.sub}</p>
    </div>
  )
}

/* ═══════════════════ 8. BYOC Setup ═══════════════════ */
export function MktBYOCScreen({ locale = 'en' }: { locale?: Locale }) {
  const t = locale === 'zh' ? {
    title: '自带网盘备份', heroTitle: '你的数据，存在你的云盘',
    heroSub: '端到端加密 · 我们看不到内容 · 你可以随时取回',
    chooseProvider: '选择你的云盘',
    icloud: 'iCloud', icloudSub: 'Apple 账号 · 5 GB 起免费', icloudActive: '已连接',
    gdrive: 'Google Drive', gdriveSub: 'Google 账号 · 15 GB 免费',
    onedrive: 'OneDrive', onedriveSub: 'Microsoft 账号 · 5 GB 免费',
    status: '当前状态', statusSync: '已同步', statusLast: '最后备份 · 1 分钟前',
    backupNow: '立即备份', restore: '从云端恢复',
    benefit1: '换机直接迁移', benefit2: '加密私钥仅在本机',
    benefit3: '可彻底断开，数据归你',
  } : {
    title: 'BYOC backup', heroTitle: 'Your data, on your own cloud',
    heroSub: 'End-to-end encrypted · we can\'t read it · pull it back anytime',
    chooseProvider: 'Choose your cloud',
    icloud: 'iCloud', icloudSub: 'Apple ID · 5 GB free tier', icloudActive: 'Connected',
    gdrive: 'Google Drive', gdriveSub: 'Google account · 15 GB free',
    onedrive: 'OneDrive', onedriveSub: 'Microsoft account · 5 GB free',
    status: 'Status', statusSync: 'Synced', statusLast: 'Last backup · 1 min ago',
    backupNow: 'Back up now', restore: 'Restore from cloud',
    benefit1: 'Switch phones seamlessly', benefit2: 'Encryption key stays on device',
    benefit3: 'Disconnect anytime, data is yours',
  }
  return (
    <div className="flex h-full flex-col" style={{ background: BG }}>
      <AppBar title={t.title} actions={<RefreshCw className="h-[18px] w-[18px]" style={{ color: PRIMARY }} />} />
      <div className="flex-1 space-y-3 overflow-hidden px-4 pt-1">
        {/* hero */}
        <div className="overflow-hidden rounded-2xl p-3.5" style={{ background: 'linear-gradient(135deg, #0F5C2D 0%, #15803D 60%, #059669 100%)', position: 'relative' }}>
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl" style={{ background: 'rgba(255,255,255,0.18)' }}>
              <Cloud className="h-6 w-6 text-white" />
            </span>
            <div className="flex-1">
              <p className="text-[16px] font-bold leading-tight text-white">{t.heroTitle}</p>
              <p className="mt-1 text-[10.5px] leading-snug text-white/85">{t.heroSub}</p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            {[t.benefit1, t.benefit2, t.benefit3].map((b) => (
              <span key={b} className="flex items-center gap-1 rounded-full bg-white/18 px-2 py-1 text-[9px] font-semibold text-white">
                <ShieldCheck className="h-2.5 w-2.5" />{b}
              </span>
            ))}
          </div>
        </div>

        {/* status */}
        <div className="flex items-center gap-3 rounded-2xl border bg-white p-3 shadow-sm" style={{ borderColor: BORDER }}>
          <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: `${HEALTH}1f` }}>
            <CheckCircle2 className="h-5 w-5" style={{ color: HEALTH }} />
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full" style={{ background: HEALTH, boxShadow: '0 0 0 3px rgba(34,197,94,0.25)' }} />
          </span>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <p className="text-[13px] font-bold" style={{ color: INK }}>{t.statusSync}</p>
              <span className="rounded-full px-2 py-0.5 text-[8.5px] font-bold" style={{ background: `${HEALTH}1f`, color: '#166534' }}>E2E</span>
            </div>
            <p className="mt-0.5 text-[10px]" style={{ color: MUTED }}>{t.statusLast}</p>
          </div>
          <span className="rounded-full px-3 py-1.5 text-[10.5px] font-semibold text-white" style={{ background: PRIMARY }}>{t.backupNow}</span>
        </div>

        {/* providers */}
        <p className="px-1 text-[10px] font-semibold uppercase tracking-wider" style={{ color: MUTED }}>{t.chooseProvider}</p>
        <ProviderRow icon="apple" name={t.icloud} sub={t.icloudSub} accent="#007AFF" active={t.icloudActive} />
        <ProviderRow icon="google" name={t.gdrive} sub={t.gdriveSub} accent="#1A73E8" />
        <ProviderRow icon="microsoft" name={t.onedrive} sub={t.onedriveSub} accent="#0078D4" />

        {/* restore button */}
        <div className="flex items-center justify-center gap-2 rounded-2xl border-2 border-dashed py-3 text-[12px] font-semibold" style={{ borderColor: BORDER, color: PRIMARY }}>
          <HardDriveDownload className="h-4 w-4" />
          {t.restore}
        </div>
      </div>

      <BottomNav active={3} locale={locale} />
    </div>
  )
}

function ProviderRow({ icon, name, sub, accent, active }: { icon: 'apple' | 'google' | 'microsoft'; name: string; sub: string; accent: string; active?: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border bg-white p-3 shadow-sm" style={{ borderColor: active ? accent : BORDER, borderWidth: active ? 2 : 1 }}>
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: `${accent}18` }}>
        <ProviderGlyph kind={icon} color={accent} />
      </span>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <p className="text-[12.5px] font-semibold" style={{ color: INK }}>{name}</p>
          {active && (
            <span className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-bold" style={{ background: `${HEALTH}1f`, color: '#166534' }}>
              <CheckCircle2 className="h-2.5 w-2.5" />{active}
            </span>
          )}
        </div>
        <p className="mt-0.5 text-[10px]" style={{ color: MUTED }}>{sub}</p>
      </div>
      <ChevronRight className="h-4 w-4" style={{ color: MUTED }} />
    </div>
  )
}

function ProviderGlyph({ kind, color }: { kind: 'apple' | 'google' | 'microsoft'; color: string }) {
  if (kind === 'apple') return <svg width="20" height="20" viewBox="0 0 24 24" fill={color}><path d="M16.5 1.2c0 1.4-.6 2.7-1.5 3.6-1 1-2.3 1.7-3.6 1.6-.2-1.3.4-2.7 1.4-3.6 1-.9 2.4-1.5 3.7-1.6Zm4.4 16.5c-.7 1.6-1 2.3-1.9 3.7-1.2 1.9-2.9 4.3-5 4.3-1.9 0-2.4-1.2-4.9-1.2s-3.1 1.3-5 1.2c-2.1 0-3.7-2.1-4.9-4-3.4-5.3-3.7-11.6-1.6-14.9 1.5-2.4 3.8-3.7 6-3.7 2.2 0 3.6 1.2 5.4 1.2 1.8 0 2.8-1.2 5.4-1.2 2 0 4 1.1 5.5 3-4.8 2.6-4 9.4.0 11.6Z"/></svg>
  if (kind === 'google') return <Cloud className="h-5 w-5" style={{ color }} />
  return <Cloud className="h-5 w-5" style={{ color }} />
}
