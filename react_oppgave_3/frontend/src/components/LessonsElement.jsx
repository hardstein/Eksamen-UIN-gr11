import React from 'react'

function LessonsElement({ l }) {
  const lessons = l.lessons

  const generate = lessons.map((l) => (
    <li key={l.title}>
      <a
        data-testid="lesson_url"
        data-slug="Dynamisk verdi"
        href="#"
      >
        {l.title}
      </a>
    </li>
  ))
  return <>{generate}</>
}

export default LessonsElement
