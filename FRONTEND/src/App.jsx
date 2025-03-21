import { Route, Routes } from "react-router-dom"
import HeroPage from "./pages/HeroPage"
import Gallery from "./pages/Gallery"
import Team from "./pages/Team"
import Layout from "./pages/Layout"

function App() {

  return (
    <Routes>
      <Route  element={<Layout/>}>
        <Route path="/" element={<HeroPage />} />
        <Route path="/pictures" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
      </Route>
    </Routes>
  )
}

export default App
