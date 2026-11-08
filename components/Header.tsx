"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-sm">
      <a
        href="/#accueil"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-sm focus:bg-white focus:px-3 focus:py-2"
      >
        Aller au contenu
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <a href="/#accueil" className="shrink-0" aria-label={site.legalName}>
          <Image
            src="/brand/logo.png"
            alt={site.legalName}
            width={410}
            height={410}
            priority
            className="h-16 w-16 sm:h-20 sm:w-20"
          />
        </a>

        <nav className="hidden items-center gap-4 text-[0.88rem] text-muted xl:flex xl:gap-6" aria-label="Navigation principale">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="/#contact" className="btn btn-coral hidden xl:inline-flex">
            Être recontacté
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[0.4rem] border border-black/10 xl:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">
              {open ? "Fermer le menu" : "Ouvrir le menu"}
            </span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span
                className={`block h-px bg-foreground transition ${open ? "translate-y-[4px] rotate-45" : ""}`}
              />
              <span className={`block h-px bg-foreground ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-px bg-foreground transition ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="menu-mobile"
          className="border-t border-black/5 bg-white px-5 py-6 xl:hidden"
        >
          <nav className="flex flex-col gap-4 text-base" aria-label="Navigation mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-1 text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#contact"
              className="btn btn-coral mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Être recontacté
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
