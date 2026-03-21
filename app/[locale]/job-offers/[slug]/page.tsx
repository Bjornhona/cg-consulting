import { getJobOfferBySlug, getSettings } from "@/sanity/queries";
import { getLocale } from "next-intl/server";
import { JobOfferType } from "@/types/sanity";
import { Metadata } from "next";
import JobOffer from "@/components/sections/jobOffers/JobOffer";
import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/hero/Hero";
import image from "@/components/sections/jobOffers/job-offer-item.jpg";
import { SectionHero } from "@/types/sections";
import { PortableTextBlock } from "next-sanity";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  if (!slug) {
    notFound()
  }
  const locale = await getLocale();
  const [jobOffer, settings] = await Promise.all([
    getJobOfferBySlug(slug, locale),
    getSettings(locale),
  ]);

  if (!jobOffer || !settings) {
    return {
      title: "Oferta laboral no encontrada",
      description: "Esta oferta laboral no existe",
    }
  }

  return {
    title: jobOffer.seo?.metaTitle ?? `${jobOffer.title} | ${settings.siteTitle}`,
    description: jobOffer.seo?.metaDescription ?? jobOffer.excerpt,
  };
}

const JobOfferPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const locale = await getLocale();
  if (!slug) {
    notFound()
  }
  const jobOffer: JobOfferType = await getJobOfferBySlug(slug, locale);
  if (!jobOffer) {
    return notFound()
  }
  const heroData: SectionHero = {
    _type: "sectionHero" as const,
    headline: jobOffer?.title ?? "Oferta laboral no encontrada",
    subheadline: [{_type: 'block', children: [{_type: 'span', text: jobOffer.excerpt}]}] as PortableTextBlock[],
    staticImageSrc: image.src,
  };
  // const ctaData_EN = {
  //   _type: "sectionCTA" as const,
  //   headline: "Interested in this position?",
  //   text: "Send us your application and we’ll get back to you shortly.",
  //   primaryCta: { label: "Apply now", href: "/contact" },
  // };
  const ctaData_ES = {
    _type: "sectionCTA" as const,
    headline: "¿Te interesa esta oportunidad?",
    text: [{
      _type: "block",
      children: [{
        _type: "span",
        text: "Envíanos tu candidatura y nos pondremos en contacto contigo lo antes posible."
      }]
    }],
    primaryCta: { label: "Enviar candidatura", href: "/contact" },
  };
  
  return (
    <>
      <Hero {...heroData} />
      <JobOffer {...jobOffer} />
      <CTA {...ctaData_ES} />
    </>
  );
};

export default JobOfferPage;
