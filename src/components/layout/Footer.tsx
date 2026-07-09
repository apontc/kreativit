import { footer } from "../../data/footer";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-slate-950">{footer.businessName}</p>
          <p className="mt-1">{footer.tagline}</p>
        </div>

        <p>© {year} {footer.businessName}. All rights reserved.</p>
      </div>
    </footer>
  );
}