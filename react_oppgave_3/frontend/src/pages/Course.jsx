import { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import LessonsElement from '../components/LessonsElement'
import Title from '../components/Title'
import { users } from '../data/data'
import { NEWgetCourse } from '../lib/services/courseQuery'

export default function Course() {
  // TODO: Add nøvendig logikk
  const { courseSlug, lessonSlug } = useParams()
  const [currentCourse, setCurrentCourse] = useState([])
  const [url, setUrl] = useState('/kurs/' + courseSlug)

  useEffect(() => {
    const getCourseData = async () => {
      const course = await NEWgetCourse(courseSlug)
      setCurrentCourse(course)
    }
    getCourseData()
  }, [courseSlug])

  const handleUrl = () => {
    setUrl()
  }

  // Leksjoner som blir vist på vestre siden på et kurs.
  const generateLessonsCard = currentCourse?.map((l, i) => (
    <LessonsElement key={i} url={url} handleUrl={handleUrl} l={l} />
  ))

  // /kurs/kurs-slug
  const generateCourseContent = currentCourse?.map((c) => (
    <div key={c?.title}>
      <Title data-testid="course_title" text={c?.title} />
      {/* <h2 data-testid="course_title">{c?.title}</h2> */}
      <p data-testid="course_description">{c?.description}</p>
    </div>
  ))
  // Liste over deltakere til et kurs, på høyre side.
  const generateEnrollments = users.map((u) => <li key={u?.name}>{u?.name}</li>)

  return (
    <div className="grid-3">
      <aside>
        <h3>Leksjoner</h3>
        <ul data-testid="lessons" className="lessons">
          {/* TODO: Vis alle leksjoner til kurset */}
          {generateLessonsCard}
        </ul>
      </aside>
      <section>
        {/* TODO: START - Vis kun om vi er på /kurs/kurs-slug ikke når vi er på /kurs/kurs-slug/leksjons-slug */}

        {/* TODO: SLUTT */}
        {/* TODO: Vis leksjonens innhold her. HINT: Sjekk React Router Outlet */}
        {/* Jalla hack?? */}
        {lessonSlug === undefined
        ? generateCourseContent
        : null }
        <Outlet/>

      </section>
      <aside data-testid="enrollments">
        <h3>Deltakere</h3>
        <ul data-testid="course_enrollments">
          {/* TODO: Vis alle deltakere (se mappen data) */}
          {generateEnrollments}
        </ul>
      </aside>
    </div>
  )
}
