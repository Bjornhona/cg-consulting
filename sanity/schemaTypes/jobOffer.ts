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
      title: 'URL (auto-generated)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .slice(0, 96),
      },
      validation: (Rule) =>
        Rule.required().custom((slug) => {
          if (!slug?.current) return true
    
          const valid = /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug.current)
    
          return valid
            ? true
            : 'Only lowercase letters, numbers and hyphens allowed. No spaces.'
        }),
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
