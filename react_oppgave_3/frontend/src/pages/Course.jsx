import { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import LessonsElement from '../components/LessonsElement'
import Title from '../components/Title'
import { users } from '../data/data'
import { getCourse } from '../lib/services/courseQuery'

export default function Course() {
  const { courseSlug, lessonSlug } = useParams()
  const [currentCourse, setCurrentCourse] = useState([])
  const [url, setUrl] = useState('/kurs/' + courseSlug)

  useEffect(() => {
    const getCourseData = async () => {
      const course = await getCourse(courseSlug)
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
      <Title testid="course_title" text={c?.title} />
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
          {/* Vis alle leksjoner til kurset */}
          {generateLessonsCard}
        </ul>
      </aside>
      <section className="border-divider course-section">
        {/* lessonslug er kun definert hvis man er inne på en leksjon, 
        dvs. hvis man er på en kurs side så skal kun innhold fra et kurs vises. Ellers vil innhold fra leksjoner vises. */}
        {lessonSlug === undefined ? generateCourseContent : null}
        <Outlet />
      </section>
      <aside data-testid="enrollments">
        <h3>Deltakere</h3>
        <ul data-testid="course_enrollments">
          {/* Vis alle deltakere, data hentet fra filen data. Kun statisk */}
          {generateEnrollments}
        </ul>
      </aside>
    </div>
  )
}
