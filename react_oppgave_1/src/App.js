import { useState } from 'react'
import Flavours from './components/Flavours'
import IceCream from './components/IceCream'
import Layout from './components/Layout'
import Title from './components/Title'

export default function App() {
  // TODO: Gjør nødvendige endringer slik at 'Chocolate' vise i tittel når applikasjonen starter
  const [flavour, setFlavour] = useState('')
  
  // TODO: Gjør nødvendige endringer slik at bakgrunnen på isen er chocolate når applikasjonen starter
  const [css, setCss] = useState('')

  // TODO: Trigg funksjonen under ved endring i select
  const handleFlavourChange = (event) => {
    const { value } = event.target

    // TODO: Gjør nødvendig endring slik at tittel blir oppdatert med verdien valgt i select
    setFlavour('')

    // #### DO NOT CHANGE -- Ikke gjør endringer på koden under
    const cssFlavour = getComputedStyle(
      document.documentElement
    ).getPropertyValue(`--${value}`)
    const cssBackground = getComputedStyle(
      document.documentElement
    ).getPropertyValue(`--bg-${value}`)
    document.documentElement.style.setProperty('--flavour', `${cssFlavour}`)
    document.documentElement.style.setProperty('--bg', `${cssBackground}`)
    setCss(value)
    // #### DO NOT CHANGE END
  }

  return (
    <Layout>
      <Title />
      <Flavours />
      <IceCream />
    </Layout>
  )
}
