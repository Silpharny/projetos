import AboutUs from "./components/AboutUs"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Menu from "./components/Menu"

function App() {

  return (
    <main className="w-full h-screen flex flex-col items-center justify-evenly">
      <Hero />
      <Menu />
      <AboutUs/>
      <Contact />
    </main>
  )
}

export default App
