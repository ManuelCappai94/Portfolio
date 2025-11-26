import React from "react";
import cat from "../images/cat.png"
import calendar from "../images/calendar.png"
import { devIcons } from "../assets/Assets";


export const data = [
    {
        id: 1,
        title: "Calendar Hub",
        tecnologies: "JavaScript",
        icon: devIcons.js,
        desc: "Calendar and To-do-App",
        img: calendar ,
        version: "v.0.02"
    },
    {
        id: 2,
        title: "Omniscent Cat",
        tecnologies: "TypeScript",
        icon: devIcons.ts,
        desc: "Ask question and Play with the Cat",
        img: cat,
        version: "v.1.0"
    },
    {
        id: 3,
        title: "Game Prototype",
        tecnologies: "JavaScript",
        icon: devIcons.js,
        desc: "Game Demo developed with a Custom engine",
        img: "",
        version: "v.0.02"
    },
    {
        id: 4,
        title: "My Portfolio",
        tecnologies: "React",
        icon: devIcons.react,
        desc: "This Portofolio !",
        img: "",
        version: "v.1.0"
    }
]

