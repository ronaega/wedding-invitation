import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import OrnamentDivider from "@/components/OrnamentDivider";
import CountdownTimer from "@/components/CountdownTimer";

const events = [
  {
    title: "Akad Nikah",
    subtitle: "Holy Matrimony",
    date: "Friday, November 13, 2026",
    time: "10:00 AM",
    venue: "Rumah Bapak Budianto",
    address: "Sumurup, Bendungan",
  },
  {
    title: "Resepsi",
    subtitle: "Wedding Reception",
    date: "Friday, November 13, 2026",
    time: "11:00 AM",
    venue: "Rumah Bapak Budianto",
    address: "Sumurup, Bendungan",
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

const EventSlide = () => (
  <section className="section-slide flex-col ottoman-overlay py-20">
    <motion.div
      className="text-center px-6 max-w-3xl w-full"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.p variants={item} className="font-script text-3xl md:text-4xl text-gold mb-2">
        Save the Date
      </motion.p>
      <OrnamentDivider />

      <motion.div variants={item} className="mb-10">
        <CountdownTimer />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {events.map((ev) => (
          <motion.div
            key={ev.title}
            variants={item}
            className="bg-warm-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gold/10 shadow-sm"
          >
            <h3 className="font-display text-2xl text-maroon mb-1">{ev.title}</h3>
            <p className="font-body text-sm text-muted-foreground mb-4">{ev.subtitle}</p>
            <div className="space-y-3 text-sm">
              <p className="flex items-center justify-center gap-2 text-foreground">
                <Calendar className="w-4 h-4 text-gold" /> {ev.date}
              </p>
              <p className="flex items-center justify-center gap-2 text-foreground">
                <Clock className="w-4 h-4 text-gold" /> {ev.time}
              </p>
              <p className="flex items-center justify-center gap-2 text-foreground">
                <MapPin className="w-4 h-4 text-gold" /> {ev.venue}
              </p>
              <p className="text-muted-foreground">{ev.address}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.a
        variants={item}
        href="https://calendar.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-wedding inline-block mt-8"
      >
        Add to Calendar
      </motion.a>
    </motion.div>
  </section>
);

export default EventSlide;
