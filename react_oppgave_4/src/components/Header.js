export default function Header({ maximumScore, gamePoints }) {
  return (
    <header className="mt-6 p-4">
      <h1 data-testid="title" className="font-base text-lg">
        <span
          data-testid="points"
          className="border border-slate-200 px-4 py-2 font-bold"
        >
          {gamePoints}
        </span>
        poeng (<span data-testid="total">{maximumScore}</span>)
      </h1>
    </header>
  )
}
