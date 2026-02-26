import { motion } from "framer-motion";

const AnnouncementBar = () => {
  return (
    <motion.div
      className="bg-announcement text-announcement-foreground py-2.5 text-center text-sm font-body tracking-wide"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <span className="text-warm-amber font-semibold">20% off</span>
      {" "}select orders of $200+ including weight loss plans{" "}
      <button className="ml-3 border border-announcement-foreground/30 px-3 py-0.5 text-xs uppercase tracking-widest hover:bg-announcement-foreground/10 transition-colors">
        Claim offer
      </button>
    </motion.div>
  );
};

export default AnnouncementBar;
