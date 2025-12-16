import { defineType, defineField } from 'sanity'

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
      type: 'text'
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
          ]
        }
      ]
    })
  ]
})
