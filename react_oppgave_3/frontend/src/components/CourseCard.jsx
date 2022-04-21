import React from 'react'

function CourseCard({ c }) {
  // Annen måte å få med /kurs/ ?
  // Laget som variabel fordi den blir brukt flere steder.
  const navlink = '/kurs/' + c.slug
  return (
    <article className="course-element" data-testid="course_wrapper">
      <span>{c.category}</span>
      <h3 data-testid="courses_title">
        <a href={'/kurs/' + c.slug}>{c.title}</a>
      </h3>
      <p data-testid="courses_description">{c.description}</p>
      <a data-testid="courses_url" href={navlink}>
        Til kurs
      </a>
    </article>
  )
}

export default CourseCard
