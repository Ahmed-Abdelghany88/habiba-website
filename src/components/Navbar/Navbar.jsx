import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.jpg"; // Adjust the path as necessary
import logo2 from "../../assets/images/logo2.png"; // Adjust the path as necessary

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detect screen size change for mobile/desktop behavior
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDropdownClick = () => {
    if (isMobile) {
      setDropdownOpen(!dropdownOpen); // Only toggle on mobile
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <img className="navbar-logo" src={logo2} alt="MyBrand" />

      {/* Links */}
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
        <li><a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a></li>

        {/* Dropdown */}
        <li
          className={`dropdown ${dropdownOpen ? "open" : ""}`}
          onMouseEnter={() => !isMobile && setDropdownOpen(true)}
          onMouseLeave={() => !isMobile && setDropdownOpen(false)}
        >
          <button
            className="dropdown-toggle"
            onClick={handleDropdownClick}
          >
            More ▾
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="#team" onClick={() => setIsOpen(false)}>Our Team</a></li>
              <li><a href="#blog" onClick={() => setIsOpen(false)}>Blog</a></li>
              <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
          )}
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </div>
    </nav>
  );
}
