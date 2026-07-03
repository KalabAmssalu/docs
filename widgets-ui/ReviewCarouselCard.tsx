import { StarTiles } from "./StarTiles";
import { EthioReviewLogo } from "./EthioReviewLogo";
import { formatNumber, getRatingLabel, type ReviewData } from "./types";
import { Quote } from "lucide-react";

type Review = {
  name: string;
  initials: string;
  score: number;
  date: string;
  title: string;
  body: string;
};

const reviews: Review[] = [
  {
    name: "Selam T.",
    initials: "ST",
    score: 5,
    date: "2 days ago",
    title: "Outstanding service",
    body: "Fast delivery, fair prices, and the support team actually responds. Couldn't be happier.",
  },
  {
    name: "Daniel M.",
    initials: "DM",
    score: 5,
    date: "1 week ago",
    title: "Highly recommend",
    body: "Used them three times now and every order has been smooth. Genuine reviews you can trust.",
  },
  {
    name: "Hanna G.",
    initials: "HG",
    score: 4,
    date: "3 weeks ago",
    title: "Really good experience",
    body: "Great platform overall. Loved how easy it was to find verified businesses near me.",
  },
];

export function ReviewCarouselCard({ data }: { data: ReviewData }) {
  return (
    <div className="w-full max-w-3xl rounded-2xl border border-border bg-card p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
        <div className="flex items-center gap-3">
          <EthioReviewLogo size={20} />
          <span className="h-5 w-px bg-border" />
          <StarTiles score={data.score} size={22} />
          <span className="text-sm font-semibold text-foreground">
            {data.score.toFixed(1)}
          </span>
        </div>
        <span className="text-xs text-muted-foreground">
          {getRatingLabel(data.score)} · {formatNumber(data.totalReviews)} reviews
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {reviews.map((r) => (
          <article
            key={r.name}
            className="rounded-xl border border-border bg-background p-4"
          >
            <Quote size={18} className="mb-2 text-ethio" />
            <StarTiles score={r.score} size={14} gap={2} />
            <h4 className="mt-3 text-sm font-semibold text-foreground">{r.title}</h4>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              {r.body}
            </p>
            <footer className="mt-3 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ethio-soft text-[10px] font-bold text-ethio">
                {r.initials}
              </span>
              <div className="text-[11px] leading-tight">
                <div className="font-medium text-foreground">{r.name}</div>
                <div className="text-muted-foreground">{r.date}</div>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}
