import React from 'react'
import { createRoot } from 'react-dom/client'
import RouterConfig from './components/RouterConfig/RouterConfig'
import './App.scss'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterConfig />
  </React.StrictMode>,
)
