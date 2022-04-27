import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getLesson, getLessonComments } from '../lib/services/lessonQuery'
// import Courses from '../pages/Courses';
import LessonComments from './LessonComments'

export default function Lesson() {
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

  const generate = currentLesson.map((currentLesson, i) => (
    <div key={i}>
      <div>
        {currentLesson.relatedCourse.map((relatedCourse) => (
          <div key={i}>
            <h3 data-testid="course_title">
              <Link
                // key={relatedCourse?.slug}
                to={'/kurs/' + relatedCourse?.slug}
              >
                Tilbake til {relatedCourse?.title}
              </Link>
            </h3>
            <span data-testid="course_category">{relatedCourse?.category}</span>
          </div>
        ))}
      </div>
      <h2 data-testid="lesson_title">{currentLesson?.title}</h2>
      <p data-testid="lesson_preAmble">{currentLesson?.preamble}</p>
      {/* TODO: Liste opp tekster */}
      {currentLesson.textText?.map((l, i) => (
        <p key={i} data-testid="lesson_text">
          {l}
        </p>
      ))}
      {/* TODO: Liste opp kommentarer */}
      <LessonComments slug={currentLesson?.slug} comments={comments} />

      {JSON.stringify(courseSlug)}
      {JSON.stringify(lessonSlug)}
    </div>
  ))

  return <>{generate}</>
}
