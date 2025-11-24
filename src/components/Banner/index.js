// src/components/Banner/index.js
import React, { useEffect, useState } from "react";
import styles from "./Banner.module.css";

const images = [
  {
    url: "https://picsum.photos/1200/500?random=1",
    title: "Filme Destaque",
    description: "Descrição do filme destaque"
  },
  {
    url: "https://picsum.photos/1200/500?random=2",
    title: "Série Popular",
    description: "Descrição da série popular"
  },
  {
    url: "https://picsum.photos/1200/500?random=3",
    title: "Novo Lançamento",
    description: "Descrição do lançamento"
  }
];

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentIndex];

  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${currentImage.url})` }}
    >
      <div className={styles.content}>
        <h1>{currentImage.title}</h1>
        <p>{currentImage.description}</p>
      </div>
    </div>
  );
}

export default Banner;
