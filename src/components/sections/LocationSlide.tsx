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
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3951.1841784014878!2d111.69984099999999!3d-7.979906000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNTgnNDcuNyJTIDExMcKwNDEnNTkuNCJF!5e0!3m2!1sen!2str!4v1776759678820!5m2!1sen!2str"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
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