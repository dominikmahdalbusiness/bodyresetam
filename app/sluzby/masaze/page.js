import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import PhotoStack from "@/components/PhotoStack";
import { Stagger, StaggerItem } from "@/components/Stagger";
import { massagePrices } from "@/lib/pricing";

export const metadata = {
  title: "Masáže",
  description:
    "Masáže v Uherském Brodě — úleva od svalové bolesti, podpora regenerace a čas jen pro vás. Moravská 83, od 890 Kč.",
};

const benefits = [
  {
    name: "Okamžitá úleva",
    text: "Efektivní zmírnění či úplné odstranění svalové bolesti.",
  },
  {
    name: "Restart organismu",
    text: "Intenzivní podpora regenerace celého těla.",
  },
  {
    name: "Posílení imunity",
    text: "Aktivace lymfatického systému a posílení obranyschopnosti.",
  },
  {
    name: "Kvalitní spánek a hormonální rovnováha",
    text: "Snížení hladiny kortizolu a stimulace produkce melatoninu a serotoninu.",
  },
  {
    name: "Psychická odolnost",
    text: "Snížení stresu a úzkostných stavů.",
  },
  {
    name: "Absolutní regenerace",
    text: "Maximální relaxace pro tělo i mysl.",
  },
];

export default function MasazePage() {
  return (
    <>
      <PageHeader
        eyebrow="Moravská 83, Uherský Brod"
        title="Masáže"
        lead="Dopřejte si čas, který patří jen vám. Masáž vám pomůže s regenerací celého těla i mysli — ať už řešíte svalovou bolest, nebo si chcete jen odpočinout."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 grid gap-12 md:grid-cols-[0.9fr_1.1fr] items-start">
        <Reveal className="md:sticky md:top-24 mb-6 md:mb-0">
          <PhotoStack
            main={{
              src: "/images/profil/profil-05.jpg",
              alt: "Aneta Máčalová",
            }}
            align="right"
          />
        </Reveal>

        <div>
          <Reveal as="h2" className="font-display text-2xl md:text-3xl text-bark mb-6">
            Co vám masáž přinese
          </Reveal>
          <Stagger as="dl" className="grid gap-x-8 gap-y-6 sm:grid-cols-2 mb-12">
            {benefits.map((b) => (
              <StaggerItem key={b.name}>
                <dt className="font-display text-lg text-sagedark mb-1">{b.name}</dt>
                <dd className="text-sm text-ink/75 leading-relaxed">{b.text}</dd>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal as="h2" className="font-display text-2xl md:text-3xl text-bark mb-5">
            Varianty a ceny
          </Reveal>
          <Stagger className="divide-y divide-bark/10 rounded-lg bg-cream px-6 py-2 shadow-sm mb-4">
            {massagePrices.map((p) => (
              <StaggerItem key={p.name} className="py-4">
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <p className="text-bark">{p.name}</p>
                    <p className="text-xs uppercase tracking-widest text-ink/50 mt-0.5">
                      {p.duration}
                    </p>
                  </div>
                  <p className="font-display text-xl text-sagedark whitespace-nowrap">
                    {p.price}
                  </p>
                </div>
                {p.desc && (
                  <p className="mt-2 text-sm text-ink/70 leading-relaxed">{p.desc}</p>
                )}
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal>
            <p className="text-xs text-ink/50 mb-6">
              Masáž vám vždy přizpůsobím individuálně po krátké konzultaci na
              místě.
            </p>
            <p className="text-sm text-ink/70 mb-4">
              Termín masáže domlouváme telefonicky nebo přes Instagram —
              Reservio slouží jen k rezervaci lekcí Pilates.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+420735248769" className="btn-primary">
                Zavolat 735 248 769
              </a>
              <Link href="/cenik" className="btn-outline">
                Celý ceník
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
