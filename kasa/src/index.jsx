import React from 'react'
import { createRoot } from 'react-dom'
import RouterConfig from './components/RouterConfig/RouterConfig'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterConfig />
  </React.StrictMode>,
)
