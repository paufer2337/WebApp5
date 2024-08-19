import "../css/header.css";

import ColorModeSelector from "./colorModeSelector.jsx";

function Header() {
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
           <ColorModeSelector></ColorModeSelector>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
