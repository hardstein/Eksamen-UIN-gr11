// TODO: Nødvendig props

export default function Game({
  pointsPossible,
  totalPoint,
  setTotalPoint,
  setGame,
}) {
  // const [show, setShow] = useState(false)

  const handleNext = () => {
    setTotalPoint(0)
    setGame((prev) => prev + 1)
  }

  return (
    <div data-testid="game" className="grid grid-cols-4 gap-6">
      {`Antall mulige poeng: ${pointsPossible}`}
      {/* TODO: Må skrive ut antall knapper et spill skal vise */}
      {/* TODO: Må bruke riktig komponent og sende data som props */}
      {/*  TODO: Kun vise denne knappen når en runde er ferdig  */}
      {totalPoint >= pointsPossible ? (
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
