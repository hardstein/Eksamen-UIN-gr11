import { NavLink } from 'react-router-dom'

// NB: Lånt kode for å sette en navlink til aktiv, slik at den blir stylet med linje under ordet.
// https://www.kindacode.com/article/react-router-how-to-highlight-active-link/

function Navbar() {
  return (
    <header className='layout'>
      <nav>
        <h1>
          <NavLink to="/"
          className={({ isActive }) => (isActive ? "active-link" : "not-active-link")}
          >Mikro LMS</NavLink>
        </h1>
        <ul>
          <li>
            <NavLink to="/kurs"
            className={({ isActive }) => (isActive ? "active-link" : "not-active-link")}
            >Kurs</NavLink>
          </li>
          <li>
            <NavLink to="/ny"
            className={({ isActive }) => (isActive ? "active-link" : "not-active-link")}
            >Nytt kurs</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
