import type { Metadata } from 'next'
import { urlFor } from '@/sanity/lib/image'
import { Page } from '@/types/pages'
import { Settings } from '@/types/sanity'

export function buildPageMetadata(
  page: Page,
  settings: Settings
): Metadata {
  if (!page) return {}

  return {
    title:
      page.seo?.metaTitle ||
      settings?.siteTitle ||
      page.title,
    description:
      page.seo?.metaDescription ||
      settings?.siteDescription,
    robots: page.seo?.noIndex
      ? 'noindex, nofollow'
      : 'index, follow',
    openGraph: {
      title:
        page.seo?.metaTitle ||
        settings?.siteTitle ||
        page.title,
      description:
        page.seo?.metaDescription ||
        settings?.siteDescription,
      images: page.seo?.ogImage
        ? [
            {
              url: urlFor(page.seo.ogImage)
                .width(1200)
                .height(630)
                .url(),
            },
          ]
        : settings?.defaultOgImage
        ? [
            {
              url: urlFor(settings.defaultOgImage)
                .width(1200)
                .height(630)
                .url(),
            },
          ]
        : [],
    },
  }
}
