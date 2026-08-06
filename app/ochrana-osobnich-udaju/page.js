import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Ochrana osobních údajů" };

const sections = [
  {
    title: "Správce údajů",
    body: (
      <p>
        Správcem osobních údajů je Mgr. Aneta Máčalová, IČO: 23884908, se
        sídlem podnikání v Uherském Brodě.
      </p>
    ),
  },
  {
    title: "Jaké údaje zpracováváme",
    body: (
      <p>
        Jméno, příjmení a případný titul, e-mail, telefonní číslo,
        korespondenční adresu, údaje o rezervacích a historii služeb,
        platební a fakturační údaje a záznamy komunikace (e-maily, zprávy,
        SMS). Při návštěvě webu dále technické údaje jako IP adresa, cookies
        a informace o prohlížeči.
      </p>
    ),
  },
  {
    title: "Účel zpracování",
    body: (
      <p>
        Údaje zpracováváme za účelem poskytnutí a správy rezervace, plnění
        účetních a daňových povinností, zabezpečení systému a případně
        zlepšování služeb.
      </p>
    ),
  },
  {
    title: "Doba uchování",
    body: (
      <p>
        Údaje související s rezervací a účetnictvím uchováváme po dobu 5 let
        od poskytnutí služby. Údaje pro marketingové účely po dobu trvání
        uděleného souhlasu. Technické údaje po dobu 1 roku.
      </p>
    ),
  },
  {
    title: "Komu údaje předáváme",
    body: (
      <p>
        Přístup k údajům mají v nezbytném rozsahu poskytovatel rezervačního
        systému Reservio a externí poskytovatelé účetních a právních služeb.
        Údaje nepředáváme žádným dalším třetím stranám.
      </p>
    ),
  },
  {
    title: "Vaše práva",
    body: (
      <p>
        Máte právo na přístup ke svým osobním údajům, jejich opravu, výmaz
        nebo omezení zpracování, přenositelnost údajů a právo podat stížnost
        u Úřadu pro ochranu osobních údajů.
      </p>
    ),
  },
  {
    title: "Kontakt",
    body: (
      <p>
        Ohledně svých osobních údajů nás můžete kontaktovat na e-mailu{" "}
        <a
          href="mailto:bodyreset.am@email.cz"
          className="underline underline-offset-4 hover:text-sagedark"
        >
          bodyreset.am@email.cz
        </a>{" "}
        nebo telefonicky na{" "}
        <a href="tel:+420735248769" className="underline underline-offset-4 hover:text-sagedark">
          +420 735 248 769
        </a>
        .
      </p>
    ),
  },
];

export default function GdprPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mgr. Aneta Máčalová · IČO 23884908"
        title="Ochrana osobních údajů"
        lead="Jak zpracováváme osobní údaje v souvislosti s rezervacemi a provozem webu Body Reset."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 space-y-10">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="font-display text-2xl text-bark mb-3">{s.title}</h2>
            <div className="text-ink/80 leading-relaxed">{s.body}</div>
          </div>
        ))}
      </section>
    </>
  );
}
