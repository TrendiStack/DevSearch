import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar.js";
import SearchBar from "./components/SearchBar/SearchBar.js";

function App() {
  const [theme, setTheme] = useState("theme" ? "dark" : "light");

  const themeToggler = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="App" data-theme={theme}>
      <Navbar dataTheme={theme} onTheme={themeToggler} />
      <SearchBar dataTheme={theme} />
    </div>
  );
}

export default App;
