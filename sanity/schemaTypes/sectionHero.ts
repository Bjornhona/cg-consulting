import { defineType, defineField } from 'sanity'

export const sectionHero = defineType({
  name: 'sectionHero',
  title: 'Hero section',
  type: 'object',
  fields: [
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      initialValue: 'secondary',
      options: {
        list: ['primary', 'secondary']
      }
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text'
    }),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA',
      type: 'object',
      fields: [
        { name: 'label', type: 'string', title: 'Label' },
        { name: 'href', type: 'string', title: 'Link' }
      ]
    }),
    defineField({
      name: 'image',
      title: 'Hero image',
      type: 'image',
      options: { hotspot: true }
    })
  ]
})
