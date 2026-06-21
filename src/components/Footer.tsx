import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Footer() {
  useGSAP(() => {
    gsap.from("footer h1", {
      y: 200,
      opacity: 0,
      stagger: 0.05,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "footer",
        start: "top 80%",
        end: "bottom bottom",
        scrub: true,
      },
    });
    gsap.from("footer p", {
      y: 120,
      opacity: 0,
      duration: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "footer",
        start: "top 70%",
        end: "bottom bottom",
        scrub: true,
      },
    });
  });
  return (
    <footer className="mt-24 p-8 lg:p-16 lg:pb-20 bg-black text-white">
      <h1 className="mb-3 text-5xl lg:text-8xl font-bold text-amber-500">Afterglow.</h1>
      <p className="tracking-widest">Interactive scroll-driven motion design experience.</p>
    </footer>
  );
}
