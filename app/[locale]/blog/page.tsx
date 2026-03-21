import CTA from "@/components/sections/CTA"
import Hero from "@/components/sections/hero/Hero"
import BlogSection from "@/components/sections/blog/Blog"
import { getBlogPosts } from "@/sanity/queries"
import image from '@/components/sections/blog/cabecera_1.jpg'
import { Metadata } from "next"
import { getSettings } from "@/sanity/queries"
import { SectionBlogPosts, SectionHero, SectionCTA } from "@/types/sections"
import { PortableTextBlock } from "next-sanity"
import { getLocale, getTranslations } from "next-intl/server"

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations("blog");
  const locale = await getLocale()
  const settings = await getSettings(locale)
  return {
    title: `${t("title")} | ${settings.siteTitle}`,
    description: t("metaDescription"),
  }
}

const BlogPage = async () => {
  const t = await getTranslations("blog");
  const locale = await getLocale()
  const blogPosts = await getBlogPosts(12, locale)

  const heroData: SectionHero = {
    _type: 'sectionHero' as const,
    headline: t("title"),
    subheadline: [{_type: 'block', children: [{_type: 'span', text: t("description")}]}] as PortableTextBlock[],
    staticImageSrc: image.src,
  }

  const blogPostsData_ES: SectionBlogPosts= {
    _type: 'sectionBlogPosts' as const,
    title: t("latestPosts"),
    description: t("trends"),
    blogPosts: blogPosts,
  }

  const ctaData: SectionCTA = {
    _type: 'sectionCTA' as const,
    headline: t("joinOurTeam"),
    text: [{
      _type: "block",
      children: [{
        _type: "span",
        text: t("opportunities"),
      }]
    }],
    primaryCta: { label: t("contactUs"), href: '/contact' },
  }

  return (
    <>
      <Hero {...heroData} />
      <BlogSection {...blogPostsData_ES} />
      <CTA {...ctaData} />
    </>
  )
}

export default BlogPage
