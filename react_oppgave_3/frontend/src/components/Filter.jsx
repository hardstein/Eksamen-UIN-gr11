import React from 'react'
import { categories } from '../data/data'

function Filter({ handleOptions }) {
  const generateFilterOptions = categories.map((c, i) => (
    <option key={i} value={c}>
      {c}
    </option>
  ))

  return (
    <label htmlFor="filter">
      {/* {empty ? <span>Velg kategori:</span> : null} */}
      <select
        id="filter"
        name="filter"
        data-testid="filter"
        onChange={handleOptions}
      >
        {generateFilterOptions}
        {/* {console.log(category)} */}
        {/* TODO: Legg til flere kategorier - sjekk mappen data */}
      </select>
    </label>
  )
}

export default Filter
