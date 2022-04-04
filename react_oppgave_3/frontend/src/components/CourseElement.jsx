import React from 'react'

function CourseElement({c}) {
  return (
    <article className='course-element' data-testid="course_wrapper">
      <span>{c.category}</span>
      <h3 data-testid="courses_title">
        <a href={c.slug}>{c.title}</a>
      </h3>
      <p data-testid="courses_description">{c.description}</p>
      <a data-testid="courses_url" href={c.slug}>
        Til kurs
      </a>
    </article>
  )
}

export default CourseElement
