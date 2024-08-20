import React, { useState, useEffect } from "react";
import RelevantCard from "./relevantArticle.jsx";
import ArticleList from "./ArticleList.jsx";

const ArticleParent = () => {
  const [showImageButton, setShowImageButton] = useState(true); // Initial state
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setShowImageButton((prevState) => !prevState);
    }
  }, []);

  const updateArticles = (newArticles) => {
    setArticles(newArticles);
  };

  const findRelevantArticle = (articles) => {
    const today = new Date().toISOString().split("T")[0];
    return articles.find((article) => {
      const articleDate = new Date(article.published)
        .toISOString()
        .split("T")[0];
      return articleDate === today;
    });
  };

  const relevantArticle = findRelevantArticle(articles);

  return (
    <div>
      <RelevantCard
        article={relevantArticle}
        showImageButton={showImageButton}
      />
      <ArticleList updateArticles={updateArticles} />
    </div>
  );
};

export default ArticleParent;