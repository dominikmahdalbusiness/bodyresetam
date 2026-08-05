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

export default function ReviewsMarquee({ reviews }) {
  const half = Math.ceil(reviews.length / 2);
  const rowA = reviews.slice(0, half);
  const rowB = reviews.slice(half);

  return (
    <div className="space-y-6">
      <MarqueeRow items={rowA} direction="left" />
      <MarqueeRow items={rowB.length ? rowB : rowA} direction="right" />
    </div>
  );
}
