import React from "react";
import { motion } from "framer-motion";
export default function TextSlidetComponent({
  text,
  initial,
  animate,
  classes,
}) {
  return (
    <motion.p className={classes} initial={initial} animate={animate}>
      {text}
    </motion.p>
  );
}

// "text-[0.9rem] text-gray-400 leading-6   rounded-lg shadow-lg"