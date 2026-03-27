import { getBlogPostBySlug, getSettings } from "@/sanity/queries"
import { getTranslations } from "next-intl/server"
import { Metadata } from "next"
import BlogPost from "@/components/sections/blog/Post"
import Hero from "@/components/sections/hero/Hero"
import { urlFor } from "@/sanity/lib/image"
import CTA from "@/components/sections/CTA"
import { SectionCTA, SectionHero } from "@/types/sections"
import cloudImage from '@/components/sections/blog/cabecera_1.jpg'
import { notFound } from "next/navigation"
import type { PageProps } from "@/types/pages"

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug, locale } = await params;
  if (!slug) {
    notFound()
  }
  const t = await getTranslations("blog");
  const [post, settings] = await Promise.all([
    getBlogPostBySlug(slug, locale),
    getSettings(locale),
  ])

  if (!post) {
    return {
      title: t("postNotFound"),
      description: t("postNotFoundDescription"),
    }
  }

  return {
    title: post.seo?.metaTitle ?? `${post.title} | ${settings.siteTitle}`,
    description: post.seo?.metaDescription ?? post.excerpt,
    robots: post.seo?.noIndex ? "noindex, nofollow" : "index, follow",
    openGraph: {
      title: post.seo?.metaTitle ?? post.title,
      description: post.seo?.metaDescription ?? post.excerpt,
      images: post.seo?.ogImage
        ? [post.seo.ogImage]
        : post.coverImage
        ? [post.coverImage]
        : [],
    },
  }
}

const BlogPostPage = async ({ params }: PageProps) => {
  const t = await getTranslations("blog");
  const { slug, locale } = await params;
  if (!slug) {
    return notFound()
  }
  const post = await getBlogPostBySlug(slug, locale);
  if (!post) {
    return notFound()
  }
  const heroData: SectionHero = {
    _type: "sectionHero" as const,
    staticImageSrc: post.coverImage ? urlFor(post.coverImage).width(2000).quality(85).url() : cloudImage.src,
  }
  const ctaData: SectionCTA = {
    _type: "sectionCTA" as const,
    headline: t("specializedTalent"),
    text: [{
      _type: "block",
      children: [{
        _type: "span",
        text: t("contactUs"),
      }]
    }],
    primaryCta: {
      label: t("contact"),
      href: "/contact",
    }
  }

  return (
    <>
      <Hero {...heroData} />
      <BlogPost {...post} />
      <CTA {...ctaData} />
    </>
  )
}

export default BlogPostPage
