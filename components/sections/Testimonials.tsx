'use client'

import { motion } from 'framer-motion'
import { SectionTestimonials } from '@/types/sections'
import { Quote } from 'lucide-react'

export default function Testimonials({
  title,
  description,
  testimonials,
}: SectionTestimonials) {
  return (
    <section style={{ background: 'var(--bg-gradient-soft)' }}>
      <div className="mx-auto max-w-6xl px-6 py-20">

        {/* Header */}
        <div className="mb-14 text-center">
          {title && (
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-gray-medium max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: i * 0.08,
                ease: 'easeOut',
              }}
              className="
                h-full
                rounded-xl
                border border-gray-light
                bg-white
                p-8
                shadow-sm
                transition-shadow
                hover:shadow-md
              "
            >
              <Quote className="h-6 w-6 text-primary mb-4 opacity-60" />
              {/* Quote */}
              <blockquote className="mb-6">
                “{t.quote}”
              </blockquote>

              {/* Author */}
              <figcaption className="mt-auto">
                <p className="font-semibold">
                  {t.author}
                </p>
                {t.role && (
                  <p>
                    {t.role}
                  </p>
                )}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
