import React, { useEffect, useState, useContext } from "react";
import "../css/card.css";
import ThemeContext from "./ThemeContext";

import { getTags } from "./tags.js";

const convertTime = (publishedTime) => {
  let localDate = new Date(publishedTime).toLocaleDateString();
  let localTime = new Date(publishedTime).toLocaleTimeString();
  return `${localDate} ${localTime}`;
}

const ArticleList = ({ updateArticles }) => {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState("newest");
  const [loading, setLoading] = useState(false);

  const fetchArticles = (sortOption) => {
    setLoading(true);
    fetch(`http://localhost:3000/api/articles?sortBy=${sortOption}`)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
        updateArticles(data); // Call function passed from parent
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchArticles(sortBy);
  }, [sortBy]);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <div>
        <label htmlFor="sortBy">Sortera efter:</label>
        <select
          id="sortBy"
          name="sortBy"
          className="form-select"
          value={sortBy}
          onChange={handleSortChange}>
          <option value="">Inget specifik</option>
          <option value="newest">Nyast</option>
          <option value="oldest">Äldst</option>
        </select>
      </div>
      {loading ? (
        <div className="loading-animation"></div>
      ) : (
        <div>
          <div id="card-collection">
            {articles.map((article) => (
              <div
                key={article.id || article.title}
                className={`card ${
                  theme === "dark" ? "dark-theme-card" : "light-theme-card"
                }`}>
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.summary}</p>
                  <a
                    href={article.link}
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer">
                    Läs mer
                  </a>
                  <p>Nyckelord: {getTags(article.summary)}
                  </p>
                  <p className="card-publish-text">
                    {convertTime(article.published)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleList;
