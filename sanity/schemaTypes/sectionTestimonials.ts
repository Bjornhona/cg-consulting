import { defineType, defineField } from 'sanity'
import { countLabel, excerpt } from '../lib/previewExcerpt'

export const sectionTestimonials = defineType({
  name: 'sectionTestimonials',
  title: 'Testimonials section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section title',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'quote', type: 'text', title: 'Quote' },
            { name: 'author', type: 'string', title: 'Author' },
            { name: 'role', type: 'string', title: 'Role / Company' }
          ],
          preview: {
            select: { author: 'author', role: 'role', quote: 'quote' },
            prepare({ author, role, quote }) {
              return {
                title: author || 'Untitled testimonial',
                subtitle: role || excerpt(quote),
              }
            },
          },
        }
      ]
    })
  ],
  preview: {
    select: { title: 'title', testimonials: 'testimonials' },
    prepare({ title, testimonials }) {
      return {
        title: title || 'Untitled testimonials section',
        subtitle: `Testimonials section · ${countLabel(testimonials, 'testimonial')}`,
      }
    },
  },
})
