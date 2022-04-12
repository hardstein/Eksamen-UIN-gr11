import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function LessonsElement({ url, l }) {
  const lessons = l.lessons

  const generate = lessons.map((l) => (
    // <li key={l.title}>
    //   <a
    //     data-testid="lesson_url"
    //     data-slug="Dynamisk verdi"
    //     href={url + "/" + l.slug}
    //   >
        <Link data-testid="lesson_url" data-slug="Dynamisk verdi" key={l.title} to={url + "/" + l.slug}>{l.title}</Link>
        // {l.title}
      // </a>
      // <p>URL: {url + "/" + l.slug}/</p>
    // </li>
  ))
  return <>{generate}
  {/* <Outlet/> */}
  </>
}

export default LessonsElement
