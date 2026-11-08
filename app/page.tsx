import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Formations } from "@/components/Formations";
import { Catalogue } from "@/components/Catalogue";
import { Approach } from "@/components/Approach";
import { Process } from "@/components/Process";
import { Center } from "@/components/Center";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { faqQuestions } from "@/lib/faq";
import { faqJsonLd, seo } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: seo.homeTitle },
  description: seo.homeDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: seo.homeTitle,
    description: seo.homeDescription,
    url: site.url,
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd(faqQuestions)),
          }}
        />
        <Hero />
        <Formations />
        <Catalogue />
        <Approach />
        <Process />
        <Center />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
