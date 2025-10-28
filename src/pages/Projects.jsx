import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
// 🔹 Apni images import karo
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.jpg";
import "./Projects.css";

function Projects() {
  const { isDarkMode } = useTheme();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Thoda delay se iOS-style smooth fade/slide
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      name: "Coffee Website",
      desc: "A fully responsive coffee shop website built using HTML, CSS, and JavaScript. It includes animations, a modern layout, and mobile responsiveness.",
      img: project1,
    },
    {
      id: 2,
      name: "Portfolio Website",
      desc: "A personal portfolio built with React.js showcasing projects, skills, and contact details with a smooth, responsive design.",
      img: project2,
    },
    {
      id: 3,
      name: "Dogs Care Website",
      desc: "A custom dog care service landing page created using HTML, CSS, and JS, featuring a beautiful UI and responsive sections.",
      img: project3,
    },
  ];

  return (
    <div
      className={`projects-section ${isDarkMode ? 'dark-theme' : 'light-theme'}`}
      style={{
        transition: "all 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(40px)",
      }}
    >
      <h1 className="projects-heading">Projects</h1>
      <p className="projects-subheading">
        Here are some of my featured frontend and React projects.
      </p>

      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`project-card ${index % 2 === 0 ? "normal" : "reverse"}`}
          style={{
            transition: "all 0.7s ease",
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateX(0)"
              : index % 2 === 0
              ? "translateX(-60px)"
              : "translateX(60px)",
          }}
        >
          <img src={project.img} alt={project.name} className="project-img" />
          <div className="project-info">
            <h2>{project.name}</h2>
            <p>{project.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
