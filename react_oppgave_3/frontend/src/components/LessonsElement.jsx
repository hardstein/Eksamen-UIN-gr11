import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// function LessonsElement({ url, l }) {
function LessonsElement({ url, l, handleClick, active }) {
  const names = l.lessonName
  const slugs = l.lessonSlug
  // Inspirasjon fra nettet:
  // https://stackoverflow.com/questions/32937181/javascript-es6-map-multiple-arrays
  // let zipped = names.map((x, i) => [x, slugs[i]]);

  // NB: l og le
  const generate = names?.map((le, i) => (
    <li key={i}>
      <Link
        data-testid="lesson_url"
        data-slug="Dynamisk verdi"
        // Fikk ideen til å bruke slugs[i] her fra koden over som er kommentert ut.
        to={url + '/' + slugs[i]}
        onClick={() => handleClick()}
      >
        {active ? "AKTIV-" + le : le}
      </Link>
    </li>
  ))

  return <>{generate}</>
}

export default LessonsElement
