import { defineType, defineField } from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site title',
      type: 'string',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site description',
      type: 'text',
    }),
    defineField({
      name: 'defaultOgImage',
      title: 'Default OG image',
      type: 'image',
    }),
  ],
})
