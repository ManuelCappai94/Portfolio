import React from 'react'
import { BsCode, BsCodeSlash } from "react-icons/bs";
import { SlOptions, SlOptionsVertical } from "react-icons/sl";
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";
import { GrNext, GrPrevious } from "react-icons/gr";
import { FaJsSquare, FaReact, FaCss3Alt, FaHtml5, FaNodeJs, FaGitAlt, FaGithub, FaServer, FaNpm } from "react-icons/fa";
import { BiLogoTypescript, BiLogoVisualStudio } from "react-icons/bi";
import { SiRedux, SiTypescript } from "react-icons/si";
import { FiGrid } from "react-icons/fi";
import { RiNextjsFill } from "react-icons/ri";
import {v4 as uuid4, v4} from "uuid"

export const tagIcons = {
    openTag: <BsCode className="icons subtitles"/>,
    closeTag: <BsCodeSlash className="icons subtitles"/>
}

export const options = {
    close: <SlOptions/>,
    open: <SlOptionsVertical/>,
    toggleOn: <LiaToggleOnSolid/>,
    toggleOff: <LiaToggleOffSolid/>
}

export const arrows = {
  prev: <GrPrevious/>,
  next: <GrNext/>
}
export const devIcons ={
  js: <FaJsSquare className='dev-icons'/>,
  ts: <BiLogoTypescript className='dev-icons'/>,
  react: <FaReact className='dev-icons'/>,
}

const LinksMenu = ({isActive}) => {
if(!isActive ) {
return  <SlOptions/>
} else {
  return  <SlOptionsVertical/>
}}

export const OptionMenu = ({isOn}) =>{
return(
!isOn ?  <LiaToggleOffSolid/> : <LiaToggleOnSolid/>
)}

export const mainSkills = [
  {
    id: v4(),
    title: "JavaScript",
    icon: <FaJsSquare style={{color: "yellow", background:"black"}}/>
  },
  {
    id: v4(),
    title: "TypeScript",
    icon: <SiTypescript style={{color: "blue", borderRadius: "5px"}}/>
  },
  {
    id: v4(),
    title: "React",
    icon: <FaReact style={{color: "rgba(97, 218, 251, 1)"}}/>
  },
  {
    id: v4(),
    title: "Html5",
    icon: <FaHtml5 style={{color:"orange"}}/>
  },
  {
    id: v4(),
    title: "Css3",
    icon: <FaCss3Alt style={{color: "rgba(42, 49, 240, 1)"}}/>
  },
   {
    id: v4(),
    title: "NextJs",
    subtitle: "//In Progress",
    icon: <RiNextjsFill style={{color: "rgba(0, 1, 42, 1)"}}/>
  },
  
  // {
  //   id: v4(),
  //   title: "Node.js",
  //   subtitle: "(basics)",
  //   icon: <FaNodeJs/>
  // },
]

export const additionalSkills = [
  {
    id: v4(),
    title: "Rest Api",
    subtitle: "//front-end",
    icon: <FaServer/>
  },
{
    id: v4(),
    title: "Npm",
    icon: <FaNpm style={{color:"rgba(0, 0, 0, 1)"}}/>
  },



  {
    id: v4(),
    title: "Git Hub",
    icon: <FaGithub style={{color: "rgba(68, 3, 87, 1)"}}/>
  },
   {
    id: v4(),
    title: "Git",
    icon: <FaGitAlt style={{color:"orange"}}/>
  },
       {
    id: v4(),
    title: "Redux",
    subtitle: "//In Progress",
    icon: <SiRedux style={{color: "rgba(68, 3, 87, 1)"}}/>
  },
]


export default LinksMenu

