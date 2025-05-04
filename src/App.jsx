import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layout/app-layout'
import './App.css'
import LandingPage from './pages/landing-page'
import Dashboard from './pages/dashboard'
import Auth from './pages/auth'
import Link from './pages/link'
import RedirectLink from './pages/redirect-link'

function App() {
  const router = createBrowserRouter([{
    element:<AppLayout />,
    children:[
      {
      path:'/',
      element:<LandingPage />
      },
      {
        path:'/dashboard',
        element:<Dashboard />
      },
      {
        path:'/auth',
        element:<Auth />
      },
      {
        path:'/link',
        element:<Link />
      },
      {
        path:'/link/:id',
        element:<RedirectLink />
      },
      {
        path:'/:id',
        element:<LandingPage />
      },

  ]
  }])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
