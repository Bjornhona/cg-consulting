import { defineType, defineField } from 'sanity'

export const jobOffer = defineType({
  name: 'jobOffer',
  title: 'Job Offer',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
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
      name: 'location',
      title: 'Job Location (City/Remote)',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'contractType',
      title: 'Type of Contract',
      type: 'string',
      options: {
        list: ['Tiempo completo', 'Tiempo parcial', 'Freelance']
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Summary (1–2 sentences)',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().max(200)
    }),
    defineField({
      name: 'content',
      title: 'Job Description',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    })
  ],
})
