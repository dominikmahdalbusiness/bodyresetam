import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import { Stagger, StaggerItem } from "@/components/Stagger";

export const metadata = {
  title: "Služby",
  description:
    "Pilates, masáže a maderoterapie v Uherském Brodě — pohyb i regenerace na jednom místě.",
};

const services = [
  {
    slug: "pilates",
    name: "Pilates",
    desc: "Pevný střed těla, funkční pohyb a mentální reset — na podložce, s vlastní vahou i pomůckami.",
    image: "/images/eventy/eventy-09.jpg",
    imageAlt: "Skupinová lekce Pilates ve studiu",
    imageAspect: "aspect-[3/4]",
    price: "160 Kč / lekce",
  },
  {
    slug: "masaze",
    name: "Masáže",
    desc: "Úleva od svalové bolesti, restart organismu a čas jen pro vás.",
    image: "/images/profil/profil-05.jpg",
    imageAlt: "Aneta Máčalová",
    price: "od 890 Kč",
  },
  {
    slug: "maderoterapie",
    name: "Maderoterapie",
    desc: "Tvarování postavy a podpora prokrvení pomocí dřevěných nástrojů.",
    image: "/images/maderoterapie-tool.jpg",
    imageAlt: "Sada dřevěných nástrojů pro maderoterapii",
    imageAspect: "aspect-square",
    price: "od 850 Kč",
  },
];

export default function SluzbyPage() {
  return (
    <>
      <PageHeader
        eyebrow="S čím vám pomůžu"
        title="Služby"
        lead="Ať potřebujete posílit, uvolnit, nebo protvarovat — všechno najdete na jednom místě v Uherském Brodě."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Stagger className="grid items-start gap-6 md:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.slug}>
              <ServiceCard
                href={`/sluzby/${s.slug}`}
                name={s.name}
                desc={s.desc}
                image={s.image}
                imageAlt={s.imageAlt}
                imageAspect={s.imageAspect}
                price={s.price}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
