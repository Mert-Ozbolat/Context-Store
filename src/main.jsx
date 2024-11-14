import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { ProductProvider } from './context/productContext'
import { BasketProvider } from './context/basketContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <BasketProvider>
        <App />
      </BasketProvider>
    </ProductProvider>
  </StrictMode>,
)
