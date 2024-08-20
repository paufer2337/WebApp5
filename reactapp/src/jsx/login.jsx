// Login.jsx
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory(); // Initialize useHistory

  const handleLogin = async () => {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Login successful");
      history.push("/articles");
    } else {
      alert(data.message);
    }
  };

  return (
    <div>
      <h2>Logga in</h2>
      <input
        type="text"
        placeholder="Användarnamn"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="Lösenord"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
