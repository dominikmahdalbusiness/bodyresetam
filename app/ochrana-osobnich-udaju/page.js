export const metadata = { title: "Ochrana osobních údajů — Body Reset" };

export default function GdprPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 prose">
      <h1 className="font-display text-3xl mb-4">Ochrana osobních údajů</h1>
      <p className="italic">
        Toto je pracovní verze textu. Před spuštěním webu doporučuju nechat obsah
        zkontrolovat (stačí i neformálně) — jde o poctivé shrnutí GDPR povinností,
        ne právní poradenství.
      </p>
      <h2>Jaké údaje zpracováváme</h2>
      <p>
        Při rezervaci termínu zpracováváme jméno, e-mail, telefonní číslo a
        nepovinnou poznámku k rezervaci.
      </p>
      <h2>Účel zpracování</h2>
      <p>Údaje slouží výhradně k domluvení a potvrzení termínu služby.</p>
      <h2>Doba uchování</h2>
      <p>{/* TODO: doplnit konkrétní dobu, např. 12 měsíců od poslední návštěvy */}</p>
      <h2>Vaše práva</h2>
      <p>
        Máte právo na přístup ke svým údajům, jejich opravu, výmaz nebo omezení
        zpracování. Kontaktujte nás na {/* TODO: e-mail */}.
      </p>
    </section>
  );
}
