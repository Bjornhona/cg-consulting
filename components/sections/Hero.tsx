'use client'
import { SectionHero } from '@/types/sections'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heading } from '@/components/ui/Heading'
import { urlFor } from '@/sanity/lib/image'

export default function Hero({ variant = 'secondary', headline, subheadline, primaryCta, image }: SectionHero) {
  const isPrimary = variant === 'primary'
  const imageUrl = image ? urlFor(image).width(1200).url() : null

  return (
    <section className="hero">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Heading level={1}>{headline}</Heading>
        <p>{subheadline}</p>
        {primaryCta && <a href={primaryCta.href} className="btn-primary">{primaryCta.label}</a>}
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={headline}
            width={1200}
            height={isPrimary ? 900 : 500}
            priority={isPrimary}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
      </motion.div>
    </section>
  )
}
