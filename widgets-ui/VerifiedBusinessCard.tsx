import { StarTiles } from "./StarTiles";
import { EthioReviewLogo } from "./EthioReviewLogo";
import { formatNumber, getRatingLabel, type ReviewData } from "./types";
import { ShieldCheck } from "lucide-react";

export function VerifiedBusinessCard({ data }: { data: ReviewData }) {
  return (
    <div className="w-full max-w-md rounded-2xl border border-border bg-card p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-ethio-soft">
          <ShieldCheck className="text-ethio" size={28} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="text-base font-semibold text-foreground">Verified Business</h4>
            <span className="rounded-full bg-ethio px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ethio-foreground">
              Trusted
            </span>
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Independently rated on EthioReview
          </p>
          <div className="mt-3 flex items-center gap-2">
            <StarTiles score={data.score} size={20} gap={3} />
            <span className="text-sm font-semibold text-foreground">
              {data.score.toFixed(1)}
            </span>
            <span className="text-xs text-muted-foreground">
              · {getRatingLabel(data.score)} · {formatNumber(data.totalReviews)} reviews
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
        <EthioReviewLogo size={14} />
        <a href="#" className="text-xs font-semibold text-ethio hover:underline">
          See profile →
        </a>
      </div>
    </div>
  );
}
