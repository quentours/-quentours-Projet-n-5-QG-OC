import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './LOGO.png'

function Header() {
  return (
    <header>
      <img src={Logo} alt="logo Kasa"></img>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
