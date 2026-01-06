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

export interface SectionServices {
  _type: 'sectionServices'
  title: string
  description: string
  services: Service[]
}

export interface SectionTestimonials {
  _type: 'sectionTestimonials'
  title: string
  description: string
  testimonials: Testimonial[]
}

export interface SectionCTA {
  _type: 'sectionCTA'
  headline?: string
  text?: PortableTextBlock[]
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export interface SectionCards {
  _type: 'sectionCards'
  title: string
  description: string
  cards: Card[]
}

export interface SectionList {
  _type: 'sectionList'
  title: string
  description: string
  listItems: ListItem[]
}

export interface SectionContact {
  _type: 'sectionContact'
  title: string
  description: string
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
