import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FloatingPetals from "@/components/FloatingPetals";
import OpeningSlide from "@/components/sections/OpeningSlide";
import CoupleSlide from "@/components/sections/CoupleSlide";
import EventSlide from "@/components/sections/EventSlide";
import IllustrationSlide from "@/components/sections/IllustrationSlide";
import LoveStorySlide from "@/components/sections/LoveStorySlide";
import HowWeMetSlide from "@/components/sections/HowWeMetSlide";
import LocationSlide from "@/components/sections/LocationSlide";
import CulturalSlide from "@/components/sections/CulturalSlide";
import ClosingSlide from "@/components/sections/ClosingSlide";

const Index = () => {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef(null);

  const handleOpen = () => {
    setOpened(true);

    if (audioRef.current) {
      audioRef.current.volume = 0.2; // optional
      audioRef.current.play().catch(() => {
        console.log("Autoplay blocked");
      });
    }
  };

  return (
    <div className="relative">
      {/* 🎵 Audio Element */}
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      <FloatingPetals />

      {!opened && <OpeningSlide onOpen={handleOpen} />}

      <AnimatePresence>
        {opened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="scroll-smooth"
          >
            <CoupleSlide />
            <EventSlide />
            <IllustrationSlide />
            <LoveStorySlide />
            <HowWeMetSlide />
            <LocationSlide />
            <ClosingSlide />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;