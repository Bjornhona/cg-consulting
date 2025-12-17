import { ImageProps } from "next/image"
import { Service, Testimonial, BlogPost } from "./sanity"

export interface SectionHero {
  _type: 'sectionHero'
  variant: 'primary' | 'secondary'
  headline: string
  subheadline: string
  primaryCta: { label: string; href: string }
  image: ImageProps
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
  headline: string
  text: string
  primaryCta: { label: string; href: string }
}

export interface SectionBlogPosts {
  _type: 'sectionBlogPosts'
  title: string
  description: string
  blogPosts: BlogPost[]
}

