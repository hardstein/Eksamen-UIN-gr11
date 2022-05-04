export default function BullsEye({
  bullsEye,
  gamePoints,
  maximumScore,
  handleClick,
}) {
  return (
    <>
      {gamePoints < maximumScore ? (
        <div className="m-8 grid grid-cols-4 gap-6 p-10 ">
          {bullsEye?.map((element, index) => (
            <button
              key={index}
              type="button"
              value={element.point}
              onClick={handleClick}
              className={`${element.color} flex h-36 w-36 items-center justify-center self-center p-8 shadow shadow-slate-200`}
              data-color={element.color}
              data-point={element.point}
              data-testid="button"
            >
              <span className="pointer-events-none block h-12 w-12 rounded-full" />
            </button>
          ))}
        </div>
      ) : null}
    </>
  )
}
