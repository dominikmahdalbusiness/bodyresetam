import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { Stagger } from "@/components/Stagger";
import PhotoGrid from "@/components/PhotoGrid";

export const metadata = {
  title: "Prostory",
  description:
    "Nahlédněte do prostor Body Reset v Uherském Brodě — studio na Hradišťské i ošetřovna na Moravské 83.",
};

const photos = [
  { src: "/images/prostory/prostory-01.jpg", alt: "Ošetřovna na Moravské 83" },
  { src: "/images/prostory/prostory-02.jpg", alt: "Studio Pilates na Hradišťské" },
  { src: "/images/prostory/prostory-03.jpg", alt: "Detail studia s rostlinou" },
  { src: "/images/prostory/prostory-04.jpg", alt: "Klidový kout k odpočinku" },
  { src: "/images/prostory/prostory-05.jpg", alt: "Prostor pro cvičení" },
  { src: "/images/prostory/prostory-06.jpg", alt: "Posezení po lekci" },
];

export default function ProstoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Uherský Brod"
        title="Prostory"
        lead="Útulné studio na Hradišťské pro lekce Pilates a klidná ošetřovna na Moravské 83 pro masáže i maderoterapii — nahlédněte, kde vás čekám."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
            <PhotoGrid photos={photos} aspect="aspect-[3/4]" />
          </Stagger>
        </Reveal>

        <div className="mx-auto max-w-2xl mt-14 text-center">
          <Reveal delay={0.05}>
            <p className="text-ink/70 mb-5">
              Ráda vás u sebe přivítám osobně — stačí se zastavit na lekci
              nebo si domluvit termín.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+420735248769" className="btn-primary">
                Zavolat 735 248 769
              </a>
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
