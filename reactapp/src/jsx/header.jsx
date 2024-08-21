import React, { useContext } from "react";
import "../css/header.css";
import ThemeContext from "./ThemeContext";
import ColorModeSelector from "./colorModeSelector.jsx";
import LoginButton from "./loginButton.jsx";
import RegisterButton from "./registerButton.jsx";
import logo from '../img/w5_logo.png';  

function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header id="navigation-bar">
      <nav
        className={`nav ${
          theme === "dark" ? "dark-theme-header" : "light-theme-header"
        }`}>
        <div className="nav-left">
          <ul className={`ul ${theme === "dark" ? "dark-theme-list" : "light-theme-list"}`}>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/">HEM</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/">SEKRETESSPOLICY</a>
            </li>
          </ul>
        </div>

        <div className="logo-container">
          <a href="/">
            <img src={logo} alt="Logo" className="logo" /> 
          </a>
        </div>

        <div className="nav-right">
          <ul className={`ul ${theme === "dark" ? "dark-theme-list" : "light-theme-list"}`}>
            <li className="nav-item">
              <RegisterButton />
            </li>
            <li className="nav-item">
              <LoginButton />
            </li>
            <li className="nav-item">
              <ColorModeSelector />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
