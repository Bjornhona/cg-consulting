import { getJobOfferBySlug, getSettings } from "@/sanity/queries";
import { getTranslations } from "next-intl/server";
import { JobOfferType } from "@/types/sanity";
import { Metadata } from "next";
import JobOffer from "@/components/sections/jobOffers/JobOffer";
import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/hero/Hero";
import image from "@/components/sections/jobOffers/job-offer-item.jpg";
import { SectionHero } from "@/types/sections";
import { PortableTextBlock } from "next-sanity";
import { notFound } from "next/navigation";
import type { PageProps } from "@/types/pages";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const t = await getTranslations("jobOffers");
  const { slug, locale } = await params;
  if (!slug) {
    notFound()
  }
  const [jobOffer, settings] = await Promise.all([
    getJobOfferBySlug(slug, locale),
    getSettings(locale),
  ]);

  if (!jobOffer || !settings) {
    return {
      title: t("jobNotFound"),
      description: t("jobNotExists"),
    }
  }

  return {
    title: jobOffer.seo?.metaTitle ?? `${jobOffer.title} | ${settings.siteTitle}`,
    description: jobOffer.seo?.metaDescription ?? jobOffer.excerpt,
  };
}

const JobOfferPage = async ({ params }: PageProps) => {
  const t = await getTranslations("jobOffers");
  const { slug, locale } = await params;
  if (!slug) {
    notFound()
  }
  const jobOffer: JobOfferType = await getJobOfferBySlug(slug, locale);
  if (!jobOffer) {
    return notFound()
  }
  
  const heroData: SectionHero = {
    _type: "sectionHero" as const,
    headline: jobOffer?.title ?? t("jobNotFound"),
    subheadline: [{_type: 'block', children: [{_type: 'span', text: jobOffer.excerpt}]}] as PortableTextBlock[],
    staticImageSrc: image.src,
  };

  const ctaData = {
    _type: "sectionCTA" as const,
    headline: t("interestedInThisPosition"),
    text: [{
      _type: "block",
      children: [{
        _type: "span",
        text: t("sendYourApplication"),
      }]
    }],
    primaryCta: { label: t("sendApplication"), href: "/contact" },
  };
  
  return (
    <>
      <Hero {...heroData} />
      <JobOffer {...jobOffer} />
      <CTA {...ctaData} />
    </>
  );
};

export default JobOfferPage;
