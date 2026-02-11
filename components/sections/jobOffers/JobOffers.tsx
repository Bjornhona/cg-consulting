"use client";
import { SectionJobOffers } from "@/types/sections";
import JobOfferItem from "./JobOfferItem";
import { motion } from "framer-motion";

const JobOffersSection = ({
  title = "Ofertas laborales",
  description = "Descubre nuestras ofertas laborales actuales. Si no encuentras una oferta que encaje con tu perfil, no dudes en ponerte en contacto con nosotros. Siempre estamos interesados en conocer talento excepcional.",
  jobOffers = [],
}: SectionJobOffers) => {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <h2 className="mb-4">{title}</h2>
          <p className="text-gray-medium">{description}</p>
        </motion.div>

        {jobOffers?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {jobOffers.map((jobOffer, index) => (
              <JobOfferItem key={jobOffer.slug.current} {...jobOffer} index={index} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-medium">
            No hay ofertas disponibles en este momento.
          </p>
        )}
      </div>
    </section>
  );
};

export default JobOffersSection;
