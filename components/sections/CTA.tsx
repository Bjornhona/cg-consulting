'use client'
import { motion } from 'framer-motion'
import { SectionCTA } from '@/types/sections'
import Button from '@/components/ui/button/Button'
import { PortableText } from 'next-sanity'

export default function CTA({
  headline,
  text,
  primaryCta,
  secondaryCta,
}: SectionCTA) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-4"
        >
          {headline}
        </motion.h2>

        {text && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="max-w-2xl mx-auto mb-10"
          >
            <PortableText value={text} />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
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
        </motion.div>
      </div>
    </section>
  )
}
