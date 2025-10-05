/**
 * @copyright Sadeep Jayashanka
 * @license Apache-2.0
 */

/**
 * Import required dependencies
 */
import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Navbar Component
 * @param {Object} props - Component props
 * @param {boolean} props.navOpen - Controls mobile navigation menu visibility
 */
const Navbar = ({ navOpen }) => {
  // Refs to track the last active link and moving background box
  const lastActiveLink = useRef();
  const activeBox = useRef();

  /**
   * Initialize the active box position and dimensions
   * Called on mount and window resize
   */
  const initActiveBox = () => {
    // Position the active box behind the active nav link
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };

  /**
   * Handle click events on navigation links
   * Updates active link styling and moves the background box
   */
  const activeCurrentLink = (event) => {
    // Remove active class from previous active link
    lastActiveLink.current?.classList.remove("active");
    // Add active class to clicked link
    event.target.classList.add("active");
    // Update ref to new active link
    lastActiveLink.current = event.target;

    // Move active box to new position
    activeBox.current.style.top = event.target.offsetTop + "px";
    activeBox.current.style.left = event.target.offsetLeft + "px";
    activeBox.current.style.width = event.target.offsetWidth + "px";
    activeBox.current.style.height = event.target.offsetHeight + "px";
  };

  // Initialize active box on component mount
  useEffect(() => {
    initActiveBox();
    // Add resize listener
    window.addEventListener("resize", initActiveBox);
    // Cleanup resize listener on unmount
    return () => {
      window.removeEventListener("resize", initActiveBox);
    };
  }, []);

  /**
   * Navigation items configuration
   * First item is set as active by default
   */
  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink, // Reference for initial active link
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Reviews",
      link: "#reviews",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden", // Hidden on medium screens and up
    },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {/* Map through nav items and render links */}
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          key={key}
          ref={ref}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      {/* Moving background box that highlights active link */}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

// PropTypes for type checking
Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
