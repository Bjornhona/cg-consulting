import { getPageBySlug, getSettings } from '@/sanity/queries'
import PageRenderer from '@/components/PageRenderer'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'


type Props = {
  params: { slug: string }
}

/* ------------------------------------------------------------
   SEO / Metadata
------------------------------------------------------------- */
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params
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
export default async function DynamicPage({ params }: Props) {
  const { slug } = await params
  const page = await getPageBySlug(slug)

  if (!page) return notFound()

  return <PageRenderer page={page} />
}
