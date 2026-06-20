import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis, { type LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <>
      <ReactLenis root options={{ autoRaf: true }} ref={lenisRef} />
      <main className="bg-amber-50">
        <Gallery />
        <Footer />
      </main>
    </>
  );
}

export default App;
