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
            | SectionContact,
          index
        ) => {
          const key = section._key ?? `section-${index}`;
          switch (section._type) {
            case "sectionServices":
              return <Services key={key} {...section} />;

            case "sectionTestimonials":
              return <Testimonials key={key} {...section} />;

            case "sectionCTA":
              return <CTA key={key} {...section} />;

            case "sectionCards":
              return <Cards key={key} {...section} />;

            case "sectionList":
              return <List key={key} {...section} />;

            case "sectionContact":
              return <Contact key={key} {...section} />;

            default:
              return null;
          }
        },
      )}
    </>
  );
}
