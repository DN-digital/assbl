import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { organizationJsonLd, seo } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: seo.homeTitle,
    template: `%s | ${seo.siteName}`,
  },
  description: seo.homeDescription,
  applicationName: seo.siteName,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "education",
  keywords: [
    "préparation TOEIC Bagneux",
    "TOEIC Listening and Reading",
    "centre d’examen ETS Global Bagneux",
    "passer le TOEIC Hauts-de-Seine",
    "cours d’anglais Bagneux",
    "ASS.BL",
  ],
  openGraph: {
    title: seo.homeTitle,
    description: seo.homeDescription,
    locale: "fr_FR",
    type: "website",
    siteName: seo.siteName,
    url: site.url,
  },
  twitter: {
    card: "summary",
    title: seo.homeTitle,
    description: seo.homeDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        {children}
      </body>
    </html>
  );
}
