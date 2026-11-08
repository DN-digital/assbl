import Image from "next/image";
import { fullAddress } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Center() {
  return (
    <section id="centre" className="scroll-mt-24 py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2 lg:items-stretch lg:gap-16 lg:px-8">
        <Reveal>
          <p className="text-sm font-medium tracking-wide text-coral">
            Bagneux
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Découvrez assbl
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted">
            assbl accueille les candidats qui souhaitent préparer le TOEIC ou
            progresser en anglais, dans le cadre d’un projet d’études ou
            professionnel.
          </p>
          <p className="mt-4 max-w-md leading-relaxed text-muted">
            Le centre se situe au {fullAddress()}. Pour les modalités
            d’accueil, les horaires et l’organisation des cours, un échange
            avec l’équipe reste le meilleur point de départ.
          </p>
          <a href="#contact" className="btn btn-coral mt-8">
            Être recontacté
          </a>
        </Reveal>
        <Reveal className="h-full">
          <figure className="flex h-full flex-col">
            <div className="relative aspect-[4/3] flex-1 overflow-hidden bg-surface lg:aspect-auto">
              <Image
                src="/photos/salle.webp"
                alt="Salle de formation et d’examen d’assbl à Bagneux."
                fill
                className="object-cover object-[center_48%]"
                sizes="(min-width: 1024px) 44vw, 100vw"
              />
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
