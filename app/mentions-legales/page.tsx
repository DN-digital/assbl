import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Informations légales de ${site.legalName}, centre de formation et d’examen à Bagneux.`,
  alternates: { canonical: "/mentions-legales" },
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-medium tracking-wide text-coral">
          Informations légales
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Mentions légales
        </h1>
        <div className="mt-10 space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground">Éditeur</h2>
            <p className="mt-3">
              Le site {site.name} est édité par :
            </p>
            <p className="mt-3">
              Raison sociale : à compléter
              <br />
              Forme juridique : à compléter
              <br />
              Siège social : {site.address.line1}, {site.address.postalCode}{" "}
              {site.address.city}
              <br />
              SIRET : à compléter
              <br />
              Directeur de la publication : à compléter
              <br />
              E-mail : {site.email}
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">Hébergement</h2>
            <p className="mt-3">
              Hébergeur : à compléter
              <br />
              Adresse : à compléter
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Propriété intellectuelle
            </h2>
            <p className="mt-3">
              L’ensemble des contenus de ce site (textes, structure, éléments
              graphiques) est protégé. Toute reproduction non autorisée est
              interdite. Les photographies sont des illustrations et ne
              représentent pas les locaux du centre.
            </p>
          </section>
          <p>
            <Link href="/" className="font-medium text-coral hover:underline">
              Retour à l’accueil
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
