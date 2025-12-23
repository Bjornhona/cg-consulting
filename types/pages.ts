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
  sections: (
    | SectionHero
    | SectionServices
    | SectionTestimonials
    | SectionCTA
    | SectionCards
    | SectionList
    | SectionContact
  )[];
}
