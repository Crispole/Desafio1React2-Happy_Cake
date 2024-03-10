import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./view/Home"
import Contact from "./view/Contact"
import NotFound from "./view/NotFound"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
export default App
