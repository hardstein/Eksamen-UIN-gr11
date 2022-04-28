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

  // TODO: 0 må byttes ut med noe dynamisk
  useEffect(() => {
    const getGame = () => {
      const data = createGame?.(game)
      // console.log(data)
    }
    getGame()
  }, [])

  // const getTotal = () => {
  //   console.log(game?.total)
  // }

  // const clickFunc = () => {
  //   setGame((prev) => prev + 1)
  //   console.log(game)
  // }

  // const clickFunc = () => {
  //   const value = createGame(game).buttons[button].point
  //   console.log(value)
  // }

  // const square = levels?.[game].squares

  // const clickFunc = () => {
  //   const square = levels?.[game]?.squares
  //   console.log(square)
  // }

  // Henter ut total-poeng for en runde, men samsvarer ikke med faktiske buttons
  const makeNewGame = () => {
    const data = createGame(game)
    console.log('Totalt antall poeng mulig: ' + data.total)
    //  console.log(`Antall squares: ${data.buttons.length}`)
    return data.total
  }

  // const returnTotal = () => {
  //   makeNewGame()
  // }

  // Denne gjør det samme som makeNewGame, men STOPPER Å TELLE SQUARES ETTER RUNDE 3
  // const clickFunc = async () => {
  //   const newGame = await createGame(game)
  //   console.log(`Test av antall squares: ${levels?.[game]?.squares}`)
  // }

  // const point = (event) => {
  //   const data = event.target.value
  //   const number = createGame(game).buttons
  //   for (let i = 0; i < number.length; i++) {
  //     console.log(number[i].color)
  //   }
  // }

  // handleClick for Bullseye
  // Fjerne async?

  const [totalPoint, setTotalPoint] = useState(0)
  let sum = 0
  const handleClick = async (event) => {
    const points = await event.target.value
    // event.preventDefault()
    sum = parseInt(points)
    setTotalPoint((prev) => prev + sum)
    console.log('Total: ' + totalPoint)
    if (totalPoint >= 4) {
      handleNext()
      setTotalPoint(0)
    }
    if (game >= 2) {
      if (sum === -1) {
        setGame(0)
        setTotalPoint(0)
      }
    }
  }

  // console.log(`Total: ${total}`)
  // sum = total

  // Sendes til Games. Kan evn istedet sende inn setGame og lage handleNext i Game
  const handleNext = () => {
    setGame((prev) => prev + 1)
  }

  return (
    <>
      {JSON.stringify('RUNDE ' + game)}
      <p></p>
      {JSON.stringify('Antall ruter: ' + createGame(game).buttons.length)}
      <p></p>
      {JSON.stringify('Mulige totale poeng ' + createGame(game).total)}

      {/* {JSON.stringify(levels[game]?.squares)} */}
      {/* {JSON.stringify(game?.total)} */}
      {/* {JSON.stringify(" game " + game)} */}
      {/* {JSON.stringify(createGame[0])} */}
      {/* {JSON.stringify(game)} */}
      {/* {JSON.stringify(createGame(game).buttons.point)} */}
      {/* {JSON.stringify(point)} */}
      {/* {JSON.stringify(total)} */}
      {/* {JSON.stringify(levels?.[game]?.squares)} */}

      <Header
        // maximumPoints={createGame(game).total}
        // maximumPoints={returnTotal()}
        // total={createGame(game).buttons[0].point}
        totalScore={totalPoint}
      />
      <BullsEye
        listOfButtons={createGame(game).buttons}
        // listOfButtons={makeNewGame()}
        // setGame={setGame}
        setButton={setButton}
        handleClick={handleClick}
      />
      <div>
        <button type="button" onClick={makeNewGame}>
          Trykk meg
        </button>
      </div>
      <Game
        games={createGame(game).total}
        handleNext={handleNext}
        handleClick={handleClick}
      />
    </>
  )
}
