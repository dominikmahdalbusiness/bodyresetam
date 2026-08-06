import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { Stagger } from "@/components/Stagger";
import PhotoGrid from "@/components/PhotoGrid";
import PhotoStack from "@/components/PhotoStack";

export const metadata = {
  title: "Prostory",
  description:
    "Nahlédněte do prostor Body Reset v Uherském Brodě — ošetřovna na Moravské 83, studio Pilates na Hradišťské i letní cvičení u Kafeterie.",
};

export default function ProstoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Uherský Brod"
        title="Prostory"
        lead="Ošetřovna pro masáže a maderoterapii, studio pro lekce Pilates a přes léto i cvičení pod širým nebem — nahlédněte, kde vás čekám."
      />

      {/* Masáže a maderoterapie */}
      <section className="mx-auto max-w-6xl px-4 py-16 grid gap-12 md:grid-cols-[0.9fr_1.1fr] items-center">
        <Reveal className="mb-10 md:mb-0">
          <PhotoStack
            main={{
              src: "/images/prostory/prostory-01.jpg",
              alt: "Ošetřovna na Moravské 83",
            }}
            align="right"
          />
        </Reveal>
        <Reveal delay={0.05}>
          <p className="eyebrow mb-3">Moravská 83, Uherský Brod</p>
          <h2 className="font-display text-3xl md:text-4xl text-bark mb-5">
            Masáže &amp; maderoterapie
          </h2>
          <p className="text-ink/80 leading-relaxed max-w-md">
            Klidná ošetřovna, kam si přijdete odpočinout od svalové bolesti
            i každodenního shonu. Termín domlouváme telefonicky nebo přes
            Instagram.
          </p>
        </Reveal>
      </section>

      {/* Pilates ve studiu */}
      <section className="relative overflow-hidden bg-linen">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-leaves bg-contain bg-no-repeat bg-right-top opacity-55 mix-blend-multiply"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
          <Reveal as="p" y={12} className="eyebrow mb-3">
            Hradišťská 2724, Uherský Brod
          </Reveal>
          <Reveal as="h2" delay={0.05} className="font-display text-3xl md:text-4xl text-bark mb-10 max-w-xl">
            Pilates ve studiu
          </Reveal>
          <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 max-w-3xl">
            <PhotoGrid
              photos={[
                { src: "/images/prostory/prostory-02.jpg", alt: "Studio Pilates na Hradišťské" },
                { src: "/images/prostory/prostory-03.jpg", alt: "Interiér studia s pilates kruhem" },
              ]}
              aspect="aspect-[3/4]"
            />
          </Stagger>
        </div>
      </section>

      {/* Pilates venku přes léto */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <Reveal as="p" y={12} className="eyebrow mb-3">
          Kafeterie · přes léto
        </Reveal>
        <Reveal as="h2" delay={0.05} className="font-display text-3xl md:text-4xl text-bark mb-5 max-w-xl">
          Pilates pod širým nebem
        </Reveal>
        <Reveal delay={0.08} className="mb-10 max-w-xl">
          <p className="text-ink/80 leading-relaxed">
            Přes léto se lekce občas přesouvají ven, do zahrady Kafeterie —
            cvičení na trávě, dobrá káva po ruce.
          </p>
        </Reveal>
        <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6">
          <PhotoGrid
            photos={[
              { src: "/images/prostory/prostory-04.jpg", alt: "Cvičení v zahradě Kafeterie" },
              { src: "/images/prostory/prostory-05.jpg", alt: "Skupinové cvičení venku" },
              { src: "/images/prostory/prostory-06.jpg", alt: "Posezení v Kafeterii" },
              { src: "/images/prostory/prostory-07.jpg", alt: "Snídaně v Kafeterii" },
            ]}
            aspect="aspect-[3/4]"
          />
        </Stagger>
      </section>

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
