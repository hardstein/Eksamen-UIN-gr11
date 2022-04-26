import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserForm from '../components/UserForm'
import { createUser } from '../lib/services/userService'

export default function SignUp() {
  // TODO: Legg til logikk for å håntere form, navigasjon, input, validering m.m
  // TODO: Styling m.m
  const [loading, setLoading] = useState(false)
  const [complete, setComplete] = useState(false)

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    // reset
    setLoading(true)
    setComplete(false)
    await createUser(data)
    setComplete(true)
    setTimeout(() => {
      console.log('Nå gikk det 500ms')
      return navigate('/kurs')
    }, 500)
  }

  return (
    <>
      <UserForm onSubmit={onSubmit} loading={loading} complete={complete}/>
    </>
  )
}
