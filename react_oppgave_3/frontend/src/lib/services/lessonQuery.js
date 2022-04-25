import client from '../client'

// *[_type=="lesson"]{
//   //  ...,
//   title,
//   order,
//   preamble,
//   "slug" : slug.current,
//   "lessonText": text[]{text},
//   "relatedCourse":  *[_type=='course' && references(^._id)]{ title, 'slug': slug.current }
// }

// *[_type=="lesson" && _id in ["707ae4da-4698-4dc4-8259-74437dd6f4f3"]] {
//     title,
// }

// *[_type=="course"] {
//     'slug': slug.current,
//     'lessonRefs': lesson[]._ref,
// }

const lessonsCourse = `
  //  ...,
  title,
  order,
  preamble,
  _id,
  "slug" : slug.current,
  "lessonText": text[]{text},
  "relatedCourse":  *[_type=='course' && references(^._id)]{ title, 'slug': slug.current }
`
export const getLessonCourse = async () => {
    const data = await client.fetch(
      `*[_type=="lesson"] {
          ${lessonsCourse}
      }`
    )
    return data
  }