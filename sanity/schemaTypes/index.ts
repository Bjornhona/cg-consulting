import { type SchemaTypeDefinition } from "sanity";
import { blogPost } from "./blogPost";
import { page } from "./page";
import { sectionHero } from "./sectionHero";
import { sectionServices } from "./sectionServices";
import { sectionTestimonials } from "./sectionTestimonials";
import { sectionCTA } from "./sectionCTA";
import { sectionCards } from "./sectionCards";
import { sectionList } from "./sectionList";
import { sectionContact } from "./sectionContact";
import { navigation } from "./navigation";
import { settings } from "./settings";
import { seo } from "./seo";
import { jobOffer } from "./jobOffer";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    page,
    sectionHero,
    sectionServices,
    sectionTestimonials,
    sectionCTA,
    sectionCards,
    sectionList,
    sectionContact,
    navigation,
    settings,
    seo,
    blogPost,
    jobOffer,
  ],
};
