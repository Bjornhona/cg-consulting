import { defineField, defineType } from "sanity"

const CONTACT_FIELD_OPTIONS = [
  { title: "Name", value: "name" },
  { title: "Email", value: "email" },
  { title: "Phone", value: "phone" },
  { title: "Client type", value: "purpose" },
  { title: "Company", value: "company" },
  { title: "Message", value: "message" },
]

export const sectionContact = defineType({
  name: 'sectionContact',
  title: 'Contact Section',
  type: 'object',
  preview: {
    select: { title: 'title' },
    prepare({ title }) {
      return { title: title || 'Contact Section' }
    },
  },
  fields: [
    defineField({
      name: 'visibleFields',
      title: 'Form fields to show',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: CONTACT_FIELD_OPTIONS,
        layout: 'grid',
      },
      initialValue: ['name', 'email', 'message'],
      description: 'Select which fields appear in the contact form. Name, email and message are typically required.',
      validation: (Rule) =>
        Rule.min(1).error('Select at least one field to show.'),
    }),
  ],
})
