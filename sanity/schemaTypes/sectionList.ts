import { defineType, defineField } from "sanity";
import { countLabel, excerpt } from "../lib/previewExcerpt";

export const sectionList = defineType({
  name: "sectionList",
  title: "List section",
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
      name: "listItems",
      title: "List items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "text", type: "text", title: "Text" },
          ],
          preview: {
            select: { title: "title", text: "text" },
            prepare({ title, text }) {
              return {
                title: title || "Untitled list item",
                subtitle: excerpt(text),
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title", listItems: "listItems" },
    prepare({ title, listItems }) {
      return {
        title: title || "Untitled list section",
        subtitle: `List section · ${countLabel(listItems, "item")}`,
      };
    },
  },
});
