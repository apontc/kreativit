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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-[#A76731] focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content">
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