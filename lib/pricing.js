// Ceník dle tiskoviny klientky (docs/1.png) — platný od 1. 7. 2026.
// Cena lekcí Pilates dle rezervačního systému Reservio (body-reset.reservio.com).

export const PRICE_LIST_VALID_FROM = "1. 7. 2026";

export const pilatesPrices = [
  { name: "Mat Pilates", duration: "50 min", price: "160 Kč", desc: "Dynamičtější, intenzivnější tempo." },
  {
    name: "Slow & Gentle Pilates",
    duration: "50 min",
    price: "160 Kč",
    desc: "Pro začátečníky, pomalejší tempo.",
  },
  { name: "Morning Pilates Flow", duration: "50 min", price: "160 Kč" },
  { name: "Individuální lekce — 1 osoba", duration: "50 min", price: "750 Kč" },
  { name: "Individuální lekce — 2 osoby", duration: "50 min", price: "890 Kč" },
  { name: "Permanentka — 12 lekcí (11+1 zdarma)", duration: "", price: "1 760 Kč" },
];

export const massagePrices = [
  { name: "Hloubková uvolňující masáž", duration: "50 min", price: "890 Kč" },
  { name: "Kombinace relaxace a uvolnění", duration: "60 min", price: "990 Kč" },
  { name: "Celotělová relaxační masáž", duration: "90 min", price: "1 390 Kč" },
];

export const maderoPrices = [
  { name: "Maderoterapie", duration: "50 min", price: "850 Kč" },
  { name: "Permanentka — 10× vstup maderoterapie", duration: "", price: "7 700 Kč" },
];

export const extras = [
  { name: "Kineziologické tejpy", duration: "", price: "200 Kč + 2 Kč / 2 cm" },
  { name: "Dárkové poukazy", duration: "", price: "dle vlastního výběru" },
];
