import { getPageBySlug } from '@/sanity/queries'
import PageRenderer from '@/components/PageRenderer'
import { notFound } from 'next/navigation'

export default async function DynamicPage({ params }: { params: { slug: string } }) {
  const page = await getPageBySlug(params.slug)

  if (!page) return notFound()

  return <PageRenderer page={page} />
}
