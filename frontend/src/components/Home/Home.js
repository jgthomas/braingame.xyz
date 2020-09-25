import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Anagram from "../Anagram/Anagram";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header gameName="BrainGame XYZ" />
      <Navigation />
      <Switch>
        <Route path="/anagram" component={Anagram} />
      </Switch>
    </div>
  );
};

export default Home;
