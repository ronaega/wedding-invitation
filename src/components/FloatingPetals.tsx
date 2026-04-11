import { useEffect, useState } from "react";

const petalPaths = [
  "M8 0C8 0 10 4 8 8C6 12 2 10 0 8C2 6 6 4 8 0Z",
  "M6 0C8 2 10 6 8 10C6 14 2 12 0 8C2 4 4 2 6 0Z",
  "M5 0C7 3 8 7 6 10C4 13 1 10 0 7C1 4 3 1 5 0Z",
];

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  path: string;
  opacity: number;
}

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const newPetals: Petal[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 12 + Math.random() * 10,
      size: 10 + Math.random() * 14,
      path: petalPaths[Math.floor(Math.random() * petalPaths.length)],
      opacity: 0.2 + Math.random() * 0.4,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <>
      {petals.map((petal) => (
        <svg
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            width: petal.size,
            height: petal.size,
          }}
          viewBox="0 0 10 14"
          fill="currentColor"
        >
          <path d={petal.path} />
        </svg>
      ))}
    </>
  );
};

export default FloatingPetals;
