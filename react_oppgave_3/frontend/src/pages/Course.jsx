import { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import LessonLinks from '../components/LessonLinks'
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

  // Leksjoner som blir vist på vestre siden på et kurs.
  const generateLessonLinks = currentCourse?.map((l, i) => (
    <LessonLinks
      key={i}
      url={url}
      l={l}
    />
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
          {generateLessonLinks}
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
          {generateEnrollments}
        </ul>
      </aside>
    </div>
  )
}
