// Register.jsx
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory(); // useHistory hook for navigation

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      alert(data.message);

      if (response.status === 201) {
        localStorage.setItem("userRegistered", "true");
        history.push("/login");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div>
      <h2>Registrera</h2>
      <form>
        <div>
          <label>Användarnamn:</label>
          <input
            type="text"
            placeholder="Användarnamn"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label>Lösenord:</label>
          <input
            type="password"
            placeholder="Lösenord"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;