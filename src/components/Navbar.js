import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldDog } from "@fortawesome/free-solid-svg-icons";
import { BookOpen } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <BookOpen className="book-icon" />
        <h1>MDX</h1>
      </div>
      <ul>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#footer">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
