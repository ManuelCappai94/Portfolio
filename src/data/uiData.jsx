import { BsGrid3X3Gap } from "react-icons/bs";

import {
   FaJsSquare,
    FaReact,
     FaCss3Alt,
      FaHtml5,
       FaGitAlt,
        FaGithub,
         FaServer,
          FaNpm,
           FaPaintBrush
           } from "react-icons/fa";

import { 
  SiRedux,
   SiTypescript,
    SiNextdotjs 
  } from "react-icons/si";

import { RiNextjsFill } from "react-icons/ri";

export const devIcons ={
  js: <FaJsSquare className='dev-icons'/>,
  ts: <SiTypescript className='dev-icons'/>,
  react: <FaReact className='dev-icons'/>,
  next: <SiNextdotjs className="dev-icons"/>,
  canvasAPI: <FaPaintBrush className="dev-icons"/>,
  tiled: <BsGrid3X3Gap className="dev-icons"/>,
  css: <FaCss3Alt className="dev-icons"/>,
  redux: <SiRedux className="dev-icons"/>
}


export const mainSkills = [
  {
    id: "react",
    title: "React",
    icon: <FaReact style={{ color: "rgba(97, 218, 251, 1)" }} />,
  },
  {
    id: "nextjs",
    title: "Next.js",
    icon: <RiNextjsFill style={{ color: "rgba(0, 1, 42, 1)" }} />,
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: <FaJsSquare style={{ color: "yellow", background: "black" }} />,
  },
  {
    id: "typescript",
    title: "TypeScript",
    icon: <SiTypescript style={{ color: "rgb(75, 79, 187)", borderRadius: "5px" }} />,
  },
  {
    id: "html5",
    title: "HTML5",
    icon: <FaHtml5 style={{ color: "orange" }} />,
  },
  {
    id: "css3",
    title: "CSS3",
    icon: <FaCss3Alt style={{ color: "rgba(75, 79, 187)" }} />,
  },
];

export const additionalSkills = [
  {
    id: "redux-toolkit",
    title: "Redux Toolkit",
    icon: <SiRedux style={{ color: "rgba(68, 3, 87, 1)" }} />,
  },
  {
    id: "rest-api",
    title: "REST API",
    subtitle: "// front-end",
    icon: <FaServer style={{color: "rgb(75, 79, 187)"}}/>,
  },
  {
    id: "git",
    title: "Git",
    icon: <FaGitAlt style={{ color: "orange" }} />,
  },
  {
    id: "npm",
    title: "npm",
    icon: <FaNpm style={{ color: "rgba(0, 0, 0, 1)" }} />,
  },
  {
    id: "github",
    title: "GitHub",
    icon: <FaGithub style={{ color: "rgba(68, 3, 87, 1)" }} />,
  },
];




