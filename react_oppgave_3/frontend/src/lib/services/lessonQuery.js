import client from '../client'

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

const commentFields = `
  ...,
  _createdAt,
  createdBy,
  comment,
  'lessonSlug':lesson->slug.current
`

export const getLessonComments = async (slug) => {
  const data = await client.fetch(
    `*[_type=="comment" && lesson->slug.current == $slug] | order(_createdAt asc)
    {
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
