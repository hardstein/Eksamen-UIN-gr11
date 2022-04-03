import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header>
      <nav>
        <h1>
          <NavLink to="/">Mikro LMS</NavLink>
        </h1>
        <ul>
          <li></li>
          <li>
            <NavLink to="/kurs">Kurs</NavLink>
          </li>
          <li>
            <NavLink to="/ny">Nytt kurs</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
