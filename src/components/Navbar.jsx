import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo">
        <img src={logo} alt="Hifza Creative Logo" className="logo-img" />
      </Link>

      <div className="nav-right">
        {/* 🌙 Theme Toggle (for mobile/tablet before hamburger) */}
        <button className="theme-toggle mobile-theme" onClick={toggleTheme}>
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>

        {/* Navbar Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link
              to="/resume"
              className={location.pathname === "/resume" ? "active" : ""}
              onClick={() => setIsOpen(false)}
            >
              Resume
            </Link>
            <span className="divider">|</span>
          </li>

          <li>
            <Link
              to="/projects"
              className={location.pathname === "/projects" ? "active" : ""}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <span className="divider">|</span>
          </li>

          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <span className="divider">|</span>
          </li>
        </ul>

        {/* 🌙 Theme Toggle (for desktop after links) */}
        <button className="theme-toggle desktop-theme" onClick={toggleTheme}>
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>

        {/* Hamburger icon (for mobile) */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
