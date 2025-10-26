import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type TextSwapProps = {
  items: Array<string>;
  interval?: number;      // ms (default 3000)
  duration?: number;      // s  (default 0.6)
  className?: string;
  initialIndex?: number;  // default 0
  pauseOnHover?: boolean; // default true
  ariaLabel?: string;
};

export const TextSwap: React.FC<TextSwapProps> = ({
  items,
  interval = 3000,
  duration = 0.6,
  className,
  initialIndex = 0,
  pauseOnHover = true,
  ariaLabel,
}) => {
  const safe = useMemo(() => (items?.length ? items : [""]), [items]);
  const [idx, setIdx] = useState(
    Math.max(0, Math.min(initialIndex, safe.length - 1))
  );
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (safe.length <= 1 || paused) return;
    const id = window.setInterval(
      () => setIdx((i) => (i + 1) % safe.length),
      Math.max(800, interval)
    );
    return () => window.clearInterval(id);
  }, [interval, paused, safe.length]);

  const variants = {
    enter: { y: -16, opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: 16, opacity: 0 },
  } as const;

  const transition = reduce ? { duration: 0 } : { duration, ease: "easeOut" as const };

  return (
    <div
      className={className}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
      aria-live="polite"
      aria-label={ariaLabel}
      // Grid trick: both the entering and exiting items occupy the same cell,
      // the container keeps natural height (no layout collapse).
      style={{
        display: "grid",
        alignItems: "center",
        justifyItems: "start",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <AnimatePresence mode="sync" initial={false}>
        <motion.span
          key={idx}
          style={{ gridArea: "1 / 1" }}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transition}
        >
          {safe[idx]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
