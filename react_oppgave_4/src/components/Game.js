// TODO: Nødvendig props

// import React from 'react'
//  {React.Children.toArray(games?.map((game) => <li>{game.color} {squares}</li>))}

export default function Game({ games, handleNext }) {
  return (
    <div data-testid="game" className="grid grid-cols-4 gap-6">
      {`Antall poeng: ${games}`}
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
