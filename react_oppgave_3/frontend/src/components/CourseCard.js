import React from 'react'
import { Link } from 'react-router-dom'
function CourseCard({ c }) {
  return (
    <article className="course-element" data-testid="course_wrapper">
      <span>{c.category}</span>
      <h3 data-testid="courses_title">
        <Link to={'/kurs/' + c.slug}>{c.title}</Link>
      </h3>
      <p data-testid="courses_description">{c.description}</p>
      <Link data-testid="courses_url" to={'/kurs/' + c.slug}>
        Til kurs
      </Link>
    </article>
  )
}

export default CourseCard
