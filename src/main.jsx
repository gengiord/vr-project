import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

console.log('App version: 0.0.0 - build', new Date().toISOString())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/vr-project">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
