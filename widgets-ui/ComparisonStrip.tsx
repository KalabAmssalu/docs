import { StarTiles } from "./StarTiles";
import { EthioReviewLogo } from "./EthioReviewLogo";
import { formatNumber, type ReviewData } from "./types";

export function ComparisonStrip({ data }: { data: ReviewData }) {
  const stats = [
    { label: "Avg. rating", value: data.score.toFixed(1) },
    {
      label: "5-star reviews",
      value:
        Math.round((data.distribution[5] / data.totalReviews) * 100) + "%",
    },
    { label: "Total reviews", value: formatNumber(data.totalReviews) },
    { label: "Verified", value: "100%" },
  ];
  return (
    <div className="w-full rounded-2xl border border-border bg-card p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <EthioReviewLogo size={18} />
          <span className="h-4 w-px bg-border" />
          <StarTiles score={data.score} size={18} gap={2} />
        </div>
        <span className="text-xs text-muted-foreground">Last 90 days</span>
      </div>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-card p-4 text-center">
            <div className="text-2xl font-bold text-foreground tabular-nums">
              {s.value}
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
