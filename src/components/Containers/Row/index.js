import React, { useRef, useEffect } from "react";
import styles from "./Row.module.css";
import Card from "../Card";

function Row({ title, videos }) {
  const carouselRef = useRef(null);
  const rafRef = useRef(null);

  
  const loopVideos = [...videos, ...videos];

  // Scroll manual com as setas
  const scrollByAmount = (amount) => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollTo({
      left: el.scrollLeft + amount,
      behavior: "smooth",
    });
  };

  const handleArrow = (direction) => {
    const el = carouselRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.6; // scroll ~60% of visible width
    scrollByAmount(direction === "left" ? -amount : amount);
  };

  // Auto‑scroll ao passar o mouse
  const startAutoScroll = () => {
    const el = carouselRef.current;
    if (!el) return;

    const step = () => {
      // tempo de movimento
      el.scrollLeft += 0.5;

      // when we reach half of duplicated content, wrap to start
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) {
        el.scrollLeft = 0;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
  };

  // Parar a rolagem, quando o mouse nao esta em cima
  const stopAutoScroll = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  // Limpeza no useEffect
  useEffect(() => {
    return () => stopAutoScroll();
  }, []);

  return (
    <div className={styles.rowContainer}>
      <h2 className={styles.rowTitle}>{title}</h2>

      <div
        className={styles.carousel}
        ref={carouselRef}
        onMouseEnter={startAutoScroll}
        onMouseLeave={stopAutoScroll}
      >
        <div className={styles.track}>
          {loopVideos.map((video, index) => (
            <Card
              key={`${video.videoId}-${index}`}
              videoId={video.videoId}
              title={video.title}
              subtitle={video.subtitle}
            />
          ))}
        </div>
      </div>

      <button
        className={`${styles.arrow} ${styles.left}`}
        onClick={() => handleArrow("left")}
        aria-label="Scroll left"
      >
        ◀
      </button>
      <button
        className={`${styles.arrow} ${styles.right}`}
        onClick={() => handleArrow("right")}
        aria-label="Scroll right"
      >
        ▶
      </button>
    </div>
  );
}

export default Row;
