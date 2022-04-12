export default function Flavours() {
const flavourList = [Jordbær, Banan, Lime, Blåbær, Sjokolade]

    return(
        <div
        className="option"
        data-testid="flavours"
        id="flavours"
      >
        <label htmlFor="flavour">
          <select defaultValue="chocolate" id="flavour" data-testid="flavour" 
          
           {flavourList?.map((flavour) => (
            <option key={flavour.name}></option>
            
            data-testid="option" value="strawberry">
              Jordbær
            </option>
            <option data-testid="option" value="banana">
              Banan
            </option>
            <option data-testid="option" value="lime">
              Lime
            </option>
            <option data-testid="option" value="blueberry">
              Blåbær
            </option>
            <option data-testid="option" value="chocolate">
              Sjokolade
            </option>
          </select>
        </label>
      </div>
    )
}
       



//  Lage en statisk liste med `option` verdiene
//  `value` skal ha samme verdi som før
//  `data-testid` skal ha samme verdi som før
//  `Teksten` i option skal ha samme verdi som før
//   Bruke `.map` til å skrive ut listen med options
//   Bruke `key` ved bruk av map

    )


}