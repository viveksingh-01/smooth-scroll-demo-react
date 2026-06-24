import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!titleRef.current) return;

    const footerElement = document.querySelector("footer");
    if (!footerElement) return;

    gsap.to(titleRef.current, {
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: footerElement,
        start: "top bottom", // Starts when footer enters the bottom
        end: "top 70%",
        scrub: true,
        invalidateOnRefresh: true, // Forces GSAP to recalculate if the page resizes
      },
    });
  });
  return (
    <section className="pointer-events-none fixed top-0 left-0 flex h-screen w-full items-center justify-center">
      <h1 ref={titleRef} className="text-5xl font-extralight tracking-[90px] text-amber-300">
        AFTERGLOW
      </h1>
    </section>
  );
};

export default Hero;
