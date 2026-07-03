import { StarTiles } from "./StarTiles";
import { EthioReviewLogo } from "./EthioReviewLogo";
import { type ReviewData } from "./types";

export function DarkPromoCard({ data }: { data: ReviewData }) {
  return (
    <div className="w-full max-w-md rounded-2xl bg-foreground p-6 text-background">
      <div className="flex items-center gap-2 opacity-90">
        <EthioReviewLogo size={18} />
      </div>
      <div className="mt-5">
        <div className="text-5xl font-bold tabular-nums">
          {data.score.toFixed(1)}
          <span className="ml-1 text-xl font-normal opacity-60">/ 5</span>
        </div>
        <div className="mt-3">
          <StarTiles score={data.score} size={26} />
        </div>
      </div>
      <p className="mt-5 text-sm opacity-75">
        Loved by{" "}
        <span className="font-semibold opacity-100">
          {data.totalReviews.toLocaleString()}+
        </span>{" "}
        verified customers across Ethiopia.
      </p>
      <a
        href="#"
        className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-ethio px-4 py-2.5 text-sm font-semibold text-ethio-foreground"
      >
        Read the reviews
      </a>
    </div>
  );
}
