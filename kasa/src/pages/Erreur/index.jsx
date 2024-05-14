import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer'
import './styles.scss'

function Error() {
  return (
    <div>
      <div id="main-wrapper">
        <Header />
        <main>
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <Link to="/">Retourner sur la page d'accueil</Link>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Error
