import React, { useState } from "react";
import ArticleList from "./ArticleList";
import RelevantCard from "./relevantArticle";

const ArticleParent = () => {
  const [articles, setArticles] = useState([]);

  // Function to update articles in the parent
  const updateArticles = (newArticles) => {
    setArticles(newArticles);
  };

  // Find relevant article for the day
  const findRelevantArticle = (articles) => {
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format
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
      <RelevantCard article={relevantArticle} />{" "}
      <ArticleList updateArticles={updateArticles} />
    </div>
  );
};

export default ArticleParent;