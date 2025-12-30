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
    _type == "sectionContact" => {
      title,
      description,
    },
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
    isPrimary,
    children[]
  }
}`

export const getNavigation = async () => {
  const navigation = await client.fetch(navigationQuery)
  return navigation
}

export const footerNavigationQuery = groq`
*[_type == "navigation" && title == "Footer Navigation"][0]{
  title,
  items[]{
    label,
    href,
    isPrimary
  }
}`

export const getFooterNavigation = async () => {
  const footerNavigation = await client.fetch(footerNavigationQuery)
  return footerNavigation
}

export const settingsQuery = groq`
*[_type == "settings"][0]{
  siteTitle,
  siteDescription,
  companyName,
  contactPerson,
  companyNIF,
  location,
  email,
  phone,
  linkedinUrl,
  instagramUrl,
  logo,
  iconLogo,
  defaultOgImage
}`

export const getSettings = async () => {
  const settings = await client.fetch(settingsQuery)
  return settings
}

export const blogPostsQuery = groq`
*[_type == "blogPost" && defined(publishedAt)]
| order(publishedAt desc)[0...$limit]{
  title,
  slug,
  excerpt,
  publishedAt,
  coverImage,
  content,
  seo
}`

export const getBlogPosts = async (limit = 3) => {
  return client.fetch(blogPostsQuery, { limit }, { next: { revalidate: 60 } })
}

export const jobOffersQuery = groq`
*[_type == "jobOffer" && defined(publishedAt)]
| order(publishedAt desc)[0...$limit]{
  title,
  slug,
  location,
  contractType,
  excerpt,
  publishedAt,
  seo
}`

export const getJobOffers = async (limit = 6) => {
  return client.fetch(jobOffersQuery, { limit }, { next: { revalidate: 60 } })
}

export const blogPostBySlugQuery = groq`
*[_type == "blogPost" && slug.current == $slug][0]{
  title,
  slug,
  excerpt,
  publishedAt,
  content,
  coverImage,
  seo
}`

export const getBlogPostBySlug = async (slug: string) => {
  return client.fetch(blogPostBySlugQuery, { slug })
}

export const jobOfferBySlugQuery = groq`
*[_type == "jobOffer" && slug.current == $slug][0]{
  title,
  slug,
  location,
  contractType,
  excerpt,
  publishedAt,
  content,
  seo
}`

export const getJobOfferBySlug = async (slug: string) => {
  return client.fetch(jobOfferBySlugQuery, { slug })
}
