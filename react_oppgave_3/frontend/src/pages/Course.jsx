import { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import LessonsElement from '../components/LessonsElement'
// import { courses, users } from '../data/data'
import { users } from '../data/data'
// import LessonComments from '../components/LessonComments'
import Lesson from '../components/Lesson'
// import { getCourse } from '../lib/services/courseQuery'
import { NEWgetCourse } from '../lib/services/courseQuery'
// import { getLessonCourse } from '../lib/services/lessonQuery'

export default function Course() {
  // TODO: Add nøvendig logikk
  const { slug } = useParams()
  const [currentCourse, setCurrentCourse] = useState([])
  const [url, setUrl] = useState('/kurs/' + slug)
  // Lagre IDer som skal brukes til parameter for query i groq...
  const [id, setId] = useState([])

  useEffect(() => {
    // Finner objektet som har lik slug som slug param.
    // const filterCourses = () =>
    //   courses.filter((c) => {
    //     return c.slug === slug
    //   })

    const getCourseData = async () => {
      const course = await NEWgetCourse(slug)
      console.log('course: ', course)
      setCurrentCourse(course)
    }

    getCourseData()
  }, [slug])

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
      <h2 data-testid="course_title">{c?.title}</h2>
      <p data-testid="course_description">{c?.description}</p>
    </div>
  ))

  // /kurs/kurs-slug/leksjons-slug
  // const generateLessonContent = currentCourse?.map((c, i) => (
  //   <Lesson key={i} url={url} c={c} courseSlug={slug} />
  // ))

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
        {/* {url === '/kurs/' + slug
            ? generateCourseContent
            : null } */}
        {/* TODO: SLUTT */}
        {/* TODO: Vis leksjonens innhold her. HINT: Sjekk React Router Outlet */}

        {url === '/kurs/' + slug ? (
          generateCourseContent
        ) : (
          <Outlet>
            {/* {<Lesson url={url} c={currentCourse} courseSlug={slug} />} */}
          </Outlet>
        )}
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
