// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
    
//     <div className="App">
//       <img src={logo} className="App-logo" alt="logo" />
//       <a className='a_styles'>Gabriel Pereira</a>
//     </div>
//   );
// }

// export default App;

// src/App.js
import React, { useState, useEffect } from "react";
import AppRoutes from "./routes";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return <AppRoutes theme={theme} setTheme={setTheme} />;
}

export default App;




