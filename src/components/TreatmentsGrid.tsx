import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import catWeightLoss from "@/assets/cat-weight-loss.jpg";
import catHair from "@/assets/cat-hair.jpg";
import catTestosterone from "@/assets/cat-testosterone.jpg";
import catSexualHealth from "@/assets/cat-sexual-health.jpg";

const treatments = [
  { title: "Weight Loss", subtitle: "from $69/mo", image: catWeightLoss },
  { title: "Hair Regrowth", subtitle: "from $16/mo", image: catHair },
  { title: "Testosterone", subtitle: "from $49/mo", image: catTestosterone },
  { title: "Sexual Health", subtitle: "from $2/use", image: catSexualHealth },
];

const TreatmentsGrid = () => {
  return (
    <section id="treatments" className="py-20 lg:py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Treatments</p>
              <h2 className="font-display text-3xl lg:text-5xl font-semibold text-foreground">Our Treatments</h2>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide">
              View all <ArrowRight size={16} />
            </a>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {treatments.map((t, i) => (
            <motion.a
              key={t.title}
              href="#"
              className="group relative overflow-hidden bg-card rounded-lg aspect-square flex flex-col justify-end p-6 hover:shadow-lg transition-shadow duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <img
                src={t.image}
                alt={t.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
              <div className="relative z-10">
                <h3 className="font-display text-xl font-semibold text-primary-foreground">{t.title}</h3>
                <div className="flex items-center justify-between mt-1">
                  <p className="font-body text-sm text-primary-foreground/70">{t.subtitle}</p>
                  <ArrowRight size={18} className="text-primary-foreground/70 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsGrid;
