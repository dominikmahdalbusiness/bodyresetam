import Image from "next/image";
import { StaggerItem } from "@/components/Stagger";

export default function PhotoGrid({ photos, aspect = "aspect-[4/5]" }) {
  return (
    <>
      {photos.map((p) => (
        <StaggerItem key={p.src} className="group">
          <div className="rounded-lg bg-cream p-2.5 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-bark/10 sm:p-3">
            <div className={`relative overflow-hidden rounded-md ${aspect}`}>
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </StaggerItem>
      ))}
    </>
  );
}
