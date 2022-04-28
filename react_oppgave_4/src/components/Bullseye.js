// TODO: Nødvendig props
// TODO: Dynamisk verdi må byttes ut

import React from 'react'

export default function BullsEye({ listOfButtons, setGame, handleClick }) {
  //   const click = () => {
  //   const number =  listOfButtons.buttons[button].color
  //   console.log(number)
  // }

  // let total = 0

  // const handleClick = (event) => {
  //   const points = event.target.value
  //   total += parseInt(points)
  //   console.log(total)
  //   return total
  // }

  // grid grid-cols-4 justify-self-center place-content-center
  // flex place-content-center flex-wrap-4
  // justify-content flex-col
  // flex basis-full justify-around
  // flex flex-row justify-center flex-wrap"
  // grid grid-cols-4 justify-items-center gap-0

  return (
    <div className="grid grid-cols-4 items-center gap-0">
      {/* Link til Children.kode: https://www.amitmerchant.com/auto-assigning-unique-key-to-each-child-of-list-in-react/ */}
      {React.Children.toArray(
        listOfButtons?.map((button) => (
          <button
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
        ))
      )}
    </div>
  )
}
