import React, { useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Meta from "../components/Meta";
import ContactMe from "../components/ContactMe";
import Background from "../components/Background";
import LinkItem from "../components/LinkItem";

const Home = () => {
  const [isHoverAbout, setIsHoverAbout] = useState(false);
  const [isHoverProj, setIsHoverProj] = useState(false);
  return (
    <>
      <Meta />
      <Background aboutHover={isHoverAbout} projHover={isHoverProj} />
      <HomeCont>
        <p>Hi, my name is Hansen and I am a</p>
        <Title>
          FRONTEND <br /> DEVELOPER
        </Title>
        <StyledLinks>
          <LinkItem
            linkto="/about"
            text="more about me"
            isHover={isHoverAbout}
            setHover={setIsHoverAbout}
          />
          <LinkItem
            linkto="/projects"
            text="see my projects"
            isHover={isHoverProj}
            setHover={setIsHoverProj}
          />
        </StyledLinks>
        <ContactMe />
      </HomeCont>
    </>
  );
};

const HomeCont = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  p {
    font-size: 1.75rem;
    font-weight: 400;
    margin: 0;
    z-index: 2;
    @media (max-width: 800px) {
      font-size: 1.5rem;
    }
  }
`;
const Title = styled(motion.h1)`
  font-size: 10rem;
  font-weight: 100;
  font-family: "Abril Fatface", cursive;
  text-align: center;
  margin: 0;
  cursor: default;
  z-index: 2;
  @media (max-width: 1000px) {
    font-size: 7.5rem;
  }
  @media (max-width: 800px) {
    font-size: 5rem;
  }
  @media (max-width: 500px) {
    font-size: 4rem;
    padding: 24px 0;
  }
`;
const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export default Home;
