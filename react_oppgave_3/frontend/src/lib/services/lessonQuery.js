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

// *[_type=="lesson" && slug.current == "variabler"] {
//   ...,
//   title,
//   'slug': slug.current,
//   order,
//   preamble,
//   text,
//   'textText' : text[].text
// }

// BRUK DENNE
// *[_type=="comment"] {
//   ...,
//    'lessonSlug':lesson->slug.current
//  }

const lessonsFields = `
  // ...,
  title,
  _id,
  'slug': slug.current,
  order,
  preamble,
  'textText' : text[].text,
  "relatedCourse":  *[_type=='course' && references(^._id)]{ title, 'slug': slug.current, category },
`

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

const commentFields = `
  ...,
  createdBy,
  comment,
  'lessonSlug':lesson->slug.current
`

export const getLessonComments = async (slug) => {
  const data = await client.fetch(
    `*[_type=="comment" && lesson->slug.current == $slug] {
          ${commentFields}
      }`,
    { slug }
  )
  return data
}

export const getLesson = async (slug) => {
  const data = await client.fetch(
    `*[_type=="lesson" && slug.current == $slug ] {
          ${lessonsFields}
      }`,
    { slug }
  )
  return data
}

export const getLessonCourse = async () => {
  const data = await client.fetch(
    `*[_type=="lesson"] {
          ${lessonsCourse}
      }`
  )
  return data
}
