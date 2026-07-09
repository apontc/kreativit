import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { WhyKreativIT } from "./components/sections/WhyKreativIT";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <WhyKreativIT />
        <section id="work">Selected Work</section>
        <section id="contact">Contact</section>
      </main>
    </>
  )
}

export default App