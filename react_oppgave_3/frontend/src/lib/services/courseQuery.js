import client from '../client'

// *[_type=='course' ]{
// //  ...,
//   title,
//   'slug' : slug.current,
//   category,
//   description,
//   lesson,
// }

// *[_type=="course" && slug.current == "javascript-101"] {
// //  ...,
//     title,
//     "lessonName": lesson[]->title
// }

const courseFields = `
  title,
  'slug' : slug.current,
  category,
  description,
  lesson,
`
const coursesFields = `
  title,
  'slug': slug.current,
  description,
  category,
  lesson,
`

const NEWcourseFields = `
  ...,
  title,
  'slug' : slug.current,
  category,
  description,
  lesson,
  "lessonName": lesson[]->title,
  "lessonSlug": lesson[]->slug.current,
`

export const getCourses = async () => {
  const data = await client.fetch(
    `*[_type == "course" ] {
          ${coursesFields}
      }`
  )
  return data
}


export const NEWgetCourse = async (slug) => {
  const data = await client.fetch(
    `*[_type == "course" && slug.current == $slug] {
        ${NEWcourseFields}
    }`,
    { slug }
  )
  return data
}

export const getCourse = async (slug) => {
  const data = await client.fetch(
    `*[_type == "course" && slug.current == $slug] {
        ${courseFields}
    }`,
    { slug }
  )
  return data
}
