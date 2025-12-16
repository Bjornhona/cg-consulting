'use client'
import { motion } from 'framer-motion'
import { SectionTestimonials } from '@/types/sections'

export default function Testimonials({ title, testimonials }: SectionTestimonials) {
  return (
    <section className="testimonials">
      <h2>{title}</h2>
      <div className="grid">
        {testimonials.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.2 }}>
            <blockquote>"{t.quote}"</blockquote>
            <p>- {t.author}{t.role ? `, ${t.role}` : ''}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
