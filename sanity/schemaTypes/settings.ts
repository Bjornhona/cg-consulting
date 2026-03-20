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
    // {
    //   name: "enableAnalytics",
    //   title: "Enable Google Analytics",
    //   type: "boolean",
    //   initialValue: false,
    // },
    // {
    //   name: "gaMeasurementId",
    //   title: "GA4 Measurement ID",
    //   type: "string",
    //   description: "Example: G-XXXXXXXXXX",
    //   hidden: ({ parent }) => !parent?.enableAnalytics,
    // },
    {
      name: 'analyticsMode',
      title: 'Analytics Setup',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Google Analytics (GA4)', value: 'ga4' },
          { title: 'Google Tag Manager (Recommended)', value: 'gtm' },
        ],
        layout: 'radio'
      },
      initialValue: 'none'
    },
    {
      name: 'gaMeasurementId',
      title: 'GA4 Measurement ID',
      type: 'string',
      description: "Example: G-XXXXXXXXXX",
      hidden: ({ parent }) => parent?.analyticsMode !== 'ga4',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as { analyticsMode?: string };
          if (parent?.analyticsMode === "ga4" && !value) {
            return "GA4 Measurement ID is required";
          }
          return true;
        })
    },
    {
      name: 'gtmId',
      title: 'Google Tag Manager ID',
      type: 'string',
      description: "Example: GTM-XXXXXXXXXX",
      hidden: ({ parent }) => parent?.analyticsMode !== 'gtm',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as { analyticsMode?: string };
          if (parent?.analyticsMode === "gtm" && !value) {
            return "Google Tag Manager ID is required";
          }
          return true;
        })
    },
    defineField({
      name: 'defaultOgImage',
      title: 'Default Open Graph image',
      type: 'image',
      options: { hotspot: true },
      description: 'Used when a page does not define its own Open Graph image',
    }),
  ],
})
