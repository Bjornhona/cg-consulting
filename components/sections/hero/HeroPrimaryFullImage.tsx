'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Button from '@/components/ui/button/Button'
import { PortableText } from 'next-sanity'
import { SectionHero } from '@/types/sections'

const HeroPrimary = ({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  image,
}: SectionHero) => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden" data-theme="dark">
      
      {/* Background image */}
      {image && (
        <Image
          src={urlFor(image).width(2000).quality(85).url()}
          alt={headline ?? 'Hero background'}
          fill
          priority
          className="object-cover"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <h1 className="mb-6">{headline}</h1>

          {subheadline && (
            <div className="mb-10">
              <PortableText value={subheadline} />
            </div>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCta && (
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => (window.location.href = primaryCta.href)}
                >
                  {primaryCta.label}
                </Button>
              )}

              {secondaryCta && (
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => (window.location.href = secondaryCta.href)}
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default HeroPrimary
