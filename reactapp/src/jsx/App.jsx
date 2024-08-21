import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Main from "./main.jsx";
import Login from "./login.jsx";
import Register from "./register.jsx";

function App() {

  return (
    <div className="container">
    <Main></Main>
    </div>
  );
}

export default App;