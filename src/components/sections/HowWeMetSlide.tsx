import { motion } from "framer-motion";
import OrnamentDivider from "@/components/OrnamentDivider";

const HowWeMetSlide = () => (
  <section className="section-slide flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 ottoman-overlay">
    <motion.div
      className="w-full max-w-2xl py-8 sm:py-10 md:py-12 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8 }}
    >
      <p className="font-script text-2xl sm:text-3xl md:text-4xl text-gold mb-2">
        How We Met
      </p>

      <OrnamentDivider />

      <div className="bg-warm-white/70 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-gold/10 mt-4 text-left shadow-sm">
        <p className="font-display italic text-base sm:text-lg text-maroon mb-3 sm:mb-4">
          Dear world,
        </p>

        <p className="font-body text-sm sm:text-base text-foreground leading-relaxed mb-3 sm:mb-4">
          We were in the same class from 7th to 9th grade in junior high school, yet somehow, our story truly began in 8th grade. What started as simple moments of familiarity slowly turned into something deeper, as we began to notice each other in a different light. From shared laughter to quiet glances, that was when the seeds of love were first planted in our hearts.
        </p>

        <p className="font-body text-sm sm:text-base text-foreground leading-relaxed mb-3 sm:mb-4">
          As time passed, our paths continued to intertwine through various communities where we served together. Working side by side, we experienced meaningful journeys, overcame challenges, and celebrated achievements. Those moments were filled with growth, creativity, and countless innovative breakthroughs, strengthening not only our teamwork but also the bond between us.
        </p>

        <p className="font-body text-sm sm:text-base text-foreground leading-relaxed">
          In the summer of 2024, we finally found the courage to express what had long been in our hearts and made the beautiful decision to walk this life together. A year later, in the summer of 2025, our families met and embraced one another, marking the beginning of a new chapter. With their blessings, our journey continues toward a lifetime of love and togetherness.
        </p>

        <p className="font-display italic text-right text-sm sm:text-base text-maroon mt-5 sm:mt-6">
          — Rona & Lidya
        </p>
      </div>
    </motion.div>
  </section>
);

export default HowWeMetSlide;