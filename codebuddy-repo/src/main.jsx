import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Login from './pages/Login/Login.jsx'
import Register from './pages/Cadastro/Register.jsx'
import Profile from './pages/Perfil/Profile.jsx'
import Grupos from './pages/Grupo/Grupos.jsx'
import CriarGrupo from './pages/CriarGrupo/CriarGrupo.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/Register",
    element: <Register/>,
  },
  {
    path: "/Profile",
    element: <Profile/>,
  },
  {
    path: "/Grupos",
    element: <Grupos/>,
  },
  {
    path: "/CriarGrupo",
    element: <CriarGrupo/>,
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
