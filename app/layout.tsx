// 根 layout 只承担 html/body/字体；语言相关的 lang 属性放在 [locale]/layout

import type { Metadata } from 'next'
import './globals.css'

// 站点根地址（GitHub Pages 项目站点带 /kinmate-site 子路径）。
// 图标/OG 用「绝对 URL」而非根相对路径——因为本站在子路径下，根相对的
// /favicon.ico 会解析到域名根（404），导致浏览器标签页无 favicon。
const SITE = 'https://develolin.github.io/kinmate-site'

const DESCRIPTION =
  'KinMate is a Personal Record Manager and Family Information Organizer. Keep personal documents, daily reminders, and records for yourself, family and pets in one private place; get bilingual (EN/中文) AI explanations of uploaded documents; bring your own cloud backup (iCloud / Google Drive / OneDrive). Private by design — your data stays yours.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  applicationName: 'KinMate',
  title: {
    default: 'KinMate · Your family\'s record organizer',
    template: '%s · KinMate',
  },
  description: DESCRIPTION,
  keywords: [
    // ── EN: core (productivity / utility / lifestyle positioning) ──
    'KinMate', 'personal record manager', 'family information organizer',
    'document organizer', 'family records app', 'personal records app',
    'file vault', 'document storage', 'archive tool', 'note keeper',
    // EN: documents / AI explanations (reference framing, not diagnosis)
    'document scanner', 'AI document explainer', 'document Q&A',
    'understand my documents', 'document scanner for the family',
    // EN: reminders (daily routine, not medical)
    'daily reminders', 'reminder tool', 'appointment reminders',
    'safety check-in app', 'family organizer app', 'dependents organizer',
    // EN: pets / family / privacy
    'pet records', 'family records', 'multi-generational records',
    'shared family records', 'local-first records app', 'offline records app',
    'private records app', 'personal data privacy', 'you own your data',
    'bring your own cloud', 'iCloud records backup', 'Google Drive records backup',
    'OneDrive records backup', 'bilingual records app', 'English Chinese records app',
    // ── 中文：核心 (生活工具/整理工具定位) ──
    '个人记录管理', '家庭信息整理', '档案整理', '文件整理',
    '家庭记录 App', '个人记录 App', '档案 App', '资料整理',
    // 中文：文件 / AI 解读（理解 / 解释，不是诊断）
    '文件解读', 'AI 文档解读', '文档问答', '文件理解',
    '上传文件看不懂', '文档拍照识别', '资料归档',
    // 中文：提醒 / 日常
    '日常提醒', '提醒工具', '复查提醒', '平安打卡', '家人关怀', '家人记录',
    // 中文：宠物 / 家庭 / 隐私
    '宠物记录', '宠物档案', '多代家庭记录', '家庭共享记录', '本地优先',
    '离线可用', '隐私优先', '数据隐私', '数据归你所有', '自带网盘备份',
    'iCloud 备份', 'Google Drive 备份', 'OneDrive 备份', '中英双语 App',
  ],
  authors: [{ name: 'KinMate' }],
  creator: 'KinMate',
  publisher: 'KinMate',
  category: 'productivity',
  manifest: `${SITE}/site.webmanifest`,
  alternates: {
    canonical: SITE,
    languages: { en: `${SITE}/en`, zh: `${SITE}/zh` },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [
      { url: `${SITE}/favicon.ico`, sizes: 'any' },
      { url: `${SITE}/favicon-32x32.png`, type: 'image/png', sizes: '32x32' },
      { url: `${SITE}/favicon-16x16.png`, type: 'image/png', sizes: '16x16' },
      { url: `${SITE}/icon-192.png`, type: 'image/png', sizes: '192x192' },
      { url: `${SITE}/icon-512.png`, type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: `${SITE}/apple-touch-icon.png`, sizes: '180x180' }],
  },
  openGraph: {
    type: 'website',
    siteName: 'KinMate',
    url: SITE,
    title: 'KinMate · Your family\'s record organizer',
    description: DESCRIPTION,
    images: [
      { url: `${SITE}/icon-512.png`, width: 512, height: 512, alt: 'KinMate' },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'KinMate · Your family\'s record organizer',
    description: DESCRIPTION,
    images: [`${SITE}/icon-512.png`],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
