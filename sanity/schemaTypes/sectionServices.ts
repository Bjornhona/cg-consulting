import { defineType, defineField } from "sanity";
import { countLabel, excerpt } from "../lib/previewExcerpt";

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
      type: 'array',
      of: [{ type: 'block' }]
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
          preview: {
            select: { title: "title", description: "description" },
            prepare({ title, description }) {
              return {
                title: title || "Untitled service",
                subtitle: excerpt(description),
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title", services: "services" },
    prepare({ title, services }) {
      return {
        title: title || "Untitled services section",
        subtitle: `Services section · ${countLabel(services, "service")}`,
      };
    },
  },
});
