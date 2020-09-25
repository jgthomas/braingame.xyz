import React from "react";
import Navigation from "../Navigation/Navigation";
import { HomePageBody, SiteHeader, SiteTitle } from "./HomeStyles";

const Home = () => {
  return (
    <HomePageBody>
      <SiteHeader>
        <SiteTitle>BrainGame XYZ</SiteTitle>
      </SiteHeader>
      <Navigation />
    </HomePageBody>
  );
};

export default Home;
