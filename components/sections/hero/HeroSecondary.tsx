'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HeroProps } from './types'
import { urlFor } from '@/sanity/lib/image'

export default function HeroSecondary({
  headline,
  subheadline,
  image,
}: HeroProps) {
  const hasImage = Boolean(image)

  return (
    <section
      className={`relative overflow-hidden border-b border-gray-light`}
      data-theme={hasImage ? "dark" : undefined}
    >
      {/* Background image */}
      {hasImage && (
        <div className="absolute inset-0">
          <Image
            src={urlFor(image!).width(2000).quality(85).url()}
            alt=""
            fill
            priority={false}
            className="object-cover"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/10" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mb-4"
        >
          {headline}
        </motion.h1>

        {subheadline && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className={'max-w-2xl mx-auto'}
          >
            {subheadline}
          </motion.p>
        )}
      </div>
    </section>
  )
}
