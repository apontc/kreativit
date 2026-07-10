import { whyKreativIT } from "../../data/whyKreativIT";
import { layout, surfaces, text } from "../../styles/designTokens";

export function WhyKreativIT() {
  return (
    <section id="why" className={`${surfaces.cream} ${layout.section}`}>
      <div className={layout.container}>
        <div className="max-w-2xl">
          <p className={text.eyebrow}>
            {whyKreativIT.eyebrow}
          </p>

          <h2 className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${text.heading}`}>
            {whyKreativIT.heading}
          </h2>

          <p className={`mt-5 text-lg leading-8 ${text.body}`}>
            {whyKreativIT.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {whyKreativIT.reasons.map((reason) => (
            <article
              key={reason.title}
              className={`rounded-3xl ${surfaces.card} p-6 shadow-sm`}
            >
              <h3 className={`text-lg font-semibold ${text.heading}`}>
                {reason.title}
              </h3>

              <p className={`mt-3 leading-7 ${text.body}`}>
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}