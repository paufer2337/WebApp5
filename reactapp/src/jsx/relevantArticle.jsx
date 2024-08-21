import React from "react";
import "../css/relevantCard.css";
import { getTags } from "./tags.js";

const RelevantCard = ({ article, showImageButton }) => {
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
    <div className="relevant-card">
      <div className="relevant-card-body">
        <h2 id="relevant-today-title">Relevant idag</h2>
        <h2 id="relevant-card-title">{article.title}</h2>
        <p id="relevant-card-text">{article.summary}</p>
        <a
          href={article.link}
          id="relevant-card-link"
          target="_blank"
          rel="noopener noreferrer">
          Läs mer
        </a>
        <p id="relevant-card-tags">Nyckelord: {getTags(article.summary)}</p>
        <img
          id="relevant-card-image"
          src=""
        />
        {showImageButton && (
          <button
            id="add-image-button-relevant-article"
            className="btn btn-primary">
            Lägg till bild
          </button>
        )}
      </div>
    </div>
  );
};

export default RelevantCard;
