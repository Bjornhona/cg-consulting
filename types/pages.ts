import { SectionHero, SectionServices, SectionTestimonials, SectionCTA } from "./sections"
import { Seo } from "./sanity"

export interface Page {
  title: string
  slug: string
  seo: Seo
  sections: (SectionHero | SectionServices | SectionTestimonials | SectionCTA)[]
}
