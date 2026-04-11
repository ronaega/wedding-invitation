import { motion } from "framer-motion";
import OrnamentDivider from "@/components/OrnamentDivider";

const HowWeMetSlide = () => (
  <section className="section-slide flex-col ottoman-overlay">
    <motion.div
      className="max-w-xl px-8 py-12 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
    >
      <p className="font-script text-3xl md:text-4xl text-gold mb-2">How We Met</p>
      <OrnamentDivider />

      <div className="bg-warm-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gold/10 mt-4 text-left">
        <p className="font-display italic text-lg text-maroon mb-4">Dear world,</p>
        <p className="font-body text-foreground leading-relaxed mb-4">
          We were in the same class from 7th to 9th grade in junior high school, yet somehow, our story truly began in 8th grade. What started as simple moments of familiarity slowly turned into something deeper, as we began to notice each other in a different light. From shared laughter to quiet glances, that was when the seeds of love were first planted in our hearts.
        </p>
        <p className="font-body text-foreground leading-relaxed mb-4">
          As time passed, our paths continued to intertwine through various communities where we served together. Working side by side, we experienced meaningful journeys, overcame challenges, and celebrated achievements. Those moments were filled with growth, creativity, and countless innovative breakthroughs, strengthening not only our teamwork but also the bond between us.
        </p>
        <p className="font-body text-foreground leading-relaxed">
          In the summer of 2024, we finally found the courage to express what had long been in our hearts and made the beautiful decision to walk this life together. A year later, in the summer of 2025, our families met and embraced one another, marking the beginning of a new chapter. With their blessings, our journey continues toward a lifetime of love and togetherness.
        </p>
        <p className="font-display italic text-right text-maroon mt-6">
          — Rona & Ayu
        </p>
      </div>
    </motion.div>
  </section>
);

export default HowWeMetSlide;
