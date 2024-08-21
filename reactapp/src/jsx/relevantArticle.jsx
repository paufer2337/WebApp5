import React, { useContext } from "react";
import "../css/relevantCard.css";
import { getTags } from "./tags.js";
import ThemeContext from "./ThemeContext";
import lightThemeImg from '../img/relevant_bg_light.png';
import darkThemeImg from '../img/relevant_bg_dark.png';

const RelevantCard = ({ article, showImageButton }) => {
  const { theme } = useContext(ThemeContext);

  // Determine the background image based on the theme
  const backgroundImage = theme === "dark" ? darkThemeImg : lightThemeImg;

  if (!article) {
    return (
      <div className="relevant-card">
        <div className="relevant-card-body">
          <h2 id="relevant-today-title">Relevant idag</h2>
          <p id="relevant-card-text">Inga relevanta artiklar idag.</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relevant-card"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relevant-card-body">
        <h2 id="relevant-today-title">Relevant idag</h2>
        <h2 id="relevant-card-title">{article.title}</h2>
        <p id="relevant-card-text">{article.summary}</p>
        <a
          href={article.link}
          id="relevant-card-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Läs mer
        </a>
        <p id="relevant-card-tags">Nyckelord: {getTags(article.summary)}</p>
        {showImageButton && (
          <button
            id="add-image-button-relevant-article"
            className="btn btn-primary"
          >
            Lägg till bild
          </button>
        )}
      </div>
    </div>
  );
};

export default RelevantCard;
