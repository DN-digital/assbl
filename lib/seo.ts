import { site, toeicFormulas } from "./site";

export const seo = {
  siteName: "ASS.BL Centre de Langues",
  homeTitle: "ASS.BL Centre de Langues | Préparation au TOEIC",
  homeDescription:
    "Centre d’examen officiel ETS Global à Bagneux. Préparez et passez le TOEIC Listening & Reading, ou suivez des cours d’anglais éligibles CPF avec ASS.BL.",
  examenTitle: "Passer le TOEIC Listening & Reading à Bagneux",
  examenDescription:
    "Déroulé du TOEIC Listening & Reading, barème CECRL et passage en présentiel au centre ASS.BL à Bagneux, agréé ETS Global.",
} as const;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${site.url}/#organization`,
    name: site.legalName,
    alternateName: [site.brand, site.name],
    url: site.url,
    email: site.email,
    telephone: site.phone,
    description: seo.homeDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.department,
      addressCountry: "FR",
    },
    areaServed: ["Bagneux", "Hauts-de-Seine", "Île-de-France"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Formules TOEIC",
      itemListElement: toeicFormulas.map((formula) => ({
        "@type": "Offer",
        name: formula.title,
        description: formula.intro,
        price: formula.price,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: `${site.url}/#catalogue`,
      })),
    },
  };
}

export function faqJsonLd(
  questions: readonly { q: string; a: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function examenJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: seo.examenTitle,
      description: seo.examenDescription,
      url: `${site.url}/examen`,
      isPartOf: { "@id": `${site.url}/#organization` },
      about: {
        "@type": "EducationalOccupationalCredential",
        name: "TOEIC Listening & Reading",
        credentialCategory: "certification",
        recognizedBy: {
          "@type": "Organization",
          name: "ETS Global",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: site.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Examen TOEIC",
          item: `${site.url}/examen`,
        },
      ],
    },
  ];
}
