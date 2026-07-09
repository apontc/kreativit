import { contact } from "../../data/contact";
import { layout, text } from "../../styles/designTokens";

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
    <section id="contact" className={`bg-white ${layout.section}`}>
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className={text.eyebrow}>
            {contact.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {contact.heading}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-700">
            {contact.intro}
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${contact.email}`}
              className="block font-medium text-slate-950 hover:text-orange-700"
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
                  className="font-medium text-slate-600 hover:text-slate-950"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8"
        >
          <div className="grid gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-950"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-950"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-950"
              >
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-orange-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-200"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}