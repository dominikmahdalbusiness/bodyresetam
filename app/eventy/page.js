import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import PhotoStack from "@/components/PhotoStack";

export const metadata = {
  title: "Eventy",
  description:
    "Skupinové lekce, cvičení pod širým nebem i společná setkání — eventy, které pořádám v rámci Body Reset v Uherském Brodě.",
};

const events = [
  {
    num: "01",
    title: "Lekce ve studiu",
    text: "Pilates se pravidelně schází v malém studiu na Hradišťské — v komorní skupině, kde mám čas na každého a na každý detail v pohybu. Přesně tak, jak to má podle mě fungovat.",
    main: { src: "/images/eventy/eventy-09.jpg", alt: "Lekce Pilates ve studiu" },
    accent: { src: "/images/eventy/eventy-10.jpg", alt: "Cvičení s pomůckami ve studiu" },
    align: "right",
  },
  {
    num: "02",
    title: "Cvičení pod širým nebem",
    text: "Když to počasí dovolí, přesuneme podložky ven. Ranní cvičení na trávě uprostřed Uherského Brodu má úplně jinou energii — a vždycky se sejde plno známých tváří.",
    main: { src: "/images/eventy/eventy-14.jpg", alt: "Skupinové cvičení v zahradě" },
    accent: { src: "/images/eventy/eventy-08.jpg", alt: "Společná fotka po cvičení venku" },
    align: "left",
  },
  {
    num: "03",
    title: "Setkání po cvičení",
    text: "Občas lekci prodloužíme o společnou snídani nebo drink na terase. Je to čas, který věnujeme jen sobě a lidem kolem — a proto se do Body Reset ráda vracím i mimo lekce.",
    main: { src: "/images/eventy/eventy-13.jpg", alt: "Společná snídaně po cvičení" },
    accent: { src: "/images/eventy/eventy-15.jpg", alt: "Posezení na terase" },
    align: "right",
  },
];

export default function EventyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Bodyreset.am"
        title="Eventy"
        lead="Pohyb u mě nekončí na podložce. Občas lekci přesuneme ven, prodloužíme o snídani, nebo se prostě jen sejdeme — tady je pár momentů z těchhle setkání."
      />

      {events.map((e, i) => (
        <section
          key={e.num}
          className={`relative ${i % 2 === 1 ? "bg-linen" : ""}`}
        >
          {i % 2 === 1 && (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-leaves bg-no-repeat bg-right-top bg-[length:260px_auto] lg:bg-[length:560px_auto] opacity-40 mix-blend-multiply"
            />
          )}
          <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20 grid gap-12 md:grid-cols-2 items-center">
            <Reveal className={`mb-14 md:mb-0 ${e.align === "left" ? "md:order-2" : ""}`}>
              <PhotoStack main={e.main} accent={e.accent} align={e.align} />
            </Reveal>
            <Reveal delay={0.1} className={e.align === "left" ? "md:order-1" : ""}>
              <p className="font-display text-5xl italic text-sage mb-4">{e.num}</p>
              <h2 className="font-display text-3xl md:text-4xl text-bark mb-5">
                {e.title}
              </h2>
              <p className="text-ink/80 leading-relaxed max-w-md">{e.text}</p>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="bg-bark text-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <Reveal>
            <p className="font-display text-2xl md:text-3xl italic mb-6 leading-snug">
              Chcete vědět o dalším termínu jako první?
            </p>
            <a
              href="https://www.instagram.com/bodyreset.am/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-7 py-3 text-sm font-medium uppercase tracking-widest text-cream transition hover:bg-cream hover:text-bark"
            >
              Sledovat na Instagramu
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
