import { useState } from "react";
import { motion } from "framer-motion";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="border-t border-border py-20 px-6 lg:px-12 bg-secondary">
      <motion.div
        className="max-w-xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Newsletter</p>
        <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4">
          Get health tips & exclusive offers
        </h2>
        <p className="font-body text-sm text-muted-foreground mb-8">
          Written by board-certified doctors to support your journey.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-background border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-shadow"
          />
          <motion.button
            type="submit"
            className="bg-foreground text-background px-6 py-3 font-body text-sm uppercase tracking-widest hover:bg-foreground/90 transition-colors whitespace-nowrap"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Subscribe
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default NewsletterSection;
