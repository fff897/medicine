import { motion } from "framer-motion";

const InspirationBanner = () => {
  return (
    <section id="inspiration" className="bg-secondary py-20 lg:py-28 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Personalized care
        </motion.p>
        <motion.h2
          className="font-display text-3xl lg:text-5xl font-semibold text-foreground leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Tell us about your goals
        </motion.h2>
        <motion.p
          className="font-body text-base text-muted-foreground max-w-lg mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Answer a few questions, and our providers will create a personalized treatment plan designed for your body's needs.
        </motion.p>
        <motion.a
          href="#"
          className="inline-block bg-foreground text-background px-8 py-3.5 font-body text-sm uppercase tracking-widest hover:bg-foreground/90 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started
        </motion.a>
      </div>
    </section>
  );
};

export default InspirationBanner;
