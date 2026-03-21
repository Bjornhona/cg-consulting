"use client";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import { JobOfferType } from "@/types/sanity";
import { EVENTS, trackEvent } from "@/lib/tracking";
import { useTranslations } from "next-intl";

const JobOfferItem = ({
  title,
  location,
  contractType,
  excerpt,
  publishedAt,
  slug,
  index,
}: JobOfferType) => {
  const t = useTranslations("jobOffers");
  const contractTypeText = () => {
    switch (contractType) {
      case 'fullTime':
        return t("fullTime");
      case 'partTime':
        return t("partTime");
      case 'freelance':
        return t("freelance");
      default:
        return t("fullTime");
    }
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="
        group
        relative
        h-full
        rounded-xl
        border border-gray-light
        bg-white
        p-8
        shadow-sm
        transition
        hover:shadow-md
      "
    >
      <Link
        href={`/job-offers/${slug.current}`}
        className="absolute inset-0"
        onClick={() => {
          trackEvent(EVENTS.CTA_CLICK, {
            location: "job_offer_card",
            label: title,
          });
        }}
      />

      {/* Meta */}
      <div className="mb-4 flex flex-wrap gap-3 text-sm text-gray-medium">
        {location && (
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {location}
          </span>
        )}
        {contractType && (
          <span className="flex items-center gap-1">
            <Briefcase className="h-4 w-4" />
            {contractTypeText()}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Published at */}
      {publishedAt && (
        <p className="mb-6 text-gray-medium leading-relaxed text-sm">
          {t("publishedAt")} {new Date(publishedAt).toLocaleDateString()}
        </p>
      )}

      {/* Excerpt */}
      {excerpt && (
        <p className="mb-6 text-gray-medium leading-relaxed">{excerpt}</p>
      )}

      {/* CTA */}
      <div className="mt-auto flex items-center gap-2 font-semibold text-primary">
        {t("viewOffer")}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </motion.article>
  );
};

export default JobOfferItem;
