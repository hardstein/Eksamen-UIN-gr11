import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CommentForm({ id, onSubmit, complete }) {
  const [createdBy, setCreatedBy] = useState('')
  const [comment, setComment] = useState('')
  const [lessonRef, setLessonRef] = useState('')
  const [error, setError] = useState(false)
  const { lessonSlug } = useParams()

  useEffect(() => {
    // Reset
    setError(false)
    setCreatedBy('')
    setComment('');
    setLessonRef(id)

    // complete ? window.location.reload(false) : null
  // }, [id, complete])
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (createdBy === '' || comment === '') {
      setError(true)
    } else {
      // TODO: legge til lesson i kommentar
      onSubmit({ createdBy, comment, lessonRef })
      // Reset
      setError(false)
      setCreatedBy('')
      setComment('');
    }
  }

  const handleName = (e) => {
    setCreatedBy(e.target.value)
  }

  const handleComment = (e) => {
    setComment(e.target.value)
  }

  return (
    <form data-testid="comment_form" noValidate onSubmit={handleSubmit}>
      {/* <p>{lessonRef}</p>
      <p>{lessonSlug}</p> */}
      <label htmlFor="name">
        <span>Navn*</span>
        <input
          data-testid="form_name"
          type="text"
          name="name"
          id="name"
          value={createdBy}
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
          value={comment}
          onChange={handleComment}
        />
      </label>
      <button data-testid="form_submit" type="submit">
        Legg til kommentar
      </button>
      {/* TODO: Vise ved feil */}
      {error ? <p data-testid="form_error" className="form-error">Fyll ut alle felter med *</p> : null}
      {/* TODO: Vise ved suksess */}
      {complete ? <p data-testid="form_success" className="form-success">Skjema sendt</p> : null}
    </form>
  )
}

export default CommentForm
