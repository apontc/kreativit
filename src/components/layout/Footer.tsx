import { site } from "../../config/site";
import { text } from "../../styles/designTokens";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E7DAC6] bg-white px-6 py-8">
      <div className={`mx-auto flex max-w-6xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between ${text.body}`}>
        <div>
          <p className={`font-semibold ${text.heading}`}>{site.businessName}</p>
          <p className="mt-1">{site.tagline}</p>
        </div>

        <p>
          © {year} {site.businessName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}