import { defineField, defineType } from "sanity"

export const sectionContact = defineType({
  name: 'sectionContact',
  title: 'Contact Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    })
  ],
})
