import { formatPrice, fullAddress, toeicFormulas } from "@/lib/site";
import { ChooseFormulaLink } from "./ChooseFormulaLink";
import { CpfBadge } from "./CpfBadge";
import { Reveal } from "./Reveal";

export function Catalogue() {
  return (
    <section id="catalogue" className="scroll-mt-24 border-t border-black/10 bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <p className="text-sm font-medium tracking-wide text-coral">
            Catalogue
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Nos formules TOEIC
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            En autonomie, en groupe ou avec un accompagnement individuel :
            choisissez la préparation qui vous correspond. Ces formules sont
            éligibles au CPF.
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            Ces formations s’adressent aux étudiants, aux particuliers et aux
            professionnels. Le passage du test se déroule en présentiel au{" "}
            {fullAddress()}.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
          {toeicFormulas.map((formula) => (
            <Reveal key={formula.id} className="h-full">
              <article className="flex h-full flex-col bg-white p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {formula.title}
                  </h3>
                  <CpfBadge />
                </div>
                <p className="mt-3 leading-relaxed text-muted">
                  {formula.intro}
                </p>
                <ul className="mt-6 flex-1 space-y-2 text-muted">
                  {formula.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-black/10 pt-5">
                  <p className="text-3xl font-semibold tracking-tight tabular-nums">
                    {formatPrice(formula.price)}
                  </p>
                  <ChooseFormulaLink formulaId={formula.id} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
