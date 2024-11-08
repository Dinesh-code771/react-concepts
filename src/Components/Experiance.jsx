import React from "react";
import ExperienceCard from "./ExperianceCard";

export default function Experience() {
  const experiences = [
    {
      date: "2024 - Present",
      title: "Software Engineer-II",
      company: "GeekyAnts",
      description:
        "Developed complex frontend components and features, focusing on performance optimization and scalability. Collaborated with designers and backend teams to integrate sophisticated UI elements, ensuring smooth and efficient user experiences. Played a key role in tackling technical challenges and improving development practices.",
      x: 800, // Starting x offset for scroll animation
    },
    {
      date: "2023 - 2024",
      title: "Software Engineer-I",
      company: "GeekyAnts",
      description:
        "Developed frontend components and features, collaborating closely with designers to implement seamless and visually appealing user interfaces.",
      x: 1200,
    },
    {
      date: "2022 - 2023",
      title: "Intern",
      company: "GeekyAnts",
      description:
        "Assisted in debugging and learning full-stack development basics.",
      x: 1300,
    },
  ];

  return (
    <div className="w-[95%] mx-auto mt-10 flex flex-col gap-5 justify-center items-center">
      <h2 className="text-[1.2rem] font-semibold">Experience</h2>
      <div className="w-full relative z-50 experience mt-10 flex flex-col gap-5">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            date={exp.date}
            title={exp.title}
            company={exp.company}
            description={exp.description}
            x={exp.x}
          />
        ))}
      </div>
    </div>
  );
}
