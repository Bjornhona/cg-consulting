import { type SchemaTypeDefinition } from "sanity";
import { post } from "./post";
import { page } from "./page";
import { sectionHero } from "./sectionHero";
import { sectionServices } from "./sectionServices";
import { sectionTestimonials } from "./sectionTestimonials";
import { sectionCTA } from "./sectionCTA";
import { sectionCards } from "./sectionCards";
import { sectionList } from "./sectionList";
import { sectionBlogPosts } from "./sectionBlogPosts";
import { sectionContact } from "./sectionContact";
import { navigation } from "./navigation";
import { settings } from "./settings";
import { seo } from "./seo";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    page,
    sectionHero,
    sectionServices,
    sectionTestimonials,
    sectionCTA,
    sectionCards,
    sectionList,
    sectionBlogPosts,
    sectionContact,
    navigation,
    settings,
    seo,
  ],
};
