import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import PhotoStack from "@/components/PhotoStack";
import { Stagger, StaggerItem } from "@/components/Stagger";
import { pilatesPrices } from "@/lib/pricing";
import { RESERVIO_URL } from "@/lib/reservio";

export const metadata = {
  title: "Pilates",
  description:
    "Skupinové lekce Pilates v Uherském Brodě — pevný střed těla, funkční pohyb a mentální reset. Úterý a čtvrtek, Hradišťská 2724.",
};

const principles = [
  { name: "Koncentrace", text: "Mysl vede tělo." },
  { name: "Kontrola", text: "Každý pohyb má svůj smysl." },
  { name: "Centrace", text: "Síla vychází ze středu těla, zevnitř." },
  { name: "Preciznost", text: "Kvalita nad kvantitou." },
  { name: "Plynulost", text: "Ladnost v každém přechodu." },
  { name: "Dýchání", text: "Palivo pro vaše svaly." },
];

const benefits = [
  "Pevný střed těla a pánevní dno",
  "Funkční tělo bez zbytečného přetěžování kloubů",
  "Šetrné zpevnění a tvarování postavy",
  "Lepší flexibilita a rozsah pohybu",
  "Správné a vzpřímené držení těla",
  "Mentální reset a méně stresu díky plné koncentraci",
  "Konec bolesti zad a šíje",
];

const tools = ["Činky", "Overball", "Gumy", "Yoga blok"];

export default function PilatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Úterý a čtvrtek · Hradišťská 2724, Uherský Brod"
        title="Pilates"
        lead="Pilates pro mě není jen o aktuální formě či vzhledu. Je to strategie, jak si udržet funkční tělo co nejdéle — nejde o bezduché opakování, ale o to, jak se v pohybu cítíte."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 grid gap-12 md:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <Reveal as="h2" className="font-display text-2xl md:text-3xl text-bark mb-6">
            Principy, na kterých stavím každou lekci
          </Reveal>
          <Stagger as="dl" className="grid gap-x-8 gap-y-5 sm:grid-cols-2 mb-12">
            {principles.map((p) => (
              <StaggerItem key={p.name}>
                <dt className="font-display text-lg text-sagedark mb-0.5">{p.name}</dt>
                <dd className="text-sm text-ink/75">{p.text}</dd>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal as="h2" className="font-display text-2xl md:text-3xl text-bark mb-5">
            Co vám pilates přinese
          </Reveal>
          <Stagger as="ul" className="space-y-2.5 mb-10">
            {benefits.map((b) => (
              <StaggerItem as="li" key={b} className="flex gap-3 text-ink/80">
                <span aria-hidden className="text-sage">✦</span>
                <span>{b}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="md:sticky md:top-24">
          <Reveal className="mb-16 md:mb-20">
            <PhotoStack
              main={{
                src: "/images/profil/profil-08.jpg",
                alt: "Lekce Pilates",
              }}
              accent={{
                src: "/images/profil/profil-04.jpg",
                alt: "Detail práce s pilates míčem",
              }}
              align="right"
            />
          </Reveal>
          <Reveal delay={0.1} className="rounded-lg bg-cream p-6 shadow-sm">
            <p className="eyebrow mb-3">Varianty lekcí</p>
            <Stagger className="divide-y divide-bark/10">
              {pilatesPrices.map((p) => (
                <StaggerItem key={p.name} className="py-3">
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <p className="text-bark text-sm">{p.name}</p>
                      {p.duration && (
                        <p className="text-xs uppercase tracking-widest text-ink/50 mt-0.5">
                          {p.duration}
                        </p>
                      )}
                    </div>
                    <p className="font-display text-lg text-sagedark whitespace-nowrap">
                      {p.price}
                    </p>
                  </div>
                  {p.desc && <p className="mt-1 text-xs text-ink/60">{p.desc}</p>}
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          <Reveal delay={0.15} className="mt-6 rounded-lg bg-cream p-6 shadow-sm">
            <p className="eyebrow mb-3">Na lekci máte k dispozici</p>
            <ul className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <li
                  key={t}
                  className="rounded-full bg-linen px-4 py-1.5 text-sm text-bark"
                >
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-ink/70 leading-relaxed">
              Stačí pohodlné oblečení, protiskluzové ponožky a vlastní
              podložku. Volná místa najdete v rezervačním systému.
            </p>
            <a
              href={RESERVIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-5 w-full"
            >
              Rezervovat lekci
            </a>
          </Reveal>
        </div>
      </section>

      <section className="bg-sage">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center">
          <Reveal>
            <p className="font-display text-2xl md:text-3xl italic text-cream leading-snug">
              „Kvalitní pohyb je volba, kterou děláte pro sebe a své budoucí
              já.“
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
