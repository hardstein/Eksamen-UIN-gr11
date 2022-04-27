import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getLesson, getLessonComments } from '../lib/services/lessonQuery'
// import Courses from '../pages/Courses';
import LessonComments from './LessonComments'

export default function Lesson({ url, c, }) {
  // TODO: Add nøvendig logikk
  const { lessonSlug, courseSlug } = useParams()
  const [currentLesson, setCurrentLesson] = useState([])
  const [comments, setComments] = useState([])

  useEffect(() => {
    const getLessonData = async () => {
      const lesson = await getLesson(lessonSlug)
      console.log('lesson ', lesson)
      setCurrentLesson(lesson)
    }

    const getCommentsData = async () => {
      const commentsData = await getLessonComments(lessonSlug)
      console.log('comments ', commentsData)
      setComments(commentsData)
    }

    getLessonData()
    getCommentsData()
  }, [lessonSlug])

  const generate = currentLesson.map((cl, i) => (
    <div key={i}>
      <div>
        <h3 data-testid="course_title">
          {cl.relatedCourse.map((rc) => (
            <Link key={rc?.slug} to={""}>Tilbake til {rc?.title}</Link>
          ))}
        </h3>
        <span data-testid="course_category">
        </span>
      </div>
      <h2 data-testid="lesson_title">
        {cl?.title}
      </h2>
      <p data-testid="lesson_preAmble">
        {cl?.preamble}
      </p>
      {/* TODO: Liste opp tekster */}
      {cl.textText?.map((l, i) => (
        <p key={i} data-testid="lesson_text">
          {l}
        </p>
      ))}
      {/* TODO: Liste opp kommentarer */}
      <LessonComments slug={cl?.slug} comments={comments}/>

      {JSON.stringify(courseSlug)}
      {JSON.stringify(lessonSlug)}
    </div>
  ))

  return <>
  {console.log("trenger denne ", c)}
  {generate}
  </>
}
