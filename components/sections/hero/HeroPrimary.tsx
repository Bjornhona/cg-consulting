'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HeroProps } from './types'
import { urlFor } from '@/sanity/lib/image'
import Button from '@/components/ui/button/Button'

const HeroPrimary = ({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  image,
}: HeroProps) => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="mb-6">
            {headline}
          </h1>

          {subheadline && (
            <p className="max-w-xl mb-8">
              {subheadline}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCta && (
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.location.href = primaryCta.href}
                >
                  {primaryCta.label}
                </Button>
              )}

              {secondaryCta && (
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => window.location.href = secondaryCta.href}
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </motion.div>

        {/* Image */}
        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="relative"
          >
            <Image
              src={urlFor(image).width(1200).quality(90).url()}
              alt={headline}
              width={1200}
              height={900}
              priority
              className="rounded-xl shadow-xl"
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default HeroPrimary