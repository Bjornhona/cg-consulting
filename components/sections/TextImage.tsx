import Image from "next/image"
import { SectionTextImage } from "@/types/sections"
import { urlFor } from "@/sanity/lib/image"
import PortableTextComponent from "@/components/PortableTextComponent"

const TextImage = ({ heading, body, image, alt, imagePosition = 'right' }: SectionTextImage) => {
  // A half-filled translation (text but no image, or vice versa) renders nothing
  // rather than a lopsided section.
  if (!body || !image) return null

  return (
    <section className="bg-white">
      <div
        className={`
          mx-auto max-w-6xl px-6 py-20
          flex flex-col gap-12
          md:flex-row md:items-center md:gap-16
          ${imagePosition === 'left' ? 'md:flex-row-reverse' : ''}
        `}
      >
        {/* Text — first in the DOM so it stacks above the image on small screens */}
        <div className="md:flex-1">
          {heading && (
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
              {heading}
            </h2>
          )}

          <span className="text-gray-medium">
            <PortableTextComponent text={body} />
          </span>
        </div>

        {/* Image */}
        <div className="md:flex-1">
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl shadow-sm">
            <Image
              src={urlFor(image).width(900).quality(90).url()}
              alt={alt ?? ''}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TextImage
