import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { RiExternalLinkLine } from "../utils/icons";

function Project({ data }) {
  return (
    <Container>
      <h1>{data.title}</h1>
      <p className="tools">{data.tools}</p>
      <ImageCont>
        <Image
          layout="fill"
          objectFit="cover"
          src={data.image1}
          alt={data.title}
        />
      </ImageCont>
      <p>{data.desc}</p>
      <div className="links">
        <GoToLink
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ color: "#FF5733", transition: { duration: 0.3 } }}
        >
          Live Demo <RiExternalLinkLine style={{ verticalAlign: "middle" }} />
        </GoToLink>
        <GoToLink
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ color: "#FF5733", transition: { duration: 0.3 } }}
        >
          Github <RiExternalLinkLine style={{ verticalAlign: "middle" }} />
        </GoToLink>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.5rem 2rem;
  border: 2px solid #3a3a3a;
  border-radius: 16px;
  overflow: hidden;
  transition: all ease 1s;
  box-shadow: 4px 4px;
  background-color: #fff;
  max-width: 500px;
  h1 {
    font-size: 2.25rem;
    font-weight: 600;
    margin: 0 0 8px 0;
    padding: 0;
  }
  .links {
    font-size: 1.25rem;
    font-weight: 500;
  }
  .tools {
    font-size: 1.1rem;
    margin: 0 0 1.5rem;
  }
  @media (max-width: 500px) {
    padding: 1.2rem;
    h1 {
      font-size: 1.75rem;
    }
  }
`;
const ImageCont = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 14rem;
  position: relative;
  border-radius: 16px;
  border: 1px solid black;
  overflow: hidden;
  @media (max-width: 500px) {
    height: 10rem;
  }
`;
const GoToLink = styled(motion.a)`
  cursor: pointer;
  margin-right: 12px;
`;

export default Project;
