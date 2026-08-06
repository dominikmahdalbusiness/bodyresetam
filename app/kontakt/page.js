import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import { RESERVIO_URL } from "@/lib/reservio";

export const metadata = {
  title: "Kontakt",
  description:
    "Kontakt na Body Reset — masáže a maderoterapie na Moravské 83, Pilates na Hradišťské 2724 v Uherském Brodě. Telefon 735 248 769.",
};

const places = [
  {
    name: "Masáže & maderoterapie",
    address: "Moravská 83, Uherský Brod",
    note: "Po–Pá dle objednávek",
    mapQuery: "Moravská 83, Uherský Brod",
  },
  {
    name: "Pilates",
    address: "Hradišťská 2724, Uherský Brod",
    note: "Úterý a čtvrtek, 16:00–18:30",
    mapQuery: "Hradišťská 2724, Uherský Brod",
  },
];

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        eyebrow="Uherský Brod"
        title="Kontakt"
        lead="Lekce Pilates si zarezervujete přímo online přes Reservio. Masáž nebo maderoterapii domluvíme telefonicky, nebo přes Instagram."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <Stagger className="grid gap-6 md:grid-cols-2 mb-12">
          {places.map((p) => (
            <StaggerItem key={p.name} className="rounded-lg bg-cream p-7 shadow-sm">
              <h2 className="font-display text-2xl text-bark mb-2">{p.name}</h2>
              <p className="text-ink/80">{p.address}</p>
              <p className="text-sm text-ink/60 mt-1">{p.note}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-xs uppercase tracking-[0.2em] text-sagedark underline-offset-4 hover:underline"
              >
                Otevřít v mapách →
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="rounded-lg bg-linen p-8 relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-leaves bg-cover sm:bg-contain bg-no-repeat bg-right-top opacity-55 mix-blend-multiply"
          />
          <div className="relative grid gap-8 sm:grid-cols-3">
            <div>
              <p className="eyebrow mb-2">Masáže &amp; maderoterapie</p>
              <a href="tel:+420735248769" className="font-display text-xl text-bark hover:text-sagedark transition-colors">
                +420 735 248 769
              </a>
              <p className="text-xs text-ink/60 mt-1">Termín domluvíme telefonicky.</p>
            </div>
            <div>
              <p className="eyebrow mb-2">Instagram</p>
              <a
                href="https://www.instagram.com/bodyreset.am/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-xl text-bark hover:text-sagedark transition-colors"
              >
                @bodyreset.am
              </a>
              <p className="text-xs text-ink/60 mt-1">Nejrychlejší odpověď.</p>
            </div>
            <div>
              <p className="eyebrow mb-2">Pilates — rezervace online</p>
              <a
                href={RESERVIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-xl text-bark hover:text-sagedark transition-colors"
              >
                body-reset.reservio.com
              </a>
              <p className="text-xs text-ink/60 mt-1">Jen pro lekce Pilates.</p>
            </div>
          </div>
          <p className="relative mt-8 pt-6 border-t border-bark/10 text-xs text-ink/60">
            Odpovědná osoba: Mgr. Aneta Máčalová · IČO: 23884908
          </p>
        </Reveal>
      </section>
    </>
  );
}
