import React, { useState } from "react";
import Register from "./register.jsx";

function LoginButton() {
  const [showRegister, setShowRegister] = useState(false);

  const handleButtonClick = () => {
    setShowRegister((prevShowLogin) => !prevShowLogin);
  };

  return (
    <div>
      <button
        id="register-button"
        className="btn btn-primary"
        onClick={handleButtonClick}>
        {showRegister ? "Göm registrering" : "Registrera"}
      </button>
      {showRegister && <Register />}
    </div>
  );
}

export default LoginButton;