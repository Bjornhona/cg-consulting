import CTA from "@/components/sections/CTA"
import Hero from "@/components/sections/hero/Hero"
import BlogSection from "@/components/sections/blog/Blog"
import { getBlogPosts } from "@/sanity/queries"
import image from '@/components/sections/blog/cabecera_1.jpg'
import { Metadata } from "next"
import { getSettings } from "@/sanity/queries"
import { SectionBlogPosts, SectionHero, SectionCTA } from "@/types/sections"
import { PortableTextBlock } from "next-sanity"

export const generateMetadata = async (): Promise<Metadata> => {
  const settings = await getSettings()
  return {
    title: `Blog | ${settings.siteTitle}`,
    description: 'Artículos sobre selección de talento, mercado laboral y liderazgo.',
  }
}

const BlogPage = async () => {
  const blogPosts = await getBlogPosts(12)

  const heroData: SectionHero = {
    _type: 'sectionHero' as const,
    headline: 'Blog',
    subheadline: [{_type: 'block', children: [{_type: 'span', text: 'Descubre nuestras últimas noticias y artículos'}]}] as PortableTextBlock[],
    staticImageSrc: image.src,
  }

  const blogPostsData_ES: SectionBlogPosts= {
    _type: 'sectionBlogPosts' as const,
    title: 'Últimos artículos',
    description: 'Tendencias, insights y novedades del sector',
    blogPosts: blogPosts,
  }

  const ctaData: SectionCTA = {
    _type: 'sectionCTA' as const,
    headline: '¿Quieres unirte a nuestro equipo?',
    text: 'Consulta nuestras oportunidades laborales actuales o ponte en contacto con nosotros.',
    primaryCta: { label: 'Contactar', href: '/contact' },
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
