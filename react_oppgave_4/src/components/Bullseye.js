// TODO: Nødvendig props
// TODO: Dynamisk verdi må byttes ut

import React from 'react'

export default function BullsEye({ listOfButtons, setGame }) {
  //   const click = () => {
  //   const number =  listOfButtons.buttons[button].color
  //   console.log(number)
  // }

  return (
    <ul className="flex flex-row">
      {/* Link til Children.kode: https://www.amitmerchant.com/auto-assigning-unique-key-to-each-child-of-list-in-react/ */}
      {React.Children.toArray(
        listOfButtons?.map((button) => (
          <button
            value={button}
            type="button"
            onClick={console.log(button.color)}
            className={`${button.color} flex h-36 w-36 items-center justify-center p-8 shadow shadow-slate-200`}
            data-color={button.color}
            data-point={button.point}
            data-testid="button"
          >
            <span className="pointer-events-none block h-12 w-12 rounded-full" />
          </button>
        ))
      )}
    </ul>
  )
}
