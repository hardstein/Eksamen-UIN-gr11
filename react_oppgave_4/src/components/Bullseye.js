// TODO: Nødvendig props
// TODO: Dynamisk verdi må byttes ut

// import React from 'react'

export default function BullsEye({
  listOfButtons,
  setTotalPoint,
  totalPoint,
  list,
  game,
  setGame,
}) {
  // let total = 0

  // const handleClick = (event) => {
  //   const points = event.target.value
  //   total += parseInt(points)
  //   console.log(total)
  //   return total
  // }

  let sum = 0
  const handleClick = async (event) => {
    const points = await event.target.value
    // event.preventDefault()
    sum = parseInt(points)

    // setTotalPoint((prev) => prev + sum)
    setTotalPoint((prev) => prev + sum)
    // console.log('Total: ' + totalPoint)

    if (totalPoint >= list.total) {
    }

    if (game >= 2) {
      if (sum === -1) {
        setGame(0)
        setTotalPoint(0)
      }
    }
  }

  // grid grid-cols-4 justify-self-center place-content-center
  // flex place-content-center flex-wrap-4
  // justify-content flex-col
  // flex basis-full justify-around
  // flex flex-row justify-center flex-wrap"
  // grid grid-cols-4 justify-items-center gap-0

  // {React.Children.toArray(listOfButtons?.map((button) => (

  return (
    <ul className="grid grid-cols-4 items-center gap-0">
      {/* Link til Children.kode: https://www.amitmerchant.com/auto-assigning-unique-key-to-each-child-of-list-in-react/ */}
      {listOfButtons?.map((button, index) => (
        <button
          key={index}
          type="button"
          value={button.point}
          onClick={handleClick}
          className={`${button.color} flex h-36 w-36 items-center justify-center p-8 shadow shadow-slate-200`}
          data-color={button.color}
          data-point={button.point}
          data-testid="button"
        >
          <span className="pointer-events-none block h-12 w-12 rounded-full" />
        </button>
      ))}
    </ul>
  )
}
