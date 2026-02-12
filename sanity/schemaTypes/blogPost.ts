import {defineField, defineType} from 'sanity'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    // defineField({
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: { source: 'title' },
    //   validation: Rule => Rule.required()
    // }),
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
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'content',
      title: 'Content',
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
