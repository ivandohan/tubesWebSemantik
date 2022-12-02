import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./components/NavBar"
import Banner from "./components/Banner"
import Projects from "./components/Projects"
import MentalHealth from './components/MentalHealth'
import Skills from "./components/Skills"
import Footer from "./components/Footer"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom"

const App = () => {
  const Layout = () => {
    return (
      <>
        <NavBar />
        <Outlet />
        <Footer />
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout />
      ),
      children: [
        {
          path: "/",
          element: <>
            <Banner />
            <Projects />
          </>
        },
        {
          path: "/mental-health",
          element: <>
            <MentalHealth />
          </>
        },
      ],
    }
  ])

  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
