import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  DiGit,
  DiJavascript1,
  DiReact,
  SiNextdotjs,
  SiVuetify,
  SiTailwindcss,
  SiFramer,
  SiStyledcomponents,
  FaVuejs,
} from "./icons";

export const projectsData = [
  {
    title: "Portfolio v2",
    tools: "React, NextJs, Tailwind",
    link: "https://hansenlimanta-v2.vercel.app/",
    image1: "/projects/hansenlimanta-v2.png",
    desc: `This is my personal portfolio project, inspired by the design and structure of Brittany Chiang's Portfolio. The objective is to reverse engineer aspects of the website to gain insights into its layout, style, and functionality.`,
    github: "https://github.com/hansenlimanta/portfolio-v2",
  },
  {
    title: "Ignite - GameList",
    tools: "React, Redux, Axios, Framer Motion, Styled Components",
    link: "https://hansen-ignite-gameslist.netlify.app/",
    image1: "/projects/ignite1.jpg",
    desc: `A web app to see a list of upcoming, popular and newest games based on the rawg.io api. You can also search by game name and view game details such as the console that provides it and game screenshots`,
    github: "https://github.com/hansenlimanta/GameList",
  },
  {
    title: "Personal Notes App",
    tools: "React, Styled Components",
    link: "https://hansen-personal-notes.netlify.app/",
    image1: "/projects/notes1.jpg",
    desc: `A web app for taking notes. You can archive or delete notes that are no longer used. Equipped with a search feature that will search according to the title of the notes.`,
    github: "https://github.com/hansenlimanta/PersonalNotes",
  },
  {
    title: "Music Player",
    tools: "React, SASS",
    link: "https://hansen-music-player.netlify.app/",
    image1: "/projects/music1.jpg",
    desc: `A music service developed with the react framework. Has several choices of songs to play with an attractive appearance and a progress bar that adjusts the album cover.`,
    github: "https://github.com/hansenlimanta/MusicPlayer",
  },
  {
    title: "HTML - CSS Portfolio",
    tools: "HTML, CSS, SASS, JavaScript",
    link: "https://hansen-htmlcss.netlify.app/",
    image1: "/projects/htmlcss1.jpg",
    desc: `I created this project at the beginning of my frontend journey to hone my HTML and CSS knowledge. Using only html and css, I learned how layouts should be made with html semantics, how to make attractive animations, and also navigate between pages.`,
    github: "https://github.com/hansenlimanta/HTML-CSS-Portfolio",
  },
];

export const navLink = [
  { path: "/", name: "HOME" },
  { path: "/about", name: "ABOUT" },
  { path: "/projects", name: "PROJECTS" },
  { path: "/playground", name: "PLAYGROUND" },
];

export const extLink = [
  {
    path: "https://github.com/hansenlimanta",
    Icon: () => <AiOutlineGithub size={30} />,
  },
  {
    path: "https://www.instagram.com/hansen_limanta/",
    Icon: () => <AiOutlineInstagram size={30} />,
  },
  {
    path: "https://www.linkedin.com/in/hansenlimanta/",
    Icon: () => <AiOutlineLinkedin size={30} />,
  },
  {
    path: "mailto:hansenlimanta@gmail.com",
    Icon: () => <AiOutlineMail size={30} />,
  },
];

export const skills = [
  {
    name: "Git",
    Icon: () => <DiGit style={{ verticalAlign: "middle" }} color="#ff5733" />,
  },
  {
    name: "JavaScript",
    Icon: () => (
      <DiJavascript1 style={{ verticalAlign: "middle" }} color="#ff5733" />
    ),
  },
  {
    name: "React",
    Icon: () => <DiReact style={{ verticalAlign: "middle" }} color="#ff5733" />,
  },
  {
    name: "NextJS",
    Icon: () => (
      <SiNextdotjs style={{ verticalAlign: "middle" }} color="#ff5733" />
    ),
  },
  {
    name: "Framer Motion",
    Icon: () => (
      <SiFramer style={{ verticalAlign: "middle" }} color="#ff5733" />
    ),
  },
  {
    name: "Styled Components",
    Icon: () => (
      <SiStyledcomponents
        style={{ verticalAlign: "middle" }}
        size={30}
        color="#ff5733"
      />
    ),
  },
  {
    name: "Tailwind CSS",
    Icon: () => (
      <SiTailwindcss style={{ verticalAlign: "middle" }} color="#ff5733" />
    ),
  },
  {
    name: "Vue",
    Icon: () => <FaVuejs style={{ verticalAlign: "middle" }} color="#ff5733" />,
  },
  {
    name: "Vuetify",
    Icon: () => (
      <SiVuetify style={{ verticalAlign: "middle" }} color="#ff5733" />
    ),
  },
];
