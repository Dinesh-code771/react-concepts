import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Tech({ techs }) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  // State to track which tech is currently hovered
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className="w-[90%] mx-auto mt-8 flex flex-col p-10 justify-center items-center gap-10 relative z-30">
      <h1 className="text-center text-2xl sm:text-3xl font-bold text-white mb-4">
        Technologies
      </h1>

      <div className="techWrapper flex flex-wrap gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-center">
        {techs.map((tech, index) => (
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              y: [0, -10, 0],
              borderRadius: ["20%", "30%", "20%"],
            }}
            transition={{
              delay: index * 0.1,
              duration: 1,
              repeat: Infinity,
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px 5px #f9a8d4",
              rotateY: 60,
            }}
            key={index}
            className="techCard w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] p-2 rounded-md border border-gray-700 bg-gray-800 shadow-lg transition transform hover:scale-105 hover:shadow-2xl cursor-pointer relative"
            onMouseEnter={() => setHoveredTech(index)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            {/* Tooltip */}
            {hoveredTech === index && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-[80px] text-xs font-semibold text-white bg-gray-900 p-2 rounded-md shadow-md whitespace-nowrap"
              >
                {tech.alt || "Technology"}
              </motion.div>
            )}

            <img
              src={tech.src}
              alt={tech.alt || "Technology Icon"}
              className="object-cover w-full h-full rounded-md"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
