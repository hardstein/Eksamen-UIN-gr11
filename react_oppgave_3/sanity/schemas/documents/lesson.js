// - Document
// - Title (type: string)
// - Slug (type: slug)
// - Preamble (type: Text)
// - Text (type: Array of type LessonText)
// - Order (type: number)
export default {
  name: "lesson",
  title: "Lesson",
  type: "document",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Tittel",
    },
    {
      type: "slug",
      name: "slug",
      title: "Slug",
      options: {
        source: "title",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    },
    {
      type: "text",
      name: "preamble",
      title: "Preamble/ingress",
    },
    {
      name: "text",
      title: "Lesson Text",
      type: "array",
      of: [{ type: "lessonText" }],
    },
    {
      type: "number",
      name: "order",
      title: "Order/rekkefølge",
    },
  ],
};
