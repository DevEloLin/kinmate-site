// 根 layout 只承担 html/body/字体；语言相关的 lang 属性放在 [locale]/layout

import type { Metadata } from 'next'
import './globals.css'

// 站点根地址（GitHub Pages 项目站点带 /kinmate-site 子路径）。
// 图标/OG 用「绝对 URL」而非根相对路径——因为本站在子路径下，根相对的
// /favicon.ico 会解析到域名根（404），导致浏览器标签页无 favicon。
const SITE = 'https://develolin.github.io/kinmate-site'

const DESCRIPTION =
  'KinMate is a local-first family health record vault. Keep medical reports, medications & reminders for yourself, family and pets; get bilingual (EN/中文) AI explanations of lab reports; bring your own cloud backup (iCloud / Google Drive / OneDrive). Private by design — your data stays yours.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  applicationName: 'KinMate',
  title: {
    default: 'KinMate · Your family\'s health vault',
    template: '%s · KinMate',
  },
  description: DESCRIPTION,
  keywords: [
    // ── EN: core ──
    'KinMate', 'family health app', 'family health record', 'health record vault',
    'medical records app', 'personal health record', 'PHR app', 'health organizer',
    'health document storage', 'medical history app',
    // EN: reports / AI
    'lab report AI explanation', 'blood test results explained', 'lab results interpreter',
    'medical report scanner', 'health report OCR', 'AI health assistant',
    'understand my lab results', 'prescription scanner', 'medical document reader',
    // EN: medication / reminders / care
    'medication reminders', 'medication tracker', 'pill reminder', 'medication adherence',
    'vaccination records', 'immunization tracker', 'appointment reminders',
    'safety check-in app', 'caregiver app', 'elderly care app', 'aging parents care',
    'senior care app', 'family caregiver', 'dependents health',
    // EN: pets / family / privacy
    'pet health records', 'pet vaccination tracker', 'multi-generational family health',
    'shared family health', 'local-first health app', 'offline health app',
    'private health app', 'health data privacy', 'you own your data',
    'bring your own cloud', 'iCloud health backup', 'Google Drive health backup',
    'OneDrive health backup', 'bilingual health app', 'English Chinese health app',
    // ── 中文：核心 ──
    '家庭健康', '家人健康管理', '家庭健康档案', '健康档案 App',
    '个人健康档案', '电子病历', '病历管理', '健康记录', '家庭医疗记录',
    // 中文：报告 / AI
    '体检报告解读', 'AI 报告解读', '化验单解读', '化验结果解释', '血常规解读',
    '体检报告看不懂', '报告拍照识别', '病历 OCR', '处方识别', '医疗文档解读',
    // 中文：用药 / 提醒 / 关怀
    '用药提醒', '吃药提醒', '服药提醒', '服药管理', '疫苗记录', '疫苗接种提醒',
    '复诊提醒', '平安打卡', '老人关怀', '父母健康', '长辈照护', '看护人',
    '被照护人', '居家养老健康',
    // 中文：宠物 / 家庭 / 隐私
    '宠物健康', '宠物疫苗记录', '多代家庭健康', '家庭共享健康', '本地优先',
    '离线可用', '隐私优先', '数据隐私', '数据归你所有', '自带网盘备份',
    'iCloud 备份', 'Google Drive 备份', 'OneDrive 备份', '中英双语健康 App',
  ],
  authors: [{ name: 'AppLabs' }],
  creator: 'AppLabs',
  publisher: 'AppLabs',
  category: 'health',
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
    title: 'KinMate · Your family\'s health vault',
    description: DESCRIPTION,
    images: [
      { url: `${SITE}/icon-512.png`, width: 512, height: 512, alt: 'KinMate' },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'KinMate · Your family\'s health vault',
    description: DESCRIPTION,
    images: [`${SITE}/icon-512.png`],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
