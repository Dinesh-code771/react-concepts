import React from "react";
import NavBar from "./components/NavBar";
import Tech from "./components/Tech";
// App.js
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import Hero from "./components/Hero";

const links = [
  {
    iconName: "GitHub",
    icon: () => <FaGithubSquare size={25} style={{ cursor: "pointer" }} />,
  },
  {
    iconName: "LinkedIn",
    icon: () => <FaLinkedin size={25} style={{ cursor: "pointer" }} />,
  },
  {
    iconName: "Twitter",
    icon: () => <FaTwitterSquare size={25} style={{ cursor: "pointer" }} />,
  },
];

function App() {
  return (
    <div className=" bg-black min-h-screen text-white px-10 py-5 ">
      <NavBar links={links} />
      <Hero />
      <Tech
        techs={[
          { src: "techs/react.png", alt: "React" },
          { src: "techs/next.jpeg", alt: "Next.js" },
          { src: "techs/native.png", alt: "React Native" },
          { src: "techs/python.png", alt: "Python" },
          { src: "techs/motion.jpeg", alt: "Framer Motion" },
          { src: "techs/threejs.png", alt: "Three.js" },
        ]}
      />
    </div>
  );
}

export default App;
