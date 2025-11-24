import React from "react";
import { useLocation } from "react-router-dom";

function Watch() {
  const query = new URLSearchParams(useLocation().search);
  const videoId = query.get("v");

  return (
    <div style={{ paddingTop: "80px", textAlign: "center" }}>
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
        title="YouTube Video"
      />
    </div>
  );
}

export default Watch;
