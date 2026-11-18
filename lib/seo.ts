import { site, toeicFormulas } from "./site";

export const seo = {
  siteName: "ASSBL",
  homeTitle: "ASSBL | Centre de langues à Bagneux",
  homeDescription:
    "ASSBL, centre de langues à Bagneux. Préparez le TOEIC Listening & Reading, passez l’examen agréé ETS Global et suivez des cours d’anglais éligibles CPF.",
  examenTitle: "Passer le TOEIC Listening & Reading à Bagneux",
  examenDescription:
    "Déroulé du TOEIC Listening & Reading, barème CECRL et passage en présentiel au centre ASS.BL à Bagneux, agréé ETS Global.",
} as const;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": `${site.url}/#organization`,
        name: "ASSBL",
        alternateName: ["ASS.BL", "Assbl"],
        url: site.url,
        logo: `${site.url}/brand/logo.png`,
        email: site.email,
        telephone: site.phone,
        description: seo.homeDescription,
        address: {
          "@type": "PostalAddress",
          streetAddress: "3 Rue Gabriel Cosson",
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
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: "ASSBL",
        alternateName: "ASS.BL",
        url: site.url,
        inLanguage: "fr-FR",
        publisher: { "@id": `${site.url}/#organization` },
      },
    ],
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
