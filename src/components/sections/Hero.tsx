export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-orange-50 px-6 py-20 text-slate-950"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-700">
          KreativIT
        </p>

        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Turning ideas into reliable web applications.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            I build modern websites and custom web applications for small
            businesses, artists, and creative professionals.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-slate-950 px-6 py-3 text-center font-medium text-white"
          >
            Start a project
          </a>

          <a
            href="#work"
            className="rounded-full border border-slate-300 px-6 py-3 text-center font-medium text-slate-900"
          >
            View selected work
          </a>
        </div>
      </div>
    </section>
  )
}