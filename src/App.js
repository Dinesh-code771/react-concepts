// // App.js
// import React, { useEffect } from "react";
// import NavBar from "./components/NavBar";
// import Tech from "./components/Tech";
// import Hero from "./components/Hero";
// import Projects from "./components/Projects";
// import BackgroundAnimation from "./components/BackgroundAnimation";
// import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
// import Experiance from "./components/Experiance";
// import Contact from "./components/Contact";

// const links = [
//   {
//     iconName: "GitHub",
//     icon: () => <FaGithubSquare size={25} style={{ cursor: "pointer" }} />,
//     link: "https://github.com/Dinesh-code771",
//   },
//   {
//     iconName: "LinkedIn",
//     icon: () => <FaLinkedin size={25} style={{ cursor: "pointer" }} />,
//     link: "https://www.linkedin.com/in/dineshreddy1/",
//   },
//   {
//     iconName: "Twitter",
//     icon: () => <FaTwitterSquare size={25} style={{ cursor: "pointer" }} />,
//     link: "https://x.com/dineshreddy888",
//   },
// ];

// const techImages = [
//   { src: "techs/react.png", alt: "React" },
//   { src: "techs/next.jpeg", alt: "Next.js" },
//   { src: "techs/native.png", alt: "React Native" },
//   { src: "techs/python.png", alt: "Python" },
//   { src: "techs/motion.jpeg", alt: "Framer Motion" },
//   { src: "techs/threejs.png", alt: "Three.js" },
// ];

// const projects = [
//   {
//     imgSrc: "assets/projects/project-1.jpg",
//     title: "Estimation Builder",
//     description:
//       "The Estimation Builder is a comprehensive tool designed to estimate both the cost and the team composition needed to develop a real-time project. This tool aids project planners and developers in predicting the resources, timelines, and budgets required, streamlining the process from initial planning through to execution",
//     techs: [techImages[0], techImages[1], techImages[2]], // select specific techs
//     liveLink: "#",
//     videoSrc: "assets/projects/projectVideo1.mov",
//   },
//   {
//     imgSrc: "assets/projects/project-2.jpeg",
//     title: "E-commerce Project",
//     description:
//       "Developed a scalable and responsive e-commerce platform, implementing features like product listings, shopping carts, and secure checkout processes.",
//     techs: [techImages[2], techImages[3], techImages[4]], // select specific techs
//     liveLink: "#",
//     videoSrc: "assets/projects/project4.mp4",
//   },
//   {
//     imgSrc: "assets/projects/project3.png",
//     title: "Swiggy Clone",
//     description:
//       "Built a user-friendly food booking platform, enabling customers to browse menus,and add items to their cart.",
//     techs: [techImages[0], techImages[4], techImages[5]], // select specific techs
//     liveLink: "#",
//     videoSrc: "assets/projects/project3 (1).mp4",
//   },
// ];

// function App() {
//   // Scroll to top on page load
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   // Render the app
//   return (
//     <div className="relative bg-black min-h-screen text-white px-10 py-5 overflow-hidden">
//       {/* <BackgroundAnimation /> */}
//       <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />
//       <NavBar links={links} />
//       <Hero
//         name={"Dinesh Reddy"}
//         role="Font-End Developer"
//         description={`
// I'm a passionate and dedicated software engineer with a versatile skill set, enabling me to work across various domains. Currently, I am focused on projects involving React, React Native, Next.js, Framer Motion, and Three.js. Known for my unwavering determination, I am committed to seeing every task through to completion.
// `}
//       />
//       <Tech techs={techImages} />
//       <Projects projects={projects} />
//       <Experiance />
//       <Contact />
//     </div>
//   );
// }

// export default App;
