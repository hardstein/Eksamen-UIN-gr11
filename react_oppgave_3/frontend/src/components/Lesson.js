import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getLesson, getLessonComments } from '../lib/services/lessonQuery'
import LessonComments from './LessonComments'
import Title from './Title'

export default function Lesson() {
  const { lessonSlug } = useParams()
  const [currentLesson, setCurrentLesson] = useState([])
  const [comments, setComments] = useState([])
  useEffect(() => {
    // For å fikse "cancel all subscriptions and asynchronous tasks in a useEffect cleanup function".
    let subscription = true

    const getLessonData = async () => {
      const lesson = await getLesson(lessonSlug)
      if (subscription) {
        setCurrentLesson(lesson)
      }
    }

    const getCommentsData = async () => {
      const commentsData = await getLessonComments(lessonSlug)
      if (subscription) {
        setComments(commentsData)
      }
    }

    getLessonData()
    getCommentsData()
    return () => {
      // cleanup function
      subscription = false
    }
    // comments er med slik at siden blir oppdatert når en ny kommentar legges til.
  }, [lessonSlug, comments])

  const generate = currentLesson.map((currentLesson, i) => (
    <div key={i}>
      <div>
        {currentLesson.relatedCourse.map((relatedCourse) => (
          <div key={i} className="lesson-heading">
            <h3 data-testid="course_title">
              <Link to={'/kurs/' + relatedCourse?.slug}>
                Tilbake til {relatedCourse?.title}
              </Link>
            </h3>
            <span data-testid="course_category">
              Kategori: <span>{relatedCourse?.category}</span>
            </span>
          </div>
        ))}
      </div>
      <Title testid="lesson_title" text={currentLesson?.title} />
      <p data-testid="lesson_preAmble">{currentLesson?.preamble}</p>
      {currentLesson.textText?.map((l, i) => (
        <p key={i} data-testid="lesson_text">
          {l}
        </p>
      ))}
      <LessonComments id={currentLesson?._id} comments={comments} />
    </div>
  ))

  return <>{generate}</>
}
