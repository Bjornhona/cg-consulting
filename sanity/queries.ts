import { groq } from 'next-sanity'

export const homePageQuery = groq`
*[_type == "page" && slug.current == "/"][0]{
  title,
  seo,
  sections[]{
    ...,
    _type == "sectionHero" => {
      headline,
      subheadline,
      primaryCta,
      image,
      isHome
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
    }
  }
}
`