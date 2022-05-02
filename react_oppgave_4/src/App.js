/* eslint-disable no-plusplus */
import { useEffect, useState } from 'react'

import BullsEye from './components/Bullseye'
import Game from './components/Game'
import Header from './components/Header'

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

  // const [button, setButton] = useState([])

  const validGame = (buttons) => {
    buttons.forEach((button, index) => {
      console.log(button.color)
    })

    const redButton = buttons.find?.((button) => button.point === -1)
    // console.log(redButton?.color) // Returnerer objektets farge
    if (!redButton) {
      // Returnerer false hvis rød ikke finnes i lista
      console.log('false')
      buttons.pop() // Fjerner siste elementet i lista
      buttons.push(createButton('red')) // Legger til rød knapp bakerst i lista. Må endres..
      console.log(buttons)
    }
    return true
  }

  const createGame = (currentLevel) => {
    let level = currentLevel

    if (currentLevel >= 2) {
      level = 2
    }

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

    // Valid game referer kun til level 2 +
    if (validGame(buttons)) {
      return { buttons, total }
    }

    return createGame(level)
  }

  const [game, setGame] = useState(0) // Opprinnelig sto det NULL her

  const [bullsEye, setbullsEye] = useState({})

  useEffect(() => {
    setbullsEye?.(createGame(game))
  }, [game])

  const [gamePoints, setGamePoints] = useState(0)

  const handleClick = (event) => {
    const points = event.target.value
    let sum = parseInt(points)
    const newPoints = gamePoints + sum
    setGamePoints(newPoints)
    console.log('newPoints: ' + newPoints)
    console.log('gamepoints: ' + gamePoints)

    // Sjekk på nytt, om kan kutte ut logikk i Header...
    if (newPoints >= bullsEye.total) {
      console.log('bullsEye.total: ' + bullsEye.total)
      setGamePoints(bullsEye.total)
    }

    if (game >= 2) {
      if (sum === -1) {
        setGame(0)
        setGamePoints(0)
      }
    }
  }

  return (
    <>
      {JSON.stringify(`RUNDE ${game}`)}
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
      {/* {JSON.stringify(levels[game]?.colors)} */}

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
