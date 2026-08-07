"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

function Lightbox({ photos, index, onClose, onNav }) {
  const touchStart = { current: null };

  const onTouchStart = (e) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  const onTouchEnd = (e) => {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) onNav((i) => (i + 1) % photos.length);
    else onNav((i) => (i - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav((i) => (i + 1) % photos.length);
      if (e.key === "ArrowLeft") onNav((i) => (i - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [photos.length, onClose, onNav]);

  const photo = photos[index];

  // Rendered via portal straight into <body> — a Reveal/motion.js ancestor sets an
  // inline transform, which would otherwise turn it into the containing block for
  // this fixed overlay and shrink it down to that ancestor's box instead of the
  // full viewport.
  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bark/95 p-4"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        aria-label="Zavřít"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream text-2xl leading-none transition hover:bg-cream/20"
      >
        ×
      </button>

      {photos.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Předchozí fotka"
            onClick={(e) => {
              e.stopPropagation();
              onNav((i) => (i - 1 + photos.length) % photos.length);
            }}
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream/10 text-cream text-2xl transition hover:bg-cream/20 sm:left-4"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Další fotka"
            onClick={(e) => {
              e.stopPropagation();
              onNav((i) => (i + 1) % photos.length);
            }}
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream/10 text-cream text-2xl transition hover:bg-cream/20 sm:right-4"
          >
            ›
          </button>
        </>
      )}

      <div
        className="relative h-[80vh] w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="90vw"
          className="object-contain"
          priority
        />
      </div>

      {photos.length > 1 && (
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.2em] text-cream/70">
          {index + 1} / {photos.length}
        </p>
      )}
    </div>,
    document.body
  );
}

function Frame({ photo, aspect, onOpen, sizes }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group block w-full rounded-lg bg-cream p-2.5 text-left shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-bark/10 sm:p-3"
    >
      <div className={`relative overflow-hidden rounded-md ${aspect}`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </button>
  );
}

export default function PhotoGrid({ photos, aspect = "aspect-[4/5]" }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      {/* Mobile: horizontal swipe carousel — no orphaned photo on its own row */}
      <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-1 sm:hidden [&::-webkit-scrollbar]:hidden">
        {photos.map((p, i) => (
          <div key={p.src} className="w-[68%] shrink-0 snap-start">
            <Frame photo={p} aspect={aspect} sizes="68vw" onOpen={() => setOpenIndex(i)} />
          </div>
        ))}
      </div>

      {/* Tablet/desktop: grid */}
      <div className="hidden gap-4 sm:grid sm:grid-cols-3 md:gap-6">
        {photos.map((p, i) => (
          <Frame
            key={p.src}
            photo={p}
            aspect={aspect}
            sizes="(min-width: 1024px) 30vw, 45vw"
            onOpen={() => setOpenIndex(i)}
          />
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          photos={photos}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNav={(updater) => setOpenIndex((i) => (typeof updater === "function" ? updater(i) : updater))}
        />
      )}
    </>
  );
}
