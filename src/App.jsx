import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './components/AppLayout/AppLayout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Country from './pages/Country/Country'
import Contact from './pages/Contact/Contact'
import ErrorPage from './components/UI/ErrorPage/ErrorPage'
import CountryDetails from './components/UI/CountryDetails/CountryDetails'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/country",
          element: <Country />
        },
        {
          path: "/country/:id",
          element: <CountryDetails />
        },
        {
          path: "/contact",
          element: <Contact />
        },
      ]
    }
  ])


  return <RouterProvider router={router} />
}

export default App
