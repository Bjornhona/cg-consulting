import JobOffersSection from "@/components/sections/jobOffers/JobOffers"
import { getJobOffers } from "@/sanity/queries"
import { JobOfferType } from "@/types/sanity"
import Hero from "@/components/sections/hero/Hero"
import jobOffersImage from "@/components/sections/jobOffers/job-offers-image.jpg"
import CTA from "@/components/sections/CTA"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Ofertas de empleo | CG Consulting',
  description:
    'Descubre oportunidades laborales seleccionadas por CG Consulting. Conectamos talento con empresas a través de un enfoque humano y personalizado.',
}

const JobOffersPage = async () => {
  const headline = 'Ofertas de trabajo'
  const subheadline = 'En CG Consulting colaboramos con empresas que valoran el talento, la diversidad y el crecimiento profesional. Aquí encontrarás nuestras oportunidades laborales activas, seleccionadas cuidadosamente para asegurar un buen encaje tanto profesional como humano.'
  const title = 'Posiciones abiertas'
  const description = 'Explora nuestras ofertas actuales y encuentra tu próxima oportunidad profesional.'
  const limit = 6
  const jobOffers: JobOfferType[] = await getJobOffers(limit)

  return (
    <>
      <Hero
        // _type="sectionHero"
        headline={headline}
        subheadline={subheadline}
        staticImageSrc={jobOffersImage.src}
      />
      <JobOffersSection
        _type="sectionJobOffers"
        title={title}
        description={description}
        jobOffers={jobOffers}
      />
      <CTA
        _type="sectionCTA"
        headline="¿Quieres unirte a nuestro equipo?"
        text="Responde a nuestras oportunidades laborales actuales. Si no encuentras una oferta que encaje con tu perfil, no dudes en ponerte en contacto con nosotros. Siempre estamos interesados en conocer talento excepcional."
        primaryCta={{ label: "Contactar", href: "/contact" }}
      />
    </>
  )
}

export default JobOffersPage
