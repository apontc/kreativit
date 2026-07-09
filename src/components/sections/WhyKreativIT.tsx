import { whyKreativIT } from "../../data/whyKreativIT";

export function WhyKreativIT() {
  return (
    <section id="why" className="scroll-mt-20 bg-white px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
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
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
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