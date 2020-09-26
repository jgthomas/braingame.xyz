import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Home from "../Home/Home";
import Anagram from "../Anagram/Anagram";

const AppBody = styled.div`
  text-align: center;
`;

const App = () => {
  return (
    <AppBody>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/anagram" component={Anagram} />
      </Switch>
    </AppBody>
  );
};

export default App;
