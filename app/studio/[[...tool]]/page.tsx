'use client'
/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

// Static import of the Studio component to give a better developer experience with SSR
// import { NextStudio } from 'next-sanity/studio'
// import config from '@/sanity.config'

// export const dynamic = 'force-static'

// // export { metadata, viewport } from 'next-sanity/studio'

// export default function StudioPage() {
//   return <NextStudio config={config} />
// }

// Dynamic import of the Studio component to avoid hydration errors
import dynamic from "next/dynamic";

const Studio = dynamic(
  () => import("next-sanity/studio").then((mod) => mod.NextStudio),
  { ssr: false }
);

import config from "@/sanity.config";

export default function StudioPage() {
  return <Studio config={config} />;
}