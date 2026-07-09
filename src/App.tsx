import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <section id="services">Services</section>
        <section id="why">Why KreativIT</section>
        <section id="work">Selected Work</section>
        <section id="contact">Contact</section>
      </main>
    </>
  )
}

export default App