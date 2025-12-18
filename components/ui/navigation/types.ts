import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type NavItem = {
  _key: string
  label: string
  href: string
  isPrimary?: boolean
}

export type HeaderProps = {
  navigation: NavItem[]
  logo?: SanityImageSource
  siteTitle?: string
}

export type FooterProps = {
  navigation: NavItem[]
  iconLogo?: SanityImageSource
  siteTitle?: string
}

export type LogoProps = {
  logo?: SanityImageSource
  alt?: string
  textFallback?: string
}
