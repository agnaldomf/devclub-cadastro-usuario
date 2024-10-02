import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/GlobalStyles.js'
import Home from './pages/Home'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Home />
  </StrictMode>,
)



/*
quando exportar com default nâo prescisa colocar chaves
Quando Exportar sem defaul prescisa colocar as chaves
*/