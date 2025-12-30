import { defineType, defineField } from "sanity";

export const navigation = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'For internal reference only (e.g. Main Navigation)',
    }),
    defineField({
      name: 'items',
      title: 'Navigation Items',
      type: 'array',
      of: [{
        name: 'item',
        type: 'object',
        fields: [{
            name: 'label',
            title: 'Label',
            type: 'string',
            validation: Rule => Rule.required(),
          },
          {
            name: 'href',
            title: 'Link',
            type: 'string',
            description: 'Use "/" for home, "about", "services", etc.',
            validation: Rule => Rule.required(),
          },
          {
            name: 'isPrimary',
            title: 'Primary CTA',
            type: 'boolean',
            initialValue: false,
          },
          {
            name: 'children',
            title: 'Sub-items',
            type: 'array',
            of: [{
              name: 'child',
              type: 'object',
              fields: [{
                name: 'label',
                title: 'Label',
                type: 'string',
                validation: Rule => Rule.required(),
              },
              {
                name: 'href',
                title: 'Link',
                type: 'string',
                validation: Rule => Rule.required(),
              }],
            }],
          },
        ],
      }],
    }),
  ],
})
