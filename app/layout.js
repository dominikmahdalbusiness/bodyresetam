import "./globals.css";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = Jost({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

export const metadata = {
  title: {
    default: "Body Reset — masáže, maderoterapie a pilates | Uherský Brod",
    template: "%s — Body Reset",
  },
  description:
    "Masáže, maderoterapie a lekce Pilates v Uherském Brodě. Mgr. Aneta Máčalová — propojuji pohyb s regenerací, abyste se ve svém těle cítili dobře. Rezervace online.",
  keywords: [
    "masáže Uherský Brod",
    "maderoterapie Uherský Brod",
    "pilates Uherský Brod",
    "Body Reset",
  ],
  openGraph: {
    title: "Body Reset — masáže, maderoterapie a pilates",
    description:
      "Prostor, kde si vaše tělo odpočine a najde zpátky sílu. Uherský Brod.",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen flex flex-col font-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
