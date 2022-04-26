/* eslint-disable no-plusplus */
import { useEffect, useState } from 'react'

import BullsEye from './components/Bullseye'
import Game from './components/Game'
import Header from './components/Header'

// TODO: createGame har en TODO som må ferdigstilles
// import { createGame } from './starter_files/start'

export default function App() {
  const levels = [
    {
      squares: 1,
      colors: ['green'],
    },
    {
      squares: 8,
      colors: ['green', 'grey'],
    },
    {
      squares: 8,
      colors: ['green', 'grey', 'blue', 'purple', 'red'],
    },
  ]

  const green = { point: 1, color: 'green' }
  const red = { point: -1, color: 'red' }
  const blue = { point: 2, color: 'blue' }
  const purple = { point: 4, color: 'purple' }
  const grey = { point: 0, color: 'grey' }

  const random = (limit) => Math.floor(Math.random() * limit)

  const createButton = (color) => {
    switch (color) {
      case 'green':
        return green
      case 'grey':
        return grey
      case 'red':
        return red
      case 'purple':
        return purple
      case 'blue':
        return blue
      default:
        break
    }
  }

  // TODO: Ferdigstill funksjonen under for å sjekke om kravene for Nivå 3 er oppfylt
  /**
   *
   * At det er minst en knapp som gir poeng
   * At det er minst en rød knapp
   *
   */

  const validGame = () => true
  //   if(levels[2])
  //   createButton('green') && createButton('red')
  //   // console.log('true')
  //   console.log('true')

  const createGame = (currentLevel) => {
    let level = currentLevel
    if (currentLevel >= 2) {
      level = 2
    }

    //   const buttons = []
    //   const button = createButton('red')
    //   buttons.push(button)
    //   console.log(button)
    // }
    // else{validGame===false
    // console.log('false')}

    const { squares } = levels[level]
    console.log(squares)
    const { colors } = levels[level]
    console.log(colors)
    const buttons = []
    for (let i = 0; i < squares; i++) {
      const button = createButton(colors[random(colors.length)])
      buttons.push(button)
    }
    const total = buttons.reduce((agg, item) => {
      if (item.point > 0) {
        return agg + item.point
      }
      return agg
    }, 0)

    if (level < 2) {
      return { buttons, total }
    }

    // if(level >= 2) {
    //   const buttons = []
    //   for (let i = 0; i < squares; i++) {
    //     const button = createButton(colors[random(6)])
    //     buttons.push(button)
    //   }
    // }

    if (validGame()) {
      return { buttons, total }
    }
    return createGame(level)
  }

  // Koden nedenfor lå opprinnelig her
  const [game, setGame] = useState([])

  const getGameLevel = async () => {
    const data = await createGame(0)
    console.log(data)
    setGame(data)
  }

  // useEffect(() => {
  //   const getGame = async () => {
  //     const data = await createGame(0)
  //     console.log(data)
  //   // TODO: 0 må byttes ut med noe dynamisk
  //   setGame(data)
  //   }
  //   getGame()

  // }, [])

  // const makeNewGame = () => {
  //   createGame(0).buttons
  // }

  // Object.keys(game).forEach((prop) => console.log(prop))

  return (
    <>
      {/* {JSON.stringify(createGame(0).buttons[0].point)} */}
      {/* {JSON.stringify(levels)} */}
      {/* {JSON.stringify(game?.total)} */}
      {JSON.stringify(getGameLevel)}
      <h1>{game?.total}</h1>
      <Header
        headTotal={createGame(0).total}
        headPoint={createGame(0).buttons[0].point}
      />
      <BullsEye bull={createGame(2).buttons} />
      <Game games={createGame(0).buttons} />
    </>
  )
}
