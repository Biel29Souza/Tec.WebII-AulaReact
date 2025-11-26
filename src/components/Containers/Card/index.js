import React from "react";
import { Link } from "react-router-dom";  
import styles from "./Card.module.css";

function Card({ videoId, title, subtitle }) {
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <Link to={`/watch?v=${videoId}`} className={styles.card}>
      <img src={thumbnail} alt={title} className={styles.thumbnail} />
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.subtitle}>{subtitle}</p>
    </Link>
  );
}

export default Card;
