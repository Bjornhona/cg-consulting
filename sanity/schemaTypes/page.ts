import { defineType, defineField } from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo'
    }),
    defineField({
      name: 'sections',
      title: 'Page sections',
      type: 'array',
      of: [
        { type: 'sectionHero' },
        { type: 'sectionServices' },
        { type: 'sectionTestimonials' },
        { type: 'sectionCTA' },
        { type: 'sectionCards' },
        { type: 'sectionList' },
        { type: 'sectionContact' },
      ]
    })
  ]
})
