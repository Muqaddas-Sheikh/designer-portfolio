import React from "react";
import { useTheme } from "../context/ThemeContext";
import "./Footer.css";

function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`footer ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h4>Phone</h4>
          <p>123-456-7890</p>

          <h4>Email</h4>
          <p>info@mysite.com</p>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <h4>Follow Me</h4>
          <div className="social-links">
            <a href="#" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <p>© {new Date().getFullYear()} By Hifza.</p>
          <p>Graphic Designer & Canva Expert</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;