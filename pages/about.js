import { useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowDown } from "../utils/icons";
import { useIsSmall } from "../hooks/useMediaQuery";
import { skills } from "../utils/data";
import Meta from "../components/Meta";
import logo from "../public/nameLogo2.svg";
import logoV from "../public/nameLogo2-vertical.svg";
import ContactMe from "./../components/ContactMe";
import LinkItem from "../components/LinkItem";

function about(props) {
  const isSmall = useIsSmall();
  const [isHoverResume, setIsHoverResume] = useState(false);
  const [isHoverProj, setIsHoverProj] = useState(false);

  return (
    <>
      <Meta title="About | Hansen Limanta" />
      <AboutCont>
        <Logo>
          {isSmall ? (
            <Image layout="fixed" src={logoV} alt="logo" />
          ) : (
            <Image layout="fixed" src={logo} alt="logo" />
          )}
        </Logo>
        <AboutMe>
          <h1 style={{ marginBottom: 0 }}>Hello!</h1>
          <p>
            My name is Hansen, I’m a front-end developer based in Jakarta,
            Indonesia. I graduated from Bina Nusantara University with Computer
            Science degree. I’m always curious to learn more when it comes to
            new technologies and creative coding.
          </p>
          <HoverText
            onMouseEnter={() => setIsHoverResume(true)}
            onMouseLeave={() => setIsHoverResume(false)}
            whileHover={{ color: "#ff5733" }}
          >
            <motion.a href="/resume.pdf" target="_blank">
              <motion.div
                animate={
                  isHoverResume ? { color: "#FF5733" } : { color: "#3A3A3A" }
                }
              >
                <MdOutlineKeyboardArrowDown
                  style={{ verticalAlign: "middle" }}
                />{" "}
              </motion.div>{" "}
              resume
            </motion.a>
            <Underline
              initial={false}
              animate={{ right: isHoverResume ? 0 : "100%" }}
            />
          </HoverText>
          <h2>Skills</h2>
          <Skills>
            {skills.map((item) => {
              return (
                <Skill
                  key={item.name}
                  whileHover={{
                    borderColor: "#FF5733",
                    color: "#fff",
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  {item.name}
                  <motion.div
                    whileHover={{ opacity: 1, transition: { duration: 0.2 } }}
                    className="child"
                  >
                    <item.Icon
                      style={{ verticalAlign: "middle" }}
                      color="#ff5733"
                    />
                  </motion.div>
                </Skill>
              );
            })}
          </Skills>
          <h2>Experience</h2>
          <p>Frontend Engineer Specialist at Sagara Technology</p>
          <h2>Get in Touch</h2>
          <p>
            I'm open to Job opportunities where I can contribute, learn and
            grow.
          </p>
          <StyledLinks>
            <ContactMe styling={{ margin: 0 }} />
            <LinkItem
              linkto="/projects"
              text="see my projects"
              isHover={isHoverProj}
              setHover={setIsHoverProj}
              styling={{ fontSize: "1.125rem" }}
            />
          </StyledLinks>
        </AboutMe>
      </AboutCont>
    </>
  );
}

const AboutCont = styled.div`
  display: flex;
  height: 100%;
  background-color: #fff;
`;
const Logo = styled.div`
  position: fixed;
  height: 100vh;
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  padding: 0 calc(50px + 2vw) 0 calc(70px + 2vw);
  @media (max-width: 800px) {
    width: 60px;
    top: 0;
    left: 20px;
    padding: 0;
    z-index: 1;
  }
`;
const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 700px;
  padding: 15vh 5vw 15vh 0;
  margin-left: 50vw;
  h2 {
    margin: 0;
  }
  p {
    margin: 10px 0 20px 0;
  }
  @media (max-width: 800px) {
    margin: 0;
    padding: 100px 20px 100px 100px;
  }
`;
const HoverText = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  overflow-x: hidden;
  padding-bottom: 5px;
  a {
    font-size: 1.25rem;
    margin: 0;
    cursor: pointer;
    display: flex;
  }
`;
const Underline = styled(motion.div)`
  position: absolute;
  margin-top: 1px;
  height: 2px;
  width: 100%;
  background-color: #ff5733;
  border-radius: 2px;
  bottom: 0;
  right: 100%;
`;
const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 350px;
  gap: 8px;
  margin: 20px 0;
`;
const Skill = styled(motion.div)`
  padding: 4px 12px;
  border-radius: 12px;
  border: 1px solid #3a3a3a;
  background-color: #ffffff;
  position: relative;
  font-size: 1.25rem;
  .child {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;
const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 16px;
`;

export default about;
