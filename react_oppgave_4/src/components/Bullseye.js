export default function BullsEye({
  bullsEye,
  gamePoints,
  maximumScore,
  handleClick,
}) {
  // Styling:
  // grid grid-cols-4 justify-self-center place-content-center
  // flex place-content-center flex-wrap-4
  // justify-content flex-col
  // flex basis-full justify-around
  // flex flex-row justify-center flex-wrap"
  // grid grid-cols-4 justify-items-center gap-0

  // grid grid-cols-4 gap-0 justify-items-center mx-10 px-10

  // På className, button elementet: flex items-center justify-center h-36 w-36

  return (
    <>
      {gamePoints < maximumScore ? (
        <div className="grid grid-cols-4 gap-6 p-10 m-8 ">
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
