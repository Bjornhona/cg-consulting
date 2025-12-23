import { SectionJobOffers } from "@/types/sections"
import JobOfferItem from "./JobOfferItem"

const JobOffersSection = async ({ title, description, jobOffers }: SectionJobOffers) => {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-7xl px-6 py-24">

        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="mb-4">
            {title}
          </h2>
          <p className="text-gray-medium">
            {description}
          </p>
        </div>

        {/* Grid */}
        {jobOffers?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {jobOffers.map((jobOffer) => (
              <JobOfferItem key={jobOffer.slug.current} {...jobOffer} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-medium">
            No hay ofertas disponibles en este momento.
          </p>
        )}

      </div>
    </section>
  )
}

export default JobOffersSection
