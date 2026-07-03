export type RatingDistribution = {
  5: number;
  4: number;
  3: number;
  2: number;
  1: number;
};

export type ReviewData = {
  score: number;
  totalReviews: number;
  distribution: RatingDistribution;
};

export function getRatingLabel(score: number): string {
  if (score >= 4.5) return "Excellent";
  if (score >= 4) return "Great";
  if (score >= 3) return "Average";
  if (score >= 2) return "Poor";
  return "Bad";
}

export function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}
