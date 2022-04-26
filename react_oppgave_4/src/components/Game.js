// TODO: Nødvendig props

import React from 'react'

export default function Game({ games, handleNext, squares, levels }) {
  return (
    <div data-testid="game" className="grid grid-cols-4 gap-6">
      <ul>
        {/* Listen kan fjernes */}
        {/* {React.Children.toArray(games?.map((game) => <li>{game.color} {squares}</li>))} */}
      </ul>

      {/* TODO: Må skrive ut antall knapper et spill skal vise */}
      {/* TODO: Må bruke riktig komponent og sende data som props */}
      {/* TODO: Kun vise denne knappen når en runde er ferdig */}
      <button
        className="col-span-4 w-full rounded-xl border-2 border-emerald-100 p-8 text-lg font-bold text-emerald-500 shadow-lg shadow-emerald-100"
        type="button"
        data-testid="next"
        onClick={handleNext}
      >
        Neste runde
      </button>
    </div>
  )
}
