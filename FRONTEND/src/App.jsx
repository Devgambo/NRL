import About from "./pages/About"
import Hero from "./pages/Hero"
import SubSigs from "./pages/SubSigs"

function App() {
  return (
    <>
      <div className="w-full flex flex-col scroll-smooth">
        <section>
          <div id="hero" className="w-full h-[100vh]"><Hero/></div>
          <div id="about" className="bg-black w-full"><About/></div>
          <div id="sub-sigs" className="bg-black w-full h-[100vh]"><SubSigs/></div>
          <div id="projects" className="bg-black w-full h-[100vh] flex items-center justify-center">PROJECTS</div>
          <div id="sponsers" className="bg-black w-full h-[60vh] flex items-center justify-center">SPONSERS</div>
        </section>
        <footer>
          <div id="footer" className="bg-gray-900 w-full h-[70vh] flex items-center justify-center">FOOTER</div>
        </footer>
      </div>

    </>
  )
}

export default App
