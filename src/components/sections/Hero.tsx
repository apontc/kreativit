import { buttons, layout, siteConfig } from '../../styles/designTokens'

export function Hero() {
  return (
    <section
      id="hero"
      className={`${layout.section} min-h-screen bg-orange-50 text-slate-950`}
    >
      <div className={`${layout.container} flex flex-col gap-8`}>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-700">
          {siteConfig.name}
        </p>

        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            {siteConfig.tagline}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            I build modern websites and custom web applications for small
            businesses, artists, and creative professionals.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#contact" className={buttons.primary}>
            Start a project
          </a>

          <a href="#work" className={buttons.secondary}>
            View selected work
          </a>
        </div>
      </div>
    </section>
  )
}