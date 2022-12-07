import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

function ContactMe({ styling }) {
  return (
    <StyledButton
      style={{ ...styling }}
      href="mailto:hansenlimanta@gmail.com"
      rel="noopener noreferrer"
      target="_blank"
    >
      CONTACT ME
    </StyledButton>
  );
}

const StyledButton = styled(motion.a)`
  margin: 2rem;
  font-size: 1.5;
  padding: 0.6rem 1.5rem;
  border: 2px solid #ff5733;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  text-align: center;
  text-transform: uppercase;
  transition: 0.3s;
  z-index: 1;
  font-family: inherit;
  color: #ff5733;
  cursor: pointer;
  ::before {
    content: "";
    width: 0;
    height: 300%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background: #ff5733;
    transition: 0.5s ease;
    display: block;
    z-index: -1;
  }
  :hover::before {
    width: 200%;
  }
  :hover {
    color: #111;
  }
  @media (max-width: 500px) {
    padding: 0.4rem 0.8rem;
  }
`;

export default ContactMe;
