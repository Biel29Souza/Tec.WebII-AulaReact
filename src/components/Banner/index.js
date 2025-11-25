// src/components/Banner/index.js
import React, { useEffect, useState, useRef } from "react";
import styles from "./Banner.module.css";
import { bannerSlides } from "../../components/Mocks/bannerSlides.js";

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const next = () => setCurrentIndex((prev) => (prev + 1) % bannerSlides.length);
  const goTo = (index) => setCurrentIndex(index);

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const current = bannerSlides[currentIndex];

  return (
    <section
      className={styles.banner}
      style={{ backgroundImage: `url(${current.url})` }}
    >
      <div className={styles.content}>
        <h1>{current.title}</h1>
        <p>{current.description}</p>
      </div>

      <div className={styles.dots}>
        {bannerSlides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === currentIndex ? styles.active : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default Banner;
