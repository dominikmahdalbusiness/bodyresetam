// Ceník dle tiskoviny klientky (docs/1.png) — platný od 1. 7. 2026.
// Cena lekcí Pilates dle rezervačního systému Reservio (body-reset.reservio.com).

export const PRICE_LIST_VALID_FROM = "1. 7. 2026";

export const pilatesPrices = [
  { name: "Mat Pilates", duration: "50 min", price: "160 Kč" },
  { name: "Slow & Gentle Pilates", duration: "50 min", price: "160 Kč" },
  { name: "Morning Pilates Flow", duration: "50 min", price: "160 Kč" },
];

export const massagePrices = [
  { name: "Masáž — záda, šíje a hýždě", duration: "50 min", price: "890 Kč" },
  { name: "Masáž — zadní linie těla", duration: "60 min", price: "990 Kč" },
  { name: "Masáž — celotělová", duration: "90 min", price: "1 390 Kč" },
];

export const maderoPrices = [
  { name: "Maderoterapie", duration: "50 min", price: "850 Kč" },
  { name: "Permanentka — 10× vstup maderoterapie", duration: "", price: "7 700 Kč" },
];

export const extras = [
  { name: "Kineziologické tejpy", duration: "", price: "200 Kč + 2 Kč / 2 cm" },
  { name: "Dárkové poukazy", duration: "", price: "dle vlastního výběru" },
];
