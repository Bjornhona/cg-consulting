import PageRenderer from '@/components/PageRenderer'
import { getPageBySlug } from '@/sanity/queries'
import { notFound } from 'next/navigation'

export default async function Home() {
  const page = await getPageBySlug('/')

  if (!page) return notFound()
    
  return (
    <main className="container mx-auto">
      <PageRenderer page={page} />
    </main>
  );
}
