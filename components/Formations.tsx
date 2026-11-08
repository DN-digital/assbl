import Image from "next/image";
import { CpfBadge } from "./CpfBadge";
import { Reveal } from "./Reveal";

const offers = [
  {
    id: "toeic",
    title: "Préparation TOEIC",
    image: "/photos/toeic.jpg",
    alt: "Illustration : une personne révise à son bureau.",
    intro:
      "Se familiariser avec les exercices, travailler la compréhension écrite et orale, enrichir son vocabulaire et mieux gérer son temps le jour du test.",
    goals: [
      "Comprendre le format et le rythme des épreuves",
      "S’entraîner à la compréhension orale et écrite",
      "Renforcer le vocabulaire utile au test",
      "Gagner en méthode pour gérer le temps",
    ],
  },
  {
    id: "anglais",
    title: "Cours d’anglais",
    image: "/photos/anglais.jpg",
    alt: "Illustration : un atelier de formation en petit groupe.",
    intro:
      "Consolider ses bases, gagner en aisance à l’oral et progresser dans les situations du quotidien ou professionnelles.",
    goals: [
      "Reprendre les fondamentaux avec clarté",
      "Pratiquer à l’oral dans des situations concrètes",
      "Développer un vocabulaire utile au quotidien et au travail",
      "Progresser à un rythme adapté à vos besoins",
    ],
  },
];

export function Formations() {
  return (
    <section id="formations" className="scroll-mt-24 bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <p className="text-sm font-medium tracking-wide text-coral">
            Formations
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Préparation du TOEIC / Cours d’anglais
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Que vous visiez un score TOEIC ou une pratique plus fluide de
            l’anglais, nous partons de votre objectif pour vous orienter vers
            la préparation la plus adaptée.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {offers.map((offer) => (
            <Reveal key={offer.id}>
              <article
                id={offer.id}
                className="scroll-mt-28 h-full bg-white p-6 sm:p-8"
              >
                <div className="relative mb-6 aspect-[16/10] overflow-hidden bg-surface">
                  <Image
                    src={offer.image}
                    alt={offer.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    unoptimized
                  />
                </div>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {offer.title}
                  </h3>
                  <CpfBadge />
                </div>
                <p className="mt-3 leading-relaxed text-muted">{offer.intro}</p>
                <p className="mt-6 text-sm font-medium text-foreground">
                  Objectifs
                </p>
                <ul className="mt-3 space-y-2 text-muted">
                  {offer.goals.map((goal) => (
                    <li key={goal} className="flex gap-3">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral"
                        aria-hidden="true"
                      />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-black/10 pt-5">
                  <p className="text-sm font-medium text-foreground">
                    Modalités, durées et tarifs
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Ces éléments dépendent de votre niveau, de votre
                    disponibilité et de votre projet. Ils vous sont communiqués
                    lors d’un échange avec le centre, sans engagement.
                  </p>
                </div>
                <a href="#contact" className="btn btn-coral mt-6">
                  Demander des informations
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
