import { client } from './lib/client'
import { groq } from 'next-sanity'

export const pageQuery = groq`
*[_type == "page" && slug.current == $slug && language == $lang][0]{
  title,
  slug,
  language,
  seo{
    metaTitle,
    metaDescription,
    ogImage,
    noIndex
  },
  hero{
    headline,
    subheadline,
    primaryCta,
    secondaryCta,
    image
  },
  sections[]{
    ...,
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
      secondaryCta,
      darkBackground
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
      visibleFields,
      visibleContactInfo,
    },
  }
}`

export const getPageBySlug = async (slug: string, lang: string) => {
  let page = await client.fetch(pageQuery, { slug, lang })
  if (!page && lang !== "en") {
    page = await client.fetch(pageQuery, { slug, lang: "en" });
  }
  return page
}

export const navigationQuery = groq`
*[_type == "navigation" && language == $lang][0]{
  title,
  language,
  items[]{
    label,
    href,
    isPrimary,
    children[]{
      label,
      href
    }
  }
}`

export const getNavigation = async (lang: string) => {
  let navigation = await client.fetch(navigationQuery, { lang }, { next: { revalidate: 60 } })
  if (!navigation && lang !== "en") {
    navigation = await client.fetch(navigationQuery, { lang: "en" }, { next: { revalidate: 60 } });
  }
  return navigation
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
  languages,
  defaultLanguage,
  analyticsMode,
  gaMeasurementId,
  gtmId,
  defaultOgImage
}`

export const getSettings = async (lang: string) => {
  const settings = await client.fetch(settingsQuery, { lang })
  return settings
}

export const blogPostsQuery = groq`
*[_type == "blogPost" && defined(publishedAt) && language == $lang]
| order(publishedAt desc)[0...$limit]{
  title,
  slug,
  language,
  excerpt,
  publishedAt,
  coverImage,
  content,
  seo
}`

export const getBlogPosts = async (limit = 3, lang: string) => {
  return client.fetch(blogPostsQuery, { limit, lang }, { next: { revalidate: 60 } })
}

export const jobOffersQuery = groq`
*[_type == "jobOffer" && defined(publishedAt) && language == $lang]
| order(publishedAt desc)[0...$limit]{
  title,
  slug,
  language,
  location,
  contractType,
  excerpt,
  publishedAt,
  seo,
}`

export const getJobOffers = async (limit = 6, lang: string) => {
  return client.fetch(jobOffersQuery, { limit, lang }, { next: { revalidate: 60 } })
}

export const blogPostBySlugQuery = groq`
*[_type == "blogPost" && slug.current == $slug && language == $lang][0]{
  title,
  slug,
  language,
  excerpt,
  publishedAt,
  content,
  coverImage,
  seo
}`

export const getBlogPostBySlug = async (slug: string, lang: string) => {
  return client.fetch(blogPostBySlugQuery, { slug, lang })
}

export const jobOfferBySlugQuery = groq`
*[_type == "jobOffer" && slug.current == $slug && language == $lang][0]{
  title,
  slug,
  language,
  location,
  contractType,
  excerpt,
  publishedAt,
  content,
  seo
}`

export const getJobOfferBySlug = async (slug: string, lang: string) => {
  return client.fetch(jobOfferBySlugQuery, { slug, lang })
}
