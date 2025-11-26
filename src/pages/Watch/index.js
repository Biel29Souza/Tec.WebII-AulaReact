import React from "react";
import { useLocation } from "react-router-dom";

function Watch() {
  const query = new URLSearchParams(useLocation().search);
  const videoId = query.get("v");

  if (!videoId) {
    return <div style={{ paddingTop: "80px" }}>Nenhum vídeo selecionado</div>;
  }

  return (
    <div style={{ paddingTop: "80px", textAlign: "center" }}>
      <iframe
        width="90%"
        height="700"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
        title="YouTube Video"
      />
    </div>
  );
}

export default Watch;
