import Image from "next/image";

// Vrstvený "moodboard" pár fotek — hlavní fotka v oblouku se šalvějovým podkladem
// a menší akcentová fotka našikmo přes roh, jako vystřižená z nástěnky.
export default function PhotoStack({ main, accent, align = "left" }) {
  const accentSide = align === "left" ? "-left-6 md:-left-10" : "-right-6 md:-right-10";

  return (
    <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
      <div
        aria-hidden
        className="absolute -right-4 top-4 h-full w-full rounded-arch bg-sage/40"
      />
      <div className="relative overflow-hidden rounded-arch shadow-lg shadow-bark/10">
        <Image
          src={main.src}
          alt={main.alt}
          width={432}
          height={540}
          className="h-auto w-full object-cover aspect-[4/5]"
        />
      </div>

      {accent && (
        <div
          className={`absolute -bottom-10 ${accentSide} w-[42%] rotate-[-5deg] rounded-lg bg-cream p-2 shadow-xl shadow-bark/20 transition-transform duration-300 hover:rotate-0`}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-md">
            <Image
              src={accent.src}
              alt={accent.alt}
              fill
              sizes="180px"
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
