import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../lib/services/userService'

export default function SignUp() {
  // TODO: Legg til logikk for å håntere form, navigasjon, input, validering m.m
  // TODO: Styling m.m

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [error, setError] = useState(false)
  const [complete, setComplete] = useState(false)

  const [testUser, setTestUser] = useState('')

  let navigate = useNavigate()

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name === '' || email === '') {
      setComplete(false)
      setError(true)
    } else {
      onSubmit({ name, email })
      setTestUser(name + ' ' + email)
      setError(false)
      setComplete(true)
    }
  }

  const onSubmit = async (data) => {
    // Bruker try/catch for å fange opp feil
    try {
      // kaller servicen med data
      await createUser(data)
      complete
        ? setTimeout(() => {
            console.log('Nå gikk det 1sek ikke 500ms')
            return navigate('/kurs')
          }, 1000)
        : console.log('Noe gikk feil med redirecten')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <section data-testid="sign_up">
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
          Lag ny bruker
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
        <p>{name}</p>
        <p>{email}</p>
        <p>{testUser}</p>
      </form>
    </section>
  )
}
