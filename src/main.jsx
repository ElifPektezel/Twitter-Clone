import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './routes'
import './assets/css/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //  <React.StrictMode> yapılan her şey iki kere render oluyor (component,istekler vs)
<RouterProvider router={routes}/>
)
