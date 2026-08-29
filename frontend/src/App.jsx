import { Navbar, Footer } from './sections/index'
import { Home, Menu, Locations, Us } from './pages'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/ScrollToTop'

import { Route, Routes, BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <div className="text-4xl">
      <Router>
        <ScrollToTop />

        {/* Lets keyboard users jump past the nav instead of tabbing it every page. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[1001] focus:bg-[#FFB80E] focus:px-4 focus:py-2 focus:text-base focus:text-black"
        >
          Skip to content
        </a>

        <Navbar />

        <main id="main">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Home />} path="/blazin" />
            <Route element={<Menu />} path="/menu" />
            <Route element={<Locations />} path="/locations" />
            <Route element={<Us />} path="/us" />
            {/* Anything else rendered nothing at all before. */}
            <Route element={<NotFound />} path="*" />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  )
}

export default App
