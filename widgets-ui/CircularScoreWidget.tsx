import { EthioReviewLogo } from "./EthioReviewLogo";
import { formatNumber, type ReviewData } from "./types";

export function CircularScoreWidget({ data }: { data: ReviewData }) {
  const pct = (data.score / 5) * 100;
  const r = 52;
  const c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;
  return (
    <div className="flex w-full max-w-[240px] flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6">
      <EthioReviewLogo size={18} />
      <div className="relative h-32 w-32">
        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
          <circle
            cx="60"
            cy="60"
            r={r}
            fill="none"
            stroke="var(--color-rating-track)"
            strokeWidth="10"
          />
          <circle
            cx="60"
            cy="60"
            r={r}
            fill="none"
            stroke="var(--color-ethio)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-foreground tabular-nums leading-none">
            {data.score.toFixed(1)}
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
            out of 5
          </span>
        </div>
      </div>
      <div className="text-xs text-muted-foreground">
        From <span className="font-semibold text-foreground">{formatNumber(data.totalReviews)}</span> reviews
      </div>
    </div>
  );
}
