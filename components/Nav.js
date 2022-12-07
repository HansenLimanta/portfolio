import { useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useIsSmall } from "../hooks/useMediaQuery";
import { MdMoreVert, MdKeyboardArrowLeft } from "../utils/icons";
import { navLink, extLink } from "../utils/data";
import NavItem from "./NavItem";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const isSmall = useIsSmall();
  const menuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <NavBar
      initial={{ width: "0px" }}
      animate={toggleMenu ? "show" : "hidden"}
      variants={isSmall ? navVar[0] : navVar[1]}
    >
      <MenuButton animate={toggleMenu ? "hidden" : "show"} variants={buttonVar}>
        <MdMoreVert size={30} style={{ verticalAlign: "middle" }} />
      </MenuButton>
      <MenuButton
        initial={{ opacity: 0 }}
        onClick={menuHandler}
        animate={toggleMenu ? "show" : "hidden"}
        variants={buttonVar}
      >
        <MdKeyboardArrowLeft size={30} style={{ verticalAlign: "middle" }} />
      </MenuButton>

      <MenuContainer
        initial={{ opacity: 0 }}
        menu={toggleMenu ? 1 : 0}
        animate={toggleMenu ? "open" : "closed"}
        variants={linkVar}
      >
        <LinkContainer>
          {navLink.map((item) => {
            return (
              <NavItem item={item} key={item.name} menuHandler={menuHandler} />
            );
          })}
        </LinkContainer>
        <SocialContainer>
          {extLink.map((item) => {
            return (
              <motion.a
                href={item.path}
                key={item.path}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ color: "#ff5733", transition: { duration: 0.3 } }}
              >
                <item.Icon />
              </motion.a>
            );
          })}
        </SocialContainer>
      </MenuContainer>
    </NavBar>
  );
};

const NavBar = styled(motion.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  left: 0;
  width: 60px;
  border-right: 0.1px solid #d3d3d3;
  background-color: rgb(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  z-index: 4;
  @media (max-width: 800px) {
    width: 1px;
  }
`;
const MenuButton = styled(motion.div)`
  position: absolute;
  align-self: flex-end;
  padding-right: 15px;
  border: none;
  cursor: pointer;
  color: #3a3a3a;
  z-index: 2;
  @media (max-width: 800px) {
    top: 45px;
    right: -70px;
    border: 1px solid #000;
    padding: 3px;
    margin: 1px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255, 0.25);
    backdrop-filter: blur(20px);
  }
`;
const MenuContainer = styled(motion.div)`
  display: flex;
  pointer-events: ${({ menu }) => (menu ? "auto" : "none")};
  flex-direction: column;
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: end;
  height: 50vh;
  padding: 0 50px;
`;
const SocialContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 50vh;
  padding: 0 50px 10vh;
  width: 300px;
`;

const linkVar = {
  open: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.4, type: "tween", duration: 0.5, ease: "easeOut" },
  },
  closed: {
    opacity: 0,
    x: -15,
    transition: { type: "tween", duration: 0.3 },
  },
};
const buttonVar = {
  show: { opacity: 1, transition: { duration: 0.3 } },
  hidden: { opacity: 0, transition: { duration: 0.3 } },
};
const navVar = [
  {
    show: { width: "300px", transition: { type: "tween", duration: 0.6 } },
    hidden: { width: "0", transition: { type: "tween", duration: 0.8 } },
  },
  {
    show: { width: "300px", transition: { type: "tween", duration: 0.6 } },
    hidden: { width: "60px", transition: { type: "tween", duration: 0.8 } },
  },
];

export default Nav;
