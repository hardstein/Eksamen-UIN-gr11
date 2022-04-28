// TODO: Nødvendig props
// TODO: Dynamisk verdi må byttes ut

import React from 'react'

export default function BullsEye({ listOfButtons, setGame }) {
  //   const click = () => {
  //   const number =  listOfButtons.buttons[button].color
  //   console.log(number)
  // }

  const map = (event) => {
    const val = event.target(this).val(data - color)
    // const val2 = val.data-testid
    console.log(val) // listOfButtons.map((data) => (
    //   console.log(data)
    // ))}
  }

  // grid grid-cols-4 justify-self-center place-content-center
  // flex place-content-center flex-wrap-4
  // justify-content flex-col
  // flex basis-full justify-around
  // flex flex-row justify-center flex-wrap"

  return (
    <div>
      <ul className="grid grid-cols-4 justify-items-center gap-0 ">
        {/* Link til Children.kode: https://www.amitmerchant.com/auto-assigning-unique-key-to-each-child-of-list-in-react/ */}
        {React.Children.toArray(
          listOfButtons?.map((button) => (
            <button
              type="button"
              onClick={map}
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
    </div>
  )
}
