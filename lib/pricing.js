// Ceník dle tiskoviny klientky (docs/1.png) — platný od 1. 7. 2026.
// Cena lekcí Pilates dle rezervačního systému Reservio (body-reset.reservio.com).

export const PRICE_LIST_VALID_FROM = "1. 7. 2026";

export const pilatesPrices = [
  { name: "Mat Pilates", duration: "50 min", price: "160 Kč" },
  { name: "Slow & Gentle Pilates", duration: "50 min", price: "160 Kč" },
  { name: "Morning Pilates Flow", duration: "50 min", price: "160 Kč" },
  { name: "Permanentka — 12 lekcí (11+1 zdarma)", duration: "", price: "1 760 Kč" },
];

export const massagePrices = [
  {
    name: "Hloubková uvolňující masáž",
    duration: "50 min",
    price: "890 Kč",
    desc: "Úleva od akutní i chronické bolesti — bolest zad, blokády a podobně.",
  },
  {
    name: "Kombinace relaxace a uvolnění",
    duration: "60 min",
    price: "990 Kč",
    desc: "Vyvážená masáž zadní linie těla — kus relaxace, kus uvolnění.",
  },
  {
    name: "Celotělová relaxační masáž",
    duration: "90 min",
    price: "1 390 Kč",
    desc: "Když si přejete tělo kompletně zresetovat.",
  },
];

export const maderoPrices = [
  { name: "Maderoterapie", duration: "50 min", price: "850 Kč" },
  { name: "Permanentka — 10× vstup maderoterapie", duration: "", price: "7 700 Kč" },
];

export const extras = [
  { name: "Kineziologické tejpy", duration: "", price: "200 Kč + 2 Kč / 2 cm" },
  { name: "Dárkové poukazy", duration: "", price: "dle vlastního výběru" },
];
