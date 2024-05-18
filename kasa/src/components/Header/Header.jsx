import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './LOGO.png'
import './styles.scss'

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
              location.pathname.startsWith('/A-propos') ? 'active' : ''
            }
          >
            <Link to="/A-propos">À propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
