import Hero from "@/components/sections/hero/Hero";
import Services from "@/components/sections/services/Services";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import {
  SectionHero,
  SectionServices,
  SectionTestimonials,
  SectionCTA,
  SectionCards,
  SectionList,
  SectionContact
} from "@/types/sections";
import Cards from "@/components/sections/Cards";
import { Page } from "@/types/pages";
import List from "@/components/sections/List";
import Contact from "@/components/sections/contact/Contact";

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
            | SectionList
            | SectionContact,
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

            case "sectionContact":
              return <Contact key={index} {...section} />;

            default:
              return null;
          }
        }
      )}
    </>
  );
}
