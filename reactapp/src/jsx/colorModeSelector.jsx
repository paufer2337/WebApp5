import "../css/colorModeSelector.css";
import React, { useState, useEffect, useContext } from "react";

import ThemeContext from "./ThemeContext.jsx"

const useTheme = () => {
  const { toggleTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    toggleTheme();
  };

  return handleToggle;
};

const getInitialState = () => {
  const savedState = localStorage.getItem("isChecked");
  return savedState === "true" ? true : false;
};

const saveStateToLocalStorage = (isChecked) => {
  useEffect(() => {
    localStorage.setItem("isChecked", isChecked);
  }, [isChecked]);
};

function ColorModeSelector() {
  const [isChecked, setIsChecked] = useState(getInitialState);
  const handleToggleTheme = useTheme();

  saveStateToLocalStorage(isChecked);

  const toggleColorMode = () => {
    setIsChecked((prevChecked) => {
      const newChecked = !prevChecked;
      handleToggleTheme(); 
      return newChecked;
    });
  };

  const { theme } = useContext(ThemeContext);

  return (
   <label className="color-mode-selector-container">
  <input
    type="checkbox"
    id="color-mode-selector"
    checked={isChecked}
    onChange={toggleColorMode}
  />
  <span className="slider" ></span>
  <label
    id="color-mode-descriptor"
    className={`color-mode-descriptor ${
      theme === "dark"
        ? "dark-theme-color-mode-descriptor"
        : "light-theme-color-mode-descriptor"
    }`}
  >
    {isChecked ? "Mörkt läge" : "Ljust läge"}
  </label>
</label>
  );
}

export default ColorModeSelector;
