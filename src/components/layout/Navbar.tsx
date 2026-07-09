export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#hero"
          className="text-lg font-bold tracking-tight text-slate-950"
        >
          KreativIT
        </a>

        <div className="hidden gap-8 md:flex">
          <a href="#services" className="text-slate-600 hover:text-slate-950">
            Services
          </a>
          <a href="#why" className="text-slate-600 hover:text-slate-950">
            Why Me
          </a>
          <a href="#work" className="text-slate-600 hover:text-slate-950">
            Work
          </a>
          <a href="#contact" className="text-slate-600 hover:text-slate-950">
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}