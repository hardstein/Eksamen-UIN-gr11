import { useState } from 'react'
import CourseCard from '../components/CourseCard'
import Filter from '../components/Filter'
import { courses } from '../data/data'

export default function Courses() {
  // TODO: Add nøvendig logikk

  // const [empty, setEmpty] = useState(false)
  const [category, setCategory] = useState('alle')

  // To lower fordi "courses" sin kategori er skrevet med liten bokstav.
  function handleOptions(e) {
    setCategory(e.target.value.toLowerCase())
  }

  const generateCourses = courses
    .filter((course) => course.category === category)
    .map((c, i) => <CourseCard key={i} c={c} />)

  return (
    <>
      <header className="courses-header">
        <h2 data-testid="title">Alle kurs</h2>
        {/* Filter */}
        <Filter handleOptions={handleOptions} />
      </header>
      <section className="courses-list" data-testid="courses">
        {/* TODO: Vis alle kurs */}
        {category === 'alle' ? (
          courses.map((c, i) => <CourseCard key={i} c={c} />)
        ) : category === 'empty' ? (
          <p data-testid="empty">Ingen kurs</p>
        ) : (
          // Legge til hvis det ikke er kurs på en gitt kategori
          generateCourses
        )}
        {/* TODO: Vis hvis ingen kurs / ingen kurs på en gitt kategori */}
      </section>
    </>
  )
}
