import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import "./Home.css";
import hifzaImg from "../assets/ChatGPT Image Oct 26, 2025, 11_34_33 AM.png";

function Home() {
  const { isDarkMode } = useTheme();

  return (
    <motion.section
      className={`home ${isDarkMode ? "dark-theme" : "light-theme"}`}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <motion.div
        className="home-content"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h1>Hello</h1>
        <h2>A Bit About Me</h2>
        <p>
          Hi, I'm <strong>Hifza</strong> — a passionate{" "}
          <strong>Canva Expert</strong> who loves designing creative and
          aesthetic visuals. I enjoy turning ideas into beautiful designs and
          helping people enhance their brand identity through my work.
        </p>

        <div className="circle-links">
          <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
            <Link to="/resume" className="circle">
              Resume
            </Link>
          </motion.div>
          <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
            <Link to="/projects" className="circle">
              Projects
            </Link>
          </motion.div>
          <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
            <Link to="/contact" className="circle">
              Contact
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="home-image"
        initial={{ opacity: 0, x: 50, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <img src={hifzaImg} alt="Hifza" />
      </motion.div>
    </motion.section>
  );
}

export default Home;
