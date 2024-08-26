import React, { useState, useEffect } from "react";
import Login from "./login.jsx";

function LoginButton() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      // Logout logic
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      alert("Logout successful");
      window.location.reload(false);
    } else {
      setShowLogin((prevShowLogin) => !prevShowLogin);
    }
  };

  return (
    <div>
      <button
        id="register-button"
        className="btn btn-primary"
        onClick={handleButtonClick}>
        {isLoggedIn ? "Logga ut" : showLogin ? "Göm inloggning" : "Logga in"}
      </button>
      {!isLoggedIn && showLogin && <Login setIsLoggedIn={setIsLoggedIn} />}
    </div>
  );
}

export default LoginButton;
