import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useIsSmall } from "../hooks/useMediaQuery";

function Background({ aboutHover, projHover }) {
  const [variant, setVariant] = useState({});
  const [colorVariant, setColorVariant] = useState({});
  const [isHover, setIsHover] = useState(false);
  const isSmall = useIsSmall();

  useEffect(() => {
    setColorVariant({
      box: {
        fill: ["#FFD058", "#ffeb7a", "#FFD058"],
        transition: {
          duration: 10,
          ease: "easeInOut",
          times: [0, 0.7, 1],
          repeat: Infinity,
        },
      },
      circle: {
        fill: ["#F16C6C", "#ff5959", "#F16C6C"],
        transition: {
          duration: 10,
          ease: "easeInOut",
          times: [0, 0.7, 1],
          repeat: Infinity,
        },
      },
      star: {
        fill: ["#4DA850", "#87ed68", "#4DA850"],
        transition: {
          duration: 10,
          ease: "easeInOut",
          times: [0, 0.7, 1],
          repeat: Infinity,
        },
      },
      donut: {
        fill: ["#56ebff", "#82dcff", "#56ebff"],
        transition: {
          duration: 10,
          ease: "easeInOut",
          times: [0, 0.7, 1],
          repeat: Infinity,
        },
      },
    });
  }, []);

  useEffect(() => {
    check();
  }, [isSmall]);

  useEffect(() => {
    if (aboutHover || projHover) {
      setIsHover(true);
    } else {
      setIsHover(false);
    }
  }, [aboutHover, projHover]);

  const check = () => {
    if (isSmall) {
      setVariant({
        bg1: {
          x: [-160, -150, -160],
          y: [-100, -90, -100],
          scale: [0.8, 0.8, 0.8],
          rotate: [0, 15, 0],
          transition: {
            duration: 10,
            times: [0, 0.5, 1],
            repeat: Infinity,
          },
        },
        bg2: {
          y: [-110, -100, -110],
          x: [140, 135, 140],
          scale: [0.8, 0.8, 0.8],
          transition: {
            duration: 10,
            times: [0, 0.7, 1],
            repeat: Infinity,
          },
        },
        bg3: {
          x: [-140, -140, -140],
          y: [130, 120, 130],
          rotate: [0, 15, 0],
          scale: [0.8, 0.8, 0.8],
          transition: {
            duration: 8,
            times: [0, 0.4, 1],
            repeat: Infinity,
          },
        },
        bg4: {
          x: [300, 320, 300],
          y: [250, 230, 250],
          scale: [0.7, 0.7, 0.7],
          transition: {
            duration: 12,
            times: [0, 0.5, 1],
            repeat: Infinity,
          },
        },
      });
    } else {
      setVariant({
        bg1: { x: -70, y: -70, scale: 1.3 },
        bg2: { x: 70, y: -40, scale: 1.3 },
        bg3: { x: -100, y: 100, scale: 1.3 },
        bg4: { x: 300, y: 300, scale: 1.3 },
        about1: {
          x: 70,
          y: [-220, -200],
          scale: 0.6,
          rotate: 360,
          transition: {
            rotate: { repeat: Infinity, duration: 2 },
            y: { repeat: Infinity, duration: 1.5, repeatType: "reverse" },
          },
        },
        about2: {
          x: 85,
          y: [0, 20],
          scale: 0.6,
          rotate: 360,
          transition: {
            rotate: { repeat: Infinity, duration: 2 },
            y: { repeat: Infinity, duration: 1.5, repeatType: "reverse" },
          },
        },
        about3: {
          x: 75,
          y: [-450, -430],
          scale: 0.6,
          rotate: 360,
          transition: {
            rotate: { repeat: Infinity, duration: 2 },
            y: { repeat: Infinity, duration: 1.5, repeatType: "reverse" },
          },
        },
        about4: {
          x: -15,
          y: [-580, -560],
          scale: 0.36,
          rotate: 360,
          transition: {
            rotate: { repeat: Infinity, duration: 2 },
            y: { repeat: Infinity, duration: 1.5, repeatType: "reverse" },
          },
        },
        proj1: {
          x: 15,
          y: [-650, -630],
          scale: 0.6,
          rotate: -360,
          transition: {
            rotate: { repeat: Infinity, duration: 2 },
            y: { repeat: Infinity, duration: 1.5, repeatType: "reverse" },
          },
        },
        proj2: {
          x: 0,
          y: [-220, -200],
          scale: 0.6,
          rotate: -360,
          transition: {
            rotate: { repeat: Infinity, duration: 2 },
            y: { repeat: Infinity, duration: 1.5, repeatType: "reverse" },
          },
        },
        proj3: {
          x: 15,
          y: [10, 30],
          scale: 0.6,
          rotate: -360,
          transition: {
            rotate: { repeat: Infinity, duration: 2 },
            y: { repeat: Infinity, duration: 1.5, repeatType: "reverse" },
          },
        },
        proj4: {
          x: 100,
          y: [-340, -320],
          scale: 0.36,
          rotate: -360,
          transition: {
            rotate: { repeat: Infinity, duration: 2 },
            y: { repeat: Infinity, duration: 1.5, repeatType: "reverse" },
          },
        },
      });
    }
  };

  const getVariant = (type) => {
    if (isHover && !isSmall) {
      if (aboutHover) {
        switch (type) {
          case "box":
            return "about1";
          case "circle":
            return "about2";
          case "star":
            return "about3";
          case "donut":
            return "about4";
        }
      } else if (projHover) {
        switch (type) {
          case "box":
            return "proj1";
          case "circle":
            return "proj2";
          case "star":
            return "proj3";
          case "donut":
            return "proj4";
        }
      }
    } else {
      switch (type) {
        case "box":
          return "bg1";
        case "circle":
          return "bg2";
        case "star":
          return "bg3";
        case "donut":
          return "bg4";
      }
    }
  };

  return (
    <Container>
      <Box
        width="380"
        height="380"
        viewBox="0 0 332 332"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        proj={projHover ? 1 : 0}
        about={aboutHover ? 1 : 0}
        issmall={isSmall ? 1 : 0}
        variants={variant}
        animate={getVariant("box")}
        layout
      >
        <motion.path
          d="M128.198 16.3303C148.884 -4.30241 182.367 -4.30238 203.053 16.3303L315.627 128.611C336.39 149.32 336.39 182.953 315.627 203.662L203.053 315.943C182.367 336.576 148.884 336.576 128.198 315.943L15.6235 203.662C-5.13953 182.953 -5.13951 149.32 15.6235 128.611L128.198 16.3303Z"
          variants={colorVariant}
          animate="box"
        />
      </Box>
      <Circle
        width="350"
        height="350"
        viewBox="0 0 329 336"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        proj={projHover ? 1 : 0}
        about={aboutHover ? 1 : 0}
        issmall={isSmall ? 1 : 0}
        variants={variant}
        animate={getVariant("circle")}
        layout
      >
        <motion.ellipse
          cx="164.436"
          cy="167.794"
          rx="164.436"
          ry="167.794"
          variants={colorVariant}
          animate="circle"
        />
      </Circle>

      <Star
        width="370"
        height="370"
        viewBox="0 0 321 298"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        proj={projHover ? 1 : 0}
        about={aboutHover ? 1 : 0}
        issmall={isSmall ? 1 : 0}
        variants={variant}
        animate={getVariant("star")}
        layout
      >
        <motion.path
          d="M93.8258 0.940319L168.963 62.1684L254.318 18.0642L239.786 113.792L320.992 166.524L231.323 201.024L227.174 297.86L152.037 236.632L66.6822 280.736L81.2141 185.008L0.00801053 132.276L89.6766 97.7762L93.8258 0.940319Z"
          variants={colorVariant}
          animate="star"
        />
      </Star>
      <Donut
        width="550"
        height="550"
        viewBox="0 0 529 529"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        proj={projHover ? 1 : 0}
        about={aboutHover ? 1 : 0}
        issmall={isSmall ? 1 : 0}
        variants={variant}
        animate={getVariant("donut")}
        layout
      >
        <motion.path
          d="M528.156 264.078C528.156 409.925 409.925 528.156 264.078 528.156C118.232 528.156 0 409.925 0 264.078C0 118.232 118.232 0 264.078 0C409.925 0 528.156 118.232 528.156 264.078ZM114.157 264.078C114.157 346.878 181.279 414 264.078 414C346.878 414 414 346.878 414 264.078C414 181.279 346.878 114.157 264.078 114.157C181.279 114.157 114.157 181.279 114.157 264.078Z"
          variants={colorVariant}
          animate="donut"
        />
      </Donut>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  pointer-events: none;
  width: 100vw;
  height: 100vh;
  z-index: 0;
`;

const Box = styled(motion.svg)`
  position: fixed;
  ${({ about, proj, issmall }) => {
    if (about && !issmall) {
      return {
        bottom: 0,
        left: 0,
      };
    } else if (proj && !issmall) {
      return {
        bottom: 0,
        right: 0,
      };
    } else {
      return {
        top: 0,
        left: 0,
      };
    }
  }}
`;
const Circle = styled(motion.svg)`
  position: fixed;
  ${({ about, proj, issmall }) => {
    if (about && !issmall) {
      return {
        bottom: 0,
        left: 0,
      };
    } else if (proj && !issmall) {
      return {
        bottom: 0,
        right: 0,
      };
    } else {
      return {
        top: 0,
        right: 0,
      };
    }
  }}
`;
const Star = styled(motion.svg)`
  position: fixed;
  ${({ about, proj, issmall }) => {
    if (about && !issmall) {
      return {
        bottom: 0,
        left: 0,
      };
    } else if (proj && !issmall) {
      return {
        bottom: 0,
        right: 0,
      };
    } else {
      return {
        bottom: 0,
        left: 0,
      };
    }
  }}
`;
const Donut = styled(motion.svg)`
  position: fixed;
  ${({ about, proj, issmall }) => {
    if (about && !issmall) {
      return {
        bottom: 0,
        left: 0,
      };
    } else if (proj && !issmall) {
      return {
        bottom: 0,
        right: 0,
      };
    } else {
      return {
        bottom: 0,
        right: 0,
      };
    }
  }}
`;

export default Background;
