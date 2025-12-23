'use client'

import { JobOfferType } from "@/types/sanity"
import { PortableText } from "next-sanity"
import { MapPin, Briefcase, Calendar } from "lucide-react"

const JobOffer = ({
  location,
  contractType,
  publishedAt,
  content,
}: JobOfferType) => {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <header className="mb-10">
          <div className="flex flex-wrap gap-6 text-sm text-gray-medium">
            {location && (
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                {location}
              </span>
            )}
            {contractType && (
              <span className="flex items-center gap-2">
                <Briefcase size={16} />
                {contractType}
              </span>
            )}
            {publishedAt && (
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {new Date(publishedAt).toLocaleDateString()}
              </span>
            )}
          </div>
        </header>

        <article className="prose prose-gray max-w-none">
          <PortableText value={content} />
        </article>

      </div>
    </section>
  )
}

export default JobOffer
