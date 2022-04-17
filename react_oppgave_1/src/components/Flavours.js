export default function Flavours({ }) {

  const flavourList = [
  {value: "strawberry", name: "Jordbær"},
  {value: "banana", name: "Banan"}, 
  {value: "lime", name: "Lime" },
  {value: "blueberry", name: "Blåbær" },
  {value: "chocolate", name: "Sjokolade"}]


  return (
    // Usikker på om section med id-options skal ligge her, lå oppr. i App MELLOM Layout og Flavours
    <section id="options" data-testid="options">
      <div className="option" data-testid="flavours" id="flavours">
        <label htmlFor="flavour">
          <select defaultValue="chocolate" id="flavour" data-testid="flavour">
            {flavourList?.map((flavour) => (
            <option data-testid="option" key={flavour.value}>{flavour.name}</option>
            ))}
          </select>
        </label>
      </div>
    </section>
  )
}

//  Lage en statisk liste med `option` verdiene
//  `value` skal ha samme verdi som før
//  `data-testid` skal ha samme verdi som før
//  `Teksten` i option skal ha samme verdi som før
//   Bruke `.map` til å skrive ut listen med options
//   Bruke `key` ved bruk av map
