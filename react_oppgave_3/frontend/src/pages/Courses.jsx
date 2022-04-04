import { useState } from "react";
import CourseElement from "../components/CourseElement";
import { courses } from "../data/data";
export default function Courses() {
  // TODO: Add nøvendig logikk

  const [empty, setEmpty] = useState(false);

  const generateCourses = courses.map((c, i) => 
    <CourseElement key={i} c={c} />
  )
  return (
    <>
      <header className="courses-header">
        <h2 data-testid="title">Alle kurs</h2>
        <label htmlFor="filter">
          {empty ? <span>Velg kategori:</span> : null}
          <select id="filter" name="filter" data-testid="filter">
            <option value="">Alle</option>
            {/* TODO: Legg til flere kategorier - sjekk mappen data */}
          </select>
        </label>
      </header>
      <section className="courses-list" data-testid="courses">
        {/* TODO: Vis alle kurs */}
        {generateCourses}
        {/* TODO: Vis hvis ingen kurs / ingen kurs på en gitt kategori */}
        {empty ? <p data-testid="empty">Ingen kurs</p> : null}
      </section>
    </>
  )
}
