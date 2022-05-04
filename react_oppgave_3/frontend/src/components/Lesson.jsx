import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { deleteData } from '../lib/services/deleteGROQ'
import { getLesson, getLessonComments } from '../lib/services/lessonQuery'
import LessonComments from './LessonComments'
import Title from './Title'

export default function Lesson() {
  // TODO: Add nøvendig logikk
  const { lessonSlug, courseSlug } = useParams()
  const [currentLesson, setCurrentLesson] = useState([])
  const [comments, setComments] = useState([])
  useEffect(() => {
    // For å fikse "cancel all subscriptions and asynchronous tasks in a useEffect cleanup function".
    let mounted = true

    const getLessonData = async () => {
      const lesson = await getLesson(lessonSlug)
      if (mounted) {
      // console.log('lesson ', lesson)
      setCurrentLesson(lesson)
      }
    }

    // // Sletter alle kommentarer. ----------
    // const deleteComments = async () => {
    //   await deleteData()
    // }
    // deleteComments()
    // // ------------------------------------

    const getCommentsData = async () => {
      const commentsData = await getLessonComments(lessonSlug)
      if (mounted) {
        setComments(commentsData)
      }
    }

    getLessonData()
    getCommentsData()
    return () => {
      // cleanup function
      mounted = false
    }
    // comments er med slik at siden blir oppdatert når en ny kommentar legges til.
  }, [lessonSlug, comments])
  // }, [lessonSlug])

  const generate = currentLesson.map((currentLesson, i) => (
    <div key={i}>
      <div>
        {currentLesson.relatedCourse.map((relatedCourse) => (
          <div key={i} className="lesson-heading">
            <h3 data-testid="course_title">
              <Link
                // key={relatedCourse?.slug}
                to={'/kurs/' + relatedCourse?.slug}
              >
                Tilbake til {relatedCourse?.title}
              </Link>
            </h3>
            <span data-testid="course_category">
          Kategori: <span>{relatedCourse?.category}</span>
        </span>
            {/* <h4 class=word>I'm an H4 Headline With Seven Words</h4> */}
          </div>
        ))}
      </div>
      <Title data-testid="lesson_title" text={currentLesson?.title} />
      {/* <h2 data-testid="lesson_title">{currentLesson?.title}</h2> */}
      <p data-testid="lesson_preAmble">{currentLesson?.preamble}</p>
      {/* TODO: Liste opp tekster */}
      {currentLesson.textText?.map((l, i) => (
        <p key={i} data-testid="lesson_text">
          {l}
        </p>
      ))}
      {/* TODO: Liste opp kommentarer */}
      <LessonComments id={currentLesson?._id} comments={comments} />

      {/* SLETT */}
      {/* {JSON.stringify(courseSlug)}
      {JSON.stringify(lessonSlug)} */}
    </div>
  ))

  return <>{generate}</>
}
