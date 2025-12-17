import { ImageProps } from "next/image"

export interface Seo {
  metaTitle: string
  metaDescription: string
}

export interface Service {
  title: string
  description: string
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
