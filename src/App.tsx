import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <section id="why">Why KreativIT</section>
        <section id="work">Selected Work</section>
        <section id="contact">Contact</section>
      </main>
    </>
  )
}

export default App