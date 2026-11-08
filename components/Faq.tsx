import { faqQuestions } from "@/lib/faq";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-surface py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-medium tracking-wide text-coral">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Questions fréquentes
          </h2>
          <p className="mt-4 max-w-sm text-muted">
            Des réponses courtes pour vous situer. Pour les modalités précises,
            le centre reste votre interlocuteur.
          </p>
        </div>
        <div className="space-y-3">
          {faqQuestions.map((item) => (
            <details
              key={item.q}
              className="faq-item group bg-white px-5 py-1"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-medium">
                {item.q}
                <span
                  className="faq-chevron inline-flex h-6 w-6 shrink-0 items-center justify-center text-coral transition-transform"
                  aria-hidden="true"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 5l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </summary>
              <p className="pb-5 pr-10 leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
