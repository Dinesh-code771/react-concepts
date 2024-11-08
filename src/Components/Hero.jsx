import React from "react";
import TextSlidetComponent from "../AnimateComponets/TextSlidetComponent";
import { motion } from "framer-motion";

export default function Hero({ name, role, description }) {
  return (
    <div className="w-[90%] md:w-[80%] z-20 relative mx-auto mt-8 flex flex-col-reverse gap-8 sm:flex-col sm:gap-6 md:flex md:flex-row md:gap-12">
      {/* Left Section */}
      <div className="leftDetails flex-1 flex flex-col justify-center gap-4">
        <TextSlidetComponent
          text={name}
          initial={{ x: -100 }}
          animate={{
            x: 0,
            transition: {
              duration: 5,
              type: "spring",
              stiffness: 200,
            },
          }}
          classes="font-mono text-[1.8rem] sm:text-[2.3rem] hover:text-[#f9a8d4] hover:scale-[1.5px] cursor-pointer"
        />

        <div className="details flex flex-col justify-center gap-3">
          <TextSlidetComponent
            text={role}
            initial={{ x: -100 }}
            animate={{
              x: 0,
              transition: {
                duration: 1,
                type: "spring",
                stiffness: 120,
              },
            }}
            classes="text-[1.2rem] sm:text-[1.4rem] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
          />
          <TextSlidetComponent
            text={description}
            initial={{ x: -100 }}
            animate={{
              x: 0,
              transition: {
                duration: 1,
                type: "spring",
                stiffness: 120,
              },
            }}
            classes="text-[0.9rem] sm:text-[1rem] text-gray-400 leading-6 sm:leading-7 rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="rightDetails flex-1 flex justify-center md:justify-end items-center md:items-end">
        <motion.div
          animate={{
            scale: [1, 1.02, 1],
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          whileHover={{
            rotateY: 360,
            transition: {
              duration: 1,
            },
          }}
          className="imageWrapper w-[70%] h-auto sm:w-[80%] md:w-[70%] lg:w-[60%] p-4 bg-black rounded-lg border border-gray-700 shadow-xl cursor-pointer"
        >
          <img
            src="dineshNOBG.png"
            alt="Dinesh Reddy"
            className="w-full h-full object-contain rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}
