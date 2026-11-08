import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ExamenContent } from "@/components/ExamenContent";
import { examenJsonLd, seo } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: seo.examenTitle,
  description: seo.examenDescription,
  keywords: [
    "passer le TOEIC Bagneux",
    "TOEIC Listening Reading",
    "centre examen TOEIC ETS Global",
    "barème TOEIC CECRL",
    "examen TOEIC Hauts-de-Seine",
  ],
  alternates: {
    canonical: "/examen",
  },
  openGraph: {
    title: `${seo.examenTitle} | ${seo.siteName}`,
    description: seo.examenDescription,
    url: `${site.url}/examen`,
    type: "article",
  },
  twitter: {
    card: "summary",
    title: `${seo.examenTitle} | ${seo.siteName}`,
    description: seo.examenDescription,
  },
};

export default function ExamenPage() {
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(examenJsonLd()),
          }}
        />
        <ExamenContent />
      </main>
      <Footer />
    </>
  );
}
