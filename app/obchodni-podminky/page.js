import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Obchodní podmínky" };

const sections = [
  {
    title: "Poskytovatel služeb",
    body: (
      <p>
        Služby poskytuje Mgr. Aneta Máčalová, IČO: 23884908, se sídlem
        podnikání v Uherském Brodě (dále jen „poskytovatel“).
      </p>
    ),
  },
  {
    title: "Rezervace",
    body: (
      <>
        <p>
          Lekce Pilates se rezervují výhradně přes rezervační systém
          Reservio, a to nejdříve 14 dní předem. Smlouva o poskytnutí služby
          je uzavřena okamžikem potvrzení rezervace.
        </p>
        <p className="mt-3">
          Lekce se koná při minimálním počtu 3 přihlášených účastníků.
          Nenaplní-li se tato kapacita, poskytovatel je oprávněn lekci zrušit.
        </p>
      </>
    ),
  },
  {
    title: "Platba",
    body: (
      <p>
        Platba za lekci probíhá na místě v den konání, hotově nebo
        prostřednictvím QR platby. Reservio slouží pouze jako technický
        nástroj pro rezervaci, nikoliv pro platbu.
      </p>
    ),
  },
  {
    title: "Storno podmínky",
    body: (
      <p>
        Rezervaci lze bezplatně zrušit přes Reservio nejpozději 12 hodin
        před sjednaným termínem. Při pozdějším zrušení nebo nedostavení se
        bez omluvy je účtován storno poplatek ve výši 100 % ceny lekce.
        Poskytovatel je oprávněn do uhrazení dlužné částky pozastavit
        možnost dalších rezervací.
      </p>
    ),
  },
  {
    title: "Příchod na lekci",
    body: (
      <p>
        Doporučujeme dostavit se 5–10 minut před začátkem lekce. Lekce
        probíhají bosí, obuv se nechává v šatně. Účastníci si na lekci nosí
        vlastní podložku a pohodlné cvičební oblečení.
      </p>
    ),
  },
  {
    title: "Zdravotní stav a odpovědnost",
    body: (
      <>
        <p>
          Služby poskytované Body Reset nejsou zdravotní službou. Účastník je
          povinen předem nahlásit poskytovatelce svůj zdravotní stav,
          zranění, těhotenství či jiná omezení. Poskytovatelka je v takovém
          případě oprávněna službu odmítnout nebo přerušit.
        </p>
        <p className="mt-3">
          Poskytovatelka nenese odpovědnost za újmu vzniklou v důsledku
          nenahlášených zdravotních omezení nebo nedbalosti účastníka.
        </p>
      </>
    ),
  },
  {
    title: "Osobní věci",
    body: (
      <p>
        Poskytovatelka neručí za cennosti a osobní věci ponechané mimo
        vyhrazený prostor bez dozoru.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mgr. Aneta Máčalová · IČO 23884908"
        title="Obchodní podmínky"
        lead="Podmínky rezervace a poskytování lekcí Pilates a dalších služeb Body Reset v Uherském Brodě."
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
