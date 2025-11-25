// src/components/Footer/index.js
import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>© 2025 CafetFlix — Gabriel</p>
      <div className={styles.links}>
        <a href="#">Termos</a>
        <a href="#">Privacidade</a>
        <a href="#">Contato</a>
      </div>
    </footer>
  );
}

export default Footer;
