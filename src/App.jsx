import React from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { MenuPage } from './pages/MenuPage'
import { ContactPage } from './pages/ContactPage'
import { AboutPage } from './pages/AboutPage'
import { Footer } from './components/footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <nav className='navbar'>
          <h1>Pinki's Resturant</h1>
          <div className='links'>
            <Link to='/' className='pages'>Home</Link>
            <Link to='/menu' className='pages'>Menu</Link>
            <Link to='/about' className='pages'>About</Link>
            <Link to='/contact' className='pages'>Contact</Link>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/menu' element={<MenuPage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
        </Routes>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  )
}

export default App
