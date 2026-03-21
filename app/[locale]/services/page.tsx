import { getPageBySlug, getSettings } from '@/sanity/queries'
import PageRenderer from '@/components/PageRenderer'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'
import { getLocale } from 'next-intl/server'

/* ------------------------------------------------------------
   SEO / Metadata
------------------------------------------------------------- */
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const slug = 'services'
  const [settings, page] = await Promise.all([
    getSettings(locale),
    getPageBySlug(slug, locale),
  ])

  if (!page) return {}

  return buildPageMetadata(page, settings)
}

/* ------------------------------------------------------------
   Page
------------------------------------------------------------- */
export default async function DynamicPage() {
  const locale = await getLocale()
  const slug = 'services'
  const page = await getPageBySlug(slug, locale)

  if (!page) return notFound()

  return <PageRenderer page={page} />
}
