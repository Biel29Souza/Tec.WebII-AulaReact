// src/components/Row/index.js
import React from "react";
import styles from "./Row.module.css";
import Card from "../Card";

function Row({ title, videos }) {
  // duplicamos os vídeos para criar efeito de looping
  const loopVideos = [...videos, ...videos];

  return (
    <div className={styles.rowContainer}>
      <h2 className={styles.rowTitle}>{title}</h2>
      <div className={styles.carousel}>
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
    </div>
  );
}

export default Row;
