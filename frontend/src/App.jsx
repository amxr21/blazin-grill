import { useState } from 'react'
import { Navbar, Footer } from './sections/index'

import { Home, Menu, Locations, Us } from './pages'

import { Route, Routes, BrowserRouter as Router } from "react-router-dom"

const colors = {
    lightBeige: '#FBF7EE', 
    darkRed: '#B20E05', 
    lightRed: '#760801',
    green: '#1B623A',
    yellow: '#FFB80E',
    black: '#0D0606',
}



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-4xl'>

      <Router>
        <Navbar />
        <Routes> 
          <Route element={<Home />} path={'/'} />
          <Route element={<Home />} path={'/blazin'} />
          <Route element={<Menu />} path={'/menu' } />
          <Route element={<Locations />} path={'/locations' } />
          <Route element={<Us />} path={'/us' } />
        </Routes>
        <Footer />

      </Router>


      
    </div>
  )
}

export default App
