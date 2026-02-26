"use client";

import { motion, useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";

const brands = [
  "Licensed Providers",
  "FDA-Regulated Pharmacies",
  "100% Online",
  "Free Shipping",
  "Cancel Anytime",
  "Personalized Plans",
  "Health Follow Up",
  // duplicates for perfect seamless loop
  "Licensed Providers",
  "FDA-Regulated Pharmacies",
  "100% Online",
  "Free Shipping",
  "Cancel Anytime",
  "Personalized Plans",
  "Health Follow Up",
];

const BrandsStrip = () => {
  const [scope, animate] = useAnimate();
  const animationRef = useRef<any>(null);   // store the animation controller

  useEffect(() => {
    animationRef.current = animate(
      scope.current,
      { x: ["0%", "-50%"] },
      {
        duration: 20,          // tune this: higher = slower
        ease: "linear",
        repeat: Infinity,
      }
    );

    // Optional cleanup
    return () => {
      if (animationRef.current) animationRef.current.stop();
    };
  }, [scope, animate]);

  const handleHoverStart = () => {
    if (animationRef.current) {
      animationRef.current.pause();
    }
  };

  const handleHoverEnd = () => {
    if (animationRef.current) {
      animationRef.current.play();
    }
  };

  return (
    <section className="border-y border-border py-10 md:py-12 px-5 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex items-center justify-between mb-6 md:mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Why choose us
          </p>
          <a
            href="#"
            className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
          >
            Learn more →
          </a>
        </motion.div>

        {/* Scrolling strip */}
        <motion.div
          ref={scope}
          className="flex items-center gap-10 md:gap-16 whitespace-nowrap"
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
        >
          {brands.map((brand, index) => (
            <div
              key={`${brand}-${index}`}
              className="flex-shrink-0"
            >
              <span className="font-display text-base md:text-lg lg:text-xl font-medium text-foreground/70 hover:text-foreground transition-colors cursor-default">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsStrip;