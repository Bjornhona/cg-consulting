import { defineType, defineField } from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta title',
      type: 'string',
      validation: Rule => Rule.max(60),
      description: 'Recommended: 50–60 characters'
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.max(160),
      description: 'Recommended: 150–160 characters'
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph image',
      type: 'image',
      options: { hotspot: true },
      description: '1200×630 recommended',
    }),
    defineField({
      name: 'noIndex',
      title: 'No index',
      type: 'boolean',
      initialValue: false,
      description: 'Prevent indexing by search engines',
    })
  ]
})
