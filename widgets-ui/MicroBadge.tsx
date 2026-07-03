import { StarTiles } from "./StarTiles";
import { EthioReviewLogo } from "./EthioReviewLogo";
import { formatNumber, type ReviewData } from "./types";

export function MicroBadge({ data }: { data: ReviewData }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-lg border border-border bg-card px-3 py-2">
      <StarTiles score={data.score} size={26} />
      <span className="text-sm font-medium text-muted-foreground">
        {formatNumber(data.totalReviews)} reviews
      </span>
      <span className="h-5 w-px bg-border" />
      <EthioReviewLogo size={18} />
    </div>
  );
}
