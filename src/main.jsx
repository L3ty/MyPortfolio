import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainBody from './Contents/Body'
import GlobalStyles from './styles/globalsStyles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>
    <MainBody/>
  </StrictMode>,
)
