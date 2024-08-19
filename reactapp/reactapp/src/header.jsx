import "./header.css";
import "./colorModeToggle.css";

import React, { useContext } from "react";
import ThemeContext from "./ThemeContext.jsx";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header id="navigation-bar">
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
        <ul className="navbar-nav flex-grow-1">
          <li className="nav-item">
            <a
              className="nav-link text-dark"
              href="/">
              Hem
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-dark"
              href="/">
              Sekretesspolicy
            </a>
          </li>
          <li className="nav-item">
            <button
              id="login-button"
              className="btn btn-primary">
              Logga in
            </button>
          </li>
          <li className="nav-item">
            <label className="switch">
              <input
                type="checkbox"
                id="color-mode-selector"
                onClick={toggleTheme}></input>
              <span className="slider"></span>
            </label>
            <label id="color-mode-descriptor">Mörkt läge</label>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
