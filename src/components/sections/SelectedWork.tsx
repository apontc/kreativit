import { selectedWork } from "../../data/selectedWork";
import { layout, surfaces, text } from "../../styles/designTokens";

export function SelectedWork() {
  return (
    <section id="work" className={`${surfaces.plain} ${layout.section}`}>
      <div className={layout.container}>
        <div className="max-w-2xl">
          <p className={text.eyebrow}>
            {selectedWork.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {selectedWork.heading}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-700">
            {selectedWork.intro}
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {selectedWork.projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-lg leading-8 text-slate-700">
                    {project.summary}
                  </p>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="font-semibold text-slate-950">Problem</h4>
                      <p className="mt-2 leading-7 text-slate-700">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-950">My role</h4>
                      <p className="mt-2 leading-7 text-slate-700">
                        {project.role}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-semibold text-slate-950">
                      Technologies used
                    </h4>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-100 p-5">
                  <h4 className="font-semibold text-slate-950">
                    Challenges solved
                  </h4>

                  <ul className="mt-4 space-y-3">
                    {project.challenges.map((challenge) => (
                      <li
                        key={challenge}
                        className="flex gap-3 leading-7 text-slate-700"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {project.screenshots.length > 0 && (
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {project.screenshots.map((screenshot) => (
                    <img
                      key={screenshot.src}
                      src={screenshot.src}
                      alt={screenshot.alt}
                      loading="lazy"
                      className="rounded-2xl border border-slate-200 shadow-sm"
                    />
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}