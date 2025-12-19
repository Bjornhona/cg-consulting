import { defineType, defineField } from "sanity";

export const sectionServices = defineType({
  name: "sectionServices",
  title: "Services section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Section title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "text", title: "Description" },
            { name: "slug", type: "string", title: "Slug" },
            {
              name: "icon",
              type: "string",
              title: "Icon",
              options: { list: ["selection", "evaluation", "workshops"] },
            },
          ],
        },
      ],
    }),
  ],
});
