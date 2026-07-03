import { RatingBar } from "./RatingBar";
import { EthioReviewLogo } from "./EthioReviewLogo";
import { type ReviewData } from "./types";

export function RatingBreakdownCard({ data }: { data: ReviewData }) {
  const stars: (1 | 2 | 3 | 4 | 5)[] = [5, 4, 3, 2, 1];
  return (
    <div className="w-full max-w-sm rounded-xl border border-border bg-card p-5 shadow-sm">
      <div className="mb-4 flex items-baseline justify-between">
        <h3 className="text-xl font-bold text-foreground">
          {data.score.toFixed(1)} <span className="text-base font-normal text-muted-foreground">out of 5</span>
        </h3>
        <EthioReviewLogo size={16} />
      </div>
      <div className="space-y-2.5">
        {stars.map((s) => (
          <RatingBar key={s} star={s} value={data.distribution[s]} total={data.totalReviews} />
        ))}
      </div>
    </div>
  );
}
