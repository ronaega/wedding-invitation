import { motion } from "framer-motion";
import OrnamentDivider from "@/components/OrnamentDivider";

const CoupleSlide = () => (
  <section className="section-slide flex-col batik-overlay">
    <motion.div
      className="text-center px-6 max-w-2xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
    >
      <p className="font-body text-sm tracking-[0.4em] uppercase text-muted-foreground mb-6">
        Together with their families
      </p>

      <motion.div
        initial={{ x: -60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="font-display text-3xl md:text-5xl text-maroon">Rona Ega Kharisma</h2>
        <p className="font-body text-sm text-muted-foreground mt-1">Son of Dandi Andoko & Ninik Haryati</p>
      </motion.div>

      <motion.p
        className="font-script text-4xl md:text-6xl text-gold my-6"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
      >
        &
      </motion.p>

      <motion.div
        initial={{ x: 60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="font-display text-3xl md:text-5xl text-maroon">Lidya Ayu Sukamawandira</h2>
        <p className="font-body text-sm text-muted-foreground mt-1">Daughter of Budianto & Lilik Suliatun</p>
      </motion.div>

      <OrnamentDivider className="mt-8" />

      <motion.p
        className="font-display text-lg md:text-xl italic text-dusty-rose-deep mt-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        "We are getting married"
      </motion.p>
    </motion.div>
  </section>
);

export default CoupleSlide;
