import { useState } from 'react'

function CommentForm({ onSubmit, complete }) {
  const [createdBy, setName] = useState('')
  const [comment, setComment] = useState('')

  // TODO: koble lesson til kommentar
  const [lesson, setLesson] = useState('Variabler')


  const [error, setError] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (createdBy === '' || comment === '') {
      setError(true)
    } else {
        // TODO: legge til lesson i kommentar
      onSubmit({ createdBy, comment })
      setError(false)
    }
  }

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleComment = (e) => {
    setComment(e.target.value)
  }

  return (
    <form data-testid="comment_form" noValidate onSubmit={handleSubmit}>
      <label htmlFor="name">
        <span>Navn*</span>
        <input
          data-testid="form_name"
          type="text"
          name="name"
          id="name"
          onChange={handleName}
        />
      </label>
      <label htmlFor="comment">
        <span>Legg til kommentar*</span>
        <textarea
          data-testid="form_textarea"
          type="text"
          name="comment"
          id="comment"
          cols="30"
          onChange={handleComment}
        />
      </label>
      <button data-testid="form_submit" type="submit">
        Legg til kommentar
      </button>
      {/* TODO: Vise ved feil */}
      {error ? <p data-testid="form_error">Fyll ut alle felter med *</p> : null}
      {/* TODO: Vise ved suksess */}
      {complete ? <p data-testid="form_success">Skjema sendt</p> : null}
    </form>
  )
}

export default CommentForm
