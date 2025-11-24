import React from "react";
import Banner from "../../components/Banner";
import Row from "../../components/Row";
import "./Home.module.css";

function Home() {
  const comedyVideos = [
    { videoId: "U331wdfT4-Q", title: "Tente Não Rir 2024", subtitle: "Desafio" },
    { videoId: "kCdVFAeYSL4", title: "Melhores Vídeos da Internet", subtitle: "Parte 07" },
    { videoId: "M7lc1UVf-VE", title: "Vídeos Engraçados", subtitle: "Compilado" },
    { videoId: "a3ICNMQW7Ok", title: "Por que os Homens Vivem Menos?", subtitle: "Humor" },
    { videoId: "RgKAFK5djSk", title: "Comédia Sertão", subtitle: "Humor Nordestino" },
    { videoId: "L_jWHffIx5E", title: "Pegadinhas Engraçadas", subtitle: "Clássicos" },
    { videoId: "eY52Zsg-KVI", title: "Tombos Hilários", subtitle: "Tente Não Rir" },
    { videoId: "a3ICNMQW7Ok", title: "Por que os Homens Vivem Menos?", subtitle: "Humor" },
    { videoId: "RgKAFK5djSk", title: "Comédia Sertão", subtitle: "Humor Nordestino" },
    { videoId: "L_jWHffIx5E", title: "Pegadinhas Engraçadas", subtitle: "Clássicos" },
    { videoId: "eY52Zsg-KVI", title: "Tombos Hilários", subtitle: "Tente Não Rir" }
  ];

  const dramaVideos = [
    { videoId: "a3ICNMQW7Ok", title: "Drama 1", subtitle: "Filme" },
    { videoId: "VYOjWnS4cMY", title: "Drama 2", subtitle: "Série" }
  ];

  const terrorVideos = [
    { videoId: "t433PEQGErc", title: "Terror 1", subtitle: "Filme" },
    { videoId: "6ZfuNTqbHE8", title: "Terror 2", subtitle: "Série" }
  ];

  const artigosVideos = [
    { videoId: "M7lc1UVf-VE", title: "Artigo 1", subtitle: "Documentário" },
    { videoId: "kXYiU_JCYtU", title: "Artigo 2", subtitle: "Curta" }
  ];

  const seriesVideos = [
    { videoId: "RgKAFK5djSk", title: "Série 1", subtitle: "Temporada 1" },
    { videoId: "fLexgOxsZu0", title: "Série 2", subtitle: "Temporada 2" }
  ];

  const futebolVideos = [
    { videoId: "1w7OgIMMRc4", title: "Futebol 1", subtitle: "Jogo" },
    { videoId: "ktvTqknDobU", title: "Futebol 2", subtitle: "Treino" }
  ];

  const acaoVideos = [
    { videoId: "uelHwf8o7_U", title: "Ação 1", subtitle: "Filme" },
    { videoId: "Zi_XLOBDo_Y", title: "Ação 2", subtitle: "Série" }
  ];

  return (
    <div className="home">
      <Banner />
      <Row title="Comédia" videos={comedyVideos} />
      <Row title="Drama" videos={dramaVideos} />
      <Row title="Terror" videos={terrorVideos} />
      <Row title="Artigos" videos={artigosVideos} />
      <Row title="Séries" videos={seriesVideos} />
      <Row title="Futebol" videos={futebolVideos} />
      <Row title="Ação" videos={acaoVideos} />
    </div>
  );
}

export default Home;
