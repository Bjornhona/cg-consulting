'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { CardProps } from "@/types/ui"
import { urlFor } from "@/sanity/lib/image"

const Card = ({ title, description, image, index }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="
        group
        overflow-hidden
        rounded-xl
        border border-gray-light
        bg-white
        shadow-sm
        transition-shadow
        hover:shadow-md
      "
    >
      {/* Image */}
      {image && (
        <div className="relative w-full h-48">
          <Image
            src={urlFor(image).width(600).quality(90).url()}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-8">
        <h3 className="text-xl font-semibold mb-3">
          {title}
        </h3>

        {description && (
          <p className="text-gray-medium leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  )
}

export default Card
