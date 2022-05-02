// TODO: Nødvendig props
// TODO: Dynamisk verdi må byttes ut

export default function Header({ maximumScore, gamePoints }) {
  // const funcMax = () => {
  //   if (gamePoints <= maximumScore) {
  //     setGamePoints(gamePoints)
  //   } else {
  //     setGamePoints(maximumScore)
  //   }
  //   return gamePoints
  // }

  //  Skrive om ternary operators? Hvis gamePoints blir oppdatert til rett verdi umiddelbart i handleNext i App,
  //  så vil denne kanskje bli unødvendig

  return (
    <header className="mt-6 p-4">
      {/* {gamePoints <= maximumScore ? ( */}
      <h1 data-testid="title" className="font-base text-lg">
        <span
          data-testid="points"
          className="border border-slate-200 px-4 py-2 font-bold"
        >
          {gamePoints}
        </span>
        poeng (<span data-testid="total">{maximumScore}</span>)
      </h1>
      {/* ) : (
        <h1 data-testid="title" className="font-base text-lg">
          <span
            data-testid="points"
            className="border border-slate-200 px-4 py-2 font-bold"
          >
            {maximumScore}
          </span>
          poeng (<span data-testid="total">{maximumScore}</span>)
        </h1>
      )} */}
    </header>
  )
}
