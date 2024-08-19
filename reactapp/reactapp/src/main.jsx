import React from "react"; // Keep this only once at the top
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ThemeProvider } from "./ThemeContext";

import LoadingAnimation from "./loadingAnimation.jsx";
import Header from "./header.jsx";

import ArticleList from "./ArticleList.jsx";

import SearchBar from "./searchBar.jsx";
import RelevantCard from "./relevantCard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);

const Main = () => {
  return (
    <div>
      <Header></Header>
      <LoadingAnimation></LoadingAnimation>
      <SearchBar></SearchBar>
      <RelevantCard></RelevantCard>
      <ArticleList />
    </div>
  );
};

export default Main;
