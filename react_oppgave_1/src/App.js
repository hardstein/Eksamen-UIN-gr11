import { useState } from 'react'
import Flavours from './components/Flavours'
import IceCream from './components/IceCream'
import Layout from './components/Layout'
import Title from './components/Title'

export default function App() {
  const flavourList = [
    { value: 'strawberry', name: 'Jordbær' },
    { value: 'banana', name: 'Banan' },
    { value: 'lime', name: 'Lime' },
    { value: 'blueberry', name: 'Blåbær' },
    { value: 'chocolate', name: 'Sjokolade' },
  ]

  // const result = flavourList.find(({ value }) => value === 'value')

  // const title = 'Sjokolade'

  // const getObject = () => (
  // {flavourList.map(({value, name}) => `${value} ${name}`)}
  // )


  const [title, setTitle] = useState([])

  // TODO: Gjør nødvendige endringer slik at 'Chocolate' vise i tittel når applikasjonen starter
  const [flavour, setFlavour] = useState('')

  // TODO: Gjør nødvendige endringer slik at bakgrunnen på isen er chocolate når applikasjonen starter
  const [css, setCss] = useState('')

  const handleFlavourChange = (event) => {
    const { value } = event.target
    setFlavour(value)
    const iceFlavour = flavourList.find((iceCream) => iceCream.value === value)
    /* Find er fra Moderne Javascript leksjon 12. Bytte ut med noe annet for å få sjokolade til å vises første load? */
    setTitle(iceFlavour.name)

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
      <Title title={title} />
      <Flavours
        flavourList={flavourList}
        handleFlavourChange={handleFlavourChange}
      />
      <IceCream css={css} /> {/* TODO:Fikse denne, nå gjør den ingenting */}
    </Layout>
  )
}
