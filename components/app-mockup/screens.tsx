// KinMate App 屏幕的高保真还原（纯 CSS/SVG，严格照 App 真实 UI 代码）。
// 配色 app-*（自然绿 #15803D / 浅绿底 #F0FDF4 / 暖橙 #D97706 + 领域色）。
// 真实结构来源：lib/features/timeline/ui/home_page.dart、health_metrics_page.dart、family/ui。
// 双语 zh/en；全部使用关系称谓，不含任何真实人名。

import {
  Home, Users, PawPrint, Settings, Pill, Bell, Activity,
  Droplet, ChevronRight, ChevronLeft, Plus, HeartPulse, Heart,
  ClipboardList, CloudOff, UserRound, FileText, Stethoscope,
} from 'lucide-react'
import clsx from 'clsx'

type Locale = 'en' | 'zh'

const L = {
  zh: {
    greeting: '早上好', today: '今天是 6 月 5 日',
    byocTitle: '把数据安全备份到你的云盘', byocSub: '连接 iCloud / Google Drive / OneDrive — 端到端加密，数据归你。',
    myHealth: '我的健康主页', myHealthSub: '170 cm · 65 kg · BMI 22.5',
    family: '家庭', familySub: '一眼了解全家健康',
    overview: '今日概览', safety: '平安', pending: '待确认', med: '服药', pets: '宠物',
    remindTitle: '提醒', viewAll: '查看全部',
    medName: '降压药', medTime: '08:00 · 早餐后', done: '完成', skip: '跳过',
    nav: ['首页', '家庭', '宠物', '设置'],
    // health
    healthTitle: '健康指标', mTypes: ['血压', '血糖', '血脂', '肝功能', '肾功能'],
    windows: ['7 天', '30 天', '90 天', '全部'], trend: '收缩压趋势',
    sumLatest: '最新', sumAvg: '平均', sumMin: '最低', sumMax: '最高', unit: 'mmHg',
    // family
    familyTitle: '我的家庭', memberCount: '3 位成员', members: '家庭成员',
    owner: '家主', member: '成员', you: '（你）', joined: '于 5 月加入',
    m1: '我', m2: '妈妈', m3: '女儿', addMember: '邀请家人',
  },
  en: {
    greeting: 'Good morning', today: 'Today is Jun 5',
    byocTitle: 'Back up to your own cloud', byocSub: 'Connect iCloud / Google Drive / OneDrive — end-to-end encrypted, your data is yours.',
    myHealth: 'My Health Home', myHealthSub: '170 cm · 65 kg · BMI 22.5',
    family: 'Family', familySub: "Your family's health at a glance",
    overview: "Today's Overview", safety: 'Safety', pending: 'Pending', med: 'Medication', pets: 'Pets',
    remindTitle: 'Pending Reminders', viewAll: 'View All',
    medName: 'Blood pressure pill', medTime: '08:00 · after breakfast', done: 'Complete', skip: 'Skip',
    nav: ['Home', 'Family', 'Pets', 'Settings'],
    healthTitle: 'Health Metrics', mTypes: ['Blood pressure', 'Glucose', 'Lipids', 'Liver', 'Kidney'],
    windows: ['7 Days', '30 Days', '90 Days', 'All'], trend: 'Systolic trend',
    sumLatest: 'Latest', sumAvg: 'Average', sumMin: 'Minimum', sumMax: 'Maximum', unit: 'mmHg',
    familyTitle: 'My Family', memberCount: '3 members', members: 'Family Members',
    owner: 'Owner', member: 'Member', you: ' (You)', joined: 'Joined May',
    m1: 'Me', m2: 'Mom', m3: 'Daughter', addMember: 'Add Family Member',
  },
} as const

const PRIMARY = '#15803D'
const MED = '#3B82F6'
const PET = '#F97316'
const CARE = '#EAB308'

function BottomNav({ active, locale }: { active: number; locale: Locale }) {
  const items = [Home, Users, PawPrint, Settings]
  const labels = L[locale].nav
  return (
    <div className="absolute inset-x-0 bottom-0 flex h-[52px] items-center justify-around border-t border-app-border bg-white px-1">
      {items.map((Icon, i) => {
        const on = i === active
        return (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <span className={clsx('flex h-7 w-11 items-center justify-center rounded-full', on && 'bg-app-primary/12')}>
              <Icon className={clsx('h-[17px] w-[17px]', on ? 'text-app-primary' : 'text-app-muted')} />
            </span>
            <span className={clsx('text-[9px]', on ? 'font-semibold text-app-primary' : 'text-app-muted')}>{labels[i]}</span>
          </div>
        )
      })}
    </div>
  )
}

/* ─────────────────────────── 首页 ─────────────────────────── */
export function HomeScreen({ locale = 'en' }: { locale?: Locale }) {
  const t = L[locale]
  const overview = [
    { icon: Heart, label: t.safety, value: t.pending, color: CARE },
    { icon: Pill, label: t.med, value: '2', color: MED },
    { icon: PawPrint, label: t.pets, value: '1', color: PET },
  ]
  return (
    <div className="flex h-full flex-col bg-app-bg">
      <div className="flex-1 space-y-3 overflow-hidden px-4 pt-3">
        {/* 问候头 */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-serif text-[22px] font-bold leading-tight text-app-ink">{t.greeting}</h1>
            <p className="mt-0.5 text-[11px] text-app-muted">{t.today}</p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full text-app-muted">
            <Bell className="h-[18px] w-[18px]" />
          </span>
        </div>

        {/* BYOC 备份横幅 */}
        <div className="flex items-center gap-3 rounded-xl p-3" style={{ background: 'rgba(21,128,61,0.08)' }}>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: 'rgba(21,128,61,0.15)' }}>
            <CloudOff className="h-[18px] w-[18px] text-app-primary" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[11.5px] font-semibold text-app-ink">{t.byocTitle}</p>
            <p className="line-clamp-2 text-[9.5px] leading-snug text-app-muted">{t.byocSub}</p>
          </div>
          <ChevronRight className="h-4 w-4 shrink-0 text-app-muted" />
        </div>

        {/* 两个快捷磁贴 */}
        <div className="grid grid-cols-2 gap-2">
          <ShortcutTile icon={UserRound} title={t.myHealth} sub={t.myHealthSub} />
          <ShortcutTile icon={Users} title={t.family} sub={t.familySub} />
        </div>

        {/* 今日概览 */}
        <div className="rounded-2xl border border-app-border bg-white p-3 shadow-sm">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-app-primary/10">
              <ClipboardList className="h-3.5 w-3.5 text-app-primary" />
            </span>
            <p className="text-[12px] font-semibold text-app-ink">{t.overview}</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {overview.map((o) => {
              const Icon = o.icon
              return (
                <div key={o.label} className="flex flex-col items-center rounded-xl py-2.5" style={{ background: `${o.color}1a` }}>
                  <Icon className="h-[18px] w-[18px]" style={{ color: o.color }} />
                  <span className="mt-1 text-[9px] text-app-muted">{o.label}</span>
                  <span className="text-[11px] font-bold" style={{ color: o.color }}>{o.value}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* 提醒 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-app-primary/10">
              <Stethoscope className="h-3.5 w-3.5 text-app-primary" />
            </span>
            <p className="text-[12px] font-semibold text-app-ink">{t.remindTitle}</p>
          </div>
          <span className="text-[10px] font-medium text-app-primary">{t.viewAll}</span>
        </div>
        <div className="rounded-2xl border border-app-border bg-white p-3 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: `${MED}1a` }}>
              <Pill className="h-[18px] w-[18px]" style={{ color: MED }} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] font-semibold text-app-ink">{t.medName}</p>
              <p className="text-[10px] text-app-muted">{t.medTime}</p>
            </div>
          </div>
          <div className="mt-2.5 flex gap-2">
            <span className="flex-1 rounded-lg py-1.5 text-center text-[10px] font-semibold text-white" style={{ background: '#22C55E' }}>{t.done}</span>
            <span className="flex-1 rounded-lg border border-app-border py-1.5 text-center text-[10px] font-medium text-app-muted">{t.skip}</span>
          </div>
        </div>
      </div>
      <BottomNav active={0} locale={locale} />
    </div>
  )
}

function ShortcutTile({ icon: Icon, title, sub }: { icon: typeof UserRound; title: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-app-border bg-white p-3 shadow-sm">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-app-primary/10">
        <Icon className="h-5 w-5 text-app-primary" />
      </span>
      <p className="mt-2 text-[12px] font-semibold leading-tight text-app-ink">{title}</p>
      <p className="mt-0.5 text-[9.5px] leading-snug text-app-muted">{sub}</p>
    </div>
  )
}

/* ─────────────────── 健康指标（子页：返回 + 添加，无底部导航） ─────────────────── */
export function HealthScreen({ locale = 'en' }: { locale?: Locale }) {
  const t = L[locale]
  const pts = [120, 124, 118, 126, 119, 121, 118]
  const max = 132, min = 108
  const path = pts.map((v, i) => {
    const x = 10 + (i * 200) / (pts.length - 1)
    const y = 70 - ((v - min) / (max - min)) * 56
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`
  }).join(' ')
  const summary = [
    { label: t.sumLatest, value: '118', color: PRIMARY },
    { label: t.sumAvg, value: '121', color: PRIMARY },
    { label: t.sumMin, value: '110', color: '#22C55E' },
    { label: t.sumMax, value: '132', color: CARE },
  ]
  return (
    <div className="flex h-full flex-col bg-app-bg">
      {/* AppBar：返回 + 标题 + 添加 */}
      <div className="flex items-center justify-between px-3 py-2">
        <ChevronLeft className="h-5 w-5 text-app-ink" />
        <p className="text-[14px] font-semibold text-app-ink">{t.healthTitle}</p>
        <Plus className="h-5 w-5 text-app-primary" />
      </div>
      <div className="flex-1 space-y-3 overflow-hidden px-4 pt-1">
        {/* 指标类型 chips */}
        <div className="flex flex-wrap gap-1.5">
          {t.mTypes.map((m, i) => (
            <span key={m} className={clsx(
              'rounded-lg px-2.5 py-1 text-[10px]',
              i === 0 ? 'bg-app-primary/12 font-semibold text-app-primary' : 'border border-app-border bg-white text-app-muted',
            )}>{m}</span>
          ))}
        </div>
        {/* 趋势图 */}
        <div className="rounded-2xl border border-app-border bg-white p-3 shadow-sm">
          <p className="mb-2 text-[11px] font-semibold text-app-muted">{t.trend}</p>
          <svg viewBox="0 0 220 80" className="h-20 w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="bpfill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={PRIMARY} stopOpacity="0.22" />
                <stop offset="100%" stopColor={PRIMARY} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={`${path} L210 80 L10 80 Z`} fill="url(#bpfill)" />
            <path d={path} fill="none" stroke={PRIMARY} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {pts.map((v, i) => {
              const x = 10 + (i * 200) / (pts.length - 1)
              const y = 70 - ((v - min) / (max - min)) * 56
              return <circle key={i} cx={x} cy={y} r="2.4" fill={PRIMARY} />
            })}
          </svg>
        </div>
        {/* 时间窗口 chips */}
        <div className="flex gap-1.5">
          {t.windows.map((w, i) => (
            <span key={w} className={clsx(
              'rounded-lg px-2.5 py-1 text-[10px]',
              i === 0 ? 'bg-app-primary/12 font-semibold text-app-primary' : 'border border-app-border bg-white text-app-muted',
            )}>{w}</span>
          ))}
        </div>
        {/* 四宫格摘要 */}
        <div className="grid grid-cols-2 gap-2">
          {summary.map((s) => (
            <div key={s.label} className="rounded-2xl border border-app-border bg-white p-3 shadow-sm">
              <p className="text-[10px] text-app-muted">{s.label}</p>
              <p className="text-[16px] font-bold" style={{ color: s.color }}>
                {s.value} <span className="text-[9px] font-normal text-app-muted">{t.unit}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────── 家庭 ─────────────────────────── */
export function FamilyScreen({ locale = 'en' }: { locale?: Locale }) {
  const t = L[locale]
  const members = [
    { name: t.m1, role: t.owner, me: true, color: PRIMARY },
    { name: t.m2, role: t.member, me: false, color: PET },
    { name: t.m3, role: t.member, me: false, color: MED },
  ]
  return (
    <div className="flex h-full flex-col bg-app-bg">
      {/* 标题 + 成员计数 */}
      <div className="px-4 pb-1 pt-3">
        <h1 className="font-serif text-[20px] font-bold leading-tight text-app-ink">{t.familyTitle}</h1>
        <p className="mt-0.5 text-[11px] text-app-muted">{t.memberCount}</p>
      </div>
      <div className="flex-1 space-y-2.5 overflow-hidden px-4 pt-2">
        <p className="text-[11px] font-semibold text-app-muted">{t.members}</p>
        {members.map((m) => (
          <div key={m.name} className="flex items-center gap-3 rounded-2xl border border-app-border bg-white p-3 shadow-sm">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white" style={{ background: m.color }}>
              <UserRound className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-1.5 text-[12.5px] font-semibold text-app-ink">
                {m.name}{m.me && <span className="text-[10px] font-normal text-app-muted">{t.you}</span>}
              </p>
              <p className="text-[10px] text-app-muted">{t.joined}</p>
            </div>
            <span className={clsx(
              'rounded-full px-2 py-0.5 text-[9px] font-semibold',
              m.role === t.owner ? 'bg-app-primary/12 text-app-primary' : 'bg-app-muted/10 text-app-muted',
            )}>{m.role}</span>
            <ChevronRight className="h-4 w-4 shrink-0 text-app-muted" />
          </div>
        ))}
        {/* 邀请家人按钮 */}
        <div className="mt-1 flex items-center justify-center gap-2 rounded-xl border-[1.5px] border-app-primary py-2.5 text-[12px] font-semibold text-app-primary">
          <Plus className="h-4 w-4" />
          {t.addMember}
        </div>
      </div>
      <BottomNav active={1} locale={locale} />
    </div>
  )
}
