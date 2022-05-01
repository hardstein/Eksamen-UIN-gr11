import React from 'react'
import { useState } from 'react'

function UserForm({ onSubmit, loading, complete }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name === '' || email === '') {
      setError(true)
    } else {
      onSubmit({ name, email })
      setError(false)
    }
  }

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  return (
    <section data-testid="sign_up" className='user-form'>
      <h2 data-testid="title">Ny bruker</h2>
      <form data-testid="form" noValidate onSubmit={handleSubmit}>
        <label htmlFor="name">
          <span>Navn*</span>
          <input
            data-testid="form_name"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleName}
          />
        </label>
        <label htmlFor="email">
          <span>Epost*</span>
          <input
            data-testid="form_email"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmail}
          />
        </label>
        <label htmlFor="admin">
          <input
            data-testid="form_admin"
            type="checkbox"
            name="admin"
            id="admin"
          />
          <span>Admin</span>
        </label>
        <button data-testid="form_submit" type="submit">
          {loading ? 'Sender' : 'Lag ny bruker'}
        </button>
        {/* TODO: Bruk ved error */}
        {error ? (
          <p data-testid="form_error" className="form-error">
            Fyll ut alle felter med *
          </p>
        ) : null}
        {/* TODO: Bruk ved suksess */}
        {complete ? (
          <p data-testid="form_success" className="form-success">
            Skjema sendt
          </p>
        ) : null}
      </form>
    </section>
  )
}

export default UserForm
