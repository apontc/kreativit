import { contact } from "../../data/contact";
import { accent, borders, layout, surfaces, text } from "../../styles/designTokens";

export function Contact() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `New project inquiry${name ? ` from ${name}` : ""}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className={`${surfaces.cream} ${layout.section} min-h-[calc(100vh-4rem)]`}>
      <div className={`mx-auto grid max-w-6xl gap-12 ${layout.gutter} lg:grid-cols-[0.9fr_1.1fr] lg:items-start`}>
        <div>
          <p className={text.eyebrow}>
            {contact.eyebrow}
          </p>

          <h2 className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${text.heading}`}>
            {contact.heading}
          </h2>

          <p className={`mt-5 text-lg leading-8 ${text.body}`}>
            {contact.intro}
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${contact.email}`}
              className={`block font-medium ${text.heading} ${accent.hover}`}
            >
              {contact.email}
            </a>

            <div className="flex flex-wrap gap-4">
              {contact.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`font-medium ${text.interactive}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`rounded-3xl ${surfaces.card} p-6 shadow-sm sm:p-8`}
        >
          <div className="grid gap-6">
            <div>
              <label
                htmlFor="name"
                className={`block text-sm font-medium ${text.heading}`}
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className={`mt-2 w-full rounded-xl ${borders.strong} bg-white px-4 py-3 ${text.heading} outline-none focus:border-[#A76731] focus:ring-4 ${accent.ring}`}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium ${text.heading}`}
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`mt-2 w-full rounded-xl ${borders.strong} bg-white px-4 py-3 ${text.heading} outline-none focus:border-[#A76731] focus:ring-4 ${accent.ring}`}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-medium ${text.heading}`}
              >
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className={`mt-2 w-full rounded-xl ${borders.strong} bg-white px-4 py-3 ${text.heading} outline-none focus:border-[#A76731] focus:ring-4 ${accent.ring}`}
              />
            </div>

            <button
              type="submit"
              className={`rounded-full bg-[#A76731] px-6 py-3 font-semibold text-white shadow-sm hover:bg-[#8F5629] focus:outline-none focus:ring-4 ${accent.ring}`}
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}