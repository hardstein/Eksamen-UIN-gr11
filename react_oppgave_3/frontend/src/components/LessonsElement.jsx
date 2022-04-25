import React from 'react'
import { Link } from 'react-router-dom'

function LessonsElement({ url, l }) {
  // const lessons = l.lessons
  const lessons = l.lesson

  const generate = lessons?.map((l) => (
    <li key={l?._key}>
      <Link
        data-testid="lesson_url"
        data-slug="Dynamisk verdi"
        // key={l.title}
        to={url + '/' + l?.slug}
      >
        {/* {l.title} */}
        {"KEYLUL: " + l?._key}
      </Link>
    </li>
  ))
  return <>{generate}</>
}

export default LessonsElement
