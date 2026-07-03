import logoAsset from "@/assets/ethioreview-logo.png.asset.json";

type Props = {
  size?: number;
  showWordmark?: boolean;
  className?: string;
};

export function EthioReviewLogo({ size = 20, showWordmark = true, className }: Props) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className ?? ""}`}>
      <img
        src={logoAsset.url}
        alt="EthioReview"
        width={size}
        height={size}
        style={{ width: size, height: size }}
        className="object-contain"
      />
      {showWordmark && (
        <span
          className="font-semibold tracking-tight text-foreground"
          style={{ fontSize: size * 0.85 }}
        >
          EthioReview
        </span>
      )}
    </span>
  );
}
