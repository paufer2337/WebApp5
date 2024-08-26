import React, {useState, useEffect, useContext}from "react";
import { getTags } from "./tags.js";
import "../css/card.css";
import ThemeContext from "./ThemeContext";

const convertTime = (publishedTime) => {
  const options = {
    hour12: false,
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

const handleAddImage = (articleId, setImageUrls) => {
  const imageUrl = prompt("Ange URL för bilden:");
  if (imageUrl) {
    setImageUrls((prevUrls) => ({
      ...prevUrls,
      [articleId]: imageUrl,
    }));
  }
};

const ArticleList = React.memo(
  ({ updateArticles, showImageButton, articles }) => {
    const [localArticles, setLocalArticles] = useState(articles);
    const [sortBy, setSortBy] = useState("newest");
    const [loading, setLoading] = useState(false);
    const [imageUrls, setImageUrls] = useState({});

    useEffect(() => {
    }, [sortBy]);

    useEffect(() => {
      setLocalArticles(articles); 
    }, [articles]);

    useEffect(() => {
      updateArticles(localArticles); 
    }, [localArticles, updateArticles]);

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
                  <img
                    src={imageUrls[article.id] || ""}
                    className="article-image"
                  />
                  {showImageButton && (
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        handleAddImage(article.id, setImageUrls)
                      }>
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
  }
);

export default ArticleList;