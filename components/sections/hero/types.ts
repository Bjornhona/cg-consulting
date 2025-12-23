import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export type HeroVariant = 'primary' | 'secondary'

export type HeroCta = {
  label: string
  href: string
}

export type HeroProps = {
  variant?: HeroVariant
  headline?: string
  subheadline?: string
  primaryCta?: HeroCta
  secondaryCta?: HeroCta
  image?: SanityImageSource // Sanity image
  staticImageSrc?: string // local image
}
