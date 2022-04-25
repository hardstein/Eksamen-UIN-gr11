export default function Flavours({ flavourList, handleFlavourChange }) {
  return (
    <section id="options" data-testid="options">
      <div className="option" data-testid="flavours" id="flavours">
        <label htmlFor="flavour">
          <select
            defaultValue="chocolate"
            id="flavour"
            data-testid="flavour"
            onChange={handleFlavourChange}
          >
            {flavourList?.map((flavour) => (
              <option
                data-testid="option"
                key={flavour.value}
                value={flavour.value}
              >
                {flavour.name}
              </option>
            ))}
          </select>
        </label>
      </div>
    </section>
  )
}

//   Lage en statisk liste med `option` verdiene - OK
//  `value` skal ha samme verdi som før - OK
//  `data-testid` skal ha samme verdi som før - OK, men må denne i hovedlisten?
//  `Teksten` i option skal ha samme verdi som før - OK
//   Bruke `.map` til å skrive ut listen med options - OK
//   Bruke `key` ved bruk av map - OK
