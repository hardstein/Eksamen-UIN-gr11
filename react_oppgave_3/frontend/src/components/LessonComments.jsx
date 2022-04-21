import React from 'react'
import { comments } from '../data/data'

function LessonComments({ slug }) {
  const currentLessonComments = comments.filter((c) => c?.lesson?.slug === slug)
  return (
    // <div>
    //   <h1>Kommentarer({currentLessonComments.length})</h1>
    //   {currentLessonComments.map((c) => (
    //     <div key={c?.id} className="comment">
    //       <p>{c?.createdBy.name}</p>
    //       <p>{c?.comment}</p>
    //     </div>
    //   ))}
    // </div>

    <section data-testid="comments">
      <h4>Kommentarer ({currentLessonComments.length})</h4>
      <form data-testid="comment_form" noValidate>
        <label htmlFor="name">
          <span>Navn*</span>
          <input data-testid="form_name" type="text" name="name" id="name" />
        </label>
        <label htmlFor="comment">
          <span>Legg til kommentar*</span>
          <textarea
            data-testid="form_textarea"
            type="text"
            name="comment"
            id="comment"
            cols="30"
          />
        </label>
        <button data-testid="form_submit" type="submit">
          Legg til kommentar
        </button>
        {/* TODO: Vise ved feil */}
        <p data-testid="form_error">Fyll ut alle felter med *</p>
        {/* TODO: Vise ved suksess */}
        <p data-testid="form_success">Skjema sendt</p>
      </form>
      {/* TODO: Liste opp kommentarer */}

      <ul data-testid="comments_list">
        {currentLessonComments.map((c) => (
          <li key={c?.id} className="comment">
            <h5>{c?.createdBy.name}</h5>
            <p data-testid="user_comment">{c?.comment}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default LessonComments
