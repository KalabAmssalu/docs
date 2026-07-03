import { createFileRoute } from "@tanstack/react-router";
import { MicroBadge } from "@/components/widgets/MicroBadge";
import { RatingBreakdownCard } from "@/components/widgets/RatingBreakdownCard";
import { TrustScoreSummary } from "@/components/widgets/TrustScoreSummary";
import { HeroReviewBanner } from "@/components/widgets/HeroReviewBanner";
import { VerticalStackedCard } from "@/components/widgets/VerticalStackedCard";
import { InlineRatingPill } from "@/components/widgets/InlineRatingPill";
import { ReviewCarouselCard } from "@/components/widgets/ReviewCarouselCard";
import { FloatingBadge } from "@/components/widgets/FloatingBadge";
import { CircularScoreWidget } from "@/components/widgets/CircularScoreWidget";
import { VerifiedBusinessCard } from "@/components/widgets/VerifiedBusinessCard";
import { ComparisonStrip } from "@/components/widgets/ComparisonStrip";
import { DarkPromoCard } from "@/components/widgets/DarkPromoCard";
import { EthioReviewLogo } from "@/components/widgets/EthioReviewLogo";
import type { ReviewData } from "@/components/widgets/types";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EthioReview Widgets — Embeddable review widgets for your brand" },
      {
        name: "description",
        content:
          "A collection of embeddable EthioReview rating widgets — badges, breakdowns, summaries and hero banners for any website.",
      },
      { property: "og:title", content: "EthioReview Widgets" },
      {
        property: "og:description",
        content: "Embeddable EthioReview rating widgets for your brand.",
      },
    ],
  }),
  component: Index,
});

const sampleData: ReviewData = {
  score: 4.8,
  totalReviews: 20921,
  distribution: { 5: 16210, 4: 3120, 3: 980, 2: 360, 1: 251 },
};

const smallSample: ReviewData = {
  score: 4.7,
  totalReviews: 437,
  distribution: { 5: 212, 4: 140, 3: 43, 2: 21, 1: 21 },
};

type SectionProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

function WidgetSection({ title, description, children }: SectionProps) {
  return (
    <section className="rounded-2xl border border-border bg-secondary/40 p-6">
      <header className="mb-5">
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </header>
      <div className="flex min-h-[160px] items-center justify-center rounded-xl bg-background p-6">
        {children}
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <EthioReviewLogo size={26} />
          <span className="text-sm text-muted-foreground">Review Widgets</span>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-10 max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            EthioReview rating widgets
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            Drop-in components to showcase your EthioReview score anywhere on your site.
            Pick the layout that fits your page — each widget is a separate component.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <WidgetSection
            title="Hero review banner"
            description="Full-width featured rating block with CTA — great for landing pages."
          >
            <HeroReviewBanner data={sampleData} />
          </WidgetSection>

          <WidgetSection
            title="TrustScore summary"
            description="Label, stars, score and total reviews in a single line — perfect above the fold."
          >
            <TrustScoreSummary data={sampleData} />
          </WidgetSection>

          <WidgetSection
            title="Rating breakdown card"
            description="Per-star distribution with counts — show transparent review data."
          >
            <RatingBreakdownCard data={smallSample} />
          </WidgetSection>

          <WidgetSection
            title="Vertical stacked card"
            description="Portrait-format widget for sidebars and product pages."
          >
            <VerticalStackedCard data={sampleData} />
          </WidgetSection>

          <WidgetSection
            title="Micro badge"
            description="Compact inline badge with stars, review count and logo."
          >
            <MicroBadge data={smallSample} />
          </WidgetSection>

          <WidgetSection
            title="Inline rating pill"
            description="Minimal one-line pill for footers, product cards or nav bars."
          >
            <InlineRatingPill data={sampleData} />
          </WidgetSection>

          <WidgetSection
            title="Review carousel card"
            description="Featured customer quotes with verified ratings."
          >
            <ReviewCarouselCard data={sampleData} />
          </WidgetSection>

          <WidgetSection
            title="Comparison strip"
            description="At-a-glance KPI strip — average, 5-star %, totals and verification."
          >
            <ComparisonStrip data={sampleData} />
          </WidgetSection>

          <WidgetSection
            title="Circular score"
            description="Radial score gauge for dashboards and stat panels."
          >
            <CircularScoreWidget data={sampleData} />
          </WidgetSection>

          <WidgetSection
            title="Verified business card"
            description="Trust-mark card showing your business is verified on EthioReview."
          >
            <VerifiedBusinessCard data={sampleData} />
          </WidgetSection>

          <WidgetSection
            title="Floating badge"
            description="Sticky corner badge — drop it bottom-right on any page."
          >
            <FloatingBadge data={sampleData} />
          </WidgetSection>

          <WidgetSection
            title="Dark promo card"
            description="High-contrast promo card with CTA for marketing pages."
          >
            <DarkPromoCard data={sampleData} />
          </WidgetSection>
        </div>
      </main>


      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} EthioReview — embeddable review widgets
      </footer>
    </div>
  );
}
