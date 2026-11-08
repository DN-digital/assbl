import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

const scoreRows = [
  { score: "Entre 120 et 225 points", level: "Niveau élémentaire", cefr: "A1" },
  {
    score: "Entre 225 et 550 points",
    level: "Niveau pré-intermédiaire",
    cefr: "A2",
  },
  { score: "Entre 550 et 785 points", level: "Niveau intermédiaire", cefr: "B1" },
  { score: "Entre 785 et 945 points", level: "Niveau avancé", cefr: "B2" },
  { score: "Plus de 945 points", level: "Niveau expert", cefr: "C1" },
];

const listeningTasks = [
  "Des descriptions d’images",
  "De courtes conversations",
  "Des échanges plus longs",
  "De brefs exposés ou annonces",
];

export function ExamenContent() {
  return (
    <>
      <section className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-coral">
              Examen
            </p>
            <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
              Passer le TOEIC Listening & Reading
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              ASS.BL est un centre d’examen officiel agréé ETS Global. Vous
              préparez et passez le TOEIC « Listening & Reading » en
              présentiel.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#catalogue" className="btn btn-coral">
                Voir les formules
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-black/10 bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-coral">
              Certification
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Un test d’anglais reconnu pour les études et le travail
            </h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-muted">
              Le TOEIC Listening & Reading évalue la compréhension de l’anglais
              dans des situations professionnelles et du quotidien. Le score
              obtenu peut être demandé pour une école, un diplôme, une
              candidature ou une évolution de poste.
            </p>
          </Reveal>

          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
            <Reveal className="h-full">
              <article className="flex h-full flex-col bg-white p-8 sm:p-10">
                <div className="flex min-h-[7.5rem] items-center justify-center">
                  <Image
                    src="/brand/toeic.png"
                    alt="Logo ETS TOEIC"
                    width={696}
                    height={164}
                    className="h-20 w-auto max-w-[18rem] object-contain sm:h-24 sm:max-w-[22rem]"
                    unoptimized
                  />
                </div>
                <span className="mx-auto mt-8 block h-px w-10 bg-coral" aria-hidden="true" />
                <h3 className="mt-6 text-center text-xl font-semibold tracking-tight">
                  TOEIC Listening & Reading
                </h3>
                <p className="mt-3 text-center leading-relaxed text-muted">
                  Projets professionnels, fin d’études, grandes écoles,
                  universités et cursus à l’étranger.
                </p>
              </article>
            </Reveal>
            <Reveal className="h-full">
              <article className="flex h-full flex-col bg-white p-8 sm:p-10">
                <div className="flex min-h-[7.5rem] items-center justify-center">
                  <Image
                    src="/brand/bright-language.png"
                    alt="Logo Bright Language"
                    width={985}
                    height={155}
                    className="h-16 w-auto max-w-[18rem] object-contain sm:h-20 sm:max-w-[22rem]"
                    unoptimized
                  />
                </div>
                <span className="mx-auto mt-8 block h-px w-10 bg-coral" aria-hidden="true" />
                <h3 className="mt-6 text-center text-xl font-semibold tracking-tight">
                  Bright Language
                </h3>
                <p className="mt-3 text-center leading-relaxed text-muted">
                  Certification sécurisée pour 11 langues, dont l’anglais
                  professionnel et débutant.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-coral">
              Déroulé
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Comment se passe l’épreuve ?
            </h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-muted">
              Le TOEIC Listening & Reading est un questionnaire à choix
              multiples, chronométré. La session classique dure environ deux
              heures, hors consignes.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <article className="h-full bg-surface p-6 sm:p-8">
                <p className="text-sm font-medium text-coral">45 minutes</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  Listening — compréhension orale
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  100 questions. Vous écoutez des enregistrements, puis vous
                  choisissez la réponse qui correspond le mieux à ce que vous
                  avez compris.
                </p>
                <p className="mt-6 text-sm font-medium text-foreground">
                  Types d’écoute
                </p>
                <ul className="mt-3 space-y-2 text-muted">
                  {listeningTasks.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
            <Reveal>
              <article className="h-full bg-surface p-6 sm:p-8">
                <p className="text-sm font-medium text-coral">75 minutes</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  Reading — compréhension écrite
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  100 questions. Vous lisez des textes en anglais, complètez
                  des phrases et répondez à des questions de compréhension.
                </p>
                <p className="mt-6 leading-relaxed text-muted">
                  Cette partie mesure aussi la grammaire, le vocabulaire et la
                  capacité à retrouver l’information utile sans s’attarder sur
                  chaque mot.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-coral">
              Résultats
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Barème et grille de score
            </h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-muted">
              Le score final correspond au nombre de bonnes réponses aux deux
              parties. Il indique un niveau, valable deux ans. Les résultats
              arrivent en général sous quelques jours ouvrés, avec le détail
              Listening et Reading.
            </p>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted">
              Votre niveau en anglais est lu à partir du score obtenu :
            </p>
          </Reveal>

          <div className="mt-10 overflow-x-auto">
            <div className="min-w-[36rem] overflow-hidden bg-white">
              <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Correspondance entre le score TOEIC Listening & Reading, le
                niveau et le CECRL
              </caption>
              <thead>
                <tr className="border-b border-black/10 text-sm text-foreground">
                  <th scope="col" className="px-6 py-4 font-bold">
                    Score TOEIC
                  </th>
                  <th scope="col" className="px-6 py-4 font-bold">
                    Niveau
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-center font-bold"
                  >
                    CECRL
                  </th>
                </tr>
              </thead>
              <tbody>
                {scoreRows.map((row, index) => (
                  <tr
                    key={row.cefr}
                    className={
                      index % 2 === 0 ? "bg-white" : "bg-surface/70"
                    }
                  >
                    <td className="px-6 py-4 text-foreground">{row.score}</td>
                    <td className="px-6 py-4 text-muted">{row.level}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex min-w-12 items-center justify-center bg-[color-mix(in_srgb,var(--coral)_16%,white)] px-3 py-1.5 text-sm font-semibold text-coral">
                        {row.cefr}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              </table>
            </div>
          </div>

          <p className="mt-8 max-w-3xl leading-relaxed text-muted">
            Certaines entreprises et certaines écoles demandent un score
            minimum. Ce seuil vise à s’assurer d’une compréhension suffisante
            pour étudier ou travailler en anglais. Il se situe souvent autour
            de 750 points, soit un niveau B1. ASS.BL vous oriente vers la
            préparation Listening & Reading la plus adaptée, avant le passage
            du test au centre.
          </p>
        </div>
      </section>

      <section className="border-t border-black/10 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-coral">
              Prochaine étape
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Passer le test avec ASS.BL
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted">
              Indiquez-nous votre objectif et votre disponibilité. Nous
              revenons vers vous pour une session au centre, à Bagneux, et pour
              une préparation si vous en avez besoin.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#contact" className="btn btn-coral">
                Être recontacté
              </Link>
              <Link href="/#catalogue" className="btn btn-outline">
                Consulter le catalogue
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
