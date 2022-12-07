import React, { useState } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

function Cursor({ children }) {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 0,
    leaveDelay: 0,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 20,
      width: 20,
      fontSize: "16px",
      backgroundColor: "#ff5733",
      x: mouseXPosition - 10,
      y: mouseYPosition - 10,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    project: {
      opacity: 1,
      backgroundColor: "#fff",
      color: "#000",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
    },
    contact: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition - 48,
      y: mouseYPosition - 48,
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  return (
    <div ref={ref}>
      <Circle variants={variants} animate={cursorVariant} transition={spring}>
        <CursorText>{cursorText}</CursorText>
      </Circle>
      {children}
    </div>
  );
}

const Circle = styled(motion.div)`
  position: fixed;
  z-index: 100;
  display: flex;
  flex-flow: row;
  align-content: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #ff5733;
  border-radius: 200px;
  pointer-events: none;
  color: #fff;
  text-align: center;
  font-size: 16px;
`;
const CursorText = styled.span`
  flex: auto;
  font-size: inherit;
  pointer-events: none;
  margin: auto;
`;

export default Cursor;
