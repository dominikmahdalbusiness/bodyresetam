import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { Stagger } from "@/components/Stagger";
import PhotoGrid from "@/components/PhotoGrid";

export const metadata = {
  title: "Prostory",
  description:
    "Nahlédněte do prostor Body Reset v Uherském Brodě — prostor pro masáže a maderoterapii na Moravské 83, studio Pilates na Hradišťské i letní cvičení u Kafeterie.",
};

const groups = [
  {
    eyebrow: "Moravská 83, Uherský Brod",
    title: "Masáže & maderoterapie",
    text: "Klidný prostor, kam si přijdete odpočinout od svalové bolesti i každodenního shonu. Termín domlouváme telefonicky nebo přes Instagram.",
    photos: [
      { src: "/images/prostory/masaze-01.jpg", alt: "Prostor pro masáže a maderoterapii" },
      { src: "/images/prostory/masaze-02.jpg", alt: "Klidový kout k odpočinku" },
      { src: "/images/prostory/masaze-03.jpg", alt: "Posezení před ošetřením" },
    ],
  },
  {
    eyebrow: "Hradišťská 2724, Uherský Brod",
    title: "Pilates ve studiu",
    text: "Studio, kde se pravidelně scházíme na lekce Pilates — v úterý a ve čtvrtek.",
    photos: [
      { src: "/images/prostory/hradistska-01.jpg", alt: "Studio Pilates na Hradišťské" },
      { src: "/images/prostory/hradistska-02.jpg", alt: "Detail studia" },
      { src: "/images/prostory/hradistska-03.jpg", alt: "Cvičení ve studiu" },
    ],
  },
  {
    eyebrow: "Kafeterie · přes léto",
    title: "Pilates pod širým nebem",
    text: "Přes léto se lekce občas přesouvají ven, do zahrady Kafeterie — cvičení na trávě, dobrá káva po ruce.",
    photos: [
      { src: "/images/prostory/kafeterka-01.jpg", alt: "Cvičení v zahradě Kafeterie" },
      { src: "/images/prostory/kafeterka-02.jpg", alt: "Skupinové cvičení venku" },
      { src: "/images/prostory/kafeterka-03.jpg", alt: "Společná fotka po cvičení venku" },
    ],
  },
];

export default function ProstoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Uherský Brod"
        title="Prostory"
        lead="Prostor pro masáže a maderoterapii, studio pro lekce Pilates a přes léto i cvičení pod širým nebem — nahlédněte, kde vás čekám."
      />

      {groups.map((g, i) => (
        <section
          key={g.title}
          className={`relative overflow-hidden ${i % 2 === 1 ? "bg-linen" : ""}`}
        >
          {i % 2 === 1 && (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-leaves bg-contain bg-no-repeat bg-right-top opacity-55 mix-blend-multiply"
            />
          )}
          <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
            <Reveal as="p" y={12} className="eyebrow mb-3">
              {g.eyebrow}
            </Reveal>
            <Reveal as="h2" delay={0.05} className="font-display text-3xl md:text-4xl text-bark mb-5 max-w-xl">
              {g.title}
            </Reveal>
            <Reveal delay={0.08} className="mb-10 max-w-xl">
              <p className="text-ink/80 leading-relaxed">{g.text}</p>
            </Reveal>
            <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
              <PhotoGrid photos={g.photos} aspect="aspect-[3/4]" />
            </Stagger>
          </div>
        </section>
      ))}

      <section className="bg-bark text-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <Reveal>
            <p className="font-display text-2xl md:text-3xl italic mb-6 leading-snug">
              Ráda vás u sebe přivítám osobně.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+420735248769" className="btn-primary">
                Zavolat 735 248 769
              </a>
              <a
                href="https://www.instagram.com/bodyreset.am/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-7 py-3 text-sm font-medium uppercase tracking-widest text-cream transition hover:bg-cream hover:text-bark"
              >
                Sledovat na Instagramu
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
