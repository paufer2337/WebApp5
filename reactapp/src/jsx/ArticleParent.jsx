import React, { useState } from "react";
import ArticleList from "./ArticleList";
import RelevantCard from "./relevantArticle";


/* Used to share the article states between ArticleList and relevantArticle */

const ArticleParent = () => {
  const [articles, setArticles] = useState([]);

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
      <RelevantCard article={relevantArticle} />
      <ArticleList updateArticles={updateArticles} />
    </div>
  );
};

export default ArticleParent;