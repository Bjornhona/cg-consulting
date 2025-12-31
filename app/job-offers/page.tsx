import JobOffersSection from "@/components/sections/jobOffers/JobOffers"
import { getJobOffers, getSettings } from "@/sanity/queries"
import { JobOfferType } from "@/types/sanity"
import Hero from "@/components/sections/hero/Hero"
import jobOffersImage from "@/components/sections/jobOffers/job-offers-image.jpg"
import CTA from "@/components/sections/CTA"
import { Metadata } from "next"
import { PortableTextBlock } from "next-sanity"
import { SectionHero } from "@/types/sections"

export const generateMetadata = async (): Promise<Metadata> => {
  const settings = await getSettings()
  return {
  title: `Ofertas de empleo | ${settings.siteTitle}`,
    description:
      `Descubre oportunidades laborales seleccionadas por ${settings.siteTitle}. Conectamos talento con empresas a través de un enfoque humano y personalizado.`,
  }
}

const JobOffersPage = async () => {
  const settings = await getSettings()
  const heroData: SectionHero = {
    _type: 'sectionHero' as const,
    headline: 'Ofertas de trabajo',
    subheadline: [{_type: 'block', children: [{_type: 'span', text: `En ${settings.siteTitle} colaboramos con empresas que valoran el talento, la diversidad y el crecimiento profesional. Aquí encontrarás nuestras oportunidades laborales activas, seleccionadas cuidadosamente para asegurar un buen encaje tanto profesional como humano.`}]}] as PortableTextBlock[],
    staticImageSrc: jobOffersImage.src,
  }
  const jobOffers: JobOfferType[] = await getJobOffers(6)
  const jobOffersData_ES = {
    _type: 'sectionJobOffers' as const,
    title: 'Posiciones abiertas',
    description: 'Explora nuestras ofertas actuales y encuentra tu próxima oportunidad profesional.',
    jobOffers: jobOffers,
  }
  const ctaData_ES = {
    _type: 'sectionCTA' as const,
    headline: '¿Quieres unirte a nuestro equipo?',
    text: 'Responde a nuestras oportunidades laborales actuales. Si no encuentras una oferta que encaje con tu perfil, no dudes en ponerte en contacto con nosotros. Siempre estamos interesados en conocer talento excepcional.',
    primaryCta: { label: 'Contactar', href: '/contact' },
  }
  
  return (
    <>
      <Hero {...heroData} />
      <JobOffersSection {...jobOffersData_ES} />
      <CTA {...ctaData_ES} />
    </>
  )
}

export default JobOffersPage
