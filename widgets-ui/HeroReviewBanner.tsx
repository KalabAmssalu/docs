import { StarTiles } from "./StarTiles";
import { EthioReviewLogo } from "./EthioReviewLogo";
import { formatNumber, getRatingLabel, type ReviewData } from "./types";
import { ArrowRight } from "lucide-react";

export function HeroReviewBanner({ data }: { data: ReviewData }) {
  return (
    <div className="w-full rounded-2xl border border-border bg-gradient-to-br from-ethio-soft to-card p-6 sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <EthioReviewLogo size={22} />
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-3xl font-bold text-foreground">{getRatingLabel(data.score)}</span>
            <StarTiles score={data.score} size={36} />
          </div>
          <p className="text-sm text-muted-foreground">
            Rated{" "}
            <span className="font-semibold text-foreground">{data.score.toFixed(1)} / 5</span>{" "}
            by <span className="font-semibold text-foreground">{formatNumber(data.totalReviews)}</span> verified customers
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 self-start rounded-lg bg-ethio px-5 py-3 text-sm font-semibold text-ethio-foreground transition-opacity hover:opacity-90 sm:self-auto"
        >
          Read all reviews
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
