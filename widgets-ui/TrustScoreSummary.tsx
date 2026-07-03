import { StarTiles } from "./StarTiles";
import { EthioReviewLogo } from "./EthioReviewLogo";
import { formatNumber, getRatingLabel, type ReviewData } from "./types";

export function TrustScoreSummary({ data }: { data: ReviewData }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card px-8 py-6">
      <div className="flex flex-wrap items-center justify-center gap-5">
        <span className="text-2xl font-bold text-foreground">{getRatingLabel(data.score)}</span>
        <StarTiles score={data.score} size={34} />
        <span className="text-lg font-semibold text-foreground">
          {data.score.toFixed(1)}{" "}
          <span className="text-sm font-normal text-muted-foreground">out of 5</span>
        </span>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">{formatNumber(data.totalReviews)}</span>
        <span>reviews on</span>
        <EthioReviewLogo size={18} />
      </div>
    </div>
  );
}
