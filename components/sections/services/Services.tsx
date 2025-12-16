'use client'
import { SectionServices } from '@/types/sections'
import { motion } from 'framer-motion'

export default function Services({ title, services }: SectionServices) {
  return (
    <section className="services">
      <h2>{title}</h2>
      <div className="grid">
        {services.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }}>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
