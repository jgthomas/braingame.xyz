import React from "react";
import styled from "styled-components";
import Navigation from "../Navigation/Navigation";

const Header = styled.header`
  background-color: cornflowerblue;
  margin-top: 0;
`;

const Title = styled.h1`
  color: cornsilk;
  font-size: 3.5em;
  margin-top: 0;

  @media only screen and (max-width: 730px) {
    font-size: 3em;
  }
`;

const Home = () => {
  return (
    <div>
      <Header>
        <Title>BrainGame XYZ</Title>
      </Header>
      <Navigation />
    </div>
  );
};

export default Home;
