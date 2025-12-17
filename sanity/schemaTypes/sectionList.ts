import { defineType, defineField } from "sanity";

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
      type: "text",
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
        },
      ],
    }),
  ],
});
