import { defineField, defineType } from "sanity"

export const sectionContact = defineType({
  name: 'sectionContact',
  title: 'Contact Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title (for Studio organization only)',
      type: 'string',
      initialValue: 'Contact Section',
      validation: Rule => Rule.required(),
    }),
  ],
})
