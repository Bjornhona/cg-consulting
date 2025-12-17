'use client'
import { motion } from 'framer-motion'
import { SectionCTA } from '@/types/sections'

export default function CTA({ headline, text, primaryCta, secondaryCta }: SectionCTA) {
  return (
    <section className="cta">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h2>{headline}</h2>
        <p>{text}</p>
        {primaryCta && <a href={primaryCta.href} className="btn-primary">{primaryCta.label}</a>}
        {secondaryCta && <a href={secondaryCta.href} className="btn-secondary">{secondaryCta.label}</a>}
      </motion.div>
    </section>
  )
}
