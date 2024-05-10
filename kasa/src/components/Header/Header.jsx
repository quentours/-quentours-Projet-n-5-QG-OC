import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './LOGO.png'

function Header() {
  const location = useLocation()

  return (
    <header>
      <img src={Logo} alt="logo Kasa"></img>
      <nav>
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Accueil</Link>
          </li>
          <li
            className={
              location.pathname.startsWith('/pages/contact') ? 'active' : ''
            }
          >
            <Link to="/pages/contact/index.jsx">À propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
