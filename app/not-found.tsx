import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-24">
        <h1 className="text-4xl font-semibold tracking-tight">Page introuvable</h1>
        <p className="mt-4 text-muted">
          Cette page n’existe pas. Revenez à l’accueil pour découvrir les
          formations.
        </p>
        <Link href="/" className="btn btn-coral mt-8">
          Retour à l’accueil
        </Link>
      </main>
      <Footer />
    </>
  );
}
