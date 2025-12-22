import PageRenderer from '@/components/PageRenderer'
import { getPageBySlug, getSettings } from '@/sanity/queries'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

/* ------------------------------------------------------------
   SEO / Metadata
------------------------------------------------------------- */
export async function generateMetadata(): Promise<Metadata> {
  const [settings, page] = await Promise.all([
    getSettings(),
    getPageBySlug('home'),
  ])

  if (!page) return {}

  return buildPageMetadata(page, settings)
}

/* ------------------------------------------------------------
   Page
------------------------------------------------------------- */
export default async function Home() {
  const page = await getPageBySlug('home')

  if (!page) return notFound()

  return <PageRenderer page={page} />
}
