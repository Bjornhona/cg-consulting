import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { ImageProps } from "next/image"
import { PortableTextBlock } from "sanity"

export interface Seo {
  metaTitle: string
  metaDescription: string
  ogImage: ImageProps
  noIndex: boolean
}

export interface Settings {
  siteTitle: string
  siteDescription: string
  companyName: string
  contactPerson: string
  companyNIF: string
  location: string
  email: string
  phone: string
  linkedinUrl: string
  instagramUrl: string
  logo: SanityImageSource
  iconLogo: SanityImageSource
  defaultOgImage: ImageProps
}

export interface Service {
  title: string
  description: string
  slug: string
  icon: 'selection' | 'evaluation' | 'workshops'
}

export interface Testimonial {
  quote: string
  author: string
  role: string
}

export interface BlogPost {
  title: string
  description: string
  slug: string
  image: ImageProps
  excerpt: string
  publishedAt: string
}

export interface NavItem {
  label: string
  href: string
  isPrimary?: boolean
  children?: NavItem[]
}

export interface Card {
  title: string
  text: string
  image: ImageProps
  cta: { label: string; href: string }
}

export interface ListItem {
  title: string
  text: string
}

export interface ContactInfo {
  companyName: string
  contactPerson: string
  phone: string
  email: string
  location: string
}

export interface JobOfferType {
  title: string
  slug: { current: string }
  location: string
  contractType: string
  excerpt: string
  publishedAt: string
  content: PortableTextBlock[]
  seo: Seo
  index: number
}

export interface BlogPostType {
  title: string
  slug: { current: string }
  coverImage: ImageProps
  excerpt: string
  publishedAt: string
  content: PortableTextBlock[]
  seo: Seo
}
