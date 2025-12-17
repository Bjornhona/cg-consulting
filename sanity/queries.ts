import { client } from './lib/client'
import { groq } from 'next-sanity'

export const pageQuery = groq`
*[_type == "page" && slug.current == $slug][0]{
  title,
  slug,
  seo,
  sections[]{
    ...,
    _type == "sectionHero" => {
      headline,
      subheadline,
      primaryCta,
      image
    },
    _type == "sectionServices" => {
      title,
      services
    },
    _type == "sectionTestimonials" => {
      title,
      testimonials
    },
    _type == "sectionCTA" => {
      headline,
      text,
      cta
    },
    _type == "sectionBlogPosts" => {
      title,
      description,
      blogPosts
    }
  }
}
`

export const getPageBySlug = async (slug: string) => {
  const page = await client.fetch(pageQuery, { slug })
  return page
}
