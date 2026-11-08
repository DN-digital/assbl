import { Reveal } from "./Reveal";

const axes = [
  {
    title: "Affiner votre écoute",
    text: "Repérez les mots-clés, les intonations et les informations utiles dans un dialogue, sans chercher à traduire chaque mot.",
  },
  {
    title: "Lire plus efficacement",
    text: "Identifiez rapidement le sujet d’un texte et retrouvez les éléments nécessaires pour répondre aux questions.",
  },
  {
    title: "Comprendre vos erreurs",
    text: "Distinguez les difficultés de vocabulaire, de grammaire et de compréhension pour cibler vos révisions.",
  },
  {
    title: "Maîtriser votre temps",
    text: "Adoptez un rythme de réponse adapté et apprenez à avancer sans rester bloqué sur une question.",
  },
];

export function Approach() {
  return (
    <section className="border-t border-black/10 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <p className="text-sm font-medium tracking-wide text-coral">
            Notre méthode
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Les bons réflexes pour le jour du test.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            Au-delà des connaissances en anglais, le TOEIC demande de la
            méthode. Apprenez à repérer l’essentiel, éviter les erreurs
            fréquentes et répondre avec davantage d’assurance.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {axes.map((axis, index) => (
            <Reveal key={axis.title}>
              <article className="h-full bg-surface p-6 sm:p-7">
                <p className="text-sm font-medium text-coral">
                  {String(index + 1).padStart(2, "0")} —
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  {axis.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{axis.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
