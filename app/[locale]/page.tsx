import PageRenderer from '@/components/PageRenderer'
import { getPageBySlug, getSettings } from '@/sanity/queries'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'
import { getLocale } from 'next-intl/server'

/* ------------------------------------------------------------
   SEO / Metadata
------------------------------------------------------------- */
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const [settings, page] = await Promise.all([
    getSettings(),
    getPageBySlug('home', locale),
  ])

  if (!page) return {}

  return buildPageMetadata(page, settings)
}

/* ------------------------------------------------------------
   Page
------------------------------------------------------------- */
export default async function Home() {
  const locale = await getLocale();
  const page = await getPageBySlug('home', locale)

  if (!page) return notFound()

  return <PageRenderer page={page} />
}
