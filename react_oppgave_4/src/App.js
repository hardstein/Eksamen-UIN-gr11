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

  const validGame = (buttons) => {
    const redButton = buttons.find((button) => button.point === -1)
    const coloredButton = buttons.find((button) => button.point > 0)

    if (!redButton || !coloredButton) {
      return setGame(game)
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

    if (validGame(buttons)) {
      return { buttons, total }
    }

    return createGame(level)
  }

  const [game, setGame] = useState(0)

  const [bullsEye, setbullsEye] = useState([])

  const [gamePoints, setGamePoints] = useState(0)

  useEffect(() => {
    setbullsEye?.(createGame(game))
  }, [game])

  const handleClick = (event) => {
    const points = event.target.value
    let sum = parseInt(points)
    const newPoints = gamePoints + sum
    setGamePoints(newPoints)

    if (newPoints >= bullsEye.total) {
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
      <Header maximumScore={bullsEye.total} gamePoints={gamePoints} />
      <BullsEye
        bullsEye={bullsEye.buttons}
        maximumScore={bullsEye.total}
        gamePoints={gamePoints}
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
