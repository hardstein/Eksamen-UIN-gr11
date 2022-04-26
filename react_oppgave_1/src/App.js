import { useEffect, useState } from 'react'
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

  const [flavour, setFlavour] = useState('')
  const [css, setCss] = useState('')

  useEffect(() => {
    const showChocolate = flavourList?.find(
      (iceCream) => iceCream.value === 'chocolate'
    )
    setCss(showChocolate.value)
  }, [])

  const handleFlavourChange = (event) => {
    const { value } = event.target
    setFlavour(value) // Sjekke denne. Den gjør egt ikke noen forskjell til eller fra ...

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
      <Title css={css} />
      <Flavours
        flavourList={flavourList}
        handleFlavourChange={handleFlavourChange}
      />
      <IceCream css={css} />
      {/* IceCream komponenten fungerer selv om css ikke sende som prop... Fjerne? */}
    </Layout>
  )
}
