import { defineType, defineField } from 'sanity'

export const sectionTextImage = defineType({
  name: 'sectionTextImage',
  title: 'Text & image section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Optional. A short title above the text — leave it empty if the text works on its own.'
    }),
    defineField({
      name: 'body',
      title: 'Text',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'The main text. Use the toolbar for bold, links and bullet lists.'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Appears beside the text on computers and below it on phones. Click the image and drag the hotspot to choose which part stays visible when it gets cropped.'
    }),
    defineField({
      name: 'alt',
      title: 'Image description',
      type: 'string',
      description: 'Describe the image in a few words, for example "Carmen smiling in her office". Screen readers read this aloud, and it is shown if the image fails to load.',
      validation: (Rule) =>
        Rule.required().error('Please describe the image so the page stays accessible to everyone.')
    }),
    defineField({
      name: 'imagePosition',
      title: 'Image position',
      type: 'string',
      initialValue: 'right',
      options: {
        list: [
          { title: 'Right of the text', value: 'right' },
          { title: 'Left of the text', value: 'left' },
        ],
        layout: 'radio',
      },
      description: 'Only affects computer screens. On phones the text always sits above the image.'
    }),
  ],
  preview: {
    select: { heading: 'heading', imagePosition: 'imagePosition', media: 'image' },
    prepare({ heading, imagePosition, media }) {
      return {
        title: heading || 'Untitled text & image',
        subtitle: `Text & image section · image ${imagePosition === 'left' ? 'left' : 'right'}`,
        media,
      }
    },
  },
})
