"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const heroRef = useRef(null);
  const carRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const hero = heroRef.current;
    const car = carRef.current;

    // ⭐ timeline is more stable
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "+=1200",
        scrub: true,
        pin: true,
        markers: false, // change true for debugging
      },
    });

    tl.fromTo(
      car,
      { x: -300, scale: 0.8 },
      { x: 400, scale: 1.1, ease: "none" },
    );

    // ⭐ VERY IMPORTANT in Next.js
    ScrollTrigger.refresh();

    return () => {
      tl.kill();
      ScrollTrigger.killAll();
    };
  }, []);

  const text = "WELCOME ITZFIZZ";

  return (
    <section
      ref={heroRef}
      className="relative h-screen bg-black overflow-hidden"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center text-white">
        <h1 className="hero-text text-4xl md:text-7xl tracking-[0.5em] font-bold">
          {text}
        </h1>

        <div className="flex gap-10 mt-10">
          <div>
            <h2 className="text-3xl font-bold">98%</h2>
            <p className="text-gray-400">Client Satisfaction</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">150+</h2>
            <p className="text-gray-400">Projects</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">24/7</h2>
            <p className="text-gray-400">Support</p>
          </div>
        </div>

        <img
          ref={carRef}
          src="/car.webp"
          alt="car"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[250px] md:w-[600px]"
        />
      </div>
    </section>
  );
}
