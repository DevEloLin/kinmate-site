// 根 layout 只承担 html/body/字体；语言相关的 lang 属性放在 [locale]/layout

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://develolin.github.io/kinmate-site'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  title: 'KinMate · Your family\'s health vault',
  description:
    'Local-first health record vault for every family. Bilingual AI explanations (EN/中文), family + pets, bring your own cloud backup.',
  openGraph: {
    title: 'KinMate · Your family\'s health vault',
    description:
      'Local-first health record vault for every family. Bilingual AI explanations (EN/中文), family + pets, bring your own cloud backup.',
    url: 'https://develolin.github.io/kinmate-site',
    siteName: 'KinMate',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KinMate',
    description: 'Your family\'s health vault.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
