"use client";

import { useEffect, useState } from "react";

function Star() {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-sage">
      <path d="M10 1.6l2.55 5.44 5.99.7-4.46 4.1 1.2 5.9L10 14.83l-5.28 2.9 1.2-5.9-4.46-4.1 5.99-.7z" />
    </svg>
  );
}

function ReviewCard({ name, text }) {
  return (
    <figure className="w-[22rem] shrink-0 rounded-lg bg-cream p-6 shadow-sm">
      <div className="flex gap-0.5 mb-3" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} />
        ))}
      </div>
      <blockquote className="text-sm text-ink/80 leading-relaxed">
        “{text}”
      </blockquote>
      <figcaption className="mt-4 font-display text-lg text-bark">{name}</figcaption>
    </figure>
  );
}

function MarqueeRow({ items, direction = "left" }) {
  const track = [...items, ...items];
  const animationClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex w-max gap-6 ${animationClass} hover:[animation-play-state:paused] motion-reduce:animate-none`}
      >
        {track.map((r, i) => (
          <ReviewCard key={`${r.name}-${i}`} name={r.name} text={r.text} />
        ))}
      </div>
    </div>
  );
}

// Fallback for prefers-reduced-motion: no auto-scroll, but still swipeable —
// a static, overflow-hidden track would otherwise leave the rest of the
// reviews completely unreachable.
function ScrollRow({ items }) {
  return (
    <div className="-mx-4 flex gap-6 overflow-x-auto px-4 pb-2 snap-x snap-mandatory [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [&::-webkit-scrollbar]:hidden">
      {items.map((r) => (
        <div key={r.name} className="shrink-0 snap-start">
          <ReviewCard name={r.name} text={r.text} />
        </div>
      ))}
    </div>
  );
}

export default function ReviewsMarquee({ reviews }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const half = Math.ceil(reviews.length / 2);
  const rowA = reviews.slice(0, half);
  const rowB = reviews.slice(half).length ? reviews.slice(half) : rowA;

  if (reducedMotion) {
    return (
      <div className="space-y-6">
        <ScrollRow items={rowA} />
        <ScrollRow items={rowB} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <MarqueeRow items={rowA} direction="left" />
      <MarqueeRow items={rowB} direction="right" />
    </div>
  );
}
