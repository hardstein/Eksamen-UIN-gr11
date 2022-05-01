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

  // const [valid, setValid] = useState(false)
  // const validGame = () => {
  //   setValid(!valid)
  // }

  const validGame = () => true

  const createGame = (currentLevel) => {
    let level = currentLevel

    if (currentLevel >= 2) {
      level = 2
    }

    const { squares } = levels[level]

    const { colors } = levels[level]

    const buttons = []

    //   if(level>=1) {
    //   for (let i = 0; i < squares-2; i++) {
    //     // const button = createButton(colors[random(colors.length)])
    //     // buttons.push(button)
    //     const buttonRed = createButton('red')
    //     const buttonBlue = createButton(colors)
    //     buttons.push(buttonRed, buttonBlue)
    //   }
    // }

    for (let i = 0; i < squares; i++) {
      const button = createButton(colors[random(colors.length)])
      buttons.push(button)
      // console.log("Buttons " + colors)
      // if (button.color === 'blue' || button.color === 'red') validGame = true
    }

    // const findColor = buttons?.find(
    //     (button) => button === 'grey')
    //     console.log("Fant grå " + button)
    // }

    const total = buttons.reduce((agg, item) => {
      if (item.point > 0) {
        return agg + item.point
      }
      return agg
    }, 0)

    if (level < 2) {
      return { buttons, total }
    }

    // Valid game referer kun til level 2 +
    if (validGame()) {
      return { buttons, total }
    }
    return createGame(level)
  }

  /*  */
  // Koden nedenfor lå opprinnelig her
  const [game, setGame] = useState(0) // Opprinnelig sto det NULL her

  const [bullsEye, setbullsEye] = useState([])

  // TODO: 0 må byttes ut med noe dynamisk
  useEffect(() => {
    setbullsEye?.(createGame(game))
    // setGame(game) Ha med denne eller fjerne??
  }, [game])

  const [gamePoints, setGamePoints] = useState(0)
  
  const handleClick = (event) => {
    const points = event.target.value
    let sum = parseInt(points)
    setGamePoints((prev) => prev + sum)
    // console.log('Total: ' + gamePoints)
    // console.log('bullsEye-total: ' + bullsEye.total)

   
    // if (gamePoints >= bullsEye.total) {
    //   console.log('bullsEye.total: ' + bullsEye.total)
    //   setGamePoints(bullsEye.total)
    // }

    if (game >= 2) {
      if (sum === -1) {
        setGame(0)
        setGamePoints(0)
      }
    }
  }

  // const buttonbullsEye = () => {
  //   const bullsEye = createGame(game)
  //   // const button = createGame(game).buttons
  //   console.log(bullsEye)
  //   console.log(bullsEye.total)
  //   console.log(bullsEye.buttons)
  //   // bullsEye.forEach(element => console.log("ButtonbullsEye: " + element))
  // }

  // Sendes til Games.js Kan evn istedet sende inn setGame og lage handleNext i Game
  // const handleNext = () => {
  //   setGame((prev) => prev + 1)
  //   G(0)
  // }

  return (
    <>
      {/* {JSON.stringify(`RUNDE ${game}`)} */}
      <p />
      {/* {JSON.stringify(`Antall ruter: ${bullsEye.buttons.length}`)} */}
      <p />
      {/* {JSON.stringify(`Mulige totale poeng ${bullsEye.total}`)} */}
      <p />
      {/* {JSON.stringify(bullsEye.buttons)} */}
      <p />
      {/* {JSON.stringify(bullsEye.total)} */}
      {/* {JSON.stringify(gamePoints)} */}

      {/* {JSON.stringify(levels[game]?.squares)} */}

      <Header
        maximumScore={bullsEye.total}
        gamePoints={gamePoints}
        setGamePoints={setGamePoints}
      />
      <BullsEye
        bullsEye={bullsEye.buttons}
        maximumScore={bullsEye.total}
        gamePoints={gamePoints}
        setGamePoints={setGamePoints}
        game={game}
        setGame={setGame}
        handleClick={handleClick}
      />
      <Game
        maximumScore={bullsEye.total}
        setGame={setGame}
        setGamePoints={setGamePoints}
        gamePoints={gamePoints}
      />
    </>
  )
}
