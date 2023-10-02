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

function About(props) {
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
            My name is Hansen, I&apos;m a front-end developer based in Jakarta,
            Indonesia. I graduated from Bina Nusantara University with Computer
            Science degree. I&apos;m always curious to learn more when it comes
            to new technologies and creative coding.
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
          <h3>Full Stack Developer</h3>
          <h4>Sagara Technology · 01/2023 – Present</h4>
          <ul>
            <li>
              Develop and maintain the branch delivery system for Bank Muamalat
              Indonesia using Vue.js and Java Spring Boot
            </li>
            <li>
              Write clean, modular, and testable code for both the frontend and
              backend
            </li>
            <li>
              Identify and fix bugs and performance issues in a timely manner
            </li>
            <li>
              Stay up-to-date with the latest frontend and backend technologies
              and best practices
            </li>
          </ul>
          <h3>Frontend Engineer Specialist</h3>
          <h4>Sagara Technology · 10/2022 – 12/2022</h4>
          <ul>
            <li>
              Developed and maintained the frontend of web applications using
              Vue.js, including the Sagara Foundation CSR site, demonstrating
              expertise in creating scalable and user-friendly interfaces
            </li>
            <li>
              Designed and implemented mobile-responsive features to improve
              user experience on mobile devices, including on the Sagara
              Foundation site
            </li>
            <li>
              Collaborated closely with back-end developers and web designers to
              improve the overall usability and functionality of the
              applications
            </li>
          </ul>
          <h2>Get in Touch</h2>
          <p>
            I&apos;m open to Job opportunities where I can contribute, learn and
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
    width: 45px;
    top: 0;
    left: 15px;
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
  h3 {
    margin: 10px 0 0 0;
    font-weight: 600;
  }
  h4 {
    margin: 0 0 10px 0;
    font-weight: 400;
  }
  p {
    margin: 10px 0;
  }
  ul {
    margin-top: 0;
    padding-left: 30px;
  }
  @media (max-width: 800px) {
    margin: 0;
    padding: 100px 20px 100px 80px;
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

export default About;
