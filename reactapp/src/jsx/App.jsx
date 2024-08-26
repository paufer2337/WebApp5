
import React, { useContext, useEffect } from "react";
import "../css/App.css"; 
import Main from "./main";
import ThemeContext from "./ThemeContext.jsx"; 

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-theme" : "light-theme";
  }, [theme]);

  return (
    <div className="container">
      <Main />
    </div>
  );
}

export default App;
