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
      <select
        id="filter"
        name="filter"
        data-testid="filter"
        onChange={handleOptions}
      >
        <option value="">Alle</option>
        {generateFilterOptions}
      </select>
    </label>
  )
}

export default Filter
