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

  // useEffect(() => {
  //   const getChocolate = () => {
  //     const chocolateValue = flavourList.find(
  //       (iceCream) => iceCream.value === 'chocolate'
  //     )
  //     setFlavour(chocolateValue.value)
  //     setTitle(chocolateValue.name)
  //   }
  //   getChocolate()
  // }, [])

  useEffect(() => {
    const chocolateValue = flavourList.find(
      (iceCream) => iceCream.value === 'chocolate'
    )
    setFlavour(chocolateValue.value)
    setCss(chocolateValue.value)
  }, [])

  const handleFlavourChange = (event) => {
    const { value } = event.target
    setFlavour(value)
    setCss(value)

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
      {/* TODO:Fikse denne, den fungerer uten å sende css som props også. Flytte main fra IceCream til App? */}
    </Layout>
  )
}
