// src/components/Card/index.js
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ videoId, title, subtitle }) {
  const navigate = useNavigate();
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className={styles.card} onClick={() => navigate(`/watch?v=${videoId}`)}>
      <img src={thumbnail} alt={title} className={styles.thumbnail} />
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}

export default Card;
