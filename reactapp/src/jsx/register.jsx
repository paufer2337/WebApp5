import React, { useState } from "react";
import {postUser} from "./user.js";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const data = await postUser(
        username,
        password,
        "http://localhost:3000/api/register"
      );

      alert(data.message);

      if (data.status === 201) {
        localStorage.setItem("userRegistered", "true");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
