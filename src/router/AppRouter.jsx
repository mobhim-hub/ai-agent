
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import Layout from '../Layout'

const AppRouter = () => {
  return (
    <BrowserRouter>
        {/* <nav style={{ marginBottom: "1rem" }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/about" style={{ marginRight: 10 }}>About</Link>
        <Link to="/contact">Contact</Link>
      </nav> */}

      <Routes>
        <Route path='/' element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h2>404: Page not found</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter