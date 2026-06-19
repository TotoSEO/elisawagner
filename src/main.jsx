import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/global.css'
import './styles/animations.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* HashRouter : routage fiable sur GitHub Pages (pas de 404 au refresh) */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
