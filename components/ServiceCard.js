"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceCard({
  href,
  name,
  desc,
  image,
  imageAlt,
  price,
  imageAspect = "aspect-[4/5]",
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="h-full"
    >
      <Link
        href={href}
        className="group flex h-full flex-col overflow-hidden rounded-t-[10rem] rounded-b-lg bg-cream shadow-sm transition-shadow hover:shadow-xl hover:shadow-bark/10"
      >
        <div className={`relative ${imageAspect} overflow-hidden bg-linen`}>
          {image ? (
            <Image
              src={image}
              alt={imageAlt || name}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-leaves bg-cover bg-center opacity-70 mix-blend-multiply flex items-center justify-center">
              <span className="font-display text-7xl italic text-bark/40">
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-display text-2xl text-bark">{name}</h3>
            {price && (
              <span className="shrink-0 text-xs uppercase tracking-widest text-sagedark">
                {price}
              </span>
            )}
          </div>
          <p className="mt-2 text-sm text-ink/75 leading-relaxed">{desc}</p>
          <span className="mt-auto pt-4 text-xs font-medium uppercase tracking-[0.2em] text-sagedark transition-colors group-hover:text-bark">
            Zjistit více →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
