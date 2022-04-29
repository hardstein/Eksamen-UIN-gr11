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
  const [game, setGame] = useState(0) // Opprinnelig sto det null her

  // const newGame = () => {
  //   const list = createGame(game)
  //   console.log(list)
  // }

  const [list, setList] = useState([])

  // const list = createGame(game)
  // console.log(list)

  // TODO: 0 må byttes ut med noe dynamisk
  useEffect(() => {
    setList?.(createGame(game))
    // setGame((createGame(game))
    // createGame(game)
  }, [game])

  // console.log(data)
  // const square = levels?.[game].squares

  // Henter ut total-poeng for en runde, men samsvarer ikke med faktiske buttons
  // const makeNewGame = () => {
  //   const data = createGame(game)
  //   console.log('Totalt antall poeng mulig: ' + data.total)
  //   //  console.log(`Antall squares: ${data.buttons.length}`)
  //   return data.total
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

  const [totalPoint, setTotalPoint] = useState(0)

  const handleClick = (event) => {
    const points = event.target.value
    console.log(points)
    const element = event.target
    let sum = 0
    sum = parseInt(points)
    setTotalPoint((prev) => prev + parseInt(event.target.value))
    console.log('Total: ' + totalPoint)

    // Må endres
    // if (totalPoint >= list.total) {
    //   element.disabled = true
    // }

    if (game >= 2) {
      if (sum === -1) {
        setGame(0)
        setTotalPoint(0)
      }
    }
  }

  // const buttonList = () => {
  //   const list = createGame(game)
  //   // const button = createGame(game).buttons
  //   console.log(list)
  //   console.log(list.total)
  //   console.log(list.buttons)
  //   // list.forEach(element => console.log("Buttonlist: " + element))
  // }

  // Sendes til Games.js Kan evn istedet sende inn setGame og lage handleNext i Game
  // const handleNext = () => {
  //   setGame((prev) => prev + 1)
  //   setTotalPoint(0)
  // }

  return (
    <>
      {JSON.stringify(`RUNDE ${game}`)}
      <p />
      {/* {JSON.stringify(`Antall ruter: ${list.buttons.length}`)} */}
      <p />
      {/* {JSON.stringify(`Mulige totale poeng ${list.total}`)} */}
      <p />
      {JSON.stringify(list.buttons)}
      {JSON.stringify(totalPoint)}

      {/* {JSON.stringify(levels[game]?.squares)} */}

      <Header maximumPoints={list.total} totalScore={totalPoint} />

      {totalPoint <= 1 ? (
        <BullsEye
          list={list}
          bullsEyeList={list.buttons}
          totalPoint={totalPoint}
          setTotalPoint={setTotalPoint}
          game={game}
          setGame={setGame}
          handleClick={handleClick}
        />
      ) : null}

      {/* <div>
        <button type="button" onClick={makeNewGame}>
          Trykk meg
        </button>
      </div> */}

      <Game
        pointsPossible={list.total}
        setGame={setGame}
        setTotalPoint={setTotalPoint}
        totalPoint={totalPoint}
        // handleNext={handleNext}
      />
    </>
  )
}
