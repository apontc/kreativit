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

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {whyKreativIT.heading}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-700">
            {whyKreativIT.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {whyKreativIT.reasons.map((reason) => (
            <article
              key={reason.title}
              className={`rounded-3xl border border-slate-200 ${surfaces.card} p-6 shadow-sm`}
            >
              <h3 className="text-lg font-semibold text-slate-950">
                {reason.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}