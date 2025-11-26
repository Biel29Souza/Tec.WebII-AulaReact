import React from "react";
import Banner from "../../components/Banner";
import Row from "../../components/Row/index.js";
import {comedyVideos,dramaVideos,terrorVideos,artigosVideos,seriesVideos,futebolVideos,acaoVideos} from "../../components/Mocks/videos.js";
import "./Home.module.css";
//import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="home">
      <Banner />
      <Row title="Comédia" videos={comedyVideos} />
      {/* <Row title="Drama" videos={dramaVideos} />
      <Row title="Terror" videos={terrorVideos} />
      <Row title="Artigos" videos={artigosVideos} /> */}
      <Row title="Séries" videos={seriesVideos} />
      <Row title="Futebol" videos={futebolVideos} />
      {/* <Row title="Ação" videos={acaoVideos} /> */}
      
    </div>
  );
}

export default Home;
