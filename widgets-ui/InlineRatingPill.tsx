import { StarTiles } from "./StarTiles";
import { EthioReviewLogo } from "./EthioReviewLogo";
import { formatNumber, type ReviewData } from "./types";

export function InlineRatingPill({ data }: { data: ReviewData }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm">
      <StarTiles score={data.score} size={16} gap={1} />
      <span className="font-semibold text-foreground tabular-nums">
        {data.score.toFixed(1)}
      </span>
      <span className="text-muted-foreground">
        · {formatNumber(data.totalReviews)} reviews
      </span>
      <span className="h-3 w-px bg-border" />
      <EthioReviewLogo size={14} />
    </div>
  );
}
