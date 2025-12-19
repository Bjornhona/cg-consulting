import { getPageBySlug, getSettings } from '@/sanity/queries'
import PageRenderer from '@/components/PageRenderer'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

/* ------------------------------------------------------------
   SEO / Metadata
------------------------------------------------------------- */
export async function generateMetadata(): Promise<Metadata> {
  const slug = 'services'
  const [settings, page] = await Promise.all([
    getSettings(),
    getPageBySlug(slug),
  ])

  if (!page) return {}

  return buildPageMetadata(page, settings)
}

/* ------------------------------------------------------------
   Page
------------------------------------------------------------- */
export default async function DynamicPage() {
  const slug = 'services'
  const page = await getPageBySlug(slug)

  if (!page) return notFound()

  return <PageRenderer page={page} />
}
