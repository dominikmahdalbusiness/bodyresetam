import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import { reviews, REVIEWS_SOURCE_URL, REVIEWS_RATING, REVIEWS_COUNT } from "@/lib/reviews";

export const metadata = {
  title: "Recenze",
  description:
    "Recenze klientek a klientů Body Reset — hodnocení 5/5 z 79 recenzí na Reservio.",
};

export default function RecenzePage() {
  return (
    <>
      <PageHeader
        eyebrow={`${REVIEWS_RATING} / 5 · ${REVIEWS_COUNT} recenzí na Reservio`}
        title="Kind words"
        lead="Slova klientek a klientů, která mě ženou dál."
      />

      <section className="py-16">
        <Reveal>
          <ReviewsMarquee reviews={reviews} />
        </Reveal>

        <div className="mx-auto max-w-3xl px-4 mt-14 text-center">
          <Reveal delay={0.05}>
            <a
              href={REVIEWS_SOURCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Zobrazit všechny recenze na Reservio
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
