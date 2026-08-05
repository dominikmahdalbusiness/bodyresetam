/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand paleta odvozená z tiskovin klientky (ceník + vizitka)
        sand: "#EFEAE1",     // hlavní pozadí stránky
        linen: "#E4DBCC",    // alternativní/tmavší béžové pozadí sekcí
        cream: "#FBF9F4",    // karty, text na tmavém
        sage: "#93A17E",     // šalvějová zelená (ceník)
        sagedark: "#6E7C5C", // tmavší zelená pro hovery a text na světlém
        bark: "#54402C",     // hnědá z vizitky — nadpisy, akcenty
        ink: "#37322B",      // základní barva textu
        // Aliasy původní palety — používají je starší komponenty (BookingForm, právní stránky)
        clay: "#93A17E",
        moss: "#6E7C5C",
        charcoal: "#37322B",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "999px 999px 0 0",
      },
      backgroundImage: {
        leaves: "url('/images/leaf-bg.png')",
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "marquee-left": "marquee-left 50s linear infinite",
        "marquee-right": "marquee-right 60s linear infinite",
      },
    },
  },
  plugins: [],
};
