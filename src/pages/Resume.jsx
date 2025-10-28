import React from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import "./Resume.css";

function Resume() {
  const { isDarkMode } = useTheme();

  return (
    <motion.div
      className={`resume-section ${isDarkMode ? "dark-theme" : "light-theme"}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        My Resume
      </motion.h1>

      {/* --- Work Experience Section --- */}
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <h2>Work Experience</h2>
        <div className="resume-content">
          <div className="resume-entry">
            <h3>
              Editor <span>| 2035 - Present</span>
            </h3>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy. Just click "Edit Text" or double click me to add your own
              content and make changes to the font.
            </p>
          </div>

          <div className="resume-entry">
            <h3>
              Writer at Large <span>| 2035 - 2035</span>
            </h3>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy. Just click "Edit Text" or double click me to add your own
              content and make changes to the font.
            </p>
          </div>

          <div className="resume-entry">
            <h3>
              Intern <span>| 2035 - 2035</span>
            </h3>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy. Just click "Edit Text" or double click me to add your own
              content and make changes to the font.
            </p>
          </div>
        </div>
      </motion.section>

      {/* --- Education Section --- */}
      <motion.section
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        <h2>Education</h2>
        <div className="resume-content">
          <div className="resume-entry">
            <h3>
              Establishment Name | Master's Degree <span>| 2035 - 2035</span>
            </h3>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. Let
              your users get to know you.
            </p>
          </div>

          <div className="resume-entry">
            <h3>
              Establishment Name | Bachelor's Degree <span>| 2035 - 2035</span>
            </h3>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. Let
              your users get to know you.
            </p>
          </div>
        </div>
      </motion.section>

      {/* --- Skills Section --- */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
      >
        <h2>Skills & Expertise</h2>
        <ul className="skills-list">
          <motion.li whileHover={{ scale: 1.05 }}>
            I'm a paragraph. Click here to add your own text and edit me.
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            I'm a paragraph. Click here to add your own text and edit me.
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            I'm a paragraph. Click here to add your own text and edit me.
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            I'm a paragraph. Click here to add your own text and edit me.
          </motion.li>
        </ul>
      </motion.section>
    </motion.div>
  );
}

export default Resume;
