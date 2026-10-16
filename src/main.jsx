import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

// Restore the real path after GitHub Pages' public/404.html redirect
// (see public/404.html for why: static hosting has no history-API fallback).
const redirectPath = new URLSearchParams(window.location.search).get('route')
if (redirectPath) {
  window.history.replaceState(null, '', redirectPath)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
