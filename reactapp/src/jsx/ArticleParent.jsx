import React, { useState, useEffect, useCallback } from "react";
import RelevantCard from "./RelevantArticle.jsx";
import ArticleList from "./ArticleList.jsx";

const ArticleParent = () => {
  const [showImageButton, setShowImageButton] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setShowImageButton(!!token);
  }, []); // Runs only on mount

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/articles");
        if (!response.ok) {
          console.log("Failed to fetch articles");
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []); // Runs only on mount

  // Memoize updateArticles to avoid unnecessary re-renders of ArticleList
  const updateArticles = useCallback((newArticles) => {
    setArticles(newArticles);
  }, []);

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
      {relevantArticle && (
        <RelevantCard
          article={relevantArticle}
          showImageButton={showImageButton}
        />
      )}
      <ArticleList
        updateArticles={updateArticles}
        showImageButton={showImageButton}
        articles={articles}
      />
    </div>
  );
};

export default ArticleParent;