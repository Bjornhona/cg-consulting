import { ImageProps } from "next/image"
import { Service, Testimonial } from "./sanity"

export interface SectionHero {
  _type: 'sectionHero'
  headline: string
  subheadline: string
  primaryCta: { label: string; href: string }
  image: ImageProps
  isHome?: boolean
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
