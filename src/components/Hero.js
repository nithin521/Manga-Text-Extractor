import React from "react";
import "./Hero.css";
import { Upload, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="hero-content">
        <h1>Manga Dialogue Extractor</h1>
        <p>Extract text from your favorite manga panels with AI!</p>
        <div className="hero-actions">
          <a href="#upload" className="upload-button">
            <Upload className="upload-icon" />
            Upload Manga Image
          </a>
          <p className="hero-description">
            Supported formats: JPG, PNG, GIF, WebP
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
