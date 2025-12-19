import { ImageProps } from "next/image"

export interface Seo {
  metaTitle: string
  metaDescription: string
  ogImage: ImageProps
  noIndex: boolean
}

export interface Settings {
  siteTitle: string
  siteDescription: string
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
  slug: string
  image: ImageProps
  excerpt: string
  publishedAt: string
}

export interface NavItem {
  label: string
  href: string
  isPrimary?: boolean
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
