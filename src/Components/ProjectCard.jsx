import React, { useEffect, useState, useRef } from "react";
import { motion, transform, useScroll, useTransform } from "framer-motion";

function Card({ title, description, techs, liveLink, isLive }) {
  const descriptionRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const { current } = descriptionRef;
    if (current.scrollHeight > current.clientHeight) {
      setIsOverflowing(true);
    }
  }, [description]);

  return (
    <div className="flex flex-col gap-4 text-start mt-6">
      <h3 className="text-[1.4rem] font-semibold text-white">{title}</h3>

      {/* Scrollable description with conditional auto-scroll */}
      <p
        ref={descriptionRef}
        className={`description text-gray-300 leading-7 text-sm px-2 h-[100px] overflow-y-auto custom-scrollbar ${
          isOverflowing ? "" : ""
        }`}
      >
        {description}
      </p>

      <div className="cardFooter flex justify-between items-center mt-4">
        <div className="inline-flex gap-3">
          {techs.slice(0, 5).map((tech, index) => (
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                y: [0, -10, 0],
              }}
              transition={{
                delay: index * 0.1,
                duration: 1,
                repeat: Infinity,
              }}
              key={index}
              className="techImgWrapper rounded-full w-[30px] h-[30px] border border-gray-600 overflow-hidden flex items-center justify-center bg-gradient-to-tr from-gray-700 via-gray-800 to-gray-900"
            >
              <img
                src={tech.src}
                alt={tech.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
          {techs.length > 5 && (
            <div className="extraTechCount text-sm text-gray-300 flex items-center justify-center w-[30px] h-[30px] bg-gray-700 rounded-full">
              +{techs.length - 5}
            </div>
          )}
        </div>

        <a
          href={liveLink}
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg transition-colors duration-300"
        >
          {isLive ? "Live" : "Source"}
        </a>
      </div>
    </div>
  );
}

export default function ProjectCard({
  imgSrc,
  title,
  description,
  techs,
  liveLink,
  isLive,
  videoSrc,
  y,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [200, 800], [0.3, 1]);
  const scale = useTransform(scrollY, [100, 800], [0.7, 1]);

  // Variants for the image wrapper's front and back sides
  const imageVariants = {
    front: {
      rotateY: 0, // Front side, no rotation
      opacity: 1, // Front side is visible
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    back: {
      rotateY: 360, // Rotate the back side to show it
      opacity: 1, // Back side is visible when flipped
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    // Remove the flip state after 3 seconds
    const timeout = setTimeout(() => {
      setIsFlipped(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isFlipped]);

  return (
    <motion.div
      style={{ opacity, scale }}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeIn",
        },
      }}
      whileTap={{ scale: 0.8 }}
      className=" cursor-pointer rounded-lg p-6 min-w-[400px] flex-[0.5] flex flex-col gap-4 bg-transparent shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
    >
      {/* Image wrapper with flip animation */}
      <motion.div
        className="relative w-full min-h-[250px] xxl:h-[350px] rounded-lg overflow-hidden shadow-lg cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)} // Toggle the flip state on click
        whileInView={isFlipped ? "back" : "front"} // Apply the variant for flip
        variants={imageVariants} // Assign the variants to control the rotation
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        {/* Front Side - Image */}
        <motion.div
          className="absolute w-full h-full backface-hidden"
          style={{ display: isFlipped ? "none" : "block" }}
          initial={{ opacity: 1 }} // Initial opacity for the front side
          animate={{ opacity: isFlipped ? 0 : 1 }} // Change opacity based on flip state
          transition={{ opacity: { duration: 0.3 } }}
        >
          <div className="px-5 pt-2 flex h-full rounded-xl justify-center bg-gradient-to-r bg-black">
            <div className="imgWrapper h-[100%] w-[100%] relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={imgSrc}
                alt={title}
                className="object-cover w-full h-full opacity-90 transition-opacity duration-500 ease-in-out hover:opacity-100"
              />
            </div>
          </div>
        </motion.div>

        {/* Back Side - Video */}
        <motion.div
          className="absolute w-full h-full backface-hidden transform rotateY-180"
          style={{ display: isFlipped ? "block" : "none" }}
          initial={{ opacity: 0 }} // Start with back side hidden
          animate={{ opacity: isFlipped ? 1 : 0 }} // Fade in the back when flipped
          transition={{ opacity: { duration: 0.3 } }}
        >
          <div className="px-5 pt-2 h-full flex rounded-xl justify-center bg-gradient-to-r from-gray-800 to-gray-900">
            {videoSrc ? (
              <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="path/to/poster-image.jpg" // Set to your desired image
                className="w-full h-full rounded-lg shadow-lg"
              />
            ) : (
              <p className="text-center text-gray-300">Video unavailable</p>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Title, Description, and Tech Icons */}
      <Card
        title={title}
        description={description}
        techs={techs}
        liveLink={liveLink}
        isLive={isLive}
      />
    </motion.div>
  );
}
