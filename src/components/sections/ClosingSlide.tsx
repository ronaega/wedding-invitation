import { motion } from "framer-motion";
import OrnamentDivider from "@/components/OrnamentDivider";
import heroFloral from "@/assets/hero-floral-bg.jpg";

const ClosingSlide = () => (
  <section
    className="section-slide flex-col text-center"
    style={{
      backgroundImage: `url(${heroFloral})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-warm-white/70 backdrop-blur-[2px]" />
    <motion.div
      className="relative z-10 flex flex-col items-center px-6 max-w-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.2 }}
    >
      <p className="font-script text-3xl md:text-4xl text-gold mb-2">Thank You</p>
      <OrnamentDivider />

      <p className="font-body text-foreground leading-relaxed mb-6">
        Your presence and prayers are the greatest gift we could receive. We look
        forward to celebrating this beautiful day with you.
      </p>

      <motion.a
        href="mailto:rona.ayu.wedding@email.com?subject=RSVP"
        className="btn-wedding inline-block mb-8"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        RSVP Now
      </motion.a>

      <motion.div
        className="border-t border-gold/20 pt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p className="font-display italic text-maroon text-lg">
          "And among His signs is that He created for you mates from among
          yourselves, that you may dwell in tranquility with them, and He has put
          love and mercy between your hearts."
        </p>
        <p className="font-body text-sm text-muted-foreground mt-3">— Ar-Rum 30:21</p>
      </motion.div>

      <p className="font-script text-4xl md:text-5xl text-gold mt-8">
        Rona & Lidya
      </p>
      <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mt-2">
        13 · 11 · 2026
      </p>
    </motion.div>
  </section>
);

export default ClosingSlide;
