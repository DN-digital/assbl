import { Reveal } from "./Reveal";

const steps = [
  {
    title: "Vous nous parlez de vos objectifs",
    text: "Accompagnement dans vos projets d’études ou besoin professionnel, reprise d’anglais, obtention du TOEIC.",
  },
  {
    title: "On échange sur votre niveau et vos besoins",
    text: "Un premier échange permet d’estimer votre point de départ, vos contraintes de temps et le format qui vous convient.",
  },
  {
    title: "On vous oriente vers la préparation adaptée",
    text: "Vous repartez avec une proposition claire, à discuter ensemble, avant de vous engager.",
  },
];

export function Process() {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <p className="text-sm font-medium tracking-wide text-coral">
            Premiers pas
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Comment démarrer ?
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.title}>
              <li className="h-full bg-white p-6 sm:p-7">
                <p className="text-3xl font-semibold text-coral">
                  {index + 1}
                </p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10">
          <a href="#contact" className="btn btn-coral">
            Parlons de votre projet
          </a>
        </Reveal>
      </div>
    </section>
  );
}
