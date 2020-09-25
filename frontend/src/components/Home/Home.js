import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Anagram from "../Anagram/Anagram";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header gameName="BrainGame XYZ" />
      <Switch>
        <Route path="/anagram" component={Anagram} />
      </Switch>
      <div>
        <ul>
          <li>
            <Link to="/anagram">Anagram</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
