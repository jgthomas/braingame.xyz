import React from "react";
import Navigation from "../Navigation/Navigation";
import { SiteHeader, SiteTitle } from "./HomeStyles";

const Home = () => {
  return (
    <div>
      <SiteHeader>
        <SiteTitle>BrainGame XYZ</SiteTitle>
      </SiteHeader>
      <Navigation />
    </div>
  );
};

export default Home;
