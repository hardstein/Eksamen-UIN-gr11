import { Link, useParams } from 'react-router-dom'

function LessonLinks({ url, l }) {
  const names = l.lessonName
  const slugs = l.lessonSlug
  const { lessonSlug } = useParams()

  // Inspirasjon fra nettet:
  // https://stackoverflow.com/questions/32937181/javascript-es6-map-multiple-arrays
  // let zipped = names.map((x, i) => [x, slugs[i]]);

  // NB: l og le
  const generate = names?.map((le, i) => (
    <li key={i} className={slugs[i] === lessonSlug ? 'active-lesson' : null}>
      <Link
        data-testid="lesson_url"
        data-slug="Dynamisk verdi"
        // Fikk ideen til å bruke slugs[i] her fra koden over som er kommentert ut.
        to={url + '/' + slugs[i]}
      >
        {le}
      </Link>
    </li>
  ))

  return <>{generate}</>
}

export default LessonLinks
