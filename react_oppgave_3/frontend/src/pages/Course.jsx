import LessonsElement from '../components/LessonsElement'
import { comments, courses, users } from '../data/data'
import { Outlet, useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Course() {
  // TODO: Add nøvendig logikk
  const { slug } = useParams()
  const [currentCourse, setCurrentCourse] = useState([])
  const [url, setUrl] = useState('/kurs/' + slug)

  useEffect(() => {
    // Finner objektet som har lik slug som slug param.
    const filterCourses = () =>
      courses.filter((c) => {
        return c.slug === slug
      })

    filterCourses()
    setCurrentCourse(filterCourses())
  }, [])

  const handleUrl = () => {
    setUrl()
  }

  const generateLessons = currentCourse.map((l) => (
    <LessonsElement key={l} url={url} handleUrl={handleUrl} l={l} />
  ))

  // /kurs/kurs-slug
  const generateCourseContent = currentCourse.map((c) => (
    <div key={c.id}>
      <h2 data-testid="course_title">{c.title}</h2>
      <p data-testid="course_description">{c.description}</p>
    </div>
  ))

  // /kurs/kurs-slug/leksjons-slug
  const generateLessonContent = currentCourse.map((c) => (
    <div key={c.id}>
      <Link to={url}>Tilbake til {c.title}</Link>
      <h1>{c.lessons.find((lesson) => lesson.slug === slug)?.title}</h1>
      <p>{c.lessons.find((lesson) => lesson.slug === slug)?.preAmble}</p>
      {c.lessons
        .find((lesson) => lesson.slug === slug)
        ?.text?.map((l) => (
          <p key={l?.id}>{l?.text}</p>
        ))}
      {/* The form for commenting a lesson */}
      <form key={c.id} action="">
        <label htmlFor="namr">
          <input type="text" />
          Navn*
        </label>
        <label htmlFor="comment">
          <input type="text" />
          Tekst*
        </label>
        {/* <input type="button" value="Legg til kommentar" /> */}
        <button type="submit">Legg til kommentar</button>
        <p>{c.lesson?.slug}</p>
      </form>
      {/* All comments for a specific lesson */}
      <div>
        {comments
          .filter((c) => c?.lesson?.slug === slug)
          .map((c) => (
            <div key={c?.id} className="comment">
              <p>{c?.createdBy.name}</p>
              <p>{c?.comment}</p>
            </div>
          ))}
      </div>
    </div>
  ))

  const generateEnrollments = users.map((u) => <li key={u.name}>{u.name}</li>)

  return (
    <div className="grid-3">
      <aside>
        <h3>Leksjoner</h3>
        <ul data-testid="lessons" className="lessons">
          {/* TODO: Vis alle leksjoner til kurset */}
          {generateLessons}
        </ul>
      </aside>
      <section>
        {/* TODO: START - Vis kun om vi er på /kurs/kurs-slug ikke når vi er på /kurs/kurs-slug/leksjons-slug */}
        {url === '/kurs/' + slug ? (
          generateCourseContent
        ) : (
          <>{generateLessonContent}</>
        )}
        {/* TODO: SLUTT */}
        {/* TODO: Vis leksjonens innhold her. HINT: Sjekk React Router Outlet */}
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
