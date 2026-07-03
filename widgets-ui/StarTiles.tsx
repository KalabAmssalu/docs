import { Star } from "lucide-react";

type Props = {
  score: number;
  size?: number;
  gap?: number;
};

export function StarTiles({ score, size = 32, gap = 4 }: Props) {
  const tiles = [1, 2, 3, 4, 5];
  return (
    <div className="flex items-center" style={{ gap }}>
      {tiles.map((i) => {
        const fillPct = Math.max(0, Math.min(1, score - (i - 1))) * 100;
        return (
          <div
            key={i}
            className="relative overflow-hidden rounded-full bg-rating-track"
            style={{ width: size, height: size }}
          >
            <div
              className="absolute inset-y-0 left-0 bg-ethio"
              style={{ width: `${fillPct}%` }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Star
                size={size * 0.62}
                className="text-ethio-foreground"
                fill="currentColor"
                strokeWidth={0}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
