import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <div>
       <Route exact path="/" component={Home} />
       <Route exact path="/signup" component={Signup} />
       <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
