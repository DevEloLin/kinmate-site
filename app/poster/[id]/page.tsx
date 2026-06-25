// Poster renderer — 1080×1920 portrait posters for Play Store / App Store
// hero banners. Chrome headless screenshots this route.
//
// 20 posters in 6 style groups (random-mixed for visual variety):
//   Group A (multi-phone hero, bright):     P1 · P4 · P5
//   Group B (split before/after + emoji):   P2 · P6 · P7
//   Group C (minimal focused, unique each): P3 · P8 · P9 · P10
//   Group D (bento grid, no phone):         P11 · P12 · P13
//   Group E (full-screen single phone):     P14 · P15 · P16 · P17
//   Group F (typography, no phone):         P18 · P19 · P20

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
import { Poster11FamilyBento } from '@/components/posters/Poster11FamilyBento'
import { Poster12PrivacyBento } from '@/components/posters/Poster12PrivacyBento'
import { Poster13AiBento } from '@/components/posters/Poster13AiBento'
import { Poster14HomeBig } from '@/components/posters/Poster14HomeBig'
import { Poster15AiBig } from '@/components/posters/Poster15AiBig'
import { Poster16TrendsBig } from '@/components/posters/Poster16TrendsBig'
import { Poster17FamilyBig } from '@/components/posters/Poster17FamilyBig'
import { Poster18LocalFirst } from '@/components/posters/Poster18LocalFirst'
import { Poster19ZhHero } from '@/components/posters/Poster19ZhHero'
import { Poster20Testimonial } from '@/components/posters/Poster20Testimonial'

type Locale = 'en' | 'zh'

const POSTERS: Record<string, (p: { locale?: Locale }) => React.ReactNode> = {
  '1': Poster1Hero, '2': Poster2BeforeAfter, '3': Poster3DataDark,
  '4': Poster4Family, '5': Poster5Features, '6': Poster6MedReminder,
  '7': Poster7EmergencyContrast, '8': Poster8ByocLock, '9': Poster9PetRecords,
  '10': Poster10Cta,
  '11': Poster11FamilyBento, '12': Poster12PrivacyBento, '13': Poster13AiBento,
  '14': Poster14HomeBig, '15': Poster15AiBig, '16': Poster16TrendsBig,
  '17': Poster17FamilyBig,
  '18': Poster18LocalFirst, '19': Poster19ZhHero, '20': Poster20Testimonial,
}

// output: export 要求动态路由预声明所有参数。海报 id 为固定的 1..20(见 POSTERS)。
export function generateStaticParams() {
  return Object.keys(POSTERS).map((id) => ({ id }))
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
