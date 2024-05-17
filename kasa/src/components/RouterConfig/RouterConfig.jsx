import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Index from '../../pages/Home/index.jsx'
import Logement from '../../pages/Logement/index.jsx'
import Error from '../../pages/Erreur/index.jsx'
import APropos from '../../pages/A-propos/index.jsx'

function RouterConfig() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Logement/:id" element={<Logement />} />
        <Route path="/A-propos" element={<APropos />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default RouterConfig
