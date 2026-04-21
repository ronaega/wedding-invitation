import { motion } from "framer-motion";

const LocationSlide = () => {
  return (
    <section className="section-slide flex flex-col items-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-xl w-full"
      >
        <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
          Location
        </p>

        <h2 className="font-display text-3xl md:text-5xl text-maroon mb-4">
          Wedding Venue
        </h2>

        <p className="text-muted-foreground mb-6">
          We look forward to celebrating this special day with you.
        </p>

        {/* 📍 Embedded Map */}
        <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-md mb-6">
          <iframe
            src="https://www.google.com/maps?q=41.0082,28.9784&z=15&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>

        {/* 🔗 Open Maps Button */}
        <motion.a
          href="https://maps.app.goo.gl/ybyCVMNnypCamCUn8?g_st=aw"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wedding inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Open in Google Maps
        </motion.a>
      </motion.div>
    </section>
  );
};

export default LocationSlide;