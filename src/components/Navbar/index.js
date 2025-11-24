// src/components/Navbar/index.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar({ theme, setTheme }) {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>Netflix Clone</div>
      <nav className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/watch">Watch</Link>
      </nav>
      <div
        className={styles.themeToggle}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
      </div>
    </header>
  );
}

export default Navbar;
