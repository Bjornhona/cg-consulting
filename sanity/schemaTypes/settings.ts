import { defineType, defineField } from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site title',
      type: 'string',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site description',
      type: 'text',
    }),
    defineField({
      name: 'companyName',
      title: 'Company name',
      type: 'string',
    }),
    defineField({
      name: 'contactPerson',
      title: 'Contact person',
      type: 'string',
    }),
    defineField({
      name: 'companyNIF',
      title: 'Company NIF/CIF',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'string',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'iconLogo',
      title: 'Icon logo',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'defaultOgImage',
      title: 'Default Open Graph image',
      type: 'image',
      options: { hotspot: true },
      description: 'Used when a page does not define its own Open Graph image',
    }),
  ],
})
