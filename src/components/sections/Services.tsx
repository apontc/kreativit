import { services } from '../../data/services'
import { borders, layout, surfaces, text } from '../../styles/designTokens'

export function Services() {
  return (
    <section id="services" className={`${surfaces.plain} ${layout.section}`}>
      <div className={layout.container}>
        <div className="max-w-2xl">
          <p className={text.eyebrow}>
            Services
          </p>

          <h2 className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${text.heading}`}>
            What I can help you build
          </h2>

          <p className={`mt-4 text-lg ${text.body}`}>
            Whether you're starting from scratch or improving an existing
            website, I build reliable solutions that are easy to use and easy to
            maintain.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className={`rounded-2xl ${borders.hair} bg-white p-6`}
            >
              <h3 className={`text-xl font-semibold ${text.heading}`}>
                {service.title}
              </h3>

              <p className={`mt-3 leading-7 ${text.body}`}>
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}