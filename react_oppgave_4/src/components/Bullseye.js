// TODO: Nødvendig props
// TODO: Dynamisk verdi må byttes ut

export default function BullsEye( { bull }) {
  // TODO: Legge til nødvendig logikk. Hvis nødvendig.

  return (
    <ul className="flex flex-row">
      {bull?.map((bulleye) => (      
    <button key={bulleye}
      type="button"
      className={`${bulleye.color} flex h-36 w-36 items-center justify-center p-8 shadow shadow-slate-200`}
      data-color={bulleye.color}
      data-point={bulleye.point}
      data-testid="button"
    >
      <span className="pointer-events-none block h-12 w-12 rounded-full" />
    </button>
    ))}
    </ul>
  )
}
