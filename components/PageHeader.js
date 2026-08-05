import Reveal from "@/components/Reveal";

export default function PageHeader({ eyebrow, title, lead }) {
  return (
    <section className="relative overflow-hidden bg-linen">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-leaves bg-contain bg-no-repeat bg-right-top opacity-60 mix-blend-multiply"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
        {eyebrow && (
          <Reveal as="p" y={12} className="eyebrow mb-4">
            {eyebrow}
          </Reveal>
        )}
        <Reveal as="h1" delay={0.05} className="font-display text-4xl md:text-5xl text-bark">
          {title}
        </Reveal>
        {lead && (
          <Reveal as="p" delay={0.12} className="mt-5 max-w-2xl text-lg text-ink/80">
            {lead}
          </Reveal>
        )}
      </div>
    </section>
  );
}
