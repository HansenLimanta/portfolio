import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import Meta from "../components/Meta";
import Project from "../components/Project";
import { projectsData } from "../utils/data";
import LinkItem from "../components/LinkItem";
import ContactMe from "../components/ContactMe";

function Projects(props) {
  const [isHoverAbout, setIsHoverAbout] = useState(false);
  return (
    <>
      <Meta title={"Projects | Hansen Limanta"} />
      <Container>
        <Title>PROJECTS</Title>
        <ListContainer>
          {projectsData.map((data) => {
            return <Project data={data} key={data.title} />;
          })}
        </ListContainer>
        <StyledLinks>
          <ContactMe styling={{ margin: 0 }} />
          <LinkItem
            linkto="/about"
            text="more about me"
            isHover={isHoverAbout}
            setHover={setIsHoverAbout}
            styling={{ fontSize: "1.125rem" }}
          />
        </StyledLinks>
      </Container>
    </>
  );
}

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 1200px;
  margin: auto;
  padding: 0 60px;
  gap: 50px;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: auto;
    max-width: 500px;
    height: min-content;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: auto;
    max-width: 300px;
    height: min-content;
    gap: 20px;
  }
`;
const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-bottom: 10vh;
`;
const Title = styled.h1`
  align-self: center;
  margin: 10vh 0 40px 0;
  font-size: 42px;
  font-weight: 500;
  @media (max-width: 800px) {
    position: static;
    margin-top: 5vh;
  }
`;
const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`;

export default Projects;
