import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects({ projects }) {
  return (
    <div className="projectsWrapper flex flex-col justify-center items-center mt-10 relative z-50 px-4 sm:px-6 lg:px-8">
      <h1 className="text-[2rem] font-semibold text-center">Projects</h1>
      <div className="w-full max-w-[1200px] mx-auto flex flex-wrap gap-5 mt-5 justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            y={index * 100}
            key={index}
            imgSrc={project.imgSrc}
            title={project.title}
            description={project.description}
            techs={project.techs}
            liveLink={project.liveLink}
            videoSrc={project.videoSrc}
          />
        ))}
      </div>
    </div>
  );
}
