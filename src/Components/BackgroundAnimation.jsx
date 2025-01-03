"use client";
// components/BackgroundAnimation.js
import React from "react";
import { motion } from "framer-motion";

export default function BackgroundAnimation() {
  const rows = 20; // Adjust the number of rows
  const cols = 20; // Adjust the number of columns

  return (
    <div className="absolute inset-0 overflow-hidden -z-20">
      {/* Grid Background */}
      <div
        className="grid absolute inset-0"
        style={{
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
        }}
      >
        {Array.from({ length: rows * cols }).map((_, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-full"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              backgroundColor: `rgba(255, 255, 255, ${
                Math.random() * 0.5 + 0.2
              })`,
            }}
            animate={{
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
      </div>
    </div>
  );
}
