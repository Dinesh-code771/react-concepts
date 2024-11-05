import React from "react";
import { motion } from "framer-motion";
export default function Tech({ techs }) {
  return (
    <div className="w-[90%] mx-auto mt-8 flex flex-col justify-center items-center gap-10">
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
            className="techCard w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] p-2 rounded-md border border-gray-700 bg-gray-800 shadow-lg transition transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
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
