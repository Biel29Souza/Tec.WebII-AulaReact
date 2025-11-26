import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaSun, FaMoon, FaSearch } from "react-icons/fa";
import {  comedyVideos,  dramaVideos,  terrorVideos,  artigosVideos,  seriesVideos,
  futebolVideos,  acaoVideos} from "../Mocks/videos.js";

function Navbar({ theme, setTheme }) {
  const [query, setQuery] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  
  const allVideos = [
    ...comedyVideos,
    ...dramaVideos,
    ...terrorVideos,
    ...artigosVideos,
    ...seriesVideos,
    ...futebolVideos,
    ...acaoVideos
  ];

  // Atualiza query conforme o usuário digita.
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
      return;
    }

    const filtered = allVideos.filter(video =>
      video.title.toLowerCase().includes(value.toLowerCase()) ||
      video.subtitle.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
  };

  // Quando o usuário clica em um resultado da busca
  const handleSelect = (videoId) => {
    setQuery("");
    setResults([]);
    navigate(`/watch?v=${videoId}`);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>CafetFlix</div>

      <nav className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/catalogo">Catalogo</Link>
        <Link to="/watch">Watch</Link>
      </nav>

      <div className={styles.actions}>
        {showInput && (
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Buscar..."
              value={query}
              onChange={handleChange}
            />
            {results.length > 0 && (
              <ul className={styles.results}>
                {results.map((video) => (
                  <li
                    key={video.videoId}
                    onClick={() => handleSelect(video.videoId)}
                  >
                    {video.title} — <small>{video.subtitle}</small>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        <FaSearch
          className={styles.searchIcon}
          onClick={() => setShowInput(!showInput)}
        />
        <div
          className={styles.themeToggle}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
