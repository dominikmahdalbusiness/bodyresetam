import Link from "next/link";
import { RESERVIO_URL } from "@/lib/reservio";

export default function Footer() {
  return (
    <footer className="mt-20 bg-bark text-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <p className="font-display text-2xl tracking-[0.12em]">
            Bodyreset<span className="text-sage">.am</span>
          </p>
          <p className="mt-3 text-sm text-cream/70 leading-relaxed">
            Masáže, maderoterapie a lekce Pilates v Uherském Brodě. Mým cílem
            je, abyste se ve svém těle cítili zkrátka dobře.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-cream/50">
            Po–Pá dle objednávek
          </p>
        </div>

        <div>
          <p className="eyebrow !text-sage mb-4">Kde mě najdete</p>
          <ul className="space-y-3 text-sm text-cream/80">
            <li>
              <span className="block text-cream">Masáže &amp; maderoterapie</span>
              Moravská 83, Uherský Brod
            </li>
            <li>
              <span className="block text-cream">Pilates</span>
              Hradišťská 2724, Uherský Brod
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow !text-sage mb-4">Kontakt</p>
          <ul className="space-y-3 text-sm text-cream/80">
            <li>
              <a href="tel:+420735248769" className="hover:text-cream transition-colors">
                +420 735 248 769
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/bodyreset.am/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream transition-colors"
              >
                Instagram @bodyreset.am
              </a>
            </li>
            <li>
              <a
                href={RESERVIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream transition-colors"
              >
                Pilates — Reservio
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-6xl px-4 py-5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs text-cream/50">
          <p>
            &copy; {new Date().getFullYear()} Body Reset · Mgr. Aneta Máčalová ·
            IČO: 23884908
          </p>
          <div className="flex gap-5">
            <Link href="/ochrana-osobnich-udaju" className="hover:text-cream transition-colors">
              Ochrana osobních údajů
            </Link>
            <Link href="/obchodni-podminky" className="hover:text-cream transition-colors">
              Obchodní podmínky
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
