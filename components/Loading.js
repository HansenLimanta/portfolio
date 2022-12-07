import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import logo from "../public/nameLogo2.svg";
import { useIsSmall } from "../hooks/useMediaQuery";

function Loading(props) {
  const isSmall = useIsSmall();

  return (
    <Screen
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        transition: { duration: 1, delay: 1.8 },
      }}
      issmall={isSmall ? 1 : 0}
    >
      <motion.div
        className="image"
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { duration: 1, delay: 1 },
        }}
      >
        <Image src={logo} layout="fill" objectFit="cover" alt="logo" />
      </motion.div>
    </Screen>
  );
}

const Screen = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: #fff;
  pointer-events: none;
  .image {
    position: relative;
    ${({ issmall }) =>
      issmall
        ? { height: "10.5px", width: "200px" }
        : { height: "21px", width: "400px" }}
  }
`;

export default Loading;
