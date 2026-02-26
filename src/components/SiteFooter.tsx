import { motion } from "framer-motion";

const footerLinks = {
  Treatments: ["Weight Loss", "Hair Regrowth", "Sexual Health", "Testosterone", "Mental Health", "Skin Care"],
  Company: ["About Us", "Careers", "Press", "Blog"],
  Support: ["FAQ", "Contact", "Shipping", "Privacy Policy", "Terms"],
};

const SiteFooter = () => {
  return (
    <footer className="border-t border-border py-16 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">WRP</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Personalized health and wellness, delivered to your door.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-body text-xs uppercase tracking-widest text-foreground mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © 2026 WRP Health, Inc. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Prescription products require an online consultation with a healthcare provider.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
