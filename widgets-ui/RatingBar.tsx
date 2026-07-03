type Props = {
  star: 1 | 2 | 3 | 4 | 5;
  value: number;
  total: number;
};

const COLOR: Record<number, string> = {
  5: "bg-star-5",
  4: "bg-star-4",
  3: "bg-star-3",
  2: "bg-star-2",
  1: "bg-star-1",
};

export function RatingBar({ star, value, total }: Props) {
  const pct = total > 0 ? (value / total) * 100 : 0;
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="w-12 shrink-0 text-muted-foreground">{star} star{star > 1 ? "s" : ""}</span>
      <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-rating-track">
        <div
          className={`h-full rounded-full ${COLOR[star]}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-12 shrink-0 text-right font-medium tabular-nums text-foreground">
        ({value})
      </span>
    </div>
  );
}
