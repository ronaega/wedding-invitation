import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroFloral from "@/assets/hero-floral-bg.jpg";
import OrnamentDivider from "@/components/OrnamentDivider";
import guests from "@/guests.json";

interface Props {
  onOpen: () => void;
}

interface Guest {
  code: string;
  name: string;
}

const OpeningSlide = ({ onOpen }: Props) => {
  const [guest, setGuest] = useState<Guest | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("id");

    const foundGuest = (guests as Guest[]).find(
      (g) => g.code === code
    );

    if (foundGuest) {
      setGuest(foundGuest);
    }

    setChecked(true);
  }, []);

  // ⛔ Block invalid users
  if (checked && !guest) {
    return (
      <div className="flex items-center justify-center h-screen text-center px-6">
        <p className="text-lg text-muted-foreground">
          You are not invited, DUMBASS!
        </p>
      </div>
    );
  }

  // ⏳ Optional loading state
  if (!checked) return null;

  return (
    <section
      className="section-slide flex-col text-center"
      style={{
        backgroundImage: `url(${heroFloral})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-warm-white/60 backdrop-blur-[2px]" />

      <motion.div
        className="relative z-10 flex flex-col items-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <p className="font-script text-2xl md:text-4xl text-gold mb-2">
          Bismillahirrahmanirrahim
        </p>

        <OrnamentDivider />
        
        <h2 className="font-display text-xl md:text-3xl text-maroon mb-4">
          {guest.name}
        </h2>

        <p className="font-body text-muted-foreground mt-4 mb-1 max-w-md text-sm md:text-base">
          You are cordially invited to
        </p>

        <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-4">
          The Wedding of
        </p>

        <h1 className="font-display text-4xl md:text-7xl text-maroon font-bold leading-tight">
          Rona <span className="font-script text-gold">&</span> Lidya
        </h1>

        <p className="font-body text-muted-foreground mt-4 mb-8 max-w-md text-sm md:text-base">
          Please share in our joy as we unite two hearts and
          two individuals in love.
        </p>

        <motion.button
          onClick={onOpen}
          className="btn-wedding"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Open Invitation
        </motion.button>
      </motion.div>
    </section>
  );
};

export default OpeningSlide;