// import { defineType, defineField } from 'sanity'

// export const sectionBlogPosts = defineType({
//   name: 'sectionBlogPosts',
//   title: 'Blog Posts section',
//   type: 'object',
//   fields: [
//     defineField({
//       name: 'title',
//       title: 'Title',
//       type: 'string'
//     }),
//     defineField({
//       name: 'description',
//       title: 'Description',
//       type: 'text'
//     }),
//     defineField({
//       name: 'limit',
//       title: 'Limit',
//       type: 'number',
//       initialValue: 3,
//       validation: (rule) => rule.required().min(1).max(10),
//     }),
//     // defineField({
//     //   name: 'blogPosts',
//     //   title: 'Blog Posts',
//     //   type: 'array',
//     //   of: [{ type: 'reference', to: [{ type: 'blogPost' }] }],
//       // of: [
//       //   { type: 'object', fields: [
//       //       { name: 'title', type: 'string', title: 'Title' },
//       //       { name: 'slug', type: 'string', title: 'Slug' },
//       //       { name: 'image', type: 'image', title: 'Image' },
//       //       { name: 'excerpt', type: 'text', title: 'Excerpt' },
//       //       { name: 'publishedAt', type: 'date', title: 'Published At' }
//       //     ]
//       //   }
//       // ]
//     // }),
//   ]
// })
