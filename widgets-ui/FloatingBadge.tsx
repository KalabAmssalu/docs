import { StarTiles } from "./StarTiles";
import { EthioReviewLogo } from "./EthioReviewLogo";
import { formatNumber, type ReviewData } from "./types";

export function FloatingBadge({ data }: { data: ReviewData }) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-border bg-card py-2 pl-2 pr-4 shadow-lg">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ethio text-sm font-bold text-ethio-foreground tabular-nums">
        {data.score.toFixed(1)}
      </span>
      <div className="flex flex-col">
        <StarTiles score={data.score} size={14} gap={2} />
        <span className="mt-0.5 text-[11px] text-muted-foreground">
          {formatNumber(data.totalReviews)} reviews
        </span>
      </div>
      <span className="h-6 w-px bg-border" />
      <EthioReviewLogo size={14} showWordmark={false} />
    </div>
  );
}
