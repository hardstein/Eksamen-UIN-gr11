// - Document
// - CreatedBy (type: string)
// - Comment (type: text)
// - Lesson (type: reference, to: Lesson)

export default {
    name: "comment",
    title: "Comment", 
    type: "document",
    fields: [
      {
        type: "string",
        name: "createdBy",
        title: "CreatedBy",
      },
      {
        type: "text",
        name: "comment",
        title: "Comment",
      },
      {
        type: "reference",
        name: "lesson",
        title: "Lesson",
        to: { type: "lesson" },
      },
    ],
    // orderings: [
    //   {
    //     title: 'Release Date, New',
    //     name: 'releaseDateDesc',
    //     by: [
    //       {field: 'releaseDate', direction: 'desc'}
    //     ]
    //   },
    // ]
  
  };