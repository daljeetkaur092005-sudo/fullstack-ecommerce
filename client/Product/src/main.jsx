import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoute from './app/AppRoute.jsx'
import { MyContextProvider } from './Features/Auth/State/useContext.jsx'

createRoot(document.getElementById('root')).render(
  <MyContextProvider><AppRoute/></MyContextProvider>

)
