export default {
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    {
      type: "string",
      name: "courseName",
      title: "Navn på kurs",
    },
    {
      type: "slug",
      name: "slug",
      title: "Slug",
      options: {
        source: "courseName",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
