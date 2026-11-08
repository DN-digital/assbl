import Image from "next/image";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="accueil" className="scroll-mt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8 lg:py-24">
        <Reveal>
          <p className="text-sm tracking-wide text-muted">
            Centre d’examen officiel agréé ETS Global · Formations éligibles CPF
          </p>
          <h1 className="mt-4 max-w-xl text-[2.15rem] font-semibold leading-[1.15] tracking-tight text-foreground sm:text-5xl">
            Préparez votre TOEIC et donnez un nouvel élan à votre anglais.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            Passage du Test TOEIC « Listening & Reading » en centre, cours
            d’anglais intensif pour particuliers et professionnels, cours à
            thématiques sur-mesure : un accompagnement clair, de l’inscription
            au résultat.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#catalogue" className="btn btn-coral">
              Découvrir les formations
            </a>
            <a href="#contact" className="btn btn-dark">
              Être recontacté
            </a>
          </div>
        </Reveal>
        <Reveal>
          <figure className="relative aspect-[4/5] overflow-hidden bg-surface sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/photos/hero.jpg"
              alt="Illustration : un groupe de personnes échange autour d’un ordinateur."
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 42vw, 100vw"
              unoptimized
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
