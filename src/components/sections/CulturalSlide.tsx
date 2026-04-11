import { motion } from "framer-motion";
import OrnamentDivider from "@/components/OrnamentDivider";

const traditions = [
  {
    culture: "Turkish",
    icon: "🕌",
    title: "Ottoman Heritage",
    description:
      "The intricate arabesque patterns symbolize infinity and the endless cycle of love. Turkish weddings are celebrated with joyful music, henna nights, and the binding of families.",
  },
  {
    culture: "Javanese",
    icon: "🏯",
    title: "Javanese Traditions",
    description:
      "Batik, a UNESCO heritage art form, represents harmony and balance. Javanese ceremonies honor ancestors through the Siraman (water blessing) and Sungkeman (kneeling respect to parents).",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const CulturalSlide = () => (
  <section className="section-slide flex-col py-20">
    <motion.div
      className="text-center px-6 max-w-3xl w-full"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.p variants={item} className="font-script text-3xl md:text-4xl text-gold">
        A Fusion of Cultures
      </motion.p>
      <OrnamentDivider />

      <div className="grid md:grid-cols-2 gap-8 mt-6">
        {traditions.map((t) => (
          <motion.div
            key={t.culture}
            variants={item}
            className="bg-warm-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gold/10 shadow-sm"
          >
            <span className="text-5xl mb-4 block">{t.icon}</span>
            <h3 className="font-display text-xl text-maroon mb-2">{t.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {t.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        variants={item}
        className="font-body text-sm text-muted-foreground mt-8 max-w-md mx-auto italic"
      >
        Our wedding celebrates the beauty of both traditions — a testament to
        love that knows no borders.
      </motion.p>
    </motion.div>
  </section>
);

export default CulturalSlide;
