import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import { SectionHero, SectionServices, SectionTestimonials, SectionCTA } from '@/types/sections'
import { Page } from '@/types/pages'

export default function PageRenderer({ page }: {page: Page}) {
  return (
    <>
      {page.sections?.map((section: SectionHero | SectionServices | SectionTestimonials | SectionCTA, index: number) => {
        switch (section._type) {
          case 'sectionHero':
            const isHome = page.slug === '/'
            const variant = isHome ? 'primary' : 'secondary'
            return <Hero key={index} {...section} variant={variant} />

          case 'sectionServices':
            return <Services key={index} {...section} />

          case 'sectionTestimonials':
            return <Testimonials key={index} {...section} />

          case 'sectionCTA':
            return <CTA key={index} {...section} />

          default:
            return null
        }
      })}
    </>
  )
}