import { site } from '../../config/site'
import { buttons, layout, surfaces, text } from '../../styles/designTokens'
export function Hero() {
  return (
    <section
      id="hero"
      className={`${layout.section} ${surfaces.cream} flex min-h-[calc(100vh-4rem)] items-center ${text.heading}`}
    >
      <div className={`${layout.container} flex flex-col gap-8`}>
        <p className={text.eyebrow}>
          {site.businessName}
        </p>

        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            {site.tagline}
          </h1>

          <p className={`mt-6 text-lg leading-8 ${text.body}`}>
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