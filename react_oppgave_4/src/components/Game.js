export default function Game({
  maximumScore,
  gamePoints,
  setGamePoints,
  setGame,
}) {
  const handleNext = () => {
    setGamePoints(0)
    setGame((prev) => prev + 1)
  }

  return (
    <div data-testid="game" className="grid grid-cols-4 gap-6">
      {gamePoints >= maximumScore ? (
        <button
          className="col-span-4 w-full rounded-xl border-2 border-emerald-100 p-8 text-lg font-bold text-emerald-500 shadow-lg shadow-emerald-100"
          type="button"
          data-testid="next"
          onClick={handleNext}
        >
          Neste runde
        </button>
      ) : null}
    </div>
  )
}
