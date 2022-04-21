import { Link } from "react-router-dom";
import LessonComments from "./LessonComments";

export default function Lesson( {url, c, slug}) {
  // TODO: Add nøvendig logikk
  let currentSlug = slug;
  return (
    <div>
      <div>
        <h3 data-testid="course_title">
          <Link to={url}>Tilbake til {c.title}</Link>
        </h3>
        <span data-testid="course_category">
          Kategori: <span>{c.category}</span>
        </span>
      </div>
      <h2 data-testid="lesson_title">{c.lessons.find((lesson) => lesson.slug === currentSlug)?.title}</h2>
      <p data-testid="lesson_preAmble">{c.lessons.find((lesson) => lesson.slug === slug)?.preAmble}</p>
      {/* TODO: Liste opp tekster */}
      {c.lessons
        .find((lesson) => lesson.slug === slug)
        ?.text?.map((l) => (
          <p key={l?.id} data-testid="lesson_text">{l?.text}</p>
        ))}
      
        {/* TODO: Liste opp kommentarer */}
        <LessonComments slug={currentSlug} />
    </div>
  )
}
