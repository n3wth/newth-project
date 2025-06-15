import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

const rootElement = document.getElementById('root')
if (rootElement) {
  rootElement.classList.add('w-full')
}
// Add dark mode class to <html> for shadcn/ui theme support
document.documentElement.classList.add('dark');

ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
