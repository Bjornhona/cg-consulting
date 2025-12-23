import { PortableTextBlock } from "@portabletext/types"
import { Seo } from "@/types/sanity"
import { Image } from "sanity"

export interface BlogItemProps {
  title: string
  slug: { current: string }
  excerpt: string
  publishedAt: string
  coverImage: Image
}

export interface PostItemProps {
  title: string
  description: string
  slug: string
  excerpt: string
  publishedAt: string
  content: PortableTextBlock[]
  seo: Seo
}
