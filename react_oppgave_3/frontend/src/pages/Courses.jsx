import { useState } from 'react'
import CourseElement from '../components/CourseElement'
import { categories, courses } from '../data/data'
export default function Courses() {
  // TODO: Add nøvendig logikk

  const [empty, setEmpty] = useState(false)
  const [category, setCategory] = useState('alle')

  function handleOptions(e) {
    setCategory(e.target.value.toLowerCase())
  }

  const generateCourses = courses
    .filter((course) => course.category === category)
    .map((c, i) => <CourseElement key={i} c={c} />)


  const generateFilterOptions = categories.map((c, i) => (
    <option key={i} value={c}>
      {c}
    </option>
  ))

  return (
    <>
      <header className="courses-header">
        <h2 data-testid="title">Alle kurs</h2>
        {/* Filter */}
        <label htmlFor="filter">
          {empty ? <span>Velg kategori:</span> : null}
          <select
            id="filter"
            name="filter"
            data-testid="filter"
            onChange={handleOptions}
          >
            {/* <option value="">Alle</option> */}
            {generateFilterOptions}
            {console.log(category)}
            {/* TODO: Legg til flere kategorier - sjekk mappen data */}
          </select>
        </label>
      </header>
      <section className="courses-list" data-testid="courses">
        {/* TODO: Vis alle kurs */}
        {/* {generateCourses} */}
        {category === 'alle'
          ? courses.map((c, i) => <CourseElement key={i} c={c} />)
          : generateCourses}
        {/* TODO: Vis hvis ingen kurs / ingen kurs på en gitt kategori */}
        {empty ? <p data-testid="empty">Ingen kurs</p> : null}
      </section>
    </>
  )
}
