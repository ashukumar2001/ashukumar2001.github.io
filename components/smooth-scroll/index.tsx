"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const SCROLL_LERP = 0.12;

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: SCROLL_LERP,
      autoRaf: false,
      stopInertiaOnNavigate: true,
    });

    const onScroll = () => ScrollTrigger.update();
    // GSAP's ticker time is in seconds; Lenis expects milliseconds.
    const tick = (time: number) => lenis.raf(time * 1000);

    lenis.on("scroll", onScroll);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", onScroll);
      gsap.ticker.remove(tick);
      lenis.destroy();
      gsap.ticker.lagSmoothing(500, 33);
    };
  }, []);

  return null;
};

export default SmoothScroll;
