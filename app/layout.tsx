// 根 layout 只承担 html/body/字体；语言相关的 lang 属性放在 [locale]/layout

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://kinmate.app'),
  title: 'KinMate · Your family\'s health vault',
  description:
    'Local-first health record vault for diaspora families. Bilingual AI explanations, family + pets, bring your own cloud backup.',
  openGraph: {
    title: 'KinMate · Your family\'s health vault',
    description:
      'Local-first health record vault for diaspora families. Bilingual AI explanations, family + pets, bring your own cloud backup.',
    url: 'https://kinmate.app',
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
