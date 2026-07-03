import { StarTiles } from "./StarTiles";
import { EthioReviewLogo } from "./EthioReviewLogo";
import { RatingBar } from "./RatingBar";
import { formatNumber, getRatingLabel, type ReviewData } from "./types";

export function VerticalStackedCard({ data }: { data: ReviewData }) {
  const stars: (1 | 2 | 3 | 4 | 5)[] = [5, 4, 3, 2, 1];
  return (
    <div className="w-full max-w-[260px] rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
      <div className="flex justify-center">
        <EthioReviewLogo size={20} />
      </div>
      <div className="mt-4 text-5xl font-bold text-foreground tabular-nums">
        {data.score.toFixed(1)}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
        {getRatingLabel(data.score)}
      </div>
      <div className="mt-3 flex justify-center">
        <StarTiles score={data.score} size={24} />
      </div>
      <div className="mt-3 text-sm text-muted-foreground">
        Based on{" "}
        <span className="font-semibold text-foreground">{formatNumber(data.totalReviews)}</span>{" "}
        reviews
      </div>
      <div className="mt-5 space-y-1.5 text-left">
        {stars.map((s) => (
          <RatingBar key={s} star={s} value={data.distribution[s]} total={data.totalReviews} />
        ))}
      </div>
    </div>
  );
}
