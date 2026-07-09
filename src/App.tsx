import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { WhyKreativIT } from "./components/sections/WhyKreativIT";
import { SelectedWork } from "./components/sections/SelectedWork";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <WhyKreativIT />
        <SelectedWork/>
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App