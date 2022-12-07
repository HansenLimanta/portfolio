import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  fadeIn: {
    x: 100,
    opacity: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
  inactive: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
  fadeOut: {
    transition: { duration: 1, ease: "easeInOut" },
  },
  whiteIn: {
    x: "-10%",
    transition: { duration: 1, ease: "easeInOut" },
  },
  inactiveWhite: {
    x: "-150%",
    transition: { duration: 1.5, ease: "easeInOut" },
  },
  whiteOut: {
    x: "-10%",
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const TransitionEffect = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <AnimatePresence initial={false} mode={"wait"}>
      <motion.div
        key={asPath}
        variants={variants}
        initial="fadeIn"
        animate="inactive"
        exit="fadeOut"
      >
        <WhiteDiv
          key={asPath}
          variants={variants}
          initial="whiteIn"
          animate="inactiveWhite"
          exit="whiteOut"
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const WhiteDiv = styled(motion.div)`
  top: -10vh;
  position: absolute;
  background-color: #fff;
  width: 120vw;
  height: 120vh;
  box-shadow: 10rem 0 10rem #fff;
  z-index: 3;
`;

export default TransitionEffect;
