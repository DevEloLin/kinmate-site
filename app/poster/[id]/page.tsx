// Poster renderer — 1080×1920 portrait posters for Play Store / App Store
// hero banners. Chrome headless screenshots this route at high quality.
//
// 10 posters in 3 style groups:
//   Group A (multi-phone hero, bright gradient):  P1 · P4 · P5
//   Group B (split before/after, emoji noise):    P2 · P6 · P7
//   Group C (minimal focus / dark / magazine):    P3 · P8 · P9 · P10

import { Poster1Hero } from '@/components/posters/Poster1Hero'
import { Poster2BeforeAfter } from '@/components/posters/Poster2BeforeAfter'
import { Poster3DataDark } from '@/components/posters/Poster3DataDark'
import { Poster4Family } from '@/components/posters/Poster4Family'
import { Poster5Features } from '@/components/posters/Poster5Features'
import { Poster6MedReminder } from '@/components/posters/Poster6MedReminder'
import { Poster7EmergencyContrast } from '@/components/posters/Poster7EmergencyContrast'
import { Poster8ByocLock } from '@/components/posters/Poster8ByocLock'
import { Poster9PetRecords } from '@/components/posters/Poster9PetRecords'
import { Poster10Cta } from '@/components/posters/Poster10Cta'

type Locale = 'en' | 'zh'

const POSTERS: Record<string, (p: { locale?: Locale }) => React.ReactNode> = {
  '1': Poster1Hero,
  '2': Poster2BeforeAfter,
  '3': Poster3DataDark,
  '4': Poster4Family,
  '5': Poster5Features,
  '6': Poster6MedReminder,
  '7': Poster7EmergencyContrast,
  '8': Poster8ByocLock,
  '9': Poster9PetRecords,
  '10': Poster10Cta,
}

export default async function PosterPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ locale?: Locale }>
}) {
  const { id } = await params
  const sp = await searchParams
  const locale = (sp.locale ?? 'en') as Locale
  const Poster = POSTERS[id] ?? POSTERS['1']
  return <Poster locale={locale} />
}
