import React, { useState } from 'react'
// import { comments } from '../data/data'

function LessonComments({ slug, comments }) {
  // const currentLessonComments = comments.filter((c) => c?.lesson?.slug === slug)
  const [error, setError] = useState(false)
  const [complete, setComplete] = useState(false)
  const generateComments = comments.map((c, i) => (
    <li key={i} className="comment">
      <h5>{c?.createdBy}</h5>
      <p data-testid="user_comment">{c?.comment}</p>
    </li>
  ))
  return (
    <section data-testid="comments">
      {/* <h4>Kommentarer ({currentLessonComments.length})</h4> */}
      <h4>Kommentarer ({comments.length})</h4>
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
        {error ? (<p data-testid="form_error">Fyll ut alle felter med *</p>) : null}
        {/* TODO: Vise ved suksess */}
        {complete ? (<p data-testid="form_success">Skjema sendt</p>) : null}
      </form>
      {/* TODO: Liste opp kommentarer */}
      <ul data-testid="comments_list">
        {generateComments}
      </ul>

    </section>
  )
}

export default LessonComments
