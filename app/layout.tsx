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
    // EN
    'family health app', 'health record vault', 'medical records app',
    'medication reminders', 'lab report AI explanation', 'AI health assistant',
    'pet health records', 'elderly care app', 'caregiver app',
    'local-first health', 'private health app', 'bring your own cloud',
    'iCloud Google Drive OneDrive backup', 'bilingual health app',
    // 中文
    '家庭健康', '家人健康管理', '健康档案', '体检报告解读', 'AI 报告解读',
    '用药提醒', '吃药提醒', '宠物健康', '老人关怀', '家庭医疗记录',
    '本地优先', '数据隐私', '自带网盘备份', 'KinMate',
  ],
  authors: [{ name: 'AppLabs' }],
  creator: 'AppLabs',
  publisher: 'AppLabs',
  category: 'health',
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
