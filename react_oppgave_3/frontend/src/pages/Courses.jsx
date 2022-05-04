import { useEffect, useState } from 'react'
import CourseCard from '../components/CourseCard'
import Filter from '../components/Filter'
import { getCourses } from '../lib/services/courseQuery'

export default function Courses() {
  // TODO: Add nøvendig logikk
  const [courses, setCourses] = useState([])
  useEffect(() => {
    const getCoursesData = async () => {
      const coursesData = await getCourses()
      setCourses(coursesData)
    }
    
    getCoursesData()
  }, [])

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
        ) : // Hvis empty er valgt, eller at det mangler kurs til valgt kategori.
        category === 'empty' || generateCourses.length === 0 ? (
          <p data-testid="empty">Ingen kurs</p>
        ) : (
          generateCourses
        )}
        {/* TODO: Vis hvis ingen kurs / ingen kurs på en gitt kategori */}
      </section>
    </>
  )
}
