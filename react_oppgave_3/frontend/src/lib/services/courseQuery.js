import client from '../client'

// *[_type=='course' ]{
// //  ...,
//   title,
//   'slug' : slug.current,
//   category,
//   description,
//   lesson,
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

export const getCourses = async () => {
  const data = await client.fetch(
    `*[_type == "course" ] {
          ${coursesFields}
      }`
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
