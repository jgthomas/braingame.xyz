import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Anagram from "../Anagram/Anagram";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/anagram" component={Anagram} />
      </Switch>
    </div>
  );
};

export default App;
