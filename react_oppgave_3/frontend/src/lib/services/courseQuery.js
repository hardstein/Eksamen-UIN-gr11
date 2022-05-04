import client from '../client'

const coursesFields = `
  title,
  'slug': slug.current,
  description,
  category,
  lesson,
`

const courseFields = `
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
    `*[_type == "course" ] | order(_createdAt asc) {
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
