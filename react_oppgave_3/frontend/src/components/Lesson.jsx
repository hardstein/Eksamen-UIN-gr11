import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getLesson, getLessonComments } from '../lib/services/lessonQuery'
// import Courses from '../pages/Courses';
import LessonComments from './LessonComments'

export default function Lesson({ url, c, courseSlug }) {
// export default function Lesson({ url, c }) {
  // TODO: Add nøvendig logikk
  // let currentSlug = slug
  const { slug } = useParams()
  const [currentLesson, setCurrentLesson] = useState([])
  const [comments, setComments] = useState([])

  useEffect(() => {
    const getLessonData = async () => {
      const lesson = await getLesson(slug)
      console.log('lesson ', lesson)
      setCurrentLesson(lesson)
    }

    const getCommentsData = async () => {
      const commentsData = await getLessonComments(slug)
      console.log('comments ', commentsData)
      setComments(commentsData)
    }

    getLessonData()
    getCommentsData()
  }, [slug])

  const generate = currentLesson.map((cl, i) => (
    <div key={i}>
      <div>
        <h3 data-testid="course_title">
          {/* <Link to={url}>Tilbake til {c}</Link> */}
          {cl.relatedCourse.map((rc) => (
            <Link key={rc?.slug} to={""}>Tilbake til {rc?.title}</Link>
          ))}
        </h3>
        <span data-testid="course_category">
          {/* Kategori: <span>{c.category}</span> */}
        </span>
      </div>
      <h2 data-testid="lesson_title">
        {/* {c.lessons.find((lesson) => lesson.slug === currentSlug)?.title} */}
        {cl?.title}
      </h2>
      <p data-testid="lesson_preAmble">
        {/* {c.lessons.find((lesson) => lesson.slug === slug)?.preAmble} */}
        {cl?.preamble}
      </p>
      {/* TODO: Liste opp tekster */}
      {/* {c.lessons
        .find((lesson) => lesson.slug === slug)
        ?.text?.map((l) => (
          <p key={l?.id} data-testid="lesson_text">
            {l?.text}
          </p>
        ))} */}

      {cl.textText?.map((l, i) => (
        <p key={i} data-testid="lesson_text">
          {l}
        </p>
      ))}

      {/* TODO: Liste opp kommentarer */}
      {/* <LessonComments slug={currentSlug} /> */}
      <LessonComments slug={cl?.slug} comments={comments}/>
    </div>
  ))

  return <>
  {/* <h1>{c.title}</h1> */}
  {console.log("trenger denne ", c)}
  {generate}
  </>
}
