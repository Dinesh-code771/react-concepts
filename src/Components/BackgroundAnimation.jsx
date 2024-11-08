// components/BackgroundAnimation.js
import React from "react";
import { motion } from "framer-motion";

// Import images for planets, rockets, and meteors
import RocketIcon from ".././assets/rocket.svg";
import PlanetIcon from "../assets/planet.svg";
import MeteorIcon from "../assets/meteor.svg";

export default function BackgroundAnimation() {
  const stars = Array.from({ length: 150 }); // For stars
  const planets = Array.from({ length: 3 }); // Few large planets
  const rockets = Array.from({ length: 5 }); // Few rockets
  const meteors = Array.from({ length: 10 }); // More meteors for action

  return (
    <div className="absolute inset-0 overflow-hidden z-10">
      {/* Stars */}
      {stars.map((_, index) => (
        <motion.div
          key={`star-${index}`}
          className="absolute bg-white rounded-full"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: ["0%", "-10%", "0%"],
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Planets */}
      {planets.map((_, index) => (
        <motion.img
          key={`planet-${index}`}
          src={PlanetIcon}
          alt="planet"
          className="absolute"
          style={{
            width: `${Math.random() * 40 + 10}px`, // Random planet size
            top: `${Math.random() * 60}%`,
            left: `${Math.random() * 10}%`,
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 50 + 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Rockets */}
      {rockets.map((_, index) => (
        <motion.img
          key={`rocket-${index}`}
          src={RocketIcon}
          alt="rocket"
          className="absolute"
          style={{
            width: "30px",
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: ["0%", "100%"],
            y: ["0%", "-100%"],
            rotate: [0, 30, -30, 0], // Rocket tilts slightly while moving
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((_, index) => (
        <motion.img
          key={`meteor-${index}`}
          src={MeteorIcon}
          alt="meteor"
          className="absolute"
          style={{
            width: "20px",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.8,
          }}
          animate={{
            x: ["0%", "150%"],
            y: ["0%", "150%"],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeIn",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}
