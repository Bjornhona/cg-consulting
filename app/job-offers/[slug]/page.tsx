import { getJobOfferBySlug } from "@/sanity/queries"
import { JobOfferType } from "@/types/sanity"
import { Metadata } from "next"
import JobOffer from "@/components/sections/jobOffers/JobOffer"

export const metadata: Metadata = {
  title: "Ofertas de empleo | CG Consulting",
  description: "Descubre nuestras oportunidades laborales actuales",
}

const JobOfferPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params
  const jobOffer: JobOfferType = await getJobOfferBySlug(slug)

  return (
    <JobOffer {...jobOffer} />
  )
}

export default JobOfferPage
