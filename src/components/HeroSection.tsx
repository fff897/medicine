import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-wellness.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <motion.img
        src={heroImage}
        alt="Modern wellness pharmacy interior with warm lighting"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
      <div className="absolute inset-0 bg-foreground/20" />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.p
          className="font-body text-sm uppercase tracking-[0.3em] text-primary-foreground/80 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Personalized Health & Wellness
        </motion.p>
        <motion.h2
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
           Personalized for you
        </motion.h2>
        <motion.p
          className="font-body text-lg md:text-xl text-primary-foreground/80 mt-6 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Doctor-trusted treatments delivered to your door.
          <br />
          Start your journey today.
        </motion.p>
        <motion.a
          href="#treatments"
          className="mt-10 bg-primary-foreground text-primary px-8 py-3 font-body text-sm uppercase tracking-widest hover:bg-primary-foreground/90 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Explore Treatments
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#treatments"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-primary-foreground"
        aria-label="Scroll down"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={36} strokeWidth={1.5} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
