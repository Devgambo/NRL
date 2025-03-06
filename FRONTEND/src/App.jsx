import About from "./pages/About"
import Footer from "./pages/Footer"
import Hero from "./pages/Hero"
import Projects from "./pages/Projects"
import Sponsers from "./pages/Sponsers"
import SubSigs from "./pages/SubSigs"
``
function App() {
  return (
    <>
      <div className="w-full flex flex-col scroll-smooth bg-black overflow-auto scrollbar-none">
        <section>
          <div id="hero" className="w-full h-[100vh]"><Hero/></div>
          <div id="about" className="mb-30"><About/></div>
          <div id="sub-sigs" className="mb-30"><SubSigs/></div>
          <div id="projects" className="mb-30"><Projects/></div>
          <div id="sponsers" className="w-full h-[60vh]"><Sponsers/></div>
        </section>
        <footer>
          <div className="w-full h-0.5 bg-white"></div>
          <div id="footer" className="w-full"><Footer/></div>
        </footer>
      </div>
    </>
  )
}

export default App
