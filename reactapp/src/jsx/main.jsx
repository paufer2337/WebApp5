import React from "react"; 
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../css/index.css"; 

import { ThemeProvider } from "./ThemeContext.jsx";

import Header from "./header.jsx";
import LoadingAnimation from "./loadingAnimation.jsx";
import SearchBar from "./searchBar.jsx";

import ArticleParent from "./ArticleParent.jsx";

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
      <ArticleParent></ArticleParent>
    </div>
  );
};

export default Main;