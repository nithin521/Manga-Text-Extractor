import React from "react";
import "./Footer.css";
import { Github, Instagram, Mail, BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <BookOpen className="footer-icon" />
          <span>Manga Dialogue Extractor</span>
        </div>

        <div className="social-links">
          <a
            href="https://www.instagram.com/nithin_5189/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <Instagram />
          </a>
          <a
            href="mailto:nithin74728@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <Mail />
          </a>
          <a
            href="https://github.com/nithin521"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <Github />
          </a>
        </div>

        <div className="footer-nav">
          <a href="#" className="footer-link">
            Home
          </a>
          <a href="#about" className="footer-link">
            About
          </a>
          <a href="#upload" className="footer-link">
            Upload
          </a>
        </div>

        <p className="copyright">
          &copy; 2025 Manga Dialogue Extractor. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
