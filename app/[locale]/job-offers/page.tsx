import JobOffersSection from "@/components/sections/jobOffers/JobOffers"
import { getJobOffers, getSettings } from "@/sanity/queries"
import { JobOfferType } from "@/types/sanity"
import Hero from "@/components/sections/hero/Hero"
import jobOffersImage from "@/components/sections/jobOffers/job-offers-image.jpg"
import CTA from "@/components/sections/CTA"
import { Metadata } from "next"
import { PortableTextBlock } from "next-sanity"
import { SectionHero } from "@/types/sections"
import { getLocale, getTranslations } from "next-intl/server"

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations("jobOffers");
  const locale = await getLocale()
  const settings = await getSettings(locale)
  return {
  title: `${t("title")} | ${settings.siteTitle}`,
    description:
      `${t("description")} ${settings.siteTitle}. ${t("weConnect")}`,
  }
}

const JobOffersPage = async () => {
  const t = await getTranslations("jobOffers");
  const locale = await getLocale()
  const settings = await getSettings(locale)
  const heroData: SectionHero = {
    _type: 'sectionHero' as const,
    headline: t("title"),
    subheadline: [{_type: 'block', children: [{_type: 'span', text: `${t("at")} ${settings.siteTitle} ${t("collaborate")}`}]}] as PortableTextBlock[],
    staticImageSrc: jobOffersImage.src,
  }
  const jobOffers: JobOfferType[] = await getJobOffers(6, locale)
  const jobOffersData_ES = {
    _type: 'sectionJobOffers' as const,
    title: t("openPositions"),
    description: t("explorePositions"),
    jobOffers: jobOffers,
  }
  const ctaData_ES = {
    _type: 'sectionCTA' as const,
    headline: t("joinOurTeam"),
    text: [{
      _type: "block",
      children: [{
        _type: "span",
        text: t("opportunities"),
      }]
    }],
    primaryCta: { label: t("contact"), href: '/contact' },
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
