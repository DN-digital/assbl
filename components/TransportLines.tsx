type Line = {
  id: string;
  kind: "metro" | "bus";
  bg: string;
  fg: string;
};

const rows: { lines: Line[]; stop: string }[] = [
  {
    lines: [{ id: "4", kind: "metro", bg: "#C04191", fg: "#ffffff" }],
    stop: "Bagneux–Lucie Aubrac",
  },
  {
    lines: [{ id: "128", kind: "bus", bg: "#F28E42", fg: "#171717" }],
    stop: "Hôtel de Ville",
  },
  {
    lines: [
      { id: "162", kind: "bus", bg: "#0064B0", fg: "#ffffff" },
      { id: "388", kind: "bus", bg: "#00814F", fg: "#ffffff" },
      { id: "391", kind: "bus", bg: "#662483", fg: "#ffffff" },
    ],
    stop: "Rue Froide",
  },
];

export function TransportLines() {
  return (
    <ul className="mt-4 space-y-3">
      {rows.map((row) => (
        <li key={row.stop} className="flex items-center gap-2.5">
          <span className="flex shrink-0 items-center gap-1">
            {row.lines.map((line) => (
              <span
                key={line.id}
                className={`inline-flex h-[1.35rem] min-w-[1.35rem] items-center justify-center px-1 text-[0.68rem] font-bold leading-none ${
                  line.kind === "metro" ? "rounded-full" : "rounded-[0.28rem]"
                }`}
                style={{ backgroundColor: line.bg, color: line.fg }}
                aria-label={
                  line.kind === "metro"
                    ? `Métro ligne ${line.id}`
                    : `Bus ${line.id}`
                }
              >
                {line.id}
              </span>
            ))}
          </span>
          <span className="text-sm font-medium text-foreground">{row.stop}</span>
        </li>
      ))}
    </ul>
  );
}
