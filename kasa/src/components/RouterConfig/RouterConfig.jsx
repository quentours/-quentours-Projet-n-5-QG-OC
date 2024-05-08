import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Index from '../../pages/Home/index.jsx'
import FicheLogement from '../../pages/Fiche_logement/index.jsx'
import Error from '../../pages/Erreur/index.jsx'
import Contact from '../../pages/Contact/index.jsx'

function RouterConfig() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Fiche_logement/:id" element={<FicheLogement />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default RouterConfig
