import React from "react";
import { X } from "lucide-react";

type DemoBannerProps = {
  message?: string;
  subtext?: string;
  fixed?: boolean;
  dismissible?: boolean;
  color?: string;
};

export const DemoBanner: React.FC<DemoBannerProps> = ({
  message = "⚠️ This is a demo version of the site.",
  subtext = "Some features may not be functional or reflect final content.",
  fixed = true,
  dismissible = true,
  color = "#dc2626", // Default to Tailwind red-600
}) => {
  const [visible, setVisible] = React.useState(true);
  if (!visible) return null;

  return (
    <div
      className={`w-full text-white text-sm z-50 ${
        fixed ? "fixed top-0 left-0" : "absolute top-0 left-0"
      }`}
      style={{ backgroundColor: color }}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 px-4 py-2">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1">
          <strong className="font-semibold">{message}</strong>
          {subtext && <span className="text-white/90">{subtext}</span>}
        </div>

        {dismissible && (
          <button
            onClick={() => setVisible(false)}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Close demo banner"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};
