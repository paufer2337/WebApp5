import React, { useState } from "react";
import Login from "./login.jsx";

function LoginButton() {
  const [showLogin, setShowLogin] = useState(false);

  const handleButtonClick = () => {
    setShowLogin((prevShowLogin) => !prevShowLogin);
  };

  return (
    <div>
      <button
        id="register-button"
        className="btn btn-primary"
        onClick={handleButtonClick}>
        {showLogin ? "Göm inloggning" : "Logga in"}
      </button>
      {showLogin && <Login />}
    </div>
  );
}

export default LoginButton;