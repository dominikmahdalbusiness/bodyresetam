import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import { pilatesPrices, massagePrices, maderoPrices } from "@/lib/pricing";
import { RESERVIO_URL } from "@/lib/reservio";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import { reviews, REVIEWS_RATING, REVIEWS_COUNT } from "@/lib/reviews";

const services = [
  {
    slug: "pilates",
    name: "Pilates",
    desc: "Koncentrace, kontrola a dýchání — pevný střed těla a funkční pohyb bez zbytečné zátěže na klouby.",
    image: "/images/profil/profil-08.jpg",
    imageAlt: "Lekce Pilates",
    price: "160 Kč / lekce",
  },
  {
    slug: "masaze",
    name: "Masáže",
    desc: "Úleva od svalové bolesti, restart organismu a čas, který patří jen vám.",
    image: "/images/profil/profil-05.jpg",
    imageAlt: "Aneta Máčalová",
    price: "od 890 Kč",
  },
  {
    slug: "maderoterapie",
    name: "Maderoterapie",
    desc: "Tvarování postavy a podpora lymfatického systému pomocí dřevěných nástrojů.",
    image: "/images/profil/profil-07.jpg",
    imageAlt: "Maderoterapie v praxi",
    price: "od 850 Kč",
  },
];

const steps = [
  {
    num: "01",
    name: "Vyberte si termín",
    text: "Rezervujte se online, přes Instagram, nebo jednoduše zavolejte. Termíny přizpůsobuji vašim možnostem — Po až Pá dle objednávek.",
  },
  {
    num: "02",
    name: "Přijďte si odpočinout",
    text: "Masáže a maderoterapie probíhají na Moravské 83, lekce Pilates na Hradišťské 2724 v Uherském Brodě. Veškeré pomůcky máte k dispozici.",
  },
  {
    num: "03",
    name: "Vraťte tělu sílu",
    text: "Pravidelná péče přináší výsledky — pevný střed, méně bolesti, lepší spánek a víc energie do dalších dní.",
  },
];

export default function HomePage() {
  const priceTeaser = [pilatesPrices[0], massagePrices[0], maderoPrices[0]];

  return (
    <>
      <Hero />

      {/* Služby */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <Reveal as="p" y={12} className="eyebrow mb-3">
          S čím vám pomůžu
        </Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <Reveal as="h2" delay={0.05} className="font-display text-3xl md:text-4xl text-bark">
            Pohyb i regenerace na jednom místě
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/sluzby"
              className="text-xs uppercase tracking-[0.2em] text-sagedark underline-offset-4 hover:underline"
            >
              Všechny služby →
            </Link>
          </Reveal>
        </div>
        <Stagger className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.slug} className="h-full">
              <ServiceCard
                href={`/sluzby/${s.slug}`}
                name={s.name}
                desc={s.desc}
                image={s.image}
                imageAlt={s.imageAlt}
                price={s.price}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Citát — šalvějový pás */}
      <section className="bg-sage">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <Reveal>
            <p className="font-display text-3xl md:text-4xl italic text-cream leading-snug">
              „Dopřejte si čas, který patří jen vám.“
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-cream/70">
              Aneta · Body Reset
            </p>
          </Reveal>
        </div>
      </section>

      {/* O mně */}
      <section className="mx-auto max-w-6xl px-4 py-20 grid items-center gap-12 md:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="relative mx-auto w-full max-w-xs md:max-w-sm">
          <div aria-hidden className="absolute -left-4 top-4 h-full w-full rounded-arch bg-linen" />
          <div className="relative overflow-hidden rounded-arch">
            <Image
              src="/images/profil/profil-01.jpg"
              alt="Mgr. Aneta Máčalová"
              width={432}
              height={540}
              className="h-auto w-full object-cover aspect-[4/5]"
            />
          </div>
        </Reveal>
        <div>
          <Reveal as="p" y={12} className="eyebrow mb-3">
            O mně
          </Reveal>
          <Reveal as="h2" delay={0.05} className="font-display text-3xl md:text-4xl text-bark mb-6">
            Pohyb je součástí mého života už od malička
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-4 text-ink/80 leading-relaxed">
              Moje cesta mě dovedla až na Fakultu tělesné kultury UP
              v Olomouci, kde jsem sport vystudovala a pochopila, jak komplexní
              systém naše tělo je. Dnes ve své práci propojuji pohyb
              s regenerací — od posílení těla až po hloubkovou úlevu od
              bolesti.
            </p>
            <p className="mb-8 text-ink/80 leading-relaxed">
              Mým cílem je, abyste se ve svém těle cítili zkrátka dobře. Ať už
              se potkáme na podložce, nebo na masérském lehátku, moc se na vás
              těším.
            </p>
            <Link href="/o-mne" className="btn-outline">
              Více o mně
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Recenze */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <Reveal as="p" y={12} className="eyebrow mb-3">
              {REVIEWS_RATING} / 5 · {REVIEWS_COUNT} recenzí na Reservio
            </Reveal>
            <Reveal as="h2" delay={0.05} className="font-display text-3xl md:text-4xl text-bark">
              Co říkají klientky a klienti
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              href="/recenze"
              className="text-xs uppercase tracking-[0.2em] text-sagedark underline-offset-4 hover:underline"
            >
              Všechny recenze →
            </Link>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <ReviewsMarquee reviews={reviews} />
        </Reveal>
      </section>

      {/* Jak to probíhá */}
      <section className="bg-linen relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-leaves bg-cover sm:bg-contain bg-no-repeat bg-left-bottom opacity-55 mix-blend-multiply"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-28">
          <Reveal as="p" y={12} className="eyebrow mb-3">
            Jak to probíhá
          </Reveal>
          <Reveal as="h2" delay={0.05} className="font-display text-3xl md:text-4xl text-bark mb-12">
            Tři kroky k vašemu resetu
          </Reveal>
          <Stagger className="grid gap-10 md:grid-cols-3">
            {steps.map((s) => (
              <StaggerItem key={s.num}>
                <p className="font-display text-5xl italic text-sage mb-4">{s.num}</p>
                <h3 className="font-display text-xl text-bark mb-2">{s.name}</h3>
                <p className="text-sm text-ink/75 leading-relaxed">{s.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Ceník teaser */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] items-start">
          <div>
            <Reveal as="p" y={12} className="eyebrow mb-3">
              Ceník
            </Reveal>
            <Reveal as="h2" delay={0.05} className="font-display text-3xl md:text-4xl text-bark mb-5">
              Férové ceny, žádná překvapení
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-ink/80 mb-8 leading-relaxed">
                Kompletní ceník masáží a maderoterapie včetně permanentek
                a dárkových poukazů najdete na samostatné stránce.
              </p>
              <Link href="/cenik" className="btn-primary">
                Celý ceník
              </Link>
            </Reveal>
          </div>
          <Stagger className="divide-y divide-bark/10 rounded-lg bg-cream px-6 py-2 shadow-sm">
            {priceTeaser.map((p) => (
              <StaggerItem key={p.name} className="flex items-baseline justify-between gap-4 py-4">
                <div>
                  <p className="text-bark">{p.name}</p>
                  {p.duration && (
                    <p className="text-xs uppercase tracking-widest text-ink/50 mt-0.5">
                      {p.duration}
                    </p>
                  )}
                </div>
                <p className="font-display text-xl text-sagedark whitespace-nowrap">{p.price}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA pás */}
      <section className="bg-bark text-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl">
              Rezervujte si svůj <em className="italic text-sage">reset</em>
            </h2>
            <p className="mt-3 text-cream/70 max-w-md">
              Lekce Pilates si vyberete a zarezervujete přímo online. Masáž
              nebo maderoterapii domluvíme telefonicky, nebo přes Instagram.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-3 shrink-0">
            <a
              href={RESERVIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Rezervovat Pilates
            </a>
            <a
              href="tel:+420735248769"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-7 py-3 text-sm font-medium uppercase tracking-widest text-cream transition hover:bg-cream hover:text-bark"
            >
              735 248 769 <span className="normal-case tracking-normal opacity-60">· masáže</span>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
