import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import PhotoStack from "@/components/PhotoStack";
import { Stagger, StaggerItem } from "@/components/Stagger";
import { maderoPrices } from "@/lib/pricing";

export const metadata = {
  title: "Maderoterapie",
  description:
    "Maderoterapie v Uherském Brodě — tvarování postavy a podpora lymfatického systému pomocí dřevěných nástrojů. Moravská 83, od 850 Kč.",
};

const highlights = [
  {
    name: "Tvarování postavy",
    text: "Speciálně tvarované dřevěné nástroje modelují postavu v oblastech, kde chcete zpevnit a protvarovat pokožku.",
  },
  {
    name: "Podpora lymfy",
    text: "Technika podporuje prokrvení a lymfatický systém, pomáhá tělu zbavovat se odpadních látek.",
  },
  {
    name: "Pravidelnost se vyplatí",
    text: "Nejlepší výsledky přináší série ošetření v pravidelných intervalech — proto nabízím zvýhodněnou permanentku na 10 vstupů.",
  },
];

export default function MaderoterapiePage() {
  return (
    <>
      <PageHeader
        eyebrow="Moravská 83, Uherský Brod"
        title="Maderoterapie"
        lead="Masážní technika, která pomocí dřevěných nástrojů modeluje postavu a podporuje prokrvení i lymfatický systém. Ideální doplněk pravidelné péče o tělo."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 grid gap-12 md:grid-cols-[0.9fr_1.1fr] items-start mb-4">
        <Reveal className="mb-10 md:mb-0">
          <PhotoStack
            main={{
              src: "/images/maderoterapie-tool.jpg",
              alt: "Dřevěný nástroj pro maderoterapii",
            }}
            align="right"
          />
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-lg text-ink/85 leading-relaxed mb-4">
            Maderoterapii zařazuji jako šetrný doplněk k masážím a péči
            o postavu. Dřevěné nástroje pracují s pokožkou i podkožním vazivem
            a podporují přirozené prokrvení.
          </p>
          <p className="text-ink/75 leading-relaxed">
            Nejvíc se osvědčuje v sérii — proto ji ráda propojuji
            s pravidelnými masážemi a doporučím vám plán na míru přímo na
            místě.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <Stagger className="grid gap-8 md:grid-cols-3 mb-14">
          {highlights.map((h, i) => (
            <StaggerItem key={h.name} className="rounded-lg bg-cream p-7 shadow-sm">
              <p className="font-display text-4xl italic text-sage mb-4">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="font-display text-xl text-bark mb-2">{h.name}</h2>
              <p className="text-sm text-ink/75 leading-relaxed">{h.text}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="grid gap-10 md:grid-cols-2 items-center rounded-lg bg-linen p-8 md:p-10 relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-leaves bg-contain bg-no-repeat bg-right-top opacity-55 mix-blend-multiply"
          />
          <div className="relative">
            <Reveal as="h2" className="font-display text-2xl md:text-3xl text-bark mb-4">
              Kolik to stojí
            </Reveal>
            <Stagger className="divide-y divide-bark/10">
              {maderoPrices.map((p) => (
                <StaggerItem
                  key={p.name}
                  className="flex items-baseline justify-between gap-4 py-4"
                >
                  <div>
                    <p className="text-bark">{p.name}</p>
                    {p.duration && (
                      <p className="text-xs uppercase tracking-widest text-ink/50 mt-0.5">
                        {p.duration}
                      </p>
                    )}
                  </div>
                  <p className="font-display text-xl text-sagedark whitespace-nowrap">
                    {p.price}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <Reveal delay={0.1} className="relative">
            <p className="text-ink/80 leading-relaxed mb-2">
              Konkrétní plán ošetření vám ráda doporučím na místě podle vašich
              cílů. Permanentka na 10 vstupů vyjde na 770 Kč za ošetření —
              ušetříte 800 Kč.
            </p>
            <p className="text-sm text-ink/70 mb-6">
              Termín domlouváme telefonicky nebo přes Instagram.
            </p>
            <a href="tel:+420735248769" className="btn-primary">
              Zavolat 735 248 769
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
