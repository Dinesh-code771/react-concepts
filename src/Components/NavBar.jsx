import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
export default function NavBar({ links }) {
  return (
    <motion.nav
      animate={{
        scale: [1, 1.03, 1],
        transition: {
          duration: 4,
          repeat: Infinity,
        },
      }}
      className="w-[80%] relative z-40 mx-auto flex justify-between rounded-md shadow-md p-5 bg-[#010127]"
    >
      <div className="logo">
        <img src="assets/kevinRushLogo.png" alt="" height={30} width={30} />
      </div>
      <motion.div className="inline-flex gap-5">
        {links.map((link, index) => (
          <motion.div
            onClick={() => window.open(link.link, "_blank")}
            key={index}
            animate={{
              y: [0, -3, 0],
              transition: {
                duration: 1,
                delay: index * 0.1,
                repeat: Infinity,
              },
            }}
          >
            {link.icon()}
          </motion.div>
        ))}
      </motion.div>
    </motion.nav>
  );
}
