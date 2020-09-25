import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header gameName="BrainGame XYZ" />
      <Navigation />
    </div>
  );
};

export default Home;
