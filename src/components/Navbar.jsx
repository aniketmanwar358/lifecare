import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false); // Close menu if switching to desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img className="logo_image" src="./image_6.jpeg" alt="LifeCare Logo" />
        <h1>LifeCare</h1>
        {/* Show menu icon only in mobile mode */}
        {isMobile && (
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✖" : "☰"}
          </div>
        )}
      </div>

      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/bmi" onClick={() => setMenuOpen(false)}>
            BMI
          </Link>
        </li>
        <li>
          <Link to="/medicine" onClick={() => setMenuOpen(false)}>
            Medicine Guide
          </Link>
        </li>
        <li>
          <Link to="/risk" onClick={() => setMenuOpen(false)}>
            Health Risk
          </Link>
        </li>
        <li>
          <Link to="/bot" onClick={() => setMenuOpen(false)}>
            Doctor Bot
          </Link>
        </li>
        <li>
          <Link to="/upload" onClick={() => setMenuOpen(false)}>
            Upload Docs
          </Link>
        </li>
        <li>
          <button
            className="logout-btn"
            onClick={() => {
              auth.signOut();
              setMenuOpen(false);
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
