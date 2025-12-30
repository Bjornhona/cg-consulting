import { getBlogPostBySlug, getSettings } from "@/sanity/queries"
import { Metadata } from "next"
import BlogPost from "@/components/sections/blog/Post"
import Hero from "@/components/sections/hero/Hero"
import { urlFor } from "@/sanity/lib/image"
import CTA from "@/components/sections/CTA"
import { SectionCTA, SectionHero } from "@/types/sections"
import cloudImage from '@/components/sections/blog/cabecera_1.jpg'
import { notFound } from "next/navigation"

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  const settings = await getSettings()

  if (!post) {
    return {
      title: "Post not found",
      description: "This post does not exist",
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

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  if (!post) {
    return notFound()
  }
  const heroData: SectionHero = {
    _type: "sectionHero" as const,
    staticImageSrc: post.coverImage ? urlFor(post.coverImage).width(2000).quality(85).url() : cloudImage.src,
  }
  const ctaData: SectionCTA = {
    _type: "sectionCTA" as const,
    headline: "¿Buscas talento especializado?",
    text: "Contacta con nosotros",
    primaryCta: {
      label: "Contactar",
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
