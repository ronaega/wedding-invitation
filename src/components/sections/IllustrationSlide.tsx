import { motion } from "framer-motion";
import coupleImg from "@/assets/couple-illustration.png";

const IllustrationSlide = () => (
  <section className="section-slide flex-col">
    <motion.div
      className="text-center px-6"
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.img
        src={coupleImg}
        alt="Cute cartoon illustration of the couple"
        loading="lazy"
        width={800}
        height={800}
        className="w-64 md:w-80 mx-auto drop-shadow-lg"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
      <p className="font-script text-2xl md:text-3xl text-gold mt-6">
        Two souls, one love
      </p>
      <p className="font-body text-sm text-muted-foreground mt-2 max-w-sm mx-auto">
        A union of hearts, woven from the threads of two beautiful individuals.
      </p>
    </motion.div>
  </section>
);

export default IllustrationSlide;
