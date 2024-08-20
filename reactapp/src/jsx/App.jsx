import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "../css/App.css";
import Main from "./main.jsx";
import Login from "./login.jsx";
import Register from "./register.jsx";

function App() {
const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

const isUserRegistered = () => {
  return localStorage.getItem("userRegistered") === "true";
};

  return (
    <div className="container">
      <Router>
        <Switch>
          <Route
            path="/register"
            render={() =>
              isUserRegistered() ? <Redirect to="/login" /> : <Register />
            }
          />
          <Route
            path="/login"
            render={() =>
              isUserRegistered() ? (
                isAuthenticated() ? (
                  <Redirect to="/articles" />
                ) : (
                  <Login />
                )
              ) : (
                <Redirect to="/register" />
              )
            }
          />
          <Route
            path="/"
            render={() =>
              isAuthenticated() ? <Main /> : <Redirect to="/login" />
            }
          />
          <Redirect to="/register" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;