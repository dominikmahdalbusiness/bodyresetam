# Body Reset — web s rezervačním systémem

Next.js + Supabase (databáze rezervací) + Netlify (hosting).

## Stav projektu

Fáze 1–2 hotové (struktura + stránky), fáze 3 rozpracovaná (rezervační systém
funkční na úrovni kódu, potřebuje reálný Supabase projekt a data). Zbývá:
skutečný obsah/fotky, e-mailová potvrzení, admin rozhraní pro klientku, design.

## Setup — první spuštění

1. **Supabase**
   - Založ nový projekt na [supabase.com](https://supabase.com) (free tier stačí na start)
   - V SQL editoru spusť obsah `supabase/schema.sql`
   - V Project Settings → API najdeš `URL`, `anon public key` a `service_role key`

2. **Lokální proměnné**
   ```
   cp .env.example .env.local
   ```
   a vyplň hodnoty ze Supabase.

3. **Instalace a spuštění**
   ```
   npm install
   npm run dev
   ```
   Web poběží na http://localhost:3000

4. **Testovací data** — v Supabase Table editoru přidej pár řádků do `services`
   a `time_slots`, ať máš co rezervovat.

## Nasazení na Netlify

1. Push repozitáře na GitHub (stejně jako u fillglass-web)
2. V Netlify: New site from Git → vyber repo
3. Site settings → Environment variables → vlož všechny 4 proměnné z `.env.example`
   (se skutečnými hodnotami ze Supabase)
4. Build command i publish directory se nastaví automaticky z `netlify.toml`
5. Doména: stejný postup jako u Fillglassu (DNS u registrátora → Netlify)

## Bezpečnostní poznámky (nezapomenout před ostrým spuštěním)

- [ ] `SUPABASE_SERVICE_ROLE_KEY` je jen v Netlify env vars, nikdy v gitu
- [ ] Přidat hCaptcha/Turnstile na `/rezervace` formulář (zatím jen rate limit)
- [ ] Nastavit e-mailová potvrzení (Resend doporučeno) — viz TODO v `app/api/reservations/route.js`
- [ ] Nechat obsah `/ochrana-osobnich-udaju` a `/obchodni-podminky` zkontrolovat
- [ ] Založit admin přístup pro klientku (Supabase Auth) na správu termínů — zatím
      se termíny vkládají ručně přes Supabase Table editor

## Struktura

```
app/           — stránky (App Router)
app/api/       — API endpointy (rezervace)
components/    — Header, Footer, BookingForm
lib/           — Supabase klienti (veřejný + server)
supabase/      — SQL schéma a bezpečnostní politiky (RLS)
```
