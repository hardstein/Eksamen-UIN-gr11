import React from 'react'
import { Link } from 'react-router-dom'

function LessonsElement({ url, l }) {
  const lessons = l.lessons

  const generate = lessons.map((l) => (
    <li key={l.title}>
      <Link
        data-testid="lesson_url"
        data-slug="Dynamisk verdi"
        key={l.title}
        to={url + '/' + l.slug}
      >
        {l.title}
      </Link>
    </li>
  ))
  return <>{generate}</>
}

export default LessonsElement
