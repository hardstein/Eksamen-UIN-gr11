import React, { useEffect, useState } from 'react'
import { createComment } from '../lib/services/commentService'
import CommentForm from './CommentForm'
// import { comments } from '../data/data'

function LessonComments({ id, comments }) {
  // const [error, setError] = useState(false)
  const [complete, setComplete] = useState(false)

  const onSubmit = async (data) => {
    setComplete(false)
    await createComment(data)
    setComplete(true)
  }

  const generateComments = comments.map((c, i) => (
    <li key={i} className="comment">
      <h5>{c?.createdBy}</h5>
      <p data-testid="user_comment">{c?.comment}</p>
    </li>
  ))

  return (
    <section data-testid="comments">
      <h4 className='lesson-comments'>Kommentarer ({comments.length})</h4>
      <CommentForm id={id} onSubmit={onSubmit} complete={complete} />
      {/* TODO: Liste opp kommentarer */}
      <ul data-testid="comments_list">{generateComments}</ul>
      {/* {JSON.stringify(id)} */}
    </section>
  )
}

export default LessonComments
