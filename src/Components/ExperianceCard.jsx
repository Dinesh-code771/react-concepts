import React from "react";
import { useScroll, motion, useTransform } from "framer-motion";

export default function ExperienceCard({
  date,
  title,
  company,
  description,
  x,
}) {
  const { scrollY } = useScroll();
  const xTransform = useTransform(scrollY, [x, x + 200], [300, 0]);

  return (
    <motion.div
      //   style={{ x: xTransform }} // Apply xTransform for horizontal scroll animation
      initial={{ opacity: 0, x: 300 }}
      whileHover={{ scale: 1.09 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full  flex flex-col cursor-pointer md:flex-row justify-between bg-gray-800 dark:bg-gray-900 rounded-lg shadow-lg p-6 md:p-8 my-4 md:my-8"
    >
      {/* Left section with date */}
      <div className="left flex-1 flex-shrink-0 w-full md:w-32 mb-4 md:mb-0">
        <p className="text-lg md:text-xl font-semibold text-gray-300 dark:text-gray-100 text-center md:text-left">
          {date}
        </p>
      </div>

      {/* Right section with job details */}
      <div className="right flex-1 pl-0 md:pl-8 border-t md:border-t-0 md:border-l border-gray-700 dark:border-gray-600">
        <div className="flex items-center gap-2 md:gap-4 mb-4 justify-center md:justify-start">
          <h3 className="text-lg md:text-xl font-bold text-blue-400 dark:text-blue-500">
            {title}
          </h3>
          <span className="hidden md:inline text-gray-500 dark:text-gray-400">
            -
          </span>
          <h4 className="text-base md:text-lg font-medium text-gray-300 dark:text-gray-100">
            {company}
          </h4>
        </div>
        <p className="text-sm leading-relaxed text-gray-400 dark:text-gray-200 text-center md:text-left">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
