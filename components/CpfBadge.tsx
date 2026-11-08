export function CpfBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-coral/40 bg-coral/10 px-2.5 py-1 text-xs font-semibold tracking-wide text-coral ${className}`}
    >
      Éligible CPF
    </span>
  );
}
