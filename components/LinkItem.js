import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import Link from "next/link";
import { IoIosArrowForward } from "../utils/icons";

function LinkItem({ linkto, text, setHover, isHover, styling }) {
  return (
    <Link href={linkto}>
      <Container
        style={styling}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        animate={isHover ? { color: "#FF5733" } : { color: "#3A3A3A" }}
      >
        {text}
        <motion.div
          animate={
            isHover ? { x: 10, color: "#FF5733" } : { x: 0, color: "#3A3A3A" }
          }
        >
          <IoIosArrowForward style={{ verticalAlign: "middle" }} />
        </motion.div>
      </Container>
    </Link>
  );
}

const Container = styled(motion.div)`
  display: flex;
  cursor: pointer;
  padding: 0 1rem;
  font-size: 1.375rem;
  @media (max-width: 800px) {
    font-size: 1.2rem;
  }
`;

export default LinkItem;
