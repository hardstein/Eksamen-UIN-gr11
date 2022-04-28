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

    const { colors } = levels[level]

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
  const [game, setGame] = useState(0) // Opprinnelig sto det null her

  const [button, setButton] = useState(0)

  // const getGameLevel = async () => {
  //   const data = await createGame(0)
  //   console.log(data)
  //   setGame(data)
  // }

  // useEffect(() => {
  //   const getGame = () => {
  //     const data = createGame(game)
  //     console.log(data)
  //   // TODO: 0 må byttes ut med noe dynamisk
  //   }
  //   getGame()
  // }, [])

  // const makeNewGame = () => {
  //   createGame(0).buttons
  // }

  // const getTotal = () => {
  //   console.log(game?.total)
  // }

  // const clickFunc = () => {
  //   setGame((prev) => prev + 1)
  //   console.log(game)
  // }

  const clickFunc = () => {
    const value = createGame(game).buttons[button].color
    console.log(value)
  }

  // const square = levels?.[game].squares

  // const clickFunc = () => {
  //   const square = levels?.[game]?.squares
  //   console.log(square)
  // }

  // const clickFunc = async () => {
  //   const newGame = await createGame(game)
  //   console.log(levels?.[game]?.squares)
  // }

  const point = (event) => {
    const data = event.target.value
    const number = createGame(game).buttons
    for (let i = 0; i < number.length; i++) {
      console.log(number[i].color)
    }
  }

  // Sendes til Games. Kan evn istedet sende inn setGame og lage handleNext i Game
  const handleNext = () => {
    setGame((prev) => prev + 1)
  }

  return (
    <>
      {JSON.stringify(createGame(game).buttons)}
      {/* {JSON.stringify(levels[game]?.squares)} */}
      {/* {JSON.stringify(game?.total)} */}
      {/* {JSON.stringify(" game " + game)} */}
      {/* {JSON.stringify(createGame[0])} */}
      {/* {JSON.stringify(game)} */}
      {/* {JSON.stringify(createGame(game).buttons.point)} */}
      {/* {JSON.stringify(point)} */}
      {/* {JSON.stringify()} */}

      <Header
        headTotal={createGame(game).total}
        headPoint={createGame(game).buttons[0].point}
      />
      <BullsEye
        listOfButtons={createGame(game).buttons}
        setGame={setGame}
        setButton={setButton}
      />
      <div>
        <button type="button" onClick={point}>
          Trykk meg
        </button>
      </div>
      <Game
        games={createGame(game).buttons}
        handleNext={handleNext}
        // levels={levels}
        // squares={}
      />
    </>
  )
}
