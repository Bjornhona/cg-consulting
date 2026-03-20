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
      name: 'language',
      title: 'Language',
      type: 'string',
      initialValue: 'en',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Spanish', value: 'es' },
        ]
      },
      description: "Select the language for this page. Make sure a version exists for each active language in Site Settings.",
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo'
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'sectionHero',
    }),
    defineField({
      name: 'sections',
      title: 'Page sections',
      type: 'array',
      of: [
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
