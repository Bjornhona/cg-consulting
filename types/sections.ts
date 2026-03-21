import { ImageProps } from "next/image"
import { Service, Testimonial, Card, ListItem, JobOfferType, BlogPostType } from "./sanity"
import { PortableTextBlock } from "next-sanity"

export interface SectionHero {
  _type: 'sectionHero'
  variant?: 'primary' | 'secondary'
  headline?: string
  subheadline?: PortableTextBlock[]
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  image?: ImageProps,
  staticImageSrc?: string
}

/** Base for all section types - _key from Sanity ensures unique React keys */
interface SectionBase {
  _key?: string
}

export interface SectionServices extends SectionBase {
  _type: 'sectionServices'
  title: string
  description: string
  services: Service[]
}

export interface SectionTestimonials extends SectionBase {
  _type: 'sectionTestimonials'
  title: string
  description: string
  testimonials: Testimonial[]
}

export interface SectionCTA extends SectionBase {
  _type: 'sectionCTA'
  headline?: string
  text?: PortableTextBlock[]
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  darkBackground?: boolean
}

export interface SectionCards extends SectionBase {
  _type: 'sectionCards'
  title: string
  description: string
  cards: Card[]
}

export interface SectionList extends SectionBase {
  _type: 'sectionList'
  title: string
  description: string
  listItems: ListItem[]
}

export interface SectionContact extends SectionBase {
  _type: 'sectionContact'
  visibleFields?: string[]
  visibleContactInfo?: string[]
}

export interface SectionBlogPosts {
  _type: 'sectionBlogPosts'
  title: string
  description: string
  blogPosts: BlogPostType[]
}
export interface SectionJobOffers {
  _type: 'sectionJobOffers'
  title: string
  description: string
  jobOffers: JobOfferType[]
}
