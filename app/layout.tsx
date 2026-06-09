// 根 layout 只承担 html/body/字体；语言相关的 lang 属性放在 [locale]/layout

import type { Metadata } from 'next'
import './globals.css'

// 站点根地址（GitHub Pages 项目站点带 /kinmate-site 子路径）。
// 图标/OG 用「绝对 URL」而非根相对路径——因为本站在子路径下，根相对的
// /favicon.ico 会解析到域名根（404），导致浏览器标签页无 favicon。
const SITE = 'https://develolin.github.io/kinmate-site'

const DESCRIPTION =
  'KinMate is a Personal Record Manager and Family Information Organizer. Keep health documents, care reminders, and personal records for yourself, family and pets in one private place; get bilingual (EN/中文) AI explanations of lab reports; bring your own cloud backup (iCloud / Google Drive / OneDrive). Private by design — your data stays yours.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  applicationName: 'KinMate',
  title: {
    default: 'KinMate · Your family\'s record organizer',
    template: '%s · KinMate',
  },
  description: DESCRIPTION,
  keywords: [
    // ── EN: core (lifestyle/utility positioning, NOT medical) ──
    'KinMate', 'personal record manager', 'family information organizer',
    'health document organizer', 'care coordination tool', 'family health app',
    'family records app', 'personal records app', 'health document storage',
    // EN: reports / AI explanations (explanation framing, not diagnosis)
    'lab report explanation', 'blood test results explained', 'lab results explainer',
    'health report OCR', 'AI document explainer', 'understand my lab results',
    'document scanner for the family', 'prescription organizer',
    // EN: medication / reminders / care reminders
    'medication reminders', 'medication tracker', 'pill reminder', 'medication adherence',
    'vaccination records', 'immunization reminder', 'appointment reminders',
    'safety check-in app', 'caregiver app', 'elderly care reminders',
    'family caregiver organizer', 'dependents organizer',
    // EN: pets / family / privacy
    'pet records', 'pet vaccination records', 'multi-generational family records',
    'shared family records', 'local-first records app', 'offline records app',
    'private records app', 'personal data privacy', 'you own your data',
    'bring your own cloud', 'iCloud records backup', 'Google Drive records backup',
    'OneDrive records backup', 'bilingual records app', 'English Chinese records app',
    // ── 中文：核心 (生活工具/整理工具定位) ──
    '个人记录管理', '家庭信息整理', '健康文档整理', '关怀协调工具',
    '家庭记录 App', '个人记录 App', '健康档案 App', '健康记录',
    // 中文：报告 / AI 解读（理解 / 解释，不是诊断）
    '体检报告解读', 'AI 报告解读', '化验单解读', '化验结果解释',
    '体检报告看不懂', '报告拍照识别', '处方整理',
    // 中文：用药 / 提醒 / 关怀
    '用药提醒', '吃药提醒', '服药提醒', '服药管理', '疫苗记录', '疫苗接种提醒',
    '复诊提醒', '平安打卡', '老人关怀', '父母健康', '长辈照护', '看护人',
    '被照护人', '居家养老',
    // 中文：宠物 / 家庭 / 隐私
    '宠物记录', '宠物疫苗记录', '多代家庭记录', '家庭共享记录', '本地优先',
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
