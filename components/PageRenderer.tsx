import Hero from "@/components/sections/hero/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import {
  SectionHero,
  SectionServices,
  SectionTestimonials,
  SectionCTA,
  SectionCards,
  SectionList,
} from "@/types/sections";
import Cards from "@/components/sections/Cards";
import { Page } from "@/types/pages";
import List from "@/components/sections/List";

export default function PageRenderer({ page }: { page: Page }) {
  return (
    <>
      {page.sections?.map(
        (
          section:
            | SectionHero
            | SectionServices
            | SectionTestimonials
            | SectionCTA
            | SectionCards
            | SectionList,
          index: number
        ) => {
          switch (section._type) {
            case "sectionHero":
              const isHome = page.slug.current === "home";
              const variant = isHome ? "primary" : "secondary";
              return <Hero key={index} {...section} variant={variant} />;

            case "sectionServices":
              return <Services key={index} {...section} />;

            case "sectionTestimonials":
              return <Testimonials key={index} {...section} />;

            case "sectionCTA":
              return <CTA key={index} {...section} />;

            case "sectionCards":
              return <Cards key={index} {...section} />;

            case "sectionList":
              return <List key={index} {...section} />;

            default:
              return null;
          }
        }
      )}
    </>
  );
}
