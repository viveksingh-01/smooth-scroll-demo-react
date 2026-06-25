import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!titleRef.current || !heroRef.current) return;

    const footerElement = document.querySelector("footer");
    if (!footerElement) return;

    gsap.to(titleRef.current, {
      opacity: 0,
      scale: 9, // Gives it plenty of room to zoom over the longer scroll distance
      letterSpacing: "160px",
      ease: "power1.inOut", // Smooth transition out of the static state
      scrollTrigger: {
        trigger: heroRef.current, // Start tracking based on the Hero section immediately
        start: "top top", // Starts the moment the user scrolls even 1px
        // Dynamically calculate the end point based on the footer's distance from the top
        end: () => `top+=${footerElement.getBoundingClientRect().top - window.innerHeight} top`,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
  });

  return (
    <section
      ref={heroRef}
      className="pointer-events-none fixed top-0 left-0 flex h-screen w-full items-center justify-center"
    >
      <h1 ref={titleRef} className="text-5xl font-extralight tracking-[30px] text-amber-300">
        AFTERGLOW
      </h1>
    </section>
  );
};

export default Hero;
