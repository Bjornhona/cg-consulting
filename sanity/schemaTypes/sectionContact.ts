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
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Info',
      type: 'object',
      fields: [
        defineField({
          name: 'companyName',
          title: 'Company Name',
          type: 'string',
        }),
        defineField({
          name: 'contactPerson',
          title: 'Contact Person',
          type: 'string',
        }),
        defineField({
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
        }),
        defineField({
          name: 'email',
          title: 'Email Address',
          type: 'string',
        }),
        defineField({
          name: 'location',
          title: 'Location',
          type: 'string',
        }),
      ],
    }),
  ],
})
