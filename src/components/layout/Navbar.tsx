import { useState } from "react"
import { surfaces, text } from "../../styles/designTokens";


const navLinks = [
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Why KreativIT",
    href: "#why",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Contact",
    href: "#contact",
  },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className={`sticky top-0 z-50 ${surfaces.band}`}>
      <nav className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#hero"
            onClick={closeMenu}
            className={`text-lg font-bold tracking-tight ${text.heading}`}
          >
            KreativIT
          </a>

          <div className="hidden gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={text.interactive}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className={`inline-flex items-center rounded-full border border-[#D8C3A6] px-4 py-2 text-sm font-medium md:hidden ${text.interactive}`}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {isMenuOpen && (
          <div id="mobile-menu" className="border-t border-[#D8C3A6] py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={text.interactive}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}