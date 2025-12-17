import { defineType, defineField } from 'sanity'

export const sectionCTA = defineType({
  name: 'sectionCTA',
  title: 'CTA section',
  type: 'object',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string'
    }),
    defineField({
      name: 'text',
      title: 'Text',
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
      name: 'secondaryCta',
      title: 'Secondary CTA',
      type: 'object',
      fields: [
        { name: 'label', type: 'string', title: 'Label' },
        { name: 'href', type: 'string', title: 'Link' }
      ]
    })
  ]
})
