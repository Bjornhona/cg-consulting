import {
  SectionHero,
  SectionServices,
  SectionTestimonials,
  SectionCTA,
  SectionCards,
  SectionContact,
  SectionList,
} from "./sections";
import { Seo } from "./sanity";

export interface Page {
  title: string;
  slug: { current: string };
  seo: Seo;
  hero: SectionHero;
  sections: (
    | SectionServices
    | SectionTestimonials
    | SectionCTA
    | SectionCards
    | SectionList
    | SectionContact
  )[];
}

export type PageProps = {
  params: Promise<{ slug: string, locale: string }>
}
