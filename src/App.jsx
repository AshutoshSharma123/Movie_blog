import Moviecard from "./components/Moviecard"
import Favourites from "./pages/Favourites"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import { MovieProvider } from "./context/MovieContext"

const App = () => {

  return (
    <MovieProvider className="p-1">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App