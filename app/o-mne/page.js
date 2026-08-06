import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";

export const metadata = {
  title: "O mně",
  description:
    "Mgr. Aneta Máčalová — absolventka FTK UP v Olomouci, certifikovaná lektorka Pilates a masérka v Uherském Brodě.",
};

const facts = [
  {
    label: "Vzdělání",
    text: "Absolventka Fakulty tělesné kultury UP v Olomouci.",
  },
  {
    label: "Specializace",
    text: "Certifikovaná lektorka Pilates a masérka.",
  },
  {
    label: "Cesta",
    text: "Neustále se vzdělávám, abych vám mohla nabídnout to nejlepší – od posílení těla až po hloubkovou úlevu od bolesti.",
  },
  {
    label: "Můj relax",
    text: "Dlouhé procházky se psem a čas s nejbližšími.",
  },
];

export default function OMnePage() {
  return (
    <>
      <PageHeader
        eyebrow="Mgr. Aneta Máčalová"
        title="O mně"
        lead="Ahoj, jmenuji se Aneta a pohyb je součástí mého života už od malička."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 grid gap-12 md:grid-cols-[0.85fr_1.15fr] items-start">
        <Reveal className="relative mx-auto w-full max-w-xs md:max-w-sm md:sticky md:top-24">
          <div aria-hidden className="absolute -right-4 top-4 h-full w-full rounded-arch bg-sage/40" />
          <div className="relative overflow-hidden rounded-arch shadow-lg shadow-bark/10">
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
          <Reveal>
            <p className="mb-4 text-lg text-ink/85 leading-relaxed">
              Moje cesta mě dovedla až na Fakultu tělesné kultury v Olomouci,
              kde jsem sport vystudovala a pochopila, jak komplexní systém
              naše tělo je.
            </p>
            <p className="mb-10 text-ink/80 leading-relaxed">
              Dnes ve své práci propojuji pohyb s regenerací, abych vám
              pomohla cítit se lépe — od posílení středu těla na lekcích
              Pilates až po hloubkovou úlevu od bolesti při masážích
              a maderoterapii.
            </p>
          </Reveal>

          <Stagger as="dl" className="grid gap-x-8 gap-y-6 sm:grid-cols-2 mb-10">
            {facts.map((f) => (
              <StaggerItem key={f.label} className="border-l-2 border-sage pl-4">
                <dt className="font-display text-lg text-sagedark mb-1">{f.label}</dt>
                <dd className="text-sm text-ink/75 leading-relaxed">{f.text}</dd>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal>
            <p className="font-display text-2xl italic text-bark mb-8 leading-snug">
              „Mým cílem je, abyste se ve svém těle cítili zkrátka dobře. Ať
              už se potkáme na podložce, nebo na masérském lehátku, moc se na
              vás těším.“
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn-primary">
                Rezervovat termín
              </Link>
              <a
                href="https://www.instagram.com/bodyreset.am/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
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
