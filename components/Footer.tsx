import Link from "next/link";
import { nav, site } from "@/lib/site";
import { TransportLines } from "@/components/TransportLines";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <a
            href="/#accueil"
            className="inline-block text-xl font-semibold tracking-tight text-foreground"
            aria-label={site.name}
          >
            {site.brand}
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Préparation et passage du TOEIC dans notre centre d’examen.
            Cours d’anglais et suivi de vos projets d’études et
            professionnels.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium">Navigation</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium">Coordonnées</p>
          <address className="mt-4 not-italic text-sm leading-relaxed text-muted">
            {site.address.line1}
            <br />
            {site.address.postalCode} {site.address.city}
            <br />
            <a href={site.phoneHref} className="mt-3 block hover:text-foreground">
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 block hover:text-foreground"
            >
              {site.email}
            </a>
            <p className="mt-3">{site.hours}</p>
          </address>
        </div>

        <div>
          <p className="text-sm font-medium">Venir au centre</p>
          <TransportLines />
          <a
            href={site.mapsUrl}
            className="btn btn-coral mt-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Calculer mon itinéraire
          </a>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/mentions-legales" className="hover:text-foreground">
              Mentions légales
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="hover:text-foreground"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
