import { client } from './lib/client'
import { groq } from 'next-sanity'

export const pageQuery = groq`
*[_type == "page" && slug.current == $slug][0]{
  title,
  slug,
  seo{
    metaTitle,
    metaDescription,
    ogImage,
    noIndex
  },
  sections[]{
    ...,
    _type == "sectionHero" => {
      headline,
      subheadline,
      primaryCta,
      secondaryCta,
      image
    },
    _type == "sectionServices" => {
      title,
      description,
      services[]{
        title,
        description,
        slug,
        icon
      }
    },
    _type == "sectionTestimonials" => {
      title,
      testimonials
    },
    _type == "sectionCTA" => {
      headline,
      text,
      primaryCta,
      secondaryCta
    },
    _type == "sectionCards" => {
      title,
      description,
      cards
    },
    _type == "sectionList" => {
      title,
      description,
      listItems
    },
    _type == "sectionBlogPosts" => {
      title,
      description,
      blogPosts
    },
    _type == "sectionContact" => {
      title,
      description,
      contactInfo
    }
  }
}`

export const getPageBySlug = async (slug: string) => {
  const page = await client.fetch(pageQuery, { slug })
  return page
}

export const navigationQuery = groq`
*[_type == "navigation"][0]{
  title,
  items[]{
    label,
    href,
    isPrimary
  }
}`

export const getNavigation = async () => {
  const navigation = await client.fetch(navigationQuery)
  return navigation
}

export const settingsQuery = groq`
*[_type == "settings"][0]{
  siteTitle,
  siteDescription,
  logo,
  iconLogo,
  defaultOgImage
}`

export const getSettings = async () => {
  const settings = await client.fetch(settingsQuery)
  return settings
}
