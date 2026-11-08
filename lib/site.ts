export const site = {
  name: "ASS.BL",
  brand: "ASS.BL",
  legalName: "ASS.BL",
  url: "https://www.assbl.org",
  city: "Bagneux",
  department: "Hauts-de-Seine",
  address: {
    line1: "3 Avenue de Garlande",
    postalCode: "92220",
    city: "Bagneux",
  },
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=3+Avenue+de+Garlande+92220+Bagneux",
  email: "assbl.association@gmail.com",
  phone: "09 73 55 31 97",
  phoneHref: "tel:+33973553197",
  hours: "Permanences téléphoniques le mardi et le jeudi, de 10h à 12h.",
} as const;

export const nav = [
  { href: "/#accueil", label: "Accueil" },
  { href: "/#catalogue", label: "Catalogue" },
  { href: "/examen", label: "Examen" },
  { href: "/#anglais", label: "Cours d’anglais" },
  { href: "/#centre", label: "Le centre" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
] as const;

export const toeicFormulas = [
  {
    id: "autonomie",
    title: "TOEIC Autonomie",
    price: 230,
    intro: "Préparez le test à votre rythme grâce à un parcours en ligne.",
    features: [
      "30 h de formation en ligne",
      "1 examen blanc",
      "1 passage du test officiel",
    ],
  },
  {
    id: "coaching",
    title: "TOEIC Coaching ciblé",
    price: 450,
    intro:
      "Combinez entraînement en ligne et séances en présentiel pour travailler vos difficultés.",
    features: [
      "4 h de cours en présentiel",
      "30 h d’exercices en ligne",
      "2 examens blancs",
      "1 passage du test officiel",
    ],
  },
  {
    id: "collectif",
    title: "TOEIC Parcours collectif",
    price: 440,
    intro:
      "Progressez en groupe et consolidez vos acquis grâce aux exercices en ligne.",
    features: [
      "20 h de cours collectifs en présentiel",
      "30 h de formation en ligne",
      "1 passage du test officiel",
    ],
  },
  {
    id: "individuel",
    title: "TOEIC Parcours individuel",
    price: 870,
    intro: "Bénéficiez de cours particuliers centrés sur vos besoins.",
    features: [
      "10 h de cours individuels",
      "90 h de formation en ligne incluses",
      "4 examens blancs",
      "1 passage du test officiel",
    ],
  },
] as const;

export const contactCourses = [
  ...toeicFormulas.map((formula) => formula.title),
  "Cours d’anglais",
  "Je ne sais pas encore",
] as const;

export function formatPrice(amount: number) {
  return `${amount}\u00a0€`;
}

export function formulaFromParam(value: string | null) {
  if (!value) return undefined;
  return toeicFormulas.find((formula) => formula.id === value);
}

export function fullAddress() {
  return `${site.address.line1}, ${site.address.postalCode} ${site.address.city}`;
}
