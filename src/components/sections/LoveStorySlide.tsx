import { motion } from "framer-motion";
import OrnamentDivider from "@/components/OrnamentDivider";

const milestones = [
  { year: "2015", title: "First Meeting", desc: "Staring each other for the first time." },
  { year: "2018", title: "On the Same Duty", desc: "Struggling in the same community and experiencing many teamworks." },
  { year: "2022", title: "The İstandul Memory", desc: "Having in the most romantic city in the world." },
  { year: "2025", title: "The Proposal", desc: "A proposal called 'Khitbah' at Bapak Budianto's house." },
  { year: "2026", title: "The Wedding", desc: "Uniting two families, two characters, and two hearts forever." },
];

const LoveStorySlide = () => (
  <section className="section-slide flex-col py-20 batik-overlay">
    <div className="text-center px-6 max-w-2xl w-full">
      <motion.p
        className="font-script text-3xl md:text-4xl text-gold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Our Love Story
      </motion.p>
      <OrnamentDivider />

      <div className="relative mt-8">
        {/* Timeline line */}
        <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 timeline-line" />

        {milestones.map((m, i) => (
          <motion.div
            key={m.year}
            className={`relative flex items-center mb-12 last:mb-0 ${
              i % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className={`w-5/12 ${i % 2 === 0 ? "text-right pr-6" : "text-left pl-6"}`}>
              <p className="font-display text-lg text-maroon font-semibold">{m.title}</p>
              <p className="font-body text-sm text-muted-foreground mt-1">{m.desc}</p>
            </div>
            <div className="w-2/12 flex justify-center relative z-10">
              <div className="w-10 h-10 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center">
                <span className="text-xs font-display font-bold text-maroon">{m.year}</span>
              </div>
            </div>
            <div className="w-5/12" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LoveStorySlide;
