// import { defineType, defineField } from 'sanity'

// export const sectionJobOffers = defineType({
//   name: 'sectionJobOffers',
//   title: 'Job Offers section',
//   type: 'object',
//   fields: [
//     defineField({
//       name: 'title',
//       title: 'Title',
//       type: 'string',
//     }),
//     defineField({
//       name: 'description',
//       title: 'Description',
//       type: 'text',
//     }),
//     defineField({
//       name: 'limit',
//       title: 'Limit',
//       type: 'number',
//       initialValue: 3,
//       validation: (rule) => rule.required().min(1).max(10),
//     }),
//     // defineField({
//     //   name: 'jobOffers',
//     //   title: 'Job Offers',
//     //   type: 'array',
//     //   of: [
//     //     { type: 'object', fields: [
//     //         { name: 'title', type: 'string', title: 'Title' },
//     //         { name: 'slug', type: 'string', title: 'Slug' },
//     //         { name: 'location', type: 'string', title: 'Location' },
//     //         { name: 'contractType', type: 'string', title: 'Contract Type' },
//     //         { name: 'excerpt', type: 'text', title: 'Job Offer Description' },
//     //         { name: 'publishedAt', type: 'date', title: 'Published At' },
//     //       ]
//     //     }
//     //   ]
//     // }),
//   ],
// })