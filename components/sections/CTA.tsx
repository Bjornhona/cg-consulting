'use client'
import { motion } from 'framer-motion'
import { SectionCTA } from '@/types/sections'
import Button from '@/components/ui/button/Button'

export default function CTA({ headline, text, primaryCta, secondaryCta }: SectionCTA) {
  return (
    <section className="cta">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h2>{headline}</h2>
        <p>{text}</p>
        {primaryCta && <Button onClick={() => window.location.href = primaryCta.href} variant="primary" size="md">{primaryCta.label}</Button>}
        {secondaryCta && <Button onClick={() => window.location.href = secondaryCta.href} variant="secondary" size="md">{secondaryCta.label}</Button>}
      </motion.div>
    </section>
  )
}
