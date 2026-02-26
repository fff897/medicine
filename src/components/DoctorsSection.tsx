import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const doctors = [
  {
    name: "Dr. Katawut Thongthai, MD",
    role: "Head of Weight Loss",
    desc: "A nationally recognized obesity specialist educating clinicians on evidence-based care.",
  },
  {
    name: "Dr. Daeng guitar, MD",
    role: "Men's Sexual Health & Urology",
    desc: "A leader in urology, hormonal health, and complex sexual medicine.",
  },
  {
    name: "Dr. Dre Romell Young, MD",
    role: "Head of Medical Affairs",
    desc: "Board-certified family medicine physician with extensive dermatology experience.",
  },
];

const DoctorsSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Expert team</p>
          <h2 className="font-display text-3xl lg:text-5xl font-semibold text-foreground">
            The best care by the best in medicine
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((d, i) => (
            <motion.div
              key={d.name}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-md transition-shadow duration-300 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-warm-amber/20 transition-colors duration-300">
                <span className="font-display text-xl text-foreground/60">
                  {d.name.charAt(4)}
                </span>
              </div>
              <p className="font-body text-xs uppercase tracking-widest text-warm-amber mb-2">{d.role}</p>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{d.name}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
