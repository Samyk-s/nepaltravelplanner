
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import { useState } from "react";

const AnimatedIntro: React.FC = () => {
  const [arrowShoot, setArrowShoot] = useState<boolean>(false);
  const [showCard, setShowCard] = useState<boolean>(false);

  const fireworkParticles: number[] = [...Array(8).keys()];

  return (
    <div className="absolute bottom-0 left-0 w-full h-full z-10 pointer-events-none">
      {/* Lottie animated character shooting arrow */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 1 }}
        transition={{ duration: 3 }}
        onAnimationComplete={() => setArrowShoot(true)}
        style={{
          position: "absolute",
          bottom: "70px",
          left: "0",
          width: "200px",
          height: "200px",
          pointerEvents: "none",
        }}
      >
        <DotLottieReact
          src="/arrow.lottie"
          autoplay
          loop
        />
      </motion.div>

      {/* Arrow animation */}
      {arrowShoot && (
        <motion.div
          initial={{ x: 210, y: -100 }}
          animate={{ x: 280, y: -280 }}
          transition={{ duration: 0 }}
          onAnimationComplete={() => setShowCard(true)}
          style={{
            position: "absolute",
            width: "4px",
            height: "40px",
            backgroundColor: "white",
            transform: "rotate(45deg)",
          }}
        />
      )}

      {/* Firework popup */}
      {showCard && (
        <>
          {/* Firework particles */}
          {fireworkParticles.map((_, i) => {
            const angle = (i * 360) / fireworkParticles.length;
            const radius = 60;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={{ x, y, opacity: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                  position: "absolute",
                  top: "calc(75% + 10px)",
                  left: "calc(13%)",
                  width: "6px",
                  height: "6px",
                  backgroundColor: "gold",
                  borderRadius: "50%",
                }}
              />
            );
          })}

          {/* Firework-like popup card */}
          <motion.div
            initial={{ scale: 0.1, opacity: 0, rotate: 90 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            className="absolute bg-white px-6 py-4 rounded-xl shadow-xl text-black pointer-events-auto"
            style={{
              top: "calc(75% - 25px)",
              left: "calc(13%)",
              zIndex: 20,
              boxShadow: "0 0 15px rgba(255,215,0,0.6)",
            }}
          >
            <p className="mb-2 font-semibold">Wanna know more about me?</p>
            <a
              href="https://samyakbajr.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Visit Portfolio
            </a>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default AnimatedIntro;
