import Hero from "@/components/sections/hero/Hero";
import Services from "@/components/sections/services/Services";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import {
  SectionServices,
  SectionTestimonials,
  SectionCTA,
  SectionCards,
  SectionList,
  SectionContact,
} from "@/types/sections";
import Cards from "@/components/sections/Cards";
import { Page } from "@/types/pages";
import List from "@/components/sections/List";
import Contact from "@/components/sections/contact/Contact";

export default function PageRenderer({ page }: { page: Page }) {
  const isHome = page.slug.current === "home";
  const variant = isHome ? "primary" : "secondary";

  return (
    <>
      {page.hero && <Hero {...page.hero} variant={variant} />}
      {page.sections?.map(
        (
          section:
            | SectionServices
            | SectionTestimonials
            | SectionCTA
            | SectionCards
            | SectionList
            | SectionContact
        ) => {
          switch (section._type) {
            case "sectionServices":
              return <Services key={section._key} {...section} />;

            case "sectionTestimonials":
              return <Testimonials key={section._key} {...section} />;

            case "sectionCTA":
              return <CTA key={section._key} {...section} />;

            case "sectionCards":
              return <Cards key={section._key} {...section} />;

            case "sectionList":
              return <List key={section._key} {...section} />;

            case "sectionContact":
              return <Contact key={section._key} {...section} />;

            default:
              return null;
          }
        },
      )}
    </>
  );
}
