import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { galleryData } from "../data/gallery";
import Image from "./Image";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".grid__item");

      items.forEach((item) => {
        const xTransform = gsap.utils.random(-100, 100);

        gsap.set(item, {
          transformOrigin: xTransform < 0 ? "0% 50%" : "100% 50%",
        });

        gsap.to(item, {
          scale: 0,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(item, {
          xPercent: xTransform,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="grid grid-cols-8 grid-rows-20 gap-2 overflow-hidden">
      {galleryData.map((item) => (
        <Image key={item.id} {...item} />
      ))}
    </section>
  );
}
