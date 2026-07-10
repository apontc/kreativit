import { useState } from "react"
import { layout, surfaces, text } from "../../styles/designTokens";


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
      <nav className={`mx-auto max-w-6xl ${layout.gutter}`}>
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
            className={`inline-flex items-center justify-center rounded-md p-2 md:hidden ${text.heading} hover:bg-[#D8C3A6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A76731]`}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="5" y1="19" x2="19" y2="5" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
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