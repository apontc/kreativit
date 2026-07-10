import { useEffect, useRef, useState } from "react"
import { borders, layout, surfaces, text } from "../../styles/designTokens";


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
  const [isScrolled, setIsScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  // Close the mobile menu when clicking outside the navbar or pressing Escape.
  useEffect(() => {
    if (!isMenuOpen) return

    function handlePointerDown(event: PointerEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsMenuOpen(false)
    }

    document.addEventListener("pointerdown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isMenuOpen])

  // Lift the navbar with a subtle shadow once the page is scrolled past the top.
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 ${surfaces.band} transition-shadow ${isScrolled ? "shadow-md" : ""}`}
    >
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
            className={`inline-flex items-center justify-center rounded-md bg-white p-2 md:hidden ${borders.strong} ${text.heading} hover:bg-[#F2E7D5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A76731]`}
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

        <div
          id="mobile-menu"
          data-open={isMenuOpen}
          aria-hidden={!isMenuOpen}
          className="menu-panel absolute inset-x-0 top-full border-t border-[#D8C3A6] bg-white shadow-lg md:hidden"
        >
          <div className={`mx-auto max-w-6xl ${layout.gutter} py-4`}>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  tabIndex={isMenuOpen ? undefined : -1}
                  className={text.interactive}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}