import React, { useEffect, useState, useContext, useCallback } from "react";
import "../css/card.css";
import ThemeContext from "./ThemeContext";
import { getTags } from "./tags.js";

const convertTime = (publishedTime) => {
  const options = {
    hour12: false, // Use 24-hour clock
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  let localDate = new Date(publishedTime).toLocaleDateString(
    undefined,
    options
  );
  let localTime = new Date(publishedTime).toLocaleTimeString(
    undefined,
    options
  );

  return `${localDate} ${localTime}`;
};

const fetchArticles = (sortOption, setArticles, setLoading) => {
  setLoading(true);
  fetch(`http://localhost:3000/api/articles?sortBy=${sortOption}`)
    .then((response) => response.json())
    .then((data) => {
      setArticles(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching articles:", error);
      setLoading(false);
    });
};

const ArticleList = ({ updateArticles, showImageButton, articles }) => {
  const [localArticles, setLocalArticles] = useState(articles);
  const [sortBy, setSortBy] = useState("newest");
  const [loading, setLoading] = useState(false);
  const [imageUrls, setImageUrls] = useState({});

  useEffect(() => {
    fetchArticles(sortBy, setLocalArticles, setLoading);
  }, [sortBy]);

  useEffect(() => {
    setLocalArticles(articles); // Update localArticles when articles prop changes
  }, [articles]);

  useEffect(() => {
    updateArticles(localArticles); // Notify parent of article updates
  }, [localArticles, updateArticles]);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleAddImage = useCallback((articleId) => {
    const imageUrl = prompt("Ange URL för bilden:");
    if (imageUrl) {
      setImageUrls((prevUrls) => ({
        ...prevUrls,
        [articleId]: imageUrl,
      }));
    }
  }, []);

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
          <option value="author-ascending">författare, stigande</option>
          <option value="author-descending">författare, fallande</option>
          <option value="newest">Nyast</option>
          <option value="oldest">Äldst</option>
        </select>
      </div>
      {loading ? (
        <div className="loading-animation"></div>
      ) : (
        <div id="card-collection">
          {localArticles.map((article) => (
            <div
              key={article.id}
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
                <p>Nyckelord: {getTags(article.summary)}</p>
                <p className="card-publish-text">
                  {convertTime(article.published)}
                </p>
                {/* Use imageUrls to set the src */}
                <img
                  src={imageUrls[article.id] || ""}
                  className="article-image"
                />
                {showImageButton && (
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddImage(article.id)}>
                    Lägg till bild
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticleList;