import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Comment ${site.legalName} utilise les données du formulaire de contact à Bagneux.`,
  alternates: { canonical: "/politique-de-confidentialite" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-medium tracking-wide text-coral">
          Données personnelles
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Politique de confidentialité
        </h1>
        <div className="mt-10 space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Responsable de traitement
            </h2>
            <p className="mt-3">
              Les données collectées via le site {site.name} sont traitées par
              l’exploitant du centre, dont les informations légales seront
              complétées dans les mentions légales.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Données collectées
            </h2>
            <p className="mt-3">
              Le formulaire de contact peut collecter : nom, prénom, adresse
              e-mail, numéro de téléphone (facultatif), formation souhaitée et
              message.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">Finalité</h2>
            <p className="mt-3">
              Ces informations servent uniquement à répondre à votre demande et
              à vous recontacter au sujet des formations proposées. Elles ne
              sont pas utilisées à d’autres fins commerciales sans accord
              distinct.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Conservation et destinataires
            </h2>
            <p className="mt-3">
              Les messages sont transmis au centre afin de traiter votre
              demande. Ils sont conservés le temps nécessaire au suivi de
              l’échange, puis archivés ou supprimés selon les obligations
              applicables. Aucun transfert hors de cette finalité n’est prévu
              à ce jour.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">Vos droits</h2>
            <p className="mt-3">
              Vous pouvez demander l’accès, la rectification ou la suppression
              de vos données, ainsi que limiter ou vous opposer à certains
              traitements. Pour exercer ces droits, contactez le centre dès que
              les coordonnées seront affichées, ou via le formulaire lorsqu’il
              est raccordé.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">Cookies</h2>
            <p className="mt-3">
              Le site n’utilise pas de cookies publicitaires. Seuls des
              éléments techniques nécessaires au fonctionnement de la page
              peuvent être employés par l’hébergeur.
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
