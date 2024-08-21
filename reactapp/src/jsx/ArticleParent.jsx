import React, { useState, useEffect } from "react";
import RelevantCard from "./relevantArticle.jsx";
import ArticleList from "./ArticleList.jsx";

const ArticleParent = () => {
  const [showImageButton, setShowImageButton] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token from localStorage:", token);

    if (token) {
      console.log("Token found, updating showImageButton state");
      setShowImageButton(true); 
    } else {
      console.log("No token found");
      setShowImageButton(false); 
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
