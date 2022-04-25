import { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import LessonsElement from '../components/LessonsElement'
// import { courses, users } from '../data/data'
import { users } from '../data/data'
// import LessonComments from '../components/LessonComments'
import Lesson from '../components/Lesson'
import { getCourse } from '../lib/services/courseQuery'
import { getLessonCourse } from '../lib/services/lessonQuery'

export default function Course() {
  // TODO: Add nøvendig logikk
  const { slug } = useParams()
  const [currentCourse, setCurrentCourse] = useState([])
  const [lessons, setLessons] = useState([])
  const [url, setUrl] = useState('/kurs/' + slug)

  useEffect(() => {
    // Finner objektet som har lik slug som slug param.
    // const filterCourses = () =>
    //   courses.filter((c) => {
    //     return c.slug === slug
    //   })

    const getCourseData = async () => {
      const course = await getCourse(slug)
      console.log("course: ", course)
      setCurrentCourse(course)
    }

    const getLessonsData = async () => {
      const lessonsData = await getLessonCourse()
      console.log("lessonsData: ", lessonsData)
      setLessons(lessonsData)
    }
    
    getCourseData()
    getLessonsData()
    // setCurrentCourse(filterCourses())
  }, [])

  const handleUrl = () => {
    setUrl()
  }

  const generateLessons = currentCourse?.map((l) => (
    <LessonsElement key={l} url={url} handleUrl={handleUrl} l={l} />
  ))


  const generateLessonsFiltered = lessons?.map((fl) => 
      // fl.map((flInner) => (
      console.log(fl.title)
    )

    // for (let i = 0; i < lessons.length; i++) {
    //   // const relatedCourse = 
    //   lessons[i].map((l) => (
    //     console.log(l.slug)
    //   ))
    // }

  
  // lessons?.filter((L) => {
  //   return L?.relatedCourse?.slug === slug
  // })
  //   .map((l) => (
  //   <LessonsElement key={l} url={url} handleUrl={handleUrl} l={l} />
  // ))

  // /kurs/kurs-slug
  const generateCourseContent = currentCourse?.map((c) => (
    <div key={c?.title}>
      <h2 data-testid="course_title">{c?.title}</h2>
      <p data-testid="course_description">{c?.description}</p>
    </div>
  ))

  // /kurs/kurs-slug/leksjons-slug
  const generateLessonContent = currentCourse?.map((c) => (
    <Lesson key={c?.id} url={url} c={c} slug={slug} />
  ))

  const generateEnrollments = users.map((u) => <li key={u?.name}>{u?.name}</li>)

  return (
    <div className="grid-3">
      <aside>
        <h3>Leksjoner</h3>
        <ul data-testid="lessons" className="lessons">
          {/* TODO: Vis alle leksjoner til kurset */}
          {generateLessons}
          {/* SLETT DEN CLGEN */}
        </ul>
      </aside>
      <section>
        {/* TODO: START - Vis kun om vi er på /kurs/kurs-slug ikke når vi er på /kurs/kurs-slug/leksjons-slug */}
      {generateLessonsFiltered}
        {/* TODO: SLUTT */}
        {/* TODO: Vis leksjonens innhold her. HINT: Sjekk React Router Outlet */}
        {url === '/kurs/' + slug
          ? generateCourseContent
          : generateLessonContent}
        {/* <Outlet /> */}
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
