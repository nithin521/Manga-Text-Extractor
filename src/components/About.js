import React from "react";
import { BookOpen } from "lucide-react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-header">
          <BookOpen className="about-icon" />
          <h2>About This Project</h2>
        </div>
        <div className="about-content">
          <p>
            This project utilizes advanced machine learning techniques to
            extract dialogues from manga images. By leveraging state-of-the-art
            OCR (Optical Character Recognition) and text detection models, it
            accurately identifies and extracts text from speech bubbles and
            dialogue boxes in manga panels. Users can simply upload their manga
            images, and the system will process them to extract the dialogues
            while maintaining the context and flow of the story.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
