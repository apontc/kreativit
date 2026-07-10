import { selectedWork } from "../../data/selectedWork";
import { accent, borders, layout, surfaces, text } from "../../styles/designTokens";

export function SelectedWork() {
  return (
    <section id="work" className={`${surfaces.plain} ${layout.section}`}>
      <div className={layout.container}>
        <div className="max-w-2xl">
          <p className={text.eyebrow}>
            {selectedWork.eyebrow}
          </p>

          <h2 className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${text.heading}`}>
            {selectedWork.heading}
          </h2>

          <p className={`mt-5 text-lg leading-8 ${text.body}`}>
            {selectedWork.intro}
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {selectedWork.projects.map((project) => (
            <article
              key={project.title}
              className={`rounded-3xl ${surfaces.card} p-6 shadow-sm sm:p-8`}
            >
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <div>
                  <h3 className={`text-2xl font-bold tracking-tight ${text.heading}`}>
                    {project.title}
                  </h3>

                  <p className={`mt-4 text-lg leading-8 ${text.body}`}>
                    {project.summary}
                  </p>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className={`font-semibold ${text.heading}`}>Problem</h4>
                      <p className={`mt-2 leading-7 ${text.body}`}>
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className={`font-semibold ${text.heading}`}>My role</h4>
                      <p className={`mt-2 leading-7 ${text.body}`}>
                        {project.role}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className={`font-semibold ${text.heading}`}>
                      Technologies used
                    </h4>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className={`rounded-full px-3 py-1 text-sm font-medium ${accent.chip}`}
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`rounded-2xl ${surfaces.cardMuted} p-5`}>
                  <h4 className={`font-semibold ${text.heading}`}>
                    Challenges solved
                  </h4>

                  <ul className="mt-4 space-y-3">
                    {project.challenges.map((challenge) => (
                      <li
                        key={challenge}
                        className={`flex gap-3 leading-7 ${text.body}`}
                      >
                        <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${accent.dot}`} />
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
                      className={`rounded-2xl ${borders.hair} shadow-sm`}
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