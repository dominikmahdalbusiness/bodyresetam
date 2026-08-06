"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/o-mne", label: "O mně" },
  { href: "/sluzby", label: "Služby" },
  { href: "/cenik", label: "Ceník" },
  { href: "/recenze", label: "Recenze" },
  { href: "/eventy", label: "Eventy" },
  { href: "/prostory", label: "Prostory" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-bark/10 bg-sand/85 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="group leading-none" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl font-medium tracking-[0.12em] text-bark">
            Bodyreset<span className="text-sage">.am</span>
          </span>
          <span className="block text-[0.6rem] uppercase tracking-[0.32em] text-ink/60 mt-1">
            masáže &amp; maderoterapie &amp; pilates
          </span>
        </Link>

        <nav className="hidden md:flex gap-7 text-sm uppercase tracking-widest">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative transition-colors hover:text-sagedark after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-sagedark after:transition-all after:duration-300 hover:after:w-full ${
                pathname === l.href ? "text-sagedark after:w-full" : "after:w-0"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/kontakt"
            className="btn-primary hidden sm:inline-flex !px-5 !py-2.5"
          >
            Rezervovat
          </Link>
          <button
            type="button"
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-bark/20"
          >
            <span
              className={`block h-px w-5 bg-bark transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-bark transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-bark/10 bg-sand px-4 pb-6 pt-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm uppercase tracking-widest border-b border-bark/5 hover:text-sagedark"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 w-full"
          >
            Rezervovat termín
          </Link>
        </nav>
      )}
    </header>
  );
}
