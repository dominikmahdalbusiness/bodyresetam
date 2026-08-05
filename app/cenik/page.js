import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import {
  pilatesPrices,
  massagePrices,
  maderoPrices,
  extras,
  PRICE_LIST_VALID_FROM,
} from "@/lib/pricing";
import { RESERVIO_URL } from "@/lib/reservio";

export const metadata = {
  title: "Ceník",
  description:
    "Ceník masáží a maderoterapie Body Reset v Uherském Brodě. Masáže od 890 Kč, maderoterapie od 850 Kč, permanentky i dárkové poukazy.",
};

function PriceGroup({ title, items }) {
  return (
    <div className="rounded-t-[6rem] rounded-b-lg bg-cream px-6 pt-10 pb-4 shadow-sm md:px-8">
      <h2 className="font-display text-2xl text-bark text-center mb-4">{title}</h2>
      <Stagger className="divide-y divide-bark/10">
        {items.map((p) => (
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
            <p className="font-display text-xl text-sagedark whitespace-nowrap text-right">
              {p.price}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

export default function CenikPage() {
  return (
    <>
      <PageHeader
        eyebrow={`Platný od ${PRICE_LIST_VALID_FROM}`}
        title="Ceník"
        lead="Masáže a maderoterapie na Moravské 83 v Uherském Brodě. Platba je možná hotově i kartou, dárkové poukazy vystavím dle vašeho výběru."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3 items-start">
          <PriceGroup title="Pilates" items={pilatesPrices} />
          <PriceGroup title="Masáže" items={massagePrices} />
          <div className="space-y-8">
            <PriceGroup title="Maderoterapie" items={maderoPrices} />
            <PriceGroup title="Doplňky" items={extras} />
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-lg bg-linen px-6 py-8 md:px-8 flex flex-col">
            <h2 className="font-display text-2xl text-bark">Lekce Pilates</h2>
            <p className="mt-2 text-sm text-ink/75 leading-relaxed">
              Skupinové lekce probíhají v úterý a ve čtvrtek na Hradišťské
              2724. Všechny termíny a volná místa najdete přímo v rezervačním
              systému Reservio.
            </p>
            <a
              href={RESERVIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-5 self-start"
            >
              Otevřít rezervace
            </a>
          </Reveal>

          <Reveal delay={0.05} className="rounded-lg bg-linen px-6 py-8 md:px-8 flex flex-col">
            <h2 className="font-display text-2xl text-bark">Masáže a maderoterapie</h2>
            <p className="mt-2 text-sm text-ink/75 leading-relaxed">
              Termín na Moravské 83 domlouváme telefonicky, nebo přes
              Instagram — Reservio slouží jen k rezervaci lekcí Pilates.
            </p>
            <a href="tel:+420735248769" className="btn-primary mt-5 self-start">
              Zavolat 735 248 769
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.05} className="mt-10 text-center">
          <p className="text-sm text-ink/70">
            Chcete někoho potěšit?{" "}
            <Link href="/kontakt" className="underline underline-offset-4 hover:text-sagedark">
              Napište si o dárkový poukaz
            </Link>{" "}
            — sestavím ho přesně podle vašeho výběru.
          </p>
        </Reveal>
      </section>
    </>
  );
}
