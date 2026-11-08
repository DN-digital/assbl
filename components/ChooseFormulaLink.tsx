"use client";

export function ChooseFormulaLink({ formulaId }: { formulaId: string }) {
  return (
    <a
      href={`/?formule=${formulaId}#contact`}
      className="btn btn-coral mt-5 w-full"
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
          return;
        }
        event.preventDefault();
        const url = `/?formule=${formulaId}#contact`;
        window.history.pushState({ formule: formulaId }, "", url);
        window.dispatchEvent(new PopStateEvent("popstate"));
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      Choisir cette formule
    </a>
  );
}
