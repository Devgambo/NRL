import Hero from "./pages/Hero"

function App() {
  return (
    <>
      <div className="w-full flex flex-col gap-[1vh]">
        <header>
          <div className="absolute top-0 w-full h-[10vh] bg-gray-300 flex items-center justify-center">NAVBAR</div>
        </header>
        <section>
          <div className="w-full h-[100vh]"><Hero/></div>
          <div className="bg-gray-500 w-full h-[100vh] flex items-center justify-center">ABOUT</div>
          <div className="bg-gray-600 w-full h-[100vh] flex items-center justify-center">SUB-SIGS</div>
          <div className="bg-gray-700 w-full h-[100vh] flex items-center justify-center">PROJECTS</div>
          <div className="bg-gray-800 w-full h-[60vh] flex items-center justify-center">SPONSERS</div>
        </section>
        <footer>
          <div className="bg-gray-900 w-full h-[70vh] flex items-center justify-center">FOOTER</div>
        </footer>
      </div>

    </>
  )
}

export default App
