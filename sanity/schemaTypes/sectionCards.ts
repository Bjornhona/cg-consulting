import { defineType, defineField } from 'sanity'
import { countLabel, excerpt } from '../lib/previewExcerpt'

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
      type: 'array',
      of: [{ type: 'block' }]
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
      ],
      preview: {
        select: { title: 'title', text: 'text', media: 'image' },
        prepare({ title, text, media }) {
          return {
            title: title || 'Untitled card',
            subtitle: excerpt(text),
            media,
          }
        },
      } }]
    }),
  ],
  preview: {
    select: { title: 'title', cards: 'cards' },
    prepare({ title, cards }) {
      return {
        title: title || 'Untitled cards section',
        subtitle: `Cards section · ${countLabel(cards, 'card')}`,
      }
    },
  },
})
