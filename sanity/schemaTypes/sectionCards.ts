import { defineType, defineField } from 'sanity'

export const sectionCards = defineType({
  name: 'sectionCards',
  title: 'Cards section',
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
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'text', type: 'text', title: 'Text' },
        { name: 'image', type: 'image', title: 'Image' },
        { name: 'cta', type: 'object', fields: [{ name: 'label', type: 'string', title: 'Label' }, { name: 'href', type: 'string', title: 'Link' }] }
      ] }]
    }),
  ]
})
