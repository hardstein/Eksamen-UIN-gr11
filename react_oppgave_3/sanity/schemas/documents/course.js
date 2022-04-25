// - Document
// - Title (type: string)
// - Slug (type: slug)
// - Description (type: text)
// - Lessons (type: reference, to: Lesson) (skal være X antall leksjoner til et kurs). Det krever litt endring på type for å få en liste med leksjoner.
// - Category (type: string)

export default {
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    {
      type: "string",
      name: "title", //Byttet fra courseName
      title: "Navn på kurs",
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
    // {
    //   name: "lesson",
    //   title: "Leksjon",
    //   type: "reference",
    //   to: [{ type: "lesson" }],
    // },
    {
      name: "lesson",
      title: "Leksjon",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "lesson" }],
        },
      ],
    },

    {
      type: "text",
      name: "description",
      title: "Beskrivelse",
    },
    {
      type: "text",
      name: "category",
      title: "Katergori",
    },
  ],
};
