"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linen">
      {/* Botanické stíny — brandový podklad z tiskovin klientky */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-leaves bg-cover sm:bg-contain bg-no-repeat bg-right-top opacity-70 mix-blend-multiply"
      />

      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-20 md:pt-24 md:pb-28 grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="eyebrow mb-5"
          >
            Masáže · Maderoterapie · Pilates — Uherský Brod
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={0.1}
            variants={fadeUp}
            className="font-display text-4xl md:text-6xl leading-[1.08] text-bark max-w-xl"
          >
            Prostor, kde si vaše tělo odpočine{" "}
            <em className="italic text-sagedark">a najde zpátky sílu.</em>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={0.2}
            variants={fadeUp}
            className="mt-6 max-w-lg text-lg text-ink/80"
          >
            Jmenuji se Aneta a propojuji pohyb s regenerací — od posílení
            středu těla na podložce až po hloubkovou úlevu od bolesti na
            masérském lehátku.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={0.3}
            variants={fadeUp}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link href="/kontakt" className="btn-primary">
              Rezervovat termín
            </Link>
            <Link href="/cenik" className="btn-outline">
              Prohlédnout ceník
            </Link>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="show"
            custom={0.4}
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-xs uppercase tracking-[0.2em] text-ink/60"
          >
            <li>Absolventka FTK UP Olomouc</li>
            <li>Certifikovaná lektorka Pilates</li>
            <li>Po–Pá dle objednávek</li>
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xs md:max-w-sm"
        >
          {/* Šalvějový oblouk za fotkou */}
          <div
            aria-hidden
            className="absolute -right-5 top-5 h-full w-full rounded-arch bg-sage/50"
          />
          <div className="relative overflow-hidden rounded-arch shadow-xl shadow-bark/20">
            <Image
              src="/images/profil/profil-02.jpg"
              alt="Mgr. Aneta Máčalová — masérka a lektorka Pilates"
              width={432}
              height={540}
              priority
              className="h-auto w-full object-cover aspect-[4/5]"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 rounded-lg bg-cream px-5 py-3 shadow-lg shadow-bark/10">
            <p className="font-display text-lg text-bark leading-tight">
              Mgr. Aneta Máčalová
            </p>
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-ink/60 mt-0.5">
              masérka &amp; lektorka pilates
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
